function createCodeHeader(button, codeBlock) {
  const label = document.createElement("SPAN");
  label.className = "code-label";
  label.innerText = codeBlock.className.slice(9);
  label.appendChild(button)
  addCodeHeaderToDom(label, codeBlock)
}
function createCopyButton(codeBlock) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = " Copy";
  button.addEventListener("click", () => copyCodeToClipboard(button, codeBlock));
  button.insertAdjacentHTML("afterbegin", "<i class='far fa-copy'></i>");
  createCodeHeader(button, codeBlock);
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
  button.innerText = "";
  button.insertAdjacentHTML("afterbegin", '<i class="fas fa-check"></i>');
  button.focus();
  setTimeout(function() {
    button.innerText = " Copy";
    button.insertAdjacentHTML("afterbegin", "<i class='far fa-copy'></i>");
    button.className = "copy-code-button"
    button.blur();
  }, 2000);
}

function addCodeHeaderToDom(label, codeBlock) {
  codeBlock.parentNode.insertAdjacentElement("beforebegin", label);
}

document.querySelectorAll("pre > code:not(.language-mermaid)")
  .forEach(codeBlock => createCopyButton(codeBlock));

