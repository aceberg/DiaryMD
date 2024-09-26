import { currentFile, setCurrentFile, emptyFile } from "./exports";
import { setEditorValue } from './Editor';
import circle from '../assets/x.svg';

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
        <img src={circle} class="tab-close" title='Close' onClick={[handleClose, '']}></img>
      </button>
    </div>
  );
}

export default Tabs;