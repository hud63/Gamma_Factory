# AI Image Generation Standalone in Gamma - Complete Runbook

**Use Case**: How to create an AI image when you have a 75-word description and just want to make the image without creating anything else

**Date Created**: 2025-09-27
**Target Platform**: Gamma (gamma.app)
**API Status**: Beta (Pro/Ultra users only)

---

## Overview and Prerequisites

### What This Runbook Covers
This guide provides step-by-step instructions for generating standalone AI images in Gamma using a detailed text description. While Gamma is primarily designed for presentations, documents, and websites, it offers robust AI image generation capabilities that can be used independently.

### Prerequisites
- **Gamma Account**: Free account minimum (with limitations)
- **AI Credits**: 400 credits provided at signup (Free plan) or 400/month (Plus plan) or unlimited (Pro plan)
- **Internet Connection**: Stable connection required for AI generation
- **Text Description**: Your 75-word image description ready

### Credit Usage
- **Standard AI Images**: ~1-2 credits per generation
- **Advanced AI Models**: Higher credit cost (varies by model)
- **Pro Features**: Animation and advanced editing (Pro users only)

---

## Method 1: UI-Based Image Generation (Recommended for Single Images)

### Step-by-Step UI Process

#### Step 1: Access Gamma Platform
1. Navigate to [gamma.app](https://gamma.app)
2. Click **"Login"** or **"Start for free"**
3. Complete authentication process

#### Step 2: Create New Project
1. Click **"Create new [AI]"** button on dashboard
2. Select **"Generate"** option (not "Paste in text" or "Import a file")
3. Choose **"Presentation"** format (easiest for single image extraction)
4. Click **"Continue"**

#### Step 3: Create Minimal Content Structure
1. In the prompt field, enter a minimal request like: "Create a single slide about [topic]"
2. Set **Number of cards**: 1
3. Select any theme (you'll only be using the image)
4. Click **"Generate"**

#### Step 4: Generate AI Image Within Project
**Method A: Using Slash Command**
1. Click on the generated card/slide
2. Type `/ai` and press Enter
3. Enter your 75-word description exactly as written
4. Click **"Generate"** button

**Method B: Using Insert Toolbar**
1. Click the **"Insert menu"** on the right-hand toolbar
2. Select **"AI Image"** from available options
3. Paste your 75-word description in the text box
4. Click **"Generate"** button

#### Step 5: Optimize Image Generation
1. **Use Enhance Feature**: Click **"Enhance"** button to automatically improve your prompt
2. **Select Image Style**: Choose from available style options (realistic, cartoon, artistic, etc.)
3. **Set Dimensions**: Select appropriate aspect ratio for your needs
4. **Generate**: Click generate and wait for processing

#### Step 6: Export/Download Image
1. **Right-click** on the generated image
2. Select **"Save image as..."** from context menu
3. Choose file location and format (PNG recommended)
4. Click **"Save"**

**Alternative Export Method:**
1. Click on the image to select it
2. Use **Export** feature in main menu
3. Select **"PNG"** format
4. Choose **"Current card only"**
5. Download the exported file

---

## Method 2: API-Based Image Generation (For Automation/Scale)

### API Prerequisites
- **Gamma Pro Plan**: Required for API access ($20/month or $15/month annual)
- **API Key**: Generated from account settings
- **Rate Limits**: 50 generations/day during beta
- **Programming Knowledge**: Basic HTTP requests or automation platform experience

### Step 1: Generate API Key
1. Log into your Gamma Pro account
2. Navigate to **Account Settings**
3. Find **"API Access"** section
4. Click **"Generate API Key"**
5. Copy and securely store the API key

### Step 2: API Request Structure

#### Basic cURL Example
```bash
curl -X POST "https://api.gamma.app/v1/generate" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "inputText": "YOUR_75_WORD_DESCRIPTION_HERE",
    "format": "presentation",
    "themeName": "minimal",
    "numCards": 1,
    "textMode": "generate",
    "imageOptions": {
      "model": "dall-e-3",
      "style": "realistic",
      "generateImages": true
    },
    "exportFormats": ["png"]
  }'
```

#### Python Example
```python
import requests
import json

def generate_ai_image_via_gamma(description, api_key):
    url = "https://api.gamma.app/v1/generate"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "inputText": description,
        "format": "presentation",
        "themeName": "minimal",
        "numCards": 1,
        "textMode": "generate",
        "imageOptions": {
            "model": "dall-e-3",
            "style": "realistic",
            "generateImages": True
        },
        "exportFormats": ["png"]
    }

    response = requests.post(url, headers=headers, json=payload)
    return response.json()

# Usage
api_key = "your_gamma_api_key_here"
description = "Your 75-word detailed image description here"
result = generate_ai_image_via_gamma(description, api_key)
print(result)
```

### Step 3: Key API Parameters for Image Generation

#### Essential Parameters
- **`inputText`**: Your 75-word description
- **`format`**: "presentation" (simplest for single image)
- **`numCards`**: 1 (single slide/image)
- **`imageOptions.generateImages`**: true
- **`imageOptions.model`**: AI model selection

#### Image Model Options
- **`dall-e-3`**: Highest quality, most credits
- **`dall-e-2`**: Good quality, fewer credits
- **`flux-pro`**: Alternative high-quality option
- **`flux-dev`**: Developer-focused option
- **`imagen-2`**: Google's image model

#### Style Options
- **`realistic`**: Photographic style
- **`artistic`**: Creative/artistic interpretation
- **`cartoon`**: Cartoon/illustration style
- **`minimalist`**: Clean, simple aesthetic

### Step 4: Process API Response
```python
def extract_image_from_response(response_data):
    if response_data.get("status") == "completed":
        gamma_url = response_data.get("gammaUrl")
        # Access the generated content
        # Extract images from the gamma presentation
        return gamma_url
    else:
        return f"Generation failed: {response_data.get('error', 'Unknown error')}"
```

### Step 5: Automation Platform Integration

#### Zapier Integration
1. Use **Gamma** app in Zapier
2. Select **"Generate Gamma"** action
3. Configure trigger (form submission, webhook, etc.)
4. Map your 75-word description to `inputText`
5. Set image generation parameters
6. Add follow-up actions for image processing

#### Make.com (Integromat) Integration
1. Add **Gamma** module
2. Choose **"Create Generation"** action
3. Configure input parameters
4. Connect to image processing modules
5. Set up error handling

---

## Advanced Customization Options

### UI Customization
1. **Custom Image Styles**: Access Theme Editor to add brand-specific style keywords
2. **Prompt Enhancement**: Use "Enhance" feature to refine descriptions automatically
3. **Multiple Generations**: Generate variations by slightly modifying prompts
4. **Editing Tools**: Use "Ask AI to..." feature for post-generation edits

### API Customization
```json
{
  "imageOptions": {
    "model": "dall-e-3",
    "style": "realistic",
    "aspectRatio": "16:9",
    "quality": "high",
    "styleKeywords": ["professional", "modern", "clean"],
    "generateImages": true
  },
  "textOptions": {
    "tone": "professional",
    "audience": "general",
    "language": "en"
  }
}
```

---

## Validation Steps

### UI Method Validation
1. **Image Quality Check**: Verify image matches your 75-word description
2. **Resolution Check**: Ensure image is high enough quality for intended use
3. **Style Consistency**: Confirm style matches your requirements
4. **Export Success**: Verify image downloads correctly in desired format

### API Method Validation
1. **Response Status**: Check for `status: "completed"`
2. **Error Handling**: Verify proper error messages for failed generations
3. **Credit Usage**: Monitor credit consumption
4. **Rate Limiting**: Ensure requests don't exceed 50/day limit

### Quality Validation Checklist
- [ ] Image accurately represents the 75-word description
- [ ] Image resolution is suitable for intended use
- [ ] Style/aesthetic matches requirements
- [ ] No unwanted text or watermarks in image
- [ ] Colors and lighting are appropriate
- [ ] Image is properly formatted/cropped

---

## Troubleshooting Guide

### Common UI Issues

#### Issue: "AI image not generating"
**Symptoms**: Generation button doesn't work or shows error
**Solutions**:
1. Check internet connection stability
2. Verify AI credits are available (Account Settings > Usage)
3. Refresh the page and try again
4. Try shorter description if hitting character limits
5. Clear browser cache and cookies

#### Issue: "Poor image quality"
**Symptoms**: Blurry, distorted, or incorrect images
**Solutions**:
1. Use "Enhance" button to improve prompt
2. Try different AI models (DALL-E 3 for highest quality)
3. Be more specific in your 75-word description
4. Add style keywords for better results
5. Generate multiple variations and select best

#### Issue: "Cannot export/download image"
**Symptoms**: Export fails or image won't download
**Solutions**:
1. Try right-click "Save image as..." instead
2. Use PNG export format
3. Check browser download permissions
4. Try different browser
5. Contact Gamma support if persistent

### Common API Issues

#### Issue: "401 Unauthorized"
**Solutions**:
1. Verify API key is correct and active
2. Check if Pro plan is active
3. Regenerate API key in account settings
4. Ensure proper Authorization header format

#### Issue: "Rate limit exceeded"
**Solutions**:
1. Check daily generation count (50/day limit)
2. Wait for rate limit reset (24 hours)
3. Optimize requests to use fewer generations
4. Consider upgrading if higher limits needed

#### Issue: "Generation timeout"
**Solutions**:
1. Simplify the text description
2. Reduce image complexity requirements
3. Try different AI model
4. Retry the request after a few minutes

### API Error Response Examples
```json
{
  "error": "Rate limit exceeded",
  "message": "You have exceeded the daily limit of 50 generations",
  "retryAfter": "2025-09-28T00:00:00Z"
}
```

```json
{
  "error": "Invalid parameters",
  "message": "imageOptions.model must be one of: dall-e-3, dall-e-2, flux-pro, flux-dev, imagen-2"
}
```

---

## Integration with Other Tools

### Claude Code Integration
- Use Claude Code to automate API calls
- Process multiple descriptions in batch
- Set up automated workflows for image generation
- Integrate with file management systems

### Notion Integration
- Store generated images in Notion databases
- Use Gamma API with Notion automation
- Create image galleries from descriptions
- Track generation history and usage

### Social Media Integration
- Generate images for social posts
- Automate content creation workflows
- Export in platform-specific dimensions
- Schedule posts with generated images

### Design Tool Integration
- Export images to Figma/Canva
- Use as assets in broader design projects
- Create image libraries for teams
- Maintain brand consistency across platforms

---

## Best Practices

### Writing Effective 75-Word Descriptions
1. **Be Specific**: Include concrete details about objects, colors, lighting
2. **Set the Scene**: Describe environment, mood, and atmosphere
3. **Use Descriptive Language**: Employ vivid adjectives and sensory details
4. **Specify Style**: Mention desired artistic style or photographic approach
5. **Include Context**: Provide background information for better AI understanding

### Example Effective Description:
"A professional businesswoman in her 30s stands confidently in a modern glass office building, wearing a navy blue blazer and white blouse. Warm golden hour lighting streams through floor-to-ceiling windows, casting soft shadows. The city skyline is visible in the background. She has shoulder-length brown hair and is smiling warmly at the camera. The image should have a corporate, professional photography style with shallow depth of field."

### Optimization Tips
1. **Credit Management**: Monitor usage to avoid running out
2. **Batch Processing**: Generate multiple variations in one session
3. **Version Control**: Save different iterations for comparison
4. **Quality Control**: Always review generated images before final use
5. **Backup Strategy**: Save API responses and generated URLs

### Security Considerations
1. **API Key Protection**: Never expose API keys in client-side code
2. **Rate Limiting**: Implement proper rate limiting in applications
3. **Content Filtering**: Be aware of Gamma's content policies
4. **Data Privacy**: Consider privacy implications of generated content
5. **Terms Compliance**: Ensure usage complies with Gamma's Terms of Service

---

## Cost Estimation

### UI Method Costs
- **Free Plan**: 400 credits at signup (limited generations)
- **Plus Plan**: $10/month, 400 credits/month, priority support
- **Pro Plan**: $20/month, unlimited AI creation, advanced features

### API Method Costs
- **Pro Plan Required**: $20/month or $15/month annual
- **Beta Limitations**: 50 generations/day
- **Credit Usage**: ~3 credits per card/generation
- **Advanced Models**: Higher credit costs for DALL-E 3, Flux Pro

### ROI Considerations
- **Time Savings**: Compare to traditional design time
- **Quality Output**: Professional-grade images without design skills
- **Scalability**: Automate multiple image generation
- **Integration Value**: Seamless workflow integration

---

## Conclusion

This runbook provides comprehensive guidance for generating standalone AI images in Gamma using a 75-word description. The UI method is perfect for one-off generations and provides immediate visual feedback, while the API method enables automation and scaling for larger projects.

**Key Takeaways**:
- Gamma excels at high-quality AI image generation
- Multiple access methods accommodate different use cases
- Proper prompt engineering significantly improves results
- API access requires Pro plan but enables powerful automation
- Integration capabilities extend usefulness across workflows

**Next Steps**:
1. Choose your preferred method (UI vs API)
2. Prepare your 75-word description
3. Follow the step-by-step process
4. Validate and optimize results
5. Consider integration with broader workflows

For additional support, consult the official Gamma documentation at [help.gamma.app](https://help.gamma.app) or contact Gamma support through their official channels.