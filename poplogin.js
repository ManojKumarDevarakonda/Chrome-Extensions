$(document).ready(function () {

  async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0];
  }

  $("#btnInsta").click(function () {
    getTab().then(function (tab) {
      console.log(tab);
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: () => {
            const usernameField = document.querySelector('#loginForm > div > div:nth-child(1) > div > label > input');
            usernameField.value = 'it@kft.co.in';            
            const passwordField = document.querySelector('#loginForm > div > div:nth-child(2) > div > label > input');
            passwordField.value = 'Sanjay@12345';
            const inputEvent = new Event('input', { bubbles: true });
            usernameField.dispatchEvent(inputEvent);
            passwordField.dispatchEvent(inputEvent);
            const changeEvent = new Event('change', { bubbles: true });
            usernameField.dispatchEvent(changeEvent);
            passwordField.dispatchEvent(changeEvent);
          },
        }
      );
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: () => {
            setTimeout(() => {
              const button = document.querySelector('#loginForm > div > div:nth-child(3) > button');
              button.disabled = false;
              button.click();
            }, 1000);
          },
        }
      );
    });
  });
  $("#loginBtn").click(function () {
    getTab().then(function (tab) {
      console.log(tab);
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: () => {
            const usernameField = document.querySelector('#username');
            usernameField.value = 'admin';
            const passwordField = document.querySelector('#password');
            passwordField.value = 'password';
          },
        }
      );
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: () => {
            setTimeout(() => {
              const button = document.querySelector('#loginBtn');
              button.disabled = false;
              button.click();
            }, 1000);
          },
        }
      );
    });
  });
});
