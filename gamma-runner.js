#!/usr/bin/env node

/**
 * Gamma Business Use-Case Runner - CLI Wrapper
 *
 * This script:
 * 1. Sends the System Prompt + Task Template to your model
 * 2. Extracts the final fenced `json` block from the response
 * 3. Writes each `"files"[i].content` to `"files"[i].path`
 */

// Load environment variables from .env file
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  systemPromptFile: './config/gamma-business-runner-system.md',
  yamlFile: './Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml',
  productPassFile: './modified_product_pass_guide (1).md',
  outputDir: './runs'
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Gamma Business Use-Case Runner

Usage:
  node gamma-runner.js "<use case>" [options]

Options:
  --yaml <path>         Path to YAML file (default: ${CONFIG.yamlFile})
  --product-pass <path> Path to product pass guide (default: ${CONFIG.productPassFile})
  --out <dir>           Output directory (default: ${CONFIG.outputDir})
  --date <YYYY-MM-DD>   Date override (default: today)

Examples:
  node gamma-runner.js "Turn meeting notes into a presentation deck"
  node gamma-runner.js "Create landing page with custom domain" --out ./custom-runs
`);
    process.exit(0);
  }

  const useCase = args[0];
  const options = {
    yaml: CONFIG.yamlFile,
    productPass: CONFIG.productPassFile,
    output: CONFIG.outputDir,
    date: new Date().toISOString().split('T')[0]
  };

  // Parse flags
  for (let i = 1; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];

    switch (flag) {
      case '--yaml':
        options.yaml = value;
        break;
      case '--product-pass':
        options.productPass = value;
        break;
      case '--out':
        options.output = value;
        break;
      case '--date':
        options.date = value;
        break;
    }
  }

  return { useCase, options };
}

/**
 * Load system prompt from file
 */
function loadSystemPrompt() {
  try {
    return fs.readFileSync(CONFIG.systemPromptFile, 'utf8');
  } catch (error) {
    console.error(`Error loading system prompt: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Create user message with task template
 */
function createUserMessage(useCase, options) {
  return `/run
use_case: "${useCase}"
yaml_path: "${options.yaml}"
product_pass_path: "${options.productPass}"
output_dir: "${options.output}"
today: "${options.date}"`;
}

/**
 * Extract JSON from the model response
 */
function extractJsonFromResponse(response) {
  // Look for the last JSON code block
  const jsonBlockRegex = /```json\s*\n([\s\S]*?)\n```/g;
  let lastMatch = null;
  let match;

  while ((match = jsonBlockRegex.exec(response)) !== null) {
    lastMatch = match;
  }

  if (!lastMatch) {
    throw new Error('No JSON code block found in response');
  }

  try {
    return JSON.parse(lastMatch[1]);
  } catch (error) {
    throw new Error(`Invalid JSON in response: ${error.message}`);
  }
}

/**
 * Write files from the JSON response
 */
function writeFiles(filesData, outputDir) {
  if (!filesData.files || !Array.isArray(filesData.files)) {
    throw new Error('Invalid files data structure');
  }

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  const writtenFiles = [];

  for (const file of filesData.files) {
    if (!file.path || !file.content) {
      console.warn('Skipping invalid file entry:', file);
      continue;
    }

    const fullPath = path.resolve(file.path);
    const dir = path.dirname(fullPath);

    // Ensure directory exists
    fs.mkdirSync(dir, { recursive: true });

    // Write file
    fs.writeFileSync(fullPath, file.content, 'utf8');
    writtenFiles.push(fullPath);

    console.log(`✓ Written: ${fullPath}`);
  }

  return writtenFiles;
}

/**
 * Simulate calling the model (placeholder)
 * In a real implementation, this would call your AI model API
 */
function callModel(systemPrompt, userMessage) {
  console.log('🤖 Calling Gamma Business Use-Case Runner...');
  console.log('📝 System Prompt loaded');
  console.log('📋 User request:', userMessage.split('\\n')[1]);

  // This is a placeholder - replace with actual model API call
  const mockResponse = `# Sample Deck Creation Runbook

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
\`\`\`bash
curl --request POST \\
  --url https://public-api.gamma.app/v0.2/generations \\
  --header 'Content-Type: application/json' \\
  --header 'X-API-KEY: sk-gamma-xxxxxxxx' \\
  --data '{
    "inputText": "Meeting notes here...",
    "format": "presentation",
    "numCards": 10
  }'
\`\`\`

## Validation
- Check generated deck has proper structure
- Verify content matches meeting topics

## Evidence & Recency
- Source: gamma.app/help - Fetched: 2025-09-27T10:00:00Z

\`\`\`json
{
  "files": [
    {
      "path": "./runs/2025-09-27__meeting-deck-creation.md",
      "format": "markdown",
      "content": "# Sample Deck Creation Runbook\\n\\n**Run date:** 2025-09-27\\n**Mode:** UI Path | API Path\\n**Tools used:** Gamma\\n\\n## Overview\\nThis runbook demonstrates creating a presentation deck from meeting notes using Gamma's AI-powered generation.\\n\\n## Prereqs\\n- Gamma account (Pro plan recommended for API access)\\n- Meeting transcript or notes prepared\\n\\n## UI Path (Step-by-step)\\n1. Navigate to gamma.app and sign in\\n2. Click \\"Generate\\" button\\n3. Select \\"Presentation\\" format\\n4. Paste meeting notes into text field\\n5. Click \\"Generate presentation\\"\\n\\n## API Path (Step-by-step)\\n\`\`\`bash\\ncurl --request POST \\\\\\n  --url https://public-api.gamma.app/v0.2/generations \\\\\\n  --header 'Content-Type: application/json' \\\\\\n  --header 'X-API-KEY: sk-gamma-xxxxxxxx' \\\\\\n  --data '{\\n    \\"inputText\\": \\"Meeting notes here...\\",\\n    \\"format\\": \\"presentation\\",\\n    \\"numCards\\": 10\\n  }'\\n\`\`\`\\n\\n## Validation\\n- Check generated deck has proper structure\\n- Verify content matches meeting topics\\n\\n## Evidence & Recency\\n- Source: gamma.app/help - Fetched: 2025-09-27T10:00:00Z"
    }
  ]
}
\`\`\``;

  return mockResponse;
}

/**
 * Main execution
 */
function main() {
  try {
    const { useCase, options } = parseArgs();

    console.log('🚀 Starting Gamma Business Use-Case Runner');
    console.log('📖 Use case:', useCase);

    // Load system prompt
    const systemPrompt = loadSystemPrompt();

    // Create user message
    const userMessage = createUserMessage(useCase, options);

    // Call model (placeholder)
    const response = callModel(systemPrompt, userMessage);

    // Extract and write files
    const filesData = extractJsonFromResponse(response);
    const writtenFiles = writeFiles(filesData, options.output);

    console.log('\\n✅ Runbook generation complete!');
    console.log(`📁 Files written to: ${options.output}/`);
    console.log(`📄 Generated ${writtenFiles.length} file(s)`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { parseArgs, loadSystemPrompt, createUserMessage, extractJsonFromResponse, writeFiles };