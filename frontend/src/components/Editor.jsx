import { createSignal, onMount } from "solid-js";
import "easymde/dist/easymde.min.css";
import EasyMDE from "easymde";
import { saveFileToAPI } from "../functions/api";
import { currentFile, setCurrentUnsaved } from "../functions/exports";

let easyMDE;
let fileText;
let savedText;

export function setEditorValue(newText) {
  if (easyMDE) {
    easyMDE.value(newText);
    savedText = newText;
    setCurrentUnsaved(false);
  } else {
    console.error("EasyMDE instance is not available.");
  }
}

export function saveFile() {
  console.log('Save file', currentFile());
  savedText = fileText;
  setCurrentUnsaved(false);
  saveFileToAPI(currentFile().Path, fileText);
}

function Editor() {
  
  let textareaRef;
  const [markdown, setMarkdown] = createSignal("");

  onMount(() => {
    easyMDE = new EasyMDE({
      element: textareaRef,
      autoDownloadFontAwesome: false, 
      lineNumbers: true,
      spellChecker: false,
      toolbar: ["bold", "italic", "strikethrough", "heading", "code", "quote", "unordered-list", "ordered-list", "link", "image", "horizontal-rule", "preview", "side-by-side", "fullscreen", "guide"],
    });

    easyMDE.codemirror.on("change", () => {
      setMarkdown(easyMDE.value()); 
      fileText = markdown();

      if (fileText != savedText) {
        setCurrentUnsaved(true);
      } else {
        setCurrentUnsaved(false);
      }
    });
  });

  return (
    <div class="editor-container">
      <textarea ref={textareaRef} />
    </div>
  );
};

export default Editor;