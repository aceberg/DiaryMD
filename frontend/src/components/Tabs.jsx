import { currentFile, setCurrentFile, emptyFile } from "./exports";
import { setEditorValue } from './Editor';

function Tabs() {

  const handleClose = (data) => {
    console.log("Close", data);
    setCurrentFile(emptyFile);
    setEditorValue('');
  };

  return (
    <div class='file-place'>
      <button class="tab" title={currentFile().Path}>
        <span class="mx-3">{currentFile().Name}</span>
        <i class="bi bi-x tab-close" title='Close' onClick={[handleClose, '']}></i>
      </button>
    </div>
  );
}

export default Tabs;