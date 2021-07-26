

//button
function createCodeLabel(button, codeBlock) {
  const label = document.createElement("LABEL");
  label.className = "code-label";
  label.innerText = codeBlock.className.slice(9);
  label.appendChild(button)
  addCodeLabelToDom(label, codeBlock)
}
function createCopyButton(codeBlock) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = "Copy";
  button.addEventListener("click", () => copyCodeToClipboard(button, codeBlock));
  createCodeLabel(button, codeBlock);
  //addCopyButtonToDom(button, codeBlock);
}

async function copyCodeToClipboard(button, codeBlock) {
  const codeToCopy = codeBlock.innerText;
  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      copyCodeBlockExecCommand(codeBlock);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeBlock);
  }
  finally {
    codeWasCopied(button);
  }
}

function copyCodeBlockExecCommand(codeBlock) {
  const range = document.createRange()
  range.selectNodeContents(codeBlock)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
  document.execCommand("copy");
  sel.removeAllRanges()
}

function codeWasCopied(button) {
  button.blur();
  button.innerText = "Copied!";
  setTimeout(function() {
    button.innerText = "Copy";
  }, 2000);
}

function addCopyButtonToDom(button, codeBlock) {
  codeBlock.parentNode.insertBefore(button, codeBlock);
  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  codeBlock.parentNode.insertBefore(wrapper, codeBlock);
  //wrapper.appendChild(button);
  wrapper.appendChild(codeBlock);
}

function addCodeLabelToDom(label, codeBlock) {
  codeBlock.parentNode.insertAdjacentElement("beforebegin", label);
}

document.querySelectorAll("pre > code:not(.language-mermaid)")
  .forEach(codeBlock => createCopyButton(codeBlock));

