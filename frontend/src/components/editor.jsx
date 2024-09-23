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
      autoDownloadFontAwesome: true, // Prevent auto-downloading fonts
      lineNumbers: true,
    });

    // Listen for changes and update the signal
    easyMDE.codemirror.on("change", () => {
      setMarkdown(easyMDE.value()); // Update the signal with the editor content
      console.log("TEXT: ", markdown());
    });

    // Cleanup when the component unmounts
    onCleanup(() => {
      easyMDE.toTextArea();
      easyMDE = null;
    });
  });


  return (
    <div class="editor-container">
      <textarea ref={textareaRef} />
    </div>
  );
};

export default Editor;