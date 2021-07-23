function createCopyButton(codeBracket) {
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";
    button.addEventListener("click", () => copyCodeToClipboard(button, codeBracket));
    addCopyButtonToDom(button, codeBracket);
  }
  
  async function copyCodeToClipboard(button, codeBracket) {
    const codeToCopy = codeBracket.innerText;
    try {
      result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
        await navigator.clipboard.writeText(codeToCopy);
      } else {
        copyCodeBlockExecCommand(codeToCopy, codeBracket);
      }
    } catch (_) {
      copyCodeBlockExecCommand(codeToCopy, codeBracket);
    }
    finally {
      codeWasCopied(button);
    }
  }
  
  function copyCodeBlockExecCommand(codeToCopy, codeBracket) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = 'true'
    textArea.readOnly = 'false'
    textArea.className = "copyable-text-area";
    textArea.value = codeToCopy;
    codeBracket.insertBefore(textArea, codeBracket.firstChild);
    const range = document.createRange()
    range.selectNodeContents(textArea)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textArea.setSelectionRange(0, 999999)
    document.execCommand("copy");
    codeBracket.removeChild(textArea);
  }
  
  function codeWasCopied(button) {
    button.blur();
    button.innerText = "Copied!";
    setTimeout(function() {
      button.innerText = "Copy";
    }, 2000);
  }
  
  function addCopyButtonToDom(button, codeBracket) {
    codeBracket.insertBefore(button, codeBracket.firstChild);
    const wrapper = document.createElement("div");
    wrapper.className = "highlight-wrapper";
    codeBracket.parentNode.insertBefore(wrapper, codeBracket);
    wrapper.appendChild(codeBracket);
  }
  
  document.querySelectorAll("code")
    .forEach(codeBracket => createCopyButton(codeBracket));