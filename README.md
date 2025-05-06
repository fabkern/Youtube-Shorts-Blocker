# YouTube Shorts Blocker

A lightweight Chrome extension that hides YouTube Shorts so you can take back your attention.

## Why

Our attention is very valuable. Over time YouTube has been creeping ever closer to full-on attention grabbing by displaying more and more Shorts and snack-able video previews to keep you on the site longer. If you don’t want to be nudged toward endless scrolling of 15-second clips, this extension helps you focus on the content you actually came for.

## Features

- Hides all Shorts shelves and short-form video previews on YouTube  
- Toggles on or off with a single click in the extension popup  
- Uses a MutationObserver to catch dynamically loaded Shorts as you scroll  
- No external dependencies and minimal performance impact

## Installation

1. **Clone this repo**  
   ```bash
   git clone https://github.com/your-username/youtube-shorts-blocker.git
   cd youtube-shorts-blocker```

2. **Load as unpacked extension**

   * Open Chrome and go to `chrome://extensions`
   * Enable **Developer mode** (toggle in top right)
   * Click **Load unpacked** and select this folder

3. **(Optional) Pack into a `.crx` for personal distribution**

   * On the Extensions page, click **Pack extension**
   * Point to this folder and let Chrome generate a `.pem` key
   * Drag the resulting `.crx` into `chrome://extensions` (after turning Developer mode off)
   * **Do not check the `.crx` into your repo** — just keep it locally for easy install

## Usage

1. Click the extension icon in the toolbar
2. Flip the **Enable Shorts blocker** checkbox on or off
3. Navigate YouTube — Shorts will appear or disappear immediately

## Contributing

Contributions and bug reports are very welcome:

1. Fork the repo
2. Create a feature branch (`git checkout -b my-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin my-feature`)
5. Open a Pull Request

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.

