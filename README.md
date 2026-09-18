# Leads Tracker – Chrome Extension

A lightweight Chrome extension for saving, organizing, and quickly accessing web leads and useful links.

## 📌 About

Leads Tracker is a lightweight browser extension designed to help you keep track of people and opportunities you come across while browsing.

Instead of relying on scattered notes or trying to remember important contacts later, the extension provides a quick way to save relevant information and keep it organized.

It can be useful for:

- Job applications and recruiter contacts
- Professional networking
- Potential clients or business leads
- People you want to follow up with
- Opportunities discovered while browsing
- Personal contact tracking

## ✨ Features

- 🔗 **Save Current Tab** — Save the URL of the currently active Chrome tab with one click.
- ✍️ **Add Custom Leads** — Manually enter and save any URL you want to keep track of.
- 💾 **Persistent Storage** — Saved leads are stored using browser local storage and remain available when the extension is reopened.
- 🌐 **Quick Access** — Click any saved lead to open it in a new browser tab.
- 🗑️ **Clear All Leads** — Double-click the delete button to remove all saved leads.
- ⚡ **Lightweight & Simple** — Built with vanilla HTML, CSS, and JavaScript with no backend or external database.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Tabs API
- Local Storage
- Chrome Manifest V3

## ⚙️ How It Works

1. Enter a URL manually or open a webpage you want to save.
2. Use **SAVE TAB** to capture the URL of the active browser tab.
3. The URL is stored in the browser's local storage.
4. Saved leads are displayed as clickable links.
5. Click a saved lead to open it in a new tab.
6. Double-click **DELETE ALL** to clear the saved leads.

## 🚀 Installation

1. Clone this repository.
2. Open `chrome://extensions/` in Google Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder containing `manifest.json`.
6. The **Leads Tracker** extension will be added to Chrome.

## 📂 Project Structure

```text
leads-tracker-chrome-extension/
│
├── icon.webp
├── images.jpg
├── index.html
├── manifest.json
├── script.js
├── styles.css
└── README.md
