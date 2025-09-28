# Slash Command Setup for Gamma Business Use-Case Runner

## Slash Command Message

When you register your slash command (or wire a CLI wrapper), use this **message string** so it passes the right shape every time:

```bash
/gamma "<free-text use case>" --yaml "./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml" --product-pass "./modified_product_pass_guide (1).md" --out "./runs" --date "$(date +%F)"
```

## Alternative Formats

### For Different Shells
#### Windows PowerShell
```powershell
/gamma "<free-text use case>" --yaml "./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml" --product-pass "./modified_product_pass_guide (1).md" --out "./runs" --date (Get-Date -Format "yyyy-MM-dd")
```

#### Windows CMD
```cmd
/gamma "<free-text use case>" --yaml "./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml" --product-pass "./modified_product_pass_guide (1).md" --out "./runs" --date "%date:~-4,4%-%date:~-10,2%-%date:~-7,2%"
```

## Slash Command Examples

### Quick Examples
```bash
/gamma "Turn meeting notes into a presentation deck"
/gamma "Create a product landing page with custom domain"
/gamma "Generate social media content from blog post"
/gamma "Build API integration for automated deck creation"
```

### Full Command Examples
```bash
/gamma "Turn this meeting transcript into a 10-card deck and publish as a site with basic analytics" --yaml "./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml" --product-pass "./modified_product_pass_guide (1).md" --out "./runs" --date "2025-09-27"

/gamma "Create a landing page from a product brief and attach a custom domain" --yaml "./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml" --product-pass "./modified_product_pass_guide (1).md" --out "./runs" --date "2025-09-27"
```

## Integration Notes

If your slash command framework needs a single prompt payload, map flags into the TASK TEMPLATE keys and send that as the user message:

### Flag Mapping
- `--yaml` → `yaml_path`
- `--product-pass` → `product_pass_path`
- `--out` → `output_dir`
- `--date` → `today`
- First argument → `use_case`

### JSON Payload Example
```json
{
  "system_prompt": "Gamma Business Use-Case Runner system prompt...",
  "user_message": "/run\nuse_case: \"Turn meeting notes into a presentation deck\"\nyaml_path: \"./Deep Link Tree and Instruction Map for Gamma Help and Developer Ecosystem.yaml\"\nproduct_pass_path: \"./modified_product_pass_guide (1).md\"\noutput_dir: \"./runs\"\ntoday: \"2025-09-27\""
}
```