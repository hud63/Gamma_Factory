# AI Image Generation Standalone in Gamma - Complete Runbook

**Use Case**: How to create an AI image when you have a 75-word description and just want to make the image without creating anything else

**Date Created**: 2025-09-27
**Target Platform**: Gamma (gamma.app)
**API Status**: Beta (Pro/Ultra users only)

---

## Overview

### What This Runbook Covers
This guide provides step-by-step instructions for generating standalone AI images in Gamma using a detailed text description. While Gamma is primarily designed for presentations, documents, and websites, it offers robust AI image generation capabilities that can be used independently.


### Credit Usage
- **Standard AI Images**: ~1-2 credits per generation
- **Advanced AI Models**: Higher credit cost (varies by model)
- **Pro Features**: Animation and advanced editing (Pro users only)

---

## Method 1: UI-Based Image Generation (Recommended for Single Images)

### Step-by-Step UI Process

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

---

## Troubleshooting Guide

#### Issue: "Poor image quality"
**Symptoms**: Blurry, distorted, or incorrect images
**Solutions**:
1. Use "Enhance" button to improve prompt
2. Try different AI models (DALL-E 3 for highest quality)
3. Be more specific in your 75-word description
4. Add style keywords for better results
5. Generate multiple variations and select best

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

---

For additional support, consult the official Gamma documentation at [help.gamma.app](https://help.gamma.app) or contact Gamma support through their official channels.