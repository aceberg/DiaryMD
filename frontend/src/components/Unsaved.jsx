import { currentUnsaved } from "../functions/exports";
import { saveFile } from "./Editor";

function Unsaved() {

  const saveHandler = () => {
    saveFile();
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      left: "20px",
    }}>
      {currentUnsaved() && (
        <i class="bi bi-balloon shade-hover rounded-2 p-2 big-btn" title="Click to save" 
          onClick={saveHandler}
        >
        </i>
      )}
    </div>
  );
}

export default Unsaved;
