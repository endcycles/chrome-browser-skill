---
name: chrome-browser
description: Control a headless Chrome browser to browse the web, scrape data, and manage tabs. Use this for web automation tasks.
---

# Chrome Browser Skill

This skill allows you to control a persistent background Chrome browser instance using CLI scripts.

## Setup
Before using the tools, ensure the required dependencies are installed:
`cd scripts && npm install`

## Tools

### 1. Launch Browser
Starts the browser in the background if it's not already running.
`node scripts/launch.js`

### 2. List Tabs
Shows all open tabs with their indices, titles, and URLs.
`node scripts/list-tabs.js`

### 3. Open URL(s)
Opens one or more URLs in new tabs (in parallel).
`node scripts/open-tab.js <url> [url2] [url3] ...`

### 4. Take Snapshot
Gets a structured accessibility tree of the page content. This is the **preferred** method for reading page content - much more reliable than custom JavaScript selectors.
`node scripts/snapshot.js <tab_index>`

### 5. Evaluate JavaScript
Runs JavaScript in a specific tab. Use sparingly - prefer `snapshot.js` for reading content.
`node scripts/evaluate.js <tab_index> <javascript_code>`

*   **tab_index**: The index of the tab (from `list-tabs.js`).
*   **javascript_code**: The code to run. Returns the result as JSON.

## Workflow Example

1.  **Start:** Always run `node scripts/launch.js` first to ensure the browser is ready.
2.  **Navigate:** `node scripts/open-tab.js https://example.com`
3.  **Inspect:** `node scripts/list-tabs.js` -> returns list, say example.com is index 1.
4.  **Extract:** `node scripts/evaluate.js 1 "document.title"` -> returns "Example Domain".

## Notes
*   The browser runs on port 9222.
*   Data persists between script calls (cookies, session storage) because the browser process stays alive.
*   To stop the browser, you can manually kill the process ID found in `.chrome-pid`.
