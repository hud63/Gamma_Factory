# Automated Granola Transcription to Gamma Presentation

**Use Case**: Automatically convert Granola meeting transcriptions into polished Gamma presentations

**Date Created**: 2025-09-28
**Target Platform**: Gamma (gamma.app) + Granola (granola.ai)
**API Status**: Beta (Pro/Ultra users for Gamma API)

---

## Overview

### What This Runbook Covers
This guide provides step-by-step instructions for automatically converting Granola meeting transcriptions into polished Gamma presentations. Granola's AI-powered note-taking capabilities combined with Gamma's presentation generation create a seamless workflow for transforming meeting content into shareable presentations.

### Credit Usage
- **Gamma Pro Plan**: Required for automation ($20/month or $15/month annual)
- **Granola Subscription**: Required for meeting transcription features
- **Zapier/n8n**: Optional for advanced automation workflows

---

## Method 1: UI-Based Process (Recommended for Single Operations)

### Step-by-Step UI Process

#### Step 2: Export Granola Transcription
1. Open your Granola app after a completed meeting
2. Navigate to the meeting notes you want to convert
3. Click **"Export"** or **"Share"** button
4. Select **"Copy to Clipboard"** or **"Export as Text"**
5. Copy the complete transcription content

#### Step 3: Create Gamma Presentation from Transcription
1. Navigate to [gamma.app](https://gamma.app) and sign in
2. Click **"Create new [AI]"** button on dashboard
3. Select **"Paste"** option (not "Generate" or "Import")
4. Paste your Granola transcription in the text field
5. Choose **"Presentation"** format
6. Select desired theme and styling options
7. Click **"Generate"**

#### Step 4: Review and Optimize Generated Presentation
1. **Review Content Structure**: Check that Gamma properly organized the transcription into logical slides
2. **Edit Titles**: Refine slide titles to be more presentation-friendly
3. **Add Visual Elements**: Use `/ai` command to generate relevant images
4. **Remove Transcription Artifacts**: Clean up any "um," "uh," or repetitive text
5. **Add Speaker Notes**: Use transcription details as speaker notes if needed

#### Step 5: Export and Share Presentation
1. **Present Mode**: Click **"Present"** to review the full presentation
2. **Export Options**: Choose from PDF, PNG, PowerPoint, or direct LinkedIn sharing
3. **Share Link**: Generate shareable link for team collaboration
4. **Download**: Export in preferred format for offline use

---

## Method 2: API-Based Process (For Automation/Scale)

### API Prerequisites
- **Gamma Pro Plan**: Required for API access ($20/month or $15/month annual)
- **Granola API Access**: Available through Granola subscription
- **API Keys**: Generated from both platforms' account settings
- **Rate Limits**: 50 generations/day for Gamma during beta
- **Programming Knowledge**: Basic HTTP requests or automation platform experience

### Basic Integration Steps
1. **Gamma API Setup**:
   - Log into Gamma Pro account
   - Navigate to **Account Settings**
   - Generate **"API Key"** from API Access section
   - Store securely for automation use

2. **Granola Integration**:
   - Access Granola's export functionality
   - Use Granola's webhook capabilities (if available)
   - Set up automated transcription export

### API Request Example for Transcription to Presentation
```bash
curl --request POST \
  --url https://public-api.gamma.app/v0.2/generations \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: sk-gamma-xxxxxxxx' \
  --data '{
    "inputText": "{{granola_transcription_text}}",
    "textMode": "condense",
    "format": "presentation",
    "themeName": "Professional",
    "numCards": 8,
    "additionalInstructions": "Convert meeting transcription to clear presentation slides, remove filler words, focus on key points and decisions",
    "textOptions": {
      "amount": "concise",
      "tone": "professional, clear",
      "audience": "business stakeholders",
      "language": "en"
    },
    "imageOptions": {
      "source": "aiGenerated",
      "model": "imagen-4-pro",
      "style": "professional"
    },
    "exportAs": "pdf"
  }'
```

---

## Advanced Customization Options

### UI Customization
1. **Meeting-Specific Themes**: Choose themes that match your meeting type (corporate, creative, technical)
2. **Content Optimization**: Use "Condense" mode to automatically remove transcription artifacts
3. **Visual Enhancement**: Add charts and diagrams for data discussed in meetings
4. **Action Items Integration**: Highlight decisions and next steps from transcription

### Zapier Pre-Built Integration
**Template**: "Convert Granola meeting notes into polished presentations"
- **Trigger**: New Granola meeting transcription completed
- **Action**: Create Gamma presentation from transcription text
- **Benefits**: Fully automated workflow requiring no manual intervention
- **Setup**: Available at [Zapier Gamma Templates](https://zapier.com/templates/details/meeting-notes-to-presentations-granola-gamma)

### Advanced Automation Parameters
```json
{
  "textMode": "condense",
  "additionalInstructions": "Structure as: Executive Summary, Key Discussion Points, Decisions Made, Action Items, Next Steps",
  "textOptions": {
    "tone": "executive, concise",
    "audience": "leadership team"
  },
  "cardSplit": "auto",
  "numCards": 6
}
```

---

## Troubleshooting Guide

#### Issue: "Transcription too long for single API call"
**Symptoms**: API errors due to input text length limits
**Solutions**:
1. Split long transcriptions into multiple sections
2. Use "condense" textMode to automatically summarize content
3. Pre-process transcription to extract key points only
4. Use additionalInstructions to focus on specific meeting segments
5. Consider breaking into multiple shorter presentations

#### Issue: "Generated slides don't reflect meeting structure"
**Symptoms**: Poor organization or missing key discussion points
**Solutions**:
1. Add specific instructions about meeting agenda structure
2. Use additionalInstructions to specify desired slide organization
3. Pre-process transcription to add topic headers
4. Manually review and reorganize slides after generation
5. Use meeting agenda as additional context in API call

#### Issue: "Transcription quality affects presentation quality"
**Symptoms**: Generated presentation contains errors or unclear content
**Solutions**:
1. Ensure good audio quality during Granola recording
2. Review and edit transcription before sending to Gamma
3. Use Granola's AI enhancement features for better transcription
4. Add meeting context and agenda to improve AI understanding
5. Post-process presentation to fix any transcription-related issues

---

## Best Practices

### Optimizing Granola Transcriptions for Gamma
1. **Clear Audio Setup**: Ensure good microphone quality for accurate transcription
2. **Meeting Structure**: Use clear agenda items and topic transitions
3. **Speaker Identification**: Enable speaker identification in Granola for multi-person meetings
4. **Action Items**: Clearly state decisions and next steps during meetings
5. **Context Setting**: Begin meetings with clear objectives and background

### Presentation Optimization Strategies
1. **Content Curation**: Focus on key decisions and outcomes rather than entire conversation
2. **Visual Hierarchy**: Use Gamma's AI to generate relevant charts and images
3. **Audience Targeting**: Tailor tone and detail level for presentation audience
4. **Action-Oriented Structure**: Organize slides around decisions and next steps
5. **Follow-up Integration**: Include contact information and meeting follow-up details

### Example Effective Transformation:
**Granola Input**: "So we discussed the Q4 marketing campaign, John mentioned that we need to increase social media spend by 30%, Sarah brought up concerns about budget allocation, and we decided to focus on LinkedIn and Instagram primarily. The timeline would be to launch by October 15th with a total budget of $50K."

**Gamma Output Structure**:
- **Slide 1**: Q4 Marketing Campaign Overview
- **Slide 2**: Budget Allocation ($50K total, 30% increase in social spend)
- **Slide 3**: Platform Focus (LinkedIn & Instagram priority)
- **Slide 4**: Timeline (Launch: October 15th)
- **Slide 5**: Next Steps and Responsibilities

---

For additional support, consult the official Gamma documentation at [help.gamma.app](https://help.gamma.app) or contact Gamma support through their official channels.

---

## Visual Enhancement Recommendations

### Visual Storytelling Strategies for Meeting-to-Presentation Conversion

**Narrative Arc Transformation Framework:**
- **Opening Hook**: Transform meeting introductions into compelling problem statements
- **Context Setting**: Convert background discussions into clear situation overviews
- **Journey Mapping**: Turn discussion flow into logical progression with visual waypoints
- **Resolution Focus**: Highlight decisions and next steps as satisfying conclusions

**Meeting-Specific Templates:**
- **Strategy Sessions**: Deep blues/grays, authoritative fonts, strategic symbols
- **Project Updates**: Energetic blues/greens, progress indicators, team symbols
- **Client Calls**: Professional brand colors, benefit-focused layouts, service icons

**Content Categorization System:**
- **Key Insights**: Lightbulb icons, highlighted callouts
- **Decisions Made**: Checkmark badges, decision trees
- **Action Items**: Arrow icons, task lists with clear ownership
- **Data Points**: Chart icons, statistical visualizations

**Visual Hierarchy for Transcriptions:**
- **Primary Layer**: Core decisions (largest text, bold colors)
- **Secondary Layer**: Supporting context (medium text, muted colors)
- **Tertiary Layer**: Details and references (smallest text, subtle styling)

**Decision Visualization Patterns:**
- Decision trees with pros/cons branches
- Consensus heatmaps showing agreement levels
- Priority matrices for action items
- Timeline visualizations with milestone markers

**Speaker Attribution System:**
- Consistent avatar/icon system
- Color coding by role (presenter, stakeholder, decision-maker)
- Quote styling maintaining speaker context

---

## Automation & Workflow Opportunities

### Complete n8n-Based Automation Solution (No Zapier Required)

**5-Stage Pipeline Architecture:**
1. **Webhook Trigger**: Receives Granola transcription completion notifications
2. **Validation & Processing**: Validates data and extracts meeting metadata
3. **AI Content Structuring**: Uses OpenAI GPT-4 to create presentation outline
4. **Gamma Generation**: Creates presentation via Gamma API with polling
5. **Notification**: Delivers success/failure notifications with presentation links

**Key Automation Benefits:**
- **Real-time Processing**: Automation starts immediately when Granola completes transcription
- **AI-Enhanced Content**: GPT-4 powered content structuring transforms raw transcripts
- **End-to-End Automation**: Complete workflow from transcription to presentation delivery
- **Professional Output**: Generates both interactive Gamma presentations and PDF exports

**Technical Implementation:**
- **16 Configured n8n Nodes**: Complete production-ready workflow
- **Robust Authentication**: Secure credential management for all APIs
- **Intelligent Retry Logic**: Handles temporary failures and API rate limits
- **Comprehensive Error Handling**: Ensures reliable operation
- **Multi-format Output**: Web presentations + PDF downloads

**Process Optimization Features:**
- **Asynchronous Polling**: Smart retry logic with 10-second intervals
- **Resource Management**: Optimized API call patterns to respect rate limits
- **Content Enhancement**: AI extraction of key points, decisions, action items
- **Quality Assurance**: Data validation before processing

**Integration Strategy:**
- **Granola Integration**: Webhook endpoint receives transcription completion
- **Gamma API Integration**: Uses Generate API v0.2 with proper polling
- **OpenAI Integration**: GPT-4 powered content analysis and structuring
- **Notification System**: Rich Slack notifications with presentation links

**Ready-to-Deploy Solution:**
1. Import the n8n workflow JSON file
2. Configure three credential sets (Gamma API, OpenAI, Slack)
3. Set up Granola webhook pointing to n8n endpoint
4. Activate workflow and start automating

**Business Impact:**
- **Time Savings**: Reduces presentation creation from hours to minutes
- **Scalability**: Handles unlimited meetings automatically
- **Consistency**: Standardized professional presentation format
- **Quality**: AI-enhanced content improves presentation value