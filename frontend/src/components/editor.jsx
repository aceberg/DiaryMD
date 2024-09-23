import { createSignal, onCleanup, onMount } from "solid-js";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import "../App.css";

let easyMDE;
// Function to update the EasyMDE editor from outside
export function setEditorValue(newContent) {
  if (easyMDE) {
    easyMDE.value(newContent); // Set new content in the EasyMDE editor
  } else {
    console.error("EasyMDE instance is not available.");
  }
}

function Editor() {
  
  let textareaRef;
  const [markdown, setMarkdown] = createSignal(""); // Create a signal to store markdown content


  onMount(() => {
    easyMDE = new EasyMDE({
      element: textareaRef,
      autoDownloadFontAwesome: true, 
      lineNumbers: true,
      showIcons: ["code", "strikethrough", "horizontal-rule"],
    });

    easyMDE.codemirror.on("change", () => {
      setMarkdown(easyMDE.value()); 
      // console.log("TEXT: ", markdown());
    });
  });

  return (
    <div class="editor-container">
      <textarea ref={textareaRef} />
    </div>
  );
};

export default Editor;