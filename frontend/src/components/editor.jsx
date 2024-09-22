import { createSignal, onCleanup, onMount } from "solid-js";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import "../App.css";

function Editor() {
  
  let textareaRef;
  const [markdown, setMarkdown] = createSignal(""); // Create a signal to store markdown content


  onMount(() => {
    let easyMDE = new EasyMDE({
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