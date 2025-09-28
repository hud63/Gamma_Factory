# Gamma Business Use-Case Runner

A comprehensive system for generating detailed, step-by-step runbooks for Gamma platform use cases using EXA MCP integration and official documentation.

## Overview

This system takes natural language business use cases and produces thorough runbooks that include:
- Exact UI click paths and API implementations
- Real-time fetching of official documentation
- Integration with premium productivity tools
- Validation steps and troubleshooting guides

## Features

- **EXA MCP Integration**: Real-time fetching of current Gamma documentation
- **Dual Path Runbooks**: Both UI and API implementation paths
- **Tool Integration**: Leverages premium tools from the product pass guide
- **Evidence-Based**: Includes source documentation and recency checks
- **Automated File Generation**: Creates properly formatted Markdown runbooks

## Quick Start

### Prerequisites
- Node.js 14+ installed
- EXA MCP configured in your environment
- Access to Gamma platform documentation

### Basic Usage

```bash
# Run with default settings
node gamma-runner.js "Turn meeting notes into a presentation deck"

# Custom output directory
node gamma-runner.js "Create landing page with custom domain" --out ./custom-runs

# See help
node gamma-runner.js --help
```

### Example Commands

```bash
# Meeting to presentation
node gamma-runner.js "Turn this meeting transcript into a 10-card deck and publish as a site with basic analytics"

# Product landing page
node gamma-runner.js "Create a landing page from a product brief and attach a custom domain"

# Social media content
node gamma-runner.js "Generate LinkedIn-optimized social media posts from blog content"

# API automation
node gamma-runner.js "Programmatically create presentations from CRM data using the Generate API"
```

## System Architecture

### Core Components

1. **System Prompt** (`config/gamma-business-runner-system.md`)
   - Comprehensive instructions for the AI runner
   - Defines output format and behavior constraints
   - Specifies integration patterns with tools

2. **Task Template** (`config/task-template.md`)
   - Structured input format for use cases
   - Parameter mapping and examples
   - Command-line argument handling

3. **CLI Wrapper** (`gamma-runner.js`)
   - Node.js implementation
   - JSON response parsing
   - File output management

4. **Documentation Sources**
   - `Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml`
   - `modified_product_pass_guide (1).md`

### File Structure

```
Gamma_Factory/
├── config/
│   ├── gamma-business-runner-system.md  # System prompt
│   ├── task-template.md                  # Input templates
│   └── slash-command-setup.md           # Command setup
├── runs/                                # Generated runbooks
├── gamma-runner.js                      # CLI implementation
├── package.json                         # Node.js config
├── .env                                 # API keys
└── README.md                           # This file
```

## Configuration

### Environment Variables

Create a `.env` file with your API keys:

```env
# Gamma API Configuration
GAMMA_API_KEY=sk-gamma-your-api-key-here
```

### MCP Integration

Ensure EXA MCP is configured in your `.mcp.json`:

```json
{
  "mcpServers": {
    "exa": {
      "type": "stdio",
      "command": "cmd",
      "args": ["/c", "node", "path/to/exa-mcp-server"],
      "env": {
        "EXA_API_KEY": "your-exa-api-key"
      }
    }
  }
}
```

## Output Format

Generated runbooks follow this structure:

```markdown
# <Descriptive Title for Use Case>
**Run date:** YYYY-MM-DD
**Mode:** UI Path | API Path (or both)
**Tools used:** Gamma [+ other tools]

## Overview
## Prereqs
## UI Path (Step-by-step)
## API Path (Step-by-step)
## Validation
## Optional: Tie-ins from Product Pass
## Troubleshooting & Pitfalls
## Evidence & Recency
## Changelog
```

## Integration with Claude Code

### Slash Command Setup

```bash
/gamma "<use case>" --yaml "./Deep Link Tree..." --product-pass "./modified_product_pass_guide..." --out "./runs" --date "2025-09-27"
```

### API Integration

The system can be integrated into larger workflows using the JSON output protocol:

```json
{
  "files": [
    {
      "path": "./runs/2025-09-27__use-case-summary.md",
      "format": "markdown",
      "content": "Generated runbook content..."
    }
  ]
}
```

## Use Case Examples

### Content Creation
- Meeting transcripts to presentation decks
- Blog posts to social media content
- Research notes to documentation sites

### Marketing & Sales
- Product briefs to landing pages
- Customer stories to case studies
- Feature announcements to marketing decks

### Developer Workflows
- API documentation to integration guides
- Technical specs to developer presentations
- Bug reports to status dashboards

### Business Operations
- Meeting notes to action item tracking
- Project plans to stakeholder updates
- Training materials to onboarding decks

## Contributing

1. Update system prompts in `config/` for new capabilities
2. Add new use case templates to `config/task-template.md`
3. Extend CLI wrapper for additional output formats
4. Update documentation links in YAML file as needed

## License

MIT License - see package.json for details.

## Support

For issues and feature requests, refer to the configured support channels in your Claude Code environment.