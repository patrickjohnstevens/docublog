---
last_update:
  date: 11/11/2022
  author: Patrick John Stevens
title: GitHub CoPilot Notes
description: "Github Copilot Notes"
keywords:
  - Github Copilot subscription
---
# GitHub CoPilot Notes

## Why purchase GitHub Copilot?

The main reason I purchased GitHub Copilot (GHCP) for the next 12 months (11/2022 - 11/2023) for $100 USD is to help with my learning journey. I tried it in the beta before it was paid but now I want to utilize it to speed up my learning process. I think it will also help me keep my focus on coding with my fingers on the keyboard instead of context switching over an over again by doing Google searches for the answers I expect GHCP to help me with. It also has an incredible feature that you are able to generate code suggestions from typing comments. Check out the details below.

## Keyboard shortcuts for GitHub Copilot
You can use the default keyboard shortcuts in Visual Studio Code when using GitHub Copilot. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

Keyboard shortcuts for GitHub Copilot

:::tip **Fun Fact**
You are able to copy and paste things like the shortcut table below using the browser dev tools. Simply copy the element and then paste it into an appropriate file.
:::

<table><thead><tr><th align="left">Action</th><th align="left">Shortcut</th><th align="left">Command name</th></tr></thead><tbody><tr><td align="left">Accept an inline suggestion</td><td align="left"><kbd>Tab</kbd></td><td align="left">editor.action.inlineSuggest.commit</td></tr><tr><td align="left">Dismiss an inline suggestion</td><td align="left"><kbd>Esc</kbd></td><td align="left">editor.action.inlineSuggest.hide</td></tr><tr><td align="left">Show next inline suggestion</td><td align="left"><kbd>Alt</kbd>+<kbd>]</kbd></td><td align="left">editor.action.inlineSuggest.showNext</td></tr><tr><td align="left">Show previous inline suggestion</td><td align="left"><kbd>Alt</kbd>+<kbd>[</kbd></td><td align="left">editor.action.inlineSuggest.showPrevious</td></tr><tr><td align="left">Trigger inline suggestion</td><td align="left"><kbd>Alt</kbd>+<kbd>\</kbd></td><td align="left">editor.action.inlineSuggest.trigger</td></tr><tr><td align="left">Open GitHub Copilot (additional suggestions in separate pane)</td><td align="left"><kbd>Ctrl</kbd>+<kbd>Enter</kbd></td><td align="left">github.copilot.generate</td></tr><tr><td align="left">Toggle GitHub Copilot on/off</td><td align="left"><em>No default shortcut</em></td><td align="left">github.copilot.toggleCopilot</td></tr></tbody></table>

## Generate code suggestions from comments

You can describe something you want to do using natural language within a comment, and GitHub Copilot will suggest the code to accomplish your goal.

1. In Visual Studio Code, create a new JavaScript (*.js) file.
2. In the JavaScript file, type the following comment. GitHub Copilot will suggest an implementation of the function.

**Typing this...**

``` javascript
// find all images without alternate text
// and give them a red border
function process() {
```
**Suggests this...**

``` javascript
function process() {
  const images = document.querySelectorAll("img:not([alt])");
  images.forEach(image => {
    image.style.border = "2px solid red";
  });
}
```

How awesome is that?!?! If you are like me when learning to program you will quickly be in a situation where you want to do something but you don't know what code to start with. I am hoping with GHCP I'll be able to use plain English in comments to get a suggestion that helps me keep moving forward with less frustration and more confidence.

Here is how GitHub describes the benefits: Focus on solving bigger problems. Spend less time creating boilerplate and repetitive code patterns, and more time on what matters: building great software. Write a comment describing the logic you want and GitHub Copilot will immediately suggest code to implement the solution. Get AI-based suggestions, just for you. GitHub Copilot shares recommendations based on the project's context and style conventions. Quickly cycle through lines of code, complete function suggestions, and decide which to accept, reject, or edit. Code confidently in unfamiliar territory. Whether you’re working in a new language or framework, or just learning to code, GitHub Copilot can help you find your way. Tackle a bug, or learn how to use a new framework without spending most of your time spelunking through the docs or searching the web.

## How do I get the most out of GitHub Copilot?

GitHub Copilot works best when you divide your code into small functions, use meaningful names for functions parameters, and write good docstrings and comments as you go. It also seems to do best when it’s helping you navigate unfamiliar libraries or frameworks.

## Ongoing Learning & Insights

11/9/2022:
