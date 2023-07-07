// console.log("Loaded!")

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    // console.log('URL updated: ', changeInfo.url);
    const url = new URL(changeInfo.url);
    if (url.hostname === 'chat.openai.com') {
      // console.log('On chat.openai.com');
      const promptText = url.searchParams.get('prompt-text');
      if (promptText) {
        // console.log('prompt-text found', promptText);
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: setPromptText,
          args: [promptText]
        });
      }
    }
  }
});

function setPromptText(promptText) {
  const MAX_ATTEMPTS = 10;
  let attempts = 0;

  const intervalId = setInterval(() => {
    attempts++;
    // console.log('Attempt number:', attempts);
    const textarea = document.getElementById('prompt-textarea');
    if (textarea) {
      // console.log('textarea found');
      textarea.value = promptText;
      textarea.dispatchEvent(new Event('input', { 'bubbles': true }));

      // get the parent form and find the button
      const form = textarea.closest('form');
      const button = form.querySelector('button');
      if (button) {
        // console.log('button found');
        button.click();
        // console.log('button clicked');
      }

      clearInterval(intervalId);
    } else if (attempts >= MAX_ATTEMPTS) {
      // console.log('Max attempts reached without finding textarea');
      clearInterval(intervalId);
    }
  }, 500);
}
