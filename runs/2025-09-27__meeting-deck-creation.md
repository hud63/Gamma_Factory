# Sample Deck Creation Runbook

**Run date:** 2025-09-27
**Mode:** UI Path | API Path
**Tools used:** Gamma

## Overview
This runbook demonstrates creating a presentation deck from meeting notes using Gamma's AI-powered generation.

## Prereqs
- Gamma account (Pro plan recommended for API access)
- Meeting transcript or notes prepared

## UI Path (Step-by-step)
1. Navigate to gamma.app and sign in
2. Click "Generate" button
3. Select "Presentation" format
4. Paste meeting notes into text field
5. Click "Generate presentation"

## API Path (Step-by-step)
```bash
curl --request POST \
  --url https://public-api.gamma.app/v0.2/generations \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: sk-gamma-xxxxxxxx' \
  --data '{
    "inputText": "Meeting notes here...",
    "format": "presentation",
    "numCards": 10
  }'
```

## Validation
- Check generated deck has proper structure
- Verify content matches meeting topics

## Evidence & Recency
- Source: gamma.app/help - Fetched: 2025-09-27T10:00:00Z