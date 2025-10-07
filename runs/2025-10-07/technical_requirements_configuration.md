# Technical Requirements and Configuration Guide

## Authentication Setup

### 1. Gamma API Authentication

**Required Credential Type**: Generic HTTP Header Auth

**Configuration**:
```json
{
  "name": "Gamma API Key",
  "type": "httpHeaderAuth",
  "data": {
    "name": "X-API-KEY",
    "value": "sk-gamma-YOUR_API_KEY_HERE"
  }
}
```

**How to Get API Key**:
1. Log into your Gamma account (Pro or Ultra plan required)
2. Navigate to Settings → API
3. Generate new API key
4. Copy the key starting with `sk-gamma-`

**Rate Limits**:
- Pro/Ultra users: Up to 50 generations per day
- Beta limitations may apply
- Implement exponential backoff for rate limiting

### 2. Google Drive Integration

**Required Credential Type**: OAuth2 API

**Configuration**:
```json
{
  "name": "Google Drive",
  "type": "googleDrive",
  "data": {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET",
    "redirectUri": "http://localhost:5678/oauth/google/callback",
    "scope": [
      "https://www.googleapis.com/auth/drive.file"
    ]
  }
}
```

**Permissions Required**:
- `drive.file`: Access to files created by the app
- Recommended: Create dedicated folder for exports

### 3. Email SMTP Configuration

**Required Credential Type**: Basic Auth

**Configuration**:
```json
{
  "name": "SMTP Email",
  "type": "smtp",
  "data": {
    "host": "smtp.yourprovider.com",
    "port": 587,
    "secure": false,
    "user": "your-email@company.com",
    "password": "your-app-password"
  }
}
```

## Node Configuration Details

### HTTP Request Node (Gamma API)

**Essential Properties**:
- `method`: POST
- `url`: https://public-api.gamma.app/v0.2/generations
- `authentication`: Generic credential type
- `sendBody`: true
- `contentType`: json
- `timeout`: 300000ms (5 minutes)
- `retry`: Enabled (max 3 tries)

**Request Body Template**:
```json
{
  "inputText": "{{ $json.inputText }}",
  "textMode": "generate",
  "format": "presentation",
  "themeName": "Oasis",
  "numCards": 10,
  "cardSplit": "auto",
  "additionalInstructions": "Create content optimized for PowerPoint export with consistent formatting and clear visual hierarchy.",
  "exportAs": "pptx",
  "textOptions": {
    "amount": "detailed",
    "tone": "professional",
    "audience": "business professionals",
    "language": "en"
  },
  "imageOptions": {
    "source": "aiGenerated",
    "model": "imagen-4-pro",
    "style": "photorealistic"
  },
  "cardOptions": {
    "dimensions": "fluid"
  },
  "sharingOptions": {
    "workspaceAccess": "view",
    "externalAccess": "noAccess"
  }
}
```

### Status Polling Configuration

**Polling Settings**:
- `method`: GET
- `url`: https://public-api.gamma.app/v0.2/generations/{{ generationId }}
- `retryOnFail`: true
- `maxTries`: 10
- `waitBetweenTries`: 15000ms (15 seconds)

### Google Drive Upload Settings

**File Management**:
- `operation`: upload
- `fileName`: `gamma_export_{{ $now }}.pptx`
- `folderId`: Optional - specify dedicated folder
- `overwrite`: true (for testing, false for production)

## Error Handling Configuration

### Error Trigger Setup

**Error Workflow Settings**:
- Assign error workflow in main workflow settings
- Configure appropriate webhook URLs for notifications

### Retry Logic

**Exponential Backoff Formula**:
```javascript
baseDelay = 5000ms
exponentialDelay = baseDelay * Math.pow(2, retryCount)
jitter = Math.random() * 1000ms
totalDelay = exponentialDelay + jitter
```

**Error Type Handling**:
- `TIMEOUT`: 1.5x delay
- `RATE_LIMIT`: 2x delay
- `NETWORK`: Standard exponential
- `AUTHENTICATION`: No retry (manual intervention required)

## File Handling Logic

### Download Configuration

**HTTP Request Settings**:
- `url`: {{ gammaUrl }}/export/pptx
- `responseFormat`: file
- `timeout`: 120000ms (2 minutes)
- `options.response.response.responseFormat`: file

### Quality Validation Rules

**File Type Validation**:
- MIME type: `application/vnd.openxmlformats-officedocument.presentationml.presentation`
- File extension: `.pptx`

**Size Thresholds**:
- Minimum: 100KB (warning if smaller)
- Expected: 1MB+ (good indicator of complete export)
- Maximum: No limit (but monitor for unusually large files)

### Naming Convention

**Standard Format**:
```
gamma_export_{timestamp}_{generationId}.pptx
```

**Example**:
```
gamma_export_20240101_120000_abc123def456.pptx
```

## Monitoring and Logging

### Error Categorization

**Priority Levels**:
1. **CRITICAL**: Authentication failures, system errors
2. **HIGH**: Rate limiting, API limits exceeded
3. **MEDIUM**: Timeouts, validation errors
4. **LOW**: Minor formatting issues

### Monitoring Metrics

**Key Performance Indicators**:
- Success rate (%)
- Average processing time
- Error frequency by type
- API quota utilization
- File quality scores

### Logging Format

**Standard Log Entry**:
```json
{
  "timestamp": "2024-01-01T12:00:00.000Z",
  "level": "info|warn|error",
  "workflowId": "workflow-123",
  "executionId": "exec-456",
  "generationId": "gen-789",
  "userId": "user-abc",
  "action": "generate|export|validate",
  "status": "started|completed|failed",
  "duration": 45000,
  "metadata": {}
}
```

## Security Considerations

### API Key Management

**Best Practices**:
- Store API keys in n8n credentials manager
- Rotate keys regularly (every 90 days)
- Use dedicated service account keys
- Monitor API key usage

### File Security

**Data Protection**:
- Use HTTPS for all API calls
- Implement access controls on Google Drive folders
- Set appropriate sharing permissions
- Consider encryption for sensitive content

### Network Security

**Connection Security**:
- All API endpoints use HTTPS
- Validate SSL certificates
- Implement IP whitelisting if possible
- Monitor for unusual API usage patterns

## Performance Optimization

### Concurrency Control

**Rate Limiting**:
- Implement queue system for multiple requests
- Respect Gamma API rate limits
- Use batching where possible
- Implement backpressure mechanisms

### Caching Strategy

**Response Caching**:
- Cache theme information (24h TTL)
- Cache user preferences (1h TTL)
- Cache validation results (5min TTL)
- Cache API status (30sec TTL)

### Resource Management

**Memory Optimization**:
- Stream large files when possible
- Clean up temporary files promptly
- Monitor memory usage during processing
- Implement file size limits

## Testing Strategy

### Unit Testing

**Test Cases**:
- API request/response validation
- Error handling logic
- File format validation
- Retry mechanism testing

### Integration Testing

**Test Scenarios**:
- End-to-end workflow execution
- Gamma API integration
- Google Drive upload/download
- Email notification delivery

### Load Testing

**Performance Tests**:
- Concurrent request handling
- API rate limit behavior
- Large file processing
- Memory usage under load

## Deployment Configuration

### Environment Variables

**Required Variables**:
```bash
GAMMA_API_KEY=sk-gamma-your-key
GOOGLE_DRIVE_FOLDER_ID=your-folder-id
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-email@company.com
WEBHOOK_BASE_URL=https://your-n8n-instance.com
ERROR_NOTIFICATION_EMAIL=admin@company.com
```

### Scaling Considerations

**Horizontal Scaling**:
- Use load balancer for multiple n8n instances
- Implement distributed queue for job processing
- Share credentials across instances
- Monitor system resource usage

### Backup Strategy

**Data Backup**:
- Regular Google Drive backups
- n8n workflow version control
- Configuration backups
- Disaster recovery plan