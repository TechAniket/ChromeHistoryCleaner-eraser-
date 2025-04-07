# 🧹 History Cleaner Chrome Extension

![History Cleaner Logo](/HistoryCleaner/images/icon128.png)

## 📝 Description

History Cleaner is a powerful Chrome extension that helps you maintain your privacy by selectively removing browsing history, cookies, and cache for specific websites. With an intuitive interface and robust functionality, this extension makes it simple to clean up your digital footprint whenever you need.

## ✨ Features

- **🎯 Targeted Cleaning**: Remove history for specific websites without affecting your entire browsing history
- **🍪 Cookie Management**: Option to remove associated cookies for the selected website
- **📦 Cache Control**: Clear cached data for specific domains
- **📊 Clean Reports**: See exactly how many items were removed
- **⏱️ Recent History**: Quick access to recently cleaned websites for easy repeat cleaning
- **🔒 Privacy-Focused**: All cleaning happens locally on your device - no data is sent to external servers
- **🎨 Simple Interface**: User-friendly design that's easy to navigate

## 🚀 Installation

### Method 1: Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store
2. Search for "History Cleaner"
3. Click "Add to Chrome"

### Method 2: Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked"
5. Select the folder containing the extension files
6. The extension is now installed and ready to use!

## 🔧 How to Use

1. Click the History Cleaner icon in your Chrome toolbar
2. Enter the website domain you want to clean (e.g., "facebook.com" or just "facebook")
3. Select your cleaning options:
   - ✅ Clean cookies
   - ✅ Clean cache
4. Click "Clean History"
5. A confirmation message will appear showing how many items were cleaned

## 🏆 Use Cases

- **After Online Shopping**: Remove traces of shopping sites to hide gift purchases
- **When Using Shared Computers**: Quickly remove specific site visits while keeping other history intact
- **Before Lending Your Device**: Clean sensitive browsing data without a full history wipe
- **Regular Privacy Maintenance**: Keep your browsing history organized and free from clutter

## 💡 Tips

- Use the "Recent Cleanups" list to quickly re-clean frequently visited sites
- The extension will automatically format website names (adding .com if needed)
- For the most thorough cleaning, keep both cookies and cache options checked

## 🛠️ Technical Details

This extension uses the following Chrome APIs:
- `chrome.history`: To search and delete history items
- `chrome.browsingData`: To remove cookies and cache
- `chrome.storage`: To save recent cleanup information
- `chrome.tabs`: To provide access to the Chrome history page

## 👨‍💻 Contribution

This extension was created by me as a privacy tool to help users maintain control over their browsing data. I built this extension to address a common need for selective history cleaning that's not easily available in Chrome's default history management.

### Want to Contribute?

If you'd like to contribute to the development of History Cleaner, please feel free to:

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

### Development Roadmap

- [ ] Add time-based filtering (clean history older than X days)
- [ ] Implement scheduled cleaning for specific sites
- [ ] Add bulk cleanup option for multiple sites at once
- [ ] Create an advanced regexp search for more precise history matching
- [ ] Add visualization of your browsing patterns

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔒 Privacy Policy

History Cleaner does not collect, transmit, or store any of your browsing data on external servers. All cleaning operations happen locally on your device. The only data stored is your list of recent cleanups, which is kept in your browser's local storage.

## 🙏 Acknowledgments

- Thanks to all the users who provided feedback during development
- Special thanks to the Chrome Extension developer community
- Icons created using [Icon Library Name]

---

## 📞 Contact & Support

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository or contact me at aniketkumarmca@gmail.com.

**Enjoy a cleaner, more private browsing experience!**
