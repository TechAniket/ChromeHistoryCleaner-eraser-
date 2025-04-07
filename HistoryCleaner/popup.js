
// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const websiteInput = document.getElementById('website');
    const cleanButton = document.getElementById('cleanButton');
    const statusDiv = document.getElementById('status');
    const recentList = document.getElementById('recentList');
    const cleanCookies = document.getElementById('cleanCookies');
    const cleanCache = document.getElementById('cleanCache');
    const viewHistory = document.getElementById('viewHistory');
    
    // Load recent cleanups
    loadRecentCleanups();
    
    cleanButton.addEventListener('click', function() {
      const website = websiteInput.value.trim();
      
      if (!website) {
        showStatus('Please enter a website domain', 'error');
        return;
      }
      
      // Format website input properly
      let formattedWebsite = website;
      if (!formattedWebsite.includes('.')) {
        formattedWebsite += '.com';
      }
      
      // Send message to background script
      chrome.runtime.sendMessage({
        action: 'cleanHistory',
        website: formattedWebsite,
        cleanCookies: cleanCookies.checked,
        cleanCache: cleanCache.checked
      }, function(response) {
        if (response.success) {
          showStatus(`Successfully cleaned history for ${formattedWebsite}. Removed ${response.count} item(s).`, 'success');
          saveToRecentCleanups(formattedWebsite);
          loadRecentCleanups();
        } else {
          showStatus(`Error: ${response.message}`, 'error');
        }
      });
    });
    
    viewHistory.addEventListener('click', function() {
      chrome.tabs.create({ url: 'chrome://history/' });
    });
    
    function showStatus(message, type) {
      statusDiv.textContent = message;
      statusDiv.className = 'status ' + type;
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        statusDiv.className = 'status';
      }, 3000);
    }
    
    function saveToRecentCleanups(website) {
      chrome.storage.local.get('recentCleanups', function(data) {
        let recentCleanups = data.recentCleanups || [];
        
        // Add new cleanup with timestamp
        recentCleanups.unshift({
          website: website,
          timestamp: new Date().toISOString()
        });
        
        // Keep only the 5 most recent
        if (recentCleanups.length > 5) {
          recentCleanups = recentCleanups.slice(0, 5);
        }
        
        chrome.storage.local.set({ recentCleanups: recentCleanups });
      });
    }
    
    function loadRecentCleanups() {
      chrome.storage.local.get('recentCleanups', function(data) {
        const recentCleanups = data.recentCleanups || [];
        recentList.innerHTML = '';
        
        if (recentCleanups.length === 0) {
          recentList.innerHTML = '<p>No recent cleanups</p>';
          return;
        }
        
        recentCleanups.forEach(item => {
          const div = document.createElement('div');
          div.className = 'recent-item';
          
          const date = new Date(item.timestamp);
          const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
          
          div.innerHTML = `
            <span>${item.website} - ${formattedDate}</span>
            <button class="delete-btn" data-website="${item.website}">Clean Again</button>
          `;
          
          recentList.appendChild(div);
        });
        
        // Add event listeners to "Clean Again" buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
          button.addEventListener('click', function() {
            const website = this.getAttribute('data-website');
            websiteInput.value = website;
            cleanButton.click();
          });
        });
      });
    }
  });
  
  