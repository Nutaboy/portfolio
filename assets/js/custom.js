

//button
function createCopyButton(codeBlock) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = "Copy";
  button.addEventListener("click", () => copyCodeToClipboard(button, codeBlock));
  addCopyButtonToDom(button, codeBlock);
}

async function copyCodeToClipboard(button, codeBlock) {
  const codeToCopy = codeBlock.querySelector("code").innerText;
  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      copyCodeBlockExecCommand(codeToCopy, codeBlock);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeToCopy, codeBlock);
  }
  finally {
    codeWasCopied(button);
  }
}

function copyCodeBlockExecCommand(codeToCopy, codeBlock) {
  const textArea = document.createElement("textArea");
  textArea.contentEditable = 'true'
  textArea.readOnly = 'false'
  textArea.className = "copyable-text-area";
  textArea.value = codeToCopy;
  codeBlock.insertBefore(textArea, codeBlock.firstChild);
  const range = document.createRange()
  range.selectNodeContents(textArea)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
  textArea.setSelectionRange(0, 999999)
  document.execCommand("copy");
  codeBlock.removeChild(textArea);
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
  wrapper.appendChild(codeBlock);
}

document.querySelectorAll("pre > code:not(.language-mermaid)")
  .forEach(codeBlock => createCopyButton(codeBlock));



