import folder from '../assets/folder.svg';
import newfolder from '../assets/folder-plus.svg';
import newfile from '../assets/file-plus.svg';
import save from '../assets/floppy.svg';
import { saveFile } from './Editor';
import { currentDir, currentFile, setCurrentDir, setCurrentFile, setCurrentMenu} from './exports';
import { getDirByID, newFile, newDir, getDirsFromAPI } from './api';

function NewHomeSave() {

  const handleDir = async () => {
    const path = currentDir().Path+'/NewDir';
    console.log("New dir path: ", path);
    newDir(path);
    setCurrentMenu(await getDirsFromAPI(currentDir().ID));
  };

  const handleFile = async () => {
    const path = currentDir().Path+'/NewFile';
    console.log("New file path: ", path);
    newFile(path);
    setCurrentMenu(await getDirsFromAPI(currentDir().ID));
  };

  const handleHome = async () => {
    setCurrentDir(await getDirByID(0));
    console.log("Home clicked", currentDir());
    setCurrentMenu(await getDirsFromAPI(0));
  };

  const handleSave = async () => {
    console.log('Save file');
    if (currentFile().Path == '') {
      const path = currentDir().Path+'/NewFile';
      console.log("New file path: ", path);
      newFile(path);
      setCurrentFile({
        ID: 0,
        Name: '',
        Path: path,
        IsDir: false,
        Parent: 0,
      });
      setCurrentMenu(await getDirsFromAPI(currentDir().ID));
    }
    saveFile();
  };

  return (
      <div class='d-flex justify-content-between mx-3'>
        {/* <img src={folder} class='img-mg' title='Home' onClick={[handleHome]}></img> */}
        <i class='img-mg icon-home' title='Home' onClick={[handleHome]}></i>
        <img src={newfolder} class='img-mg' title='New dir' onClick={[handleDir]}></img>
        <img src={newfile} class='img-mg' title='New file' onClick={[handleFile]}></img>
        <img src={save} class='img-mg' title='Save file' onClick={[handleSave]}></img>
      </div>
    );
  }
  
  export default NewHomeSave;