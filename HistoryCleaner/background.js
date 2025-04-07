// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'cleanHistory') {
      const website = request.website;
      
      // Search for history entries related to the website
      chrome.history.search(
        { text: website, maxResults: 1000 },
        (historyItems) => {
          const filteredItems = historyItems.filter(item => 
            item.url.includes(website)
          );
          
          // If we found matching items, delete them
          if (filteredItems.length > 0) {
            // Delete individual URLs
            filteredItems.forEach(item => {
              chrome.history.deleteUrl({ url: item.url });
            });
            
            // Clean browsing data if options are selected
            const dataToRemove = {};
            
            if (request.cleanCookies) {
              dataToRemove.cookies = true;
            }
            
            if (request.cleanCache) {
              dataToRemove.cache = true;
            }
            
            if (Object.keys(dataToRemove).length > 0) {
              chrome.browsingData.remove({
                "origins": [`*://*.${website}/*`]
              }, dataToRemove);
            }
            
            sendResponse({ 
              success: true, 
              count: filteredItems.length,
              message: `Cleaned ${filteredItems.length} items for ${website}`
            });
          } else {
            sendResponse({ 
              success: true, 
              count: 0,
              message: `No history found for ${website}`
            });
          }
        }
      );
      
      return true; // Required for async response
    }
  });
  
  // Create the images directory and include these placeholder images
  // images/icon16.png, images/icon48.png, images/icon128.png
  // These would be simple colored icon files in your actual extension