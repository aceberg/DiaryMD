import folder from '../assets/folder.svg';
import newfolder from '../assets/folder-plus.svg';
import newfile from '../assets/file-plus.svg';
import save from '../assets/floppy.svg';
import { saveFile, setEditorValue } from './Editor';
import { setCurrentDir} from './exports';
import { setMenuDirID } from './Menu';

function NewHomeSave() {

  const handleClick = (data) => {
    console.log("Click", data);
    setEditorValue("Click "+data);
  };

  const handleHome = () => {
    setCurrentDir({ID: 0, Name: '/'});
    setMenuDirID(0);
  };

  const handleSave = () => {
    console.log('Save file');
    saveFile();
  };

  return (
      <div class='d-flex justify-content-between mx-3'>
        <img src={folder} class='img-mg' title='Home' onClick={[handleHome]}></img>
        <img src={newfolder} class='img-mg' title='New dir' onClick={[handleClick, 'dir']}></img>
        <img src={newfile} class='img-mg' title='New file' onClick={[handleClick, 'file']}></img>
        <img src={save} class='img-mg' title='Save file' onClick={[handleSave, 'save']}></img>
      </div>
    );
  }
  
  export default NewHomeSave;