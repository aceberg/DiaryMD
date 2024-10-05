import { onCleanup, onMount } from "solid-js";
import { saveFile } from './Editor';
import Editor from './Editor';
import Tabs from "./Tabs";
import './Right.css';

function Right() {

  const handleKeydown = (event) => {
    // Check for Ctrl + S
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); // Prevent the default browser save behavior
      console.log('Ctrl+S');
      saveFile();
    }
  };

  // Register the keydown listener on mount
  onMount(() => {
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener when the component is unmounted
    onCleanup(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
  });

  return (
    <div class='col-md-9'>
      <Tabs></Tabs>
      <Editor></Editor>
    </div>
  );
}

export default Right;