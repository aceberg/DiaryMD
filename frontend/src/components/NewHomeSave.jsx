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
        <i class="bi bi-folder img-mg" title='Home' onClick={[handleHome]}></i>
        <i class="bi bi-folder-plus img-mg" title='Home' onClick={[handleDir]}></i>
        <i class="bi bi-file-earmark-plus img-mg" title='Home' onClick={[handleFile]}></i>
        <i class="bi bi-floppy img-mg" title='Home' onClick={[handleSave]}></i>
      </div>
    );
  }
  
  export default NewHomeSave;