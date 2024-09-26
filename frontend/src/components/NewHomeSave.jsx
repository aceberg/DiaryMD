import folder from '../assets/folder.svg';
import newfolder from '../assets/folder-plus.svg';
import newfile from '../assets/file-plus.svg';
import save from '../assets/floppy.svg';
import { saveFile } from './Editor';
import { currentDir, setCurrentDir} from './exports';
import { setMenuDirID } from './Menu';
import { getDirByID, newFile, newDir } from './api';

function NewHomeSave() {

  const handleDir = () => {
    const path = currentDir().Path+'/NewDir';
    console.log("New dir path: ", path);
    newDir(path);
    setMenuDirID(currentDir().ID);
  };

  const handleFile = () => {
    const path = currentDir().Path+'/NewFile';
    console.log("New file path: ", path);
    newFile(path);
    // setMenuDirID(0);
    // setMenuDirID(currentDir().ID);
  };

  const handleHome = async () => {
    setCurrentDir(await getDirByID(0));
    console.log("Home clicked", currentDir());
    setMenuDirID(0);
  };

  const handleSave = () => {
    console.log('Save file');
    saveFile();
  };

  return (
      <div class='d-flex justify-content-between mx-3'>
        <img src={folder} class='img-mg' title='Home' onClick={[handleHome]}></img>
        <img src={newfolder} class='img-mg' title='New dir' onClick={[handleDir]}></img>
        <img src={newfile} class='img-mg' title='New file' onClick={[handleFile]}></img>
        <img src={save} class='img-mg' title='Save file' onClick={[handleSave]}></img>
      </div>
    );
  }
  
  export default NewHomeSave;