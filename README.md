# Chrome Browser Skill for Claude Code

A Claude Code skill that provides browser automation capabilities through a persistent Chrome instance.

## Features

- Launch and manage a persistent Chrome browser instance
- Open URLs in new tabs
- List all open tabs
- Execute JavaScript in any tab and retrieve results
- Session persistence (cookies, storage) across script calls

## Installation

1. Clone this repo into your Claude Code skills directory:
   ```bash
   git clone https://github.com/endcycles/chrome-browser-skill ~/.claude/skills/chrome-browser
   ```

2. Install dependencies:
   ```bash
   cd ~/.claude/skills/chrome-browser/scripts
   npm install
   ```

3. The skill will be automatically detected by Claude Code.

## Usage

See [SKILL.md](SKILL.md) for detailed usage instructions.

## Requirements

- Node.js 18+
- Google Chrome installed
- Claude Code CLI

## License

MIT
