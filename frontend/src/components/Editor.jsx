import { createSignal, onMount } from "solid-js";
import EasyMDE from "easymde";
import { saveFileToAPI } from "./api";
import "easymde/dist/easymde.min.css";
import "../App.css";
import { currentFile } from "./exports";

let easyMDE;
let fileText;

export function setEditorValue(newText) {
  if (easyMDE) {
    easyMDE.value(newText);
  } else {
    console.error("EasyMDE instance is not available.");
  }
}

export function saveFile() {
  saveFileToAPI(currentFile().Path, fileText);
}

function Editor() {
  
  let textareaRef;
  const [markdown, setMarkdown] = createSignal("");

  onMount(() => {
    easyMDE = new EasyMDE({
      element: textareaRef,
      autoDownloadFontAwesome: true, 
      lineNumbers: true,
      showIcons: ["code", "strikethrough", "horizontal-rule"],
    });

    easyMDE.codemirror.on("change", () => {
      setMarkdown(easyMDE.value()); 
      fileText = markdown();
    });
  });

  return (
    <div class="editor-container">
      <textarea ref={textareaRef} />
    </div>
  );
};

export default Editor;