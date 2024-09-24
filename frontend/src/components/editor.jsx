import { createSignal, onMount } from "solid-js";
import EasyMDE from "easymde";
import { saveFileToAPI } from "./api";
import "easymde/dist/easymde.min.css";
import "../App.css";

let easyMDE;
let filePath;
let fileText;
// Function to update the EasyMDE editor from outside
export function setEditorValue(newContent, path) {
  if (easyMDE) {
    filePath = path;
    easyMDE.value(newContent); // Set new content in the EasyMDE editor
  } else {
    console.error("EasyMDE instance is not available.");
  }
}

export function saveFileTrigger() {
  saveFileToAPI(filePath, fileText);
}

function Editor() {
  
  let textareaRef;
  const [markdown, setMarkdown] = createSignal("");
  const [path, setPath] = createSignal("");


  onMount(() => {
    easyMDE = new EasyMDE({
      element: textareaRef,
      autoDownloadFontAwesome: true, 
      lineNumbers: true,
      showIcons: ["code", "strikethrough", "horizontal-rule"],
    });

    easyMDE.codemirror.on("change", () => {
      setMarkdown(easyMDE.value()); 
      setPath(filePath);
      fileText = markdown();
    });
  });

  return (
    <div>
      <div class='file-place'>
        <button class="btn btn-outline-primary">Path: {path()}</button>
      </div>
      <div class="editor-container">
        <textarea ref={textareaRef} />
      </div>
    </div>
  );
};

export default Editor;