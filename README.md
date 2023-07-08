
# ChatGPT Query Parameter Chrome Extension

This Chrome extension enables you to pass a query parameter to ChatGPT. It automates the process of inputting a prompt to the ChatGPT interface, reducing the number of steps needed to generate a result. It takes the text passed via the "prompt-text" query parameter, places it into the prompt field, and activates the prompt button.

**Note:** This extension is designed for use on a Mac running Chrome and passing the query parameter via an Alfred workflow. However, it can be adapted to other setups as long as the text is passed to the query parameter named "prompt-text" on chat.openai.com.

## Prerequisites

Before you get started, you must sign up for an account on [chat.openai.com](https://chat.openai.com) and log in. The extension will only work if you are logged into ChatGPT.

## Installation

### Cloning the Repository

1. Ensure you have git installed locally.
2. Navigate to the directory where you would like to store these files.
3. Run the following command to clone the repository:

   ```
   git clone https://github.com/ethanthompson/chatgpt-query-param-extension.git
   ```

You can also [download the files](https://github.com/ethanthompson/chatgpt-query-param-extension/archive/refs/heads/main.zip) and unzip them to any location on your computer. Choose a location that is unlikely to be deleted or changed, i.e., do not store the files in your Downloads folder.

### Creating Your Alfred Workflow

1. Open the Alfred app and navigate to the workflows tool.
2. Create a blank workflow.
3. Set up a keyword input using these settings: ![Keyword Input](readme/keyword-input.jpg)
4. Create an "Open URL" action using these settings: ![Open URL Action](readme/action.jpg)

   Be sure to use `?prompt-text={query}` in your URL. This will pass the value of your input to the browser URL, allowing the extension to grab it and place it in the prompt field.

5. Test your workflow by opening the Alfred field and typing `chat this is a test`. Your browser should open and navigate to `https://chat.openai.com/?prompt-text="this is a test"`. If it doesn't, double-check your steps.

### Installing the Extension

1. Open `chrome://extensions/` and enable Developer Mode (this should be a toggle in the upper right).
2. Click "Load Unpacked".
3. Navigate to the folder where you have cloned this repo and select it.
4. Enable the extension and accept the permission requirements.

## Testing the Extension

1. Open Alfred.
2. Type `chat this is a test` and hit Enter.
3. This should open Chrome, and you should start seeing ChatGPT responding to the prompt.
4. You're done! Now you can input prompts with ease.
