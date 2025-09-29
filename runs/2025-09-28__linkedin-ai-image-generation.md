# AI Image Generation from LinkedIn Post Text in Gamma

**Use Case**: Generate AI images based on LinkedIn post text content

**Date Created**: 2025-09-28
**Target Platform**: Gamma (gamma.app)
**API Status**: Beta (Pro/Ultra users only)

---

## Overview

### What This Runbook Covers
This guide provides step-by-step instructions for generating AI images in Gamma using LinkedIn post text as the source prompt. Gamma's AI image generation capabilities can transform social media content into compelling visuals for presentations, documents, or standalone image creation.

### Credit Usage
- **Standard AI Images**: ~1-2 credits per generation
- **Advanced AI Models**: Higher credit cost (varies by model - Imagen-4-Pro costs more)
- **Pro Features**: Animation and advanced editing (Pro users only)

---

## Method 1: UI-Based Process (Recommended for Single Operations)

### Step-by-Step UI Process

#### Step 2: Create New Project or Access Existing Content
1. Navigate to [gamma.app](https://gamma.app) and sign in
2. Click **"Create new [AI]"** button on dashboard
3. Select **"Generate"** option (not "Paste in text" or "Import a file")
4. Choose **"Presentation"** format (easiest for single image extraction)
5. Click **"Continue"**

#### Step 3: Create Minimal Content Structure for Image Generation
1. In the prompt field, enter a minimal request like: "Create a single slide"
2. Set **Number of cards**: 1
3. Select any theme (you'll focus on the image generation)
4. Click **"Generate"**

#### Step 4: Generate AI Image from LinkedIn Post Text
**Method A: Using Slash Command**
1. Click on the generated card/slide
2. Type `/ai` and press Enter
3. Paste your LinkedIn post text or extract key visual elements from it
4. Add descriptive keywords like "professional," "LinkedIn style," "business"
5. Click **"Generate"** button

**Method B: Using Insert Toolbar**
1. Click the **"Insert menu"** on the right-hand toolbar
2. Select **"AI Image"** from available options
3. Paste your LinkedIn post text in the text box
4. Modify the text to focus on visual elements you want to see
5. Click **"Generate"** button

#### Step 5: Optimize Image Generation
1. **Use Enhance Feature**: Click **"Enhance"** button to automatically improve your prompt
2. **Select Image Style**: Choose from available style options (realistic, professional, business, artistic)
3. **Set Dimensions**: Select appropriate aspect ratio (1:1 for LinkedIn posts, 16:9 for presentations)
4. **Generate**: Click generate and wait for processing

#### Step 6: Export/Download Image
1. **Right-click** on the generated image
2. Select **"Save image as..."** from context menu
3. Choose file location and format (PNG recommended for social media)
4. Click **"Save"**

**Alternative Export Method:**
1. Click on the image to select it
2. Use **Export** feature in main menu
3. Select **"PNG"** format
4. Choose **"Current card only"**
5. Download the exported file

---

## Method 2: API-Based Process (For Automation/Scale)

### API Prerequisites
- **Gamma Pro Plan**: Required for API access ($20/month or $15/month annual)
- **API Key**: Generated from account settings
- **Rate Limits**: 50 generations/day during beta
- **Programming Knowledge**: Basic HTTP requests or automation platform experience

### Basic Integration Steps
1. Log into your Gamma Pro account
2. Navigate to **Account Settings**
3. Find **"API Access"** section
4. Click **"Generate API Key"**
5. Copy and securely store the API key

### API Request Example for LinkedIn Image Generation
```bash
curl --request POST \
  --url https://public-api.gamma.app/v0.2/generations \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: sk-gamma-xxxxxxxx' \
  --data '{
    "inputText": "Your LinkedIn post text here - focus on visual elements",
    "format": "presentation",
    "themeName": "minimal",
    "numCards": 1,
    "imageOptions": {
      "source": "aiGenerated",
      "model": "imagen-4-pro",
      "style": "professional"
    },
    "exportAs": "png"
  }'
```

---

## Advanced Customization Options

### UI Customization
1. **Custom Image Styles**: Access Theme Editor for brand-specific styling aligned with LinkedIn aesthetic
2. **Prompt Enhancement**: Use "Enhance" feature to refine LinkedIn post descriptions automatically
3. **Multiple Generations**: Generate variations by modifying business/professional keywords
4. **Editing Tools**: Use "Ask AI to..." feature for post-generation edits like background changes

### LinkedIn-Specific Style Keywords
- Professional, business, corporate
- Clean, modern, minimalist
- LinkedIn blue (#0077B5)
- Networking, career, industry
- Headshot style, portrait orientation

---

## Troubleshooting Guide

#### Issue: "Poor image quality or doesn't match LinkedIn aesthetic"
**Symptoms**: Generated images look unprofessional or don't suit LinkedIn content
**Solutions**:
1. Use "Enhance" button to improve prompt with professional keywords
2. Try Imagen-4-Pro model for highest quality business imagery
3. Add specific style keywords: "professional," "LinkedIn," "business," "corporate"
4. Include lighting descriptions: "professional lighting," "clean background"
5. Generate multiple variations and select the most LinkedIn-appropriate

#### Issue: "LinkedIn post text too long or complex"
**Symptoms**: API errors or poor image generation from lengthy posts
**Solutions**:
1. Extract key visual concepts from the LinkedIn post
2. Focus on 1-2 main ideas rather than entire post content
3. Use bullet points or short phrases instead of full sentences
4. Prioritize nouns and visual descriptors over abstract concepts

---

## Best Practices

### Converting LinkedIn Text to Image Prompts
1. **Extract Visual Elements**: Focus on tangible objects, scenes, or concepts from the post
2. **Professional Tone**: Maintain business-appropriate imagery that aligns with LinkedIn's professional context
3. **Brand Consistency**: Include company colors, professional styling, or industry-specific elements
4. **Clear Messaging**: Ensure the generated image supports the LinkedIn post's key message
5. **Platform Optimization**: Consider LinkedIn's image dimensions and professional aesthetic

### Example Effective Transformation:
**LinkedIn Post**: "Just launched our new project management software that helps teams collaborate 40% more efficiently. The intuitive dashboard and real-time updates have transformed how our clients work together."

**Image Prompt**: "Professional business team collaborating around a modern computer dashboard showing project management software, clean office environment, diverse professionals, charts and graphs visible on screen, modern corporate setting with natural lighting."

---

For additional support, consult the official Gamma documentation at [help.gamma.app](https://help.gamma.app) or contact Gamma support through their official channels.

---

## Visual Enhancement Recommendations

### Visual Storytelling Strategy for LinkedIn Post-to-Image Conversion

**Core Visual Narrative Framework:**
Professional Hook → Value Demonstration → Action Inspiration

**LinkedIn-Specific Design Elements:**
- **Color Palette**: LinkedIn Blue (#0077B5), Professional Navy (#1B365D), Success Green (#57B894)
- **Typography**: Power statements (42-56px), Supporting content (28-36px), Data points (32-40px)
- **Layout**: Rule of thirds with mobile optimization in mind

**Content-Type Specific Treatments:**
1. **Thought Leadership**: Minimalist background, professional headshot, bold statements
2. **Success Stories**: Timeline visualization, before/after comparisons, achievement badges
3. **Industry Tips**: Numbered list design, icon-driven explanations, step-by-step flow

**Data Visualization for Business Content:**
- Clean line charts for growth trends
- Card-based metric displays with trend indicators
- Professional dashboard styling with high contrast

**Professional Composition Guidelines:**
- Center 80% safe zone for mobile viewing
- 40% visual weight on primary message
- High contrast design for LinkedIn feed optimization

**Engagement Optimization:**
- Question-style headlines for comments
- Social proof integration (logos, testimonials)
- Clear call-to-action visual elements
- Consistent brand color schemes

---

## Automation & Workflow Opportunities

### Core Automation Workflows

**1. LinkedIn-to-Gamma Image Pipeline**
- **Trigger**: New LinkedIn post or scheduled content
- **Process**: Extract text → Enhance prompt → Generate Gamma image → Export
- **Tools**: LinkedIn API, Gamma API, n8n HTTP nodes
- **Outcome**: Automated visual content creation from text posts

**2. Multi-Platform Content Distribution**
- **Source**: Generated Gamma images
- **Destinations**: LinkedIn, Twitter, Instagram, Facebook
- **Features**: Platform-specific resizing, optimal posting times
- **Benefits**: 80% time reduction in content distribution

**3. Content Performance Optimization**
- **Data Collection**: Engagement metrics from all platforms
- **Analysis**: A/B testing of image styles and prompts
- **Optimization**: Auto-adjust generation parameters based on performance
- **Result**: Data-driven improvement in visual content effectiveness

### Advanced Automation Scenarios

**Brand Consistency Enforcement:**
- Automated brand guideline application
- Color palette and typography validation
- Logo and watermark integration
- Style keyword optimization

**Reactive Content Generation:**
- Monitor trending LinkedIn topics
- Auto-generate relevant visual content
- Schedule optimal posting times
- Track performance metrics

**Workflow Integration Benefits:**
- **Content Creators**: 80% time reduction, consistent branding
- **Social Media Managers**: Multi-platform efficiency, real-time responses
- **Organizations**: Cost efficiency, scalable content production

**Technical Implementation:**
- n8n HTTP Request nodes for API integration
- Webhook triggers for real-time processing
- Error handling and retry mechanisms
- Performance monitoring and analytics

**ROI Impact:**
- Reduced manual design time from hours to minutes
- Increased content output volume by 300-500%
- Improved engagement through optimized visual content
- Enhanced brand consistency across all platforms