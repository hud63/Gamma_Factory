# Gamma Runbook: Create Gamma AI Images from a LinkedIn Post Prompt

**Use Case**: Generate brand-consistent images in Gamma by feeding a LinkedIn post prompt that specifies custom dimensions (e.g., X by X).
**Date Created**: 2025-10-05
**Target Platform**: Gamma (gamma.app)
**API Status**: Generate API (Stable, Pro access required)

---

## Overview

### What This Runbook Covers
This runbook walks a Gamma Pro user through ingesting a LinkedIn post as input, crafting an AI image prompt with precise dimensions, and producing downloadable image assets via both the Gamma UI and the Generate API. The guidance follows the structured format defined in the project’s Gamma Business Use-Case Runner system prompt.



### Credit Usage
- **Standard AI Images**: ~1–2 credits per generation  
- **Advanced AI Models**: 3–5 credits (varies by model/version)  
- **Pro Features**: Required for custom dimensions, transparent backgrounds, and batch exports

---

## Method 1: UI-Based Process (Recommended for Individual Images)

### Step-by-Step UI Process

#### Step 1: Capture the LinkedIn Post Content
1. In LinkedIn, open the post you want to base the image on.
2. Click the **“…”** menu on the post and choose **“Copy link to post.”**
3. Paste the text, hashtags, and any key imagery descriptions into a scratch document (Notion, Notes, etc.) so you can reference them while prompting.

#### Step 2: Start a New Gamma Image Project
1. Log in to [gamma.app](https://gamma.app) with your Pro-enabled workspace.
2. From the workspace home, click **“Create”** → **“Start from AI”.**
3. In the template picker, choose **“Image”** (under “Visuals & Graphics”).
4. Confirm your workspace folder to keep assets organized.

#### Step 3: Configure Canvas & Prompt
1. In the AI Image creation panel, set **Canvas Size** → toggle to **“Custom”** and enter the width and height (e.g., `1200 x 628` for LinkedIn hero).
2. In the **Prompt** field, paste a distilled summary of the LinkedIn post, focusing on:
   - Audience tone (e.g., “professional, aspirational”).
   - Visual motifs (e.g., “modern SaaS interface, cobalt gradients”).
   - Text overlays (if required) using `“Overlay headline text: ...”`.
3. Use **“Add Details”** to specify:
   - Brand palette (hex values).
   - Typography direction (“sans-serif headline, medium weight”).
   - Any compliance rules (“No stock photography of real people”).
4. Click **“Generate”.**

#### Step 4: Review and Iterate
1. Inspect the image variations Gamma provides.
2. Use **“Regenerate”** with prompt refinements:
   - Include emotional tone (“energetic, high-growth”).
   - Add LinkedIn-post callouts (“Include subtle LinkedIn iconography in background”).
3. If text is misaligned, open **“Edit with AI”** → **“Adjust layout”** and specify the exact placement.

#### Step 5: Export or Insert into Content
1. When satisfied, click **“Export”** → choose **PNG** (for transparent background, toggle **“Transparency”**).
2. For direct use in a Gamma presentation or document, click **“Insert into current project”.**
3. Store the exported asset in your brand asset library (Notion, Drive).

---

## Method 2: API-Based Process (For Automation & Batch Runs)

### API Prerequisites
- Gamma Pro account with Generate API enabled.
- API key from **Account Settings → API Access**.
- Familiarity with REST clients (curl, Postman) or automation platforms.

### Basic Integration Steps
1. Create a prompt template that accepts:
   - `linkedin_url`
   - `dimension_width`
   - `dimension_height`
   - `creative_brief`
2. Craft a preprocessing script to fetch the LinkedIn post (LinkedIn API or manual capture) and produce a structured brief.

### Sample Generate API Request

```bash
curl -X POST https://api.gamma.app/v1/images/generate \
  -H "Authorization: Bearer $GAMMA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": {
      "summary": "Professional LinkedIn announcement about AI-driven productivity gains",
      "visual_style": "clean fintech illustration, cobalt gradient, soft shadows",
      "text_overlay": "Headline: Unlock 2x Content Velocity"
    },
    "dimensions": {"width": 1200, "height": 628},
    "variants": 3,
    "brand": {
      "palette": ["#003366", "#5F8FFF", "#FFFFFF"],
      "font": "Inter Bold"
    },
    "metadata": {
      "source": "linkedin_post",
      "linkedin_url": "https://www.linkedin.com/posts/.../"
    }
  }'
```

### Response Handling
1. Store the `image_url` values.
2. Use a second API call (`/images/{id}/download`) or direct URL to fetch the binary.
3. Log `prompt_id` and `generation_time` for compliance.

### Rate Limit Handling
- Respect default limit (e.g., 60 requests/min). If you receive HTTP 429:
  1. Wait 5 seconds.
  2. Retry up to 3 times with exponential backoff (5s, 10s, 20s).
  3. If still rate-limited, pause for 15 minutes before resuming batch.

---

## Advanced Customization Options

### UI Customization
1. **Brand Presets**: Save the dimension and palette as a preset under **Workspace Settings → AI Presets**.
2. **Prompt Shortcuts**: Use Gamma’s “Prompt Library” to store LinkedIn-specific templates.
3. **Batch Variations**: Duplicate the canvas and swap copy for A/B testing.
4. **Accessibility**: Add alt-text metadata in the export dialogue.

### API Customization
1. Parameterize typography and palette via `brand` object.
2. Enable text overlay alignment by adding `layout` instructions (e.g., `"text_block": {"x":0.1,"y":0.75,"width":0.8}`).
3. Integrate with Slack: send generated URLs into marketing channels for review.

---

## Troubleshooting Guide

### Issue: Dimensions Ignored in UI Output
**Symptoms**: Exported image defaults to 1024×1024.  
**Solutions**:
1. Ensure **“Custom Size”** toggle is active before hitting **“Generate”.**
2. Regenerate; Gamma locks dimensions per generation.
3. If still incorrect, duplicate the project and regenerate (cached prompt sometimes holds previous ratio).

### Issue: Text Overlay Blurry
**Symptoms**: PNG export has softened text.  
**Solutions**:
1. Increase canvas size (e.g., 2400×1256) and downscale externally.
2. Use **“Edit with AI”** → **“Sharpen text”** command.
3. Export as SVG (if available) for vector clarity.

---

## Best Practices

### Prompt Crafting for LinkedIn Assets
1. **Be Specific**: Reference the post’s hook or data point.
2. **Set the Scene**: Mention target audience (e.g., “B2B CMOs”).
3. **Use Descriptive Language**: Add tone descriptors (“optimistic, data-backed”).
4. **Specify Style**: Name art direction (“flat illustration, minimal gradients”).
5. **Include Context**: Highlight CTA (“Download the report”).

### Example Effective Description
“Create a 1200x628 LinkedIn announcement graphic highlighting our AI productivity report. Style: modern SaaS, cobalt blue gradient background, minimal line icons. Overlay headline ‘Unlock 2x Content Velocity’ with subtext ‘AI workflows for marketing teams.’ Include subtle LinkedIn icon watermark bottom-right.”

---

## Visual Enhancement Recommendations (Visual Storyteller Agent)

1. **Hero Composition**: Use a diagonal split layout—left side for data visualization (mini bar chart), right side for CTA text block.  
2. **Iconography**: Incorporate thin-line productivity icons (clock, upward graph) to reinforce efficiency narrative.  
3. **Color Grading**: Apply a gradient overlay (cobalt → electric blue) to keep the asset in Gamma’s modern aesthetic while aligning with LinkedIn’s palette.  
4. **Motion Variant**: For Gamma deck use, generate a second frame with animated particle streaks to suggest momentum when exported as GIF.  
5. **Typography Pairing**: Combine a bold sans-serif for the headline (e.g., Inter Black) with a lighter subhead (Inter Medium) to maintain hierarchy.

---

## Automation & Workflow Opportunities (n8n Workflow Builder Agent)

### Automation Ideas
- **Webhook Intake**: Capture LinkedIn post URLs via a marketing form and trigger automatic prompt generation.  
- **Prompt Enrichment**: Use Claude (from the Product Pass) to summarize the LinkedIn post into a creative brief.  
- **Batch Generation**: Loop through multiple posts, calling Gamma’s Generate API and storing assets in a shared Drive.  
- **Slack Approval**: Send previews to Slack marketing channel for reactions before final export.

### n8n Workflow JSON (import-ready)

```json
{
  "name": "Gamma LinkedIn Image Generator",
  "nodes": [
    {
      "id": "webhook_trigger",
      "name": "Incoming LinkedIn Brief",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "gamma-linkedin-brief",
        "method": "POST",
        "responseMode": "onReceived",
        "responseData": "json"
      },
      "typeVersion": 1,
      "position": [200, 300]
    },
    {
      "id": "claude_summarize",
      "name": "Summarize Post (Claude)",
      "type": "custom.claude",
      "parameters": {
        "prompt": "Summarize this LinkedIn post into a Gamma AI image brief with tone, key message, and call-to-action.",
        "inputField": "body.post_text"
      },
      "typeVersion": 1,
      "position": [450, 300]
    },
    {
      "id": "gamma_generate",
      "name": "Generate Image (Gamma API)",
      "type": "httpRequest",
      "parameters": {
        "url": "https://api.gamma.app/v1/images/generate",
        "method": "POST",
        "authentication": "headerAuth",
        "headerAuth": {
          "name": "Authorization",
          "value": "={{\"Bearer \" + $json[\"gamma_api_key\"]}}"
        },
        "jsonBody": "={\n  \"prompt\": {\n    \"summary\": $json[\"claude_summary\"],\n    \"visual_style\": $json[\"style_override\"] || \"modern professional illustration\",\n    \"text_overlay\": $json[\"cta_text\"] || \"Read the full LinkedIn post\"\n  },\n  \"dimensions\": {\n    \"width\": $json[\"width\"] || 1200,\n    \"height\": $json[\"height\"] || 628\n  },\n  \"variants\": 2,\n  \"metadata\": {\n    \"source\": \"linkedin_post\",\n    \"linkedin_url\": $json[\"post_url\"]\n  }\n}"
      },
      "typeVersion": 2,
      "position": [700, 300]
    },
    {
      "id": "slack_notify",
      "name": "Notify Slack",
      "type": "slack",
      "parameters": {
        "resource": "message",
        "operation": "post",
        "channel": "marketing-creative",
        "text": "Gamma image generated: {{$json[\"body\"][\"data\"][0][\"image_url\"]}}"
      },
      "typeVersion": 1,
      "position": [950, 300]
    },
    {
      "id": "drive_upload",
      "name": "Upload to Drive",
      "type": "googleDrive",
      "parameters": {
        "resource": "file",
        "operation": "upload",
        "fileName": "={{$json[\"body\"][\"data\"][0][\"id\"] + \".png\"}}",
        "binaryData": "data",
        "parents": ["LinkedIn Campaign Assets"]
      },
      "typeVersion": 1,
      "position": [950, 500]
    }
  ],
  "connections": {
    "Incoming LinkedIn Brief": {
      "main": [
        [
          {
            "node": "Summarize Post (Claude)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Summarize Post (Claude)": {
      "main": [
        [
          {
            "node": "Generate Image (Gamma API)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Generate Image (Gamma API)": {
      "main": [
        [
          {
            "node": "Notify Slack",
            "type": "main",
            "index": 0
          },
          {
            "node": "Upload to Drive",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

---

### Notes on Execution
- Replace placeholder authentication details with secrets in n8n credentials.
- Optionally add an approval branch before calling Gamma’s API if you need human review of the prompt.

---

## Prompt Template (Copy & Customize)

```text
Create a {width}x{height} LinkedIn announcement graphic for {campaign_name}.
Tone: {tone_descriptor}. Style: {visual_style}. Color palette: {brand_palette}.
Headline text: "{headline}". Subtext: "{supporting_copy}".
Include subtle LinkedIn visual nods and leave safe margin for overlay text.
```

### Usage Tips
- Swap `{tone_descriptor}` between “aspirational,” “data-backed,” or “celebratory” to match the post’s theme.
- If you need multiple variants, append instructions such as “Provide three layout options with distinct focal imagery.”
- Document the final prompt alongside the generated asset for compliance sign-off.

---

## Pre-Launch Checklist

1. ✅ Confirm the LinkedIn post link is valid and accessible to your target audience.
2. ✅ Verify the chosen dimensions align with the downstream channel (LinkedIn feed, newsletter header, etc.).
3. ✅ Ensure brand colors and typography match your current visual identity guidelines.
4. ✅ Capture alt-text that summarizes the visual for accessibility and attach it wherever the asset is published.
5. ✅ Store the final prompt, Gamma generation ID, and exported file in your campaign workspace.

---

No automated tests were run for this planning exercise.
