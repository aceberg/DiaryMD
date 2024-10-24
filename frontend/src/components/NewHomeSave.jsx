import { saveFile } from './Editor';
import { currentDir, currentFile, setCurrentDir, setCurrentFile, setCurrentMenu} from '../functions/exports';
import { newFile, newDir, getDirList, getDirInfo } from '../functions/api';

function NewHomeSave() {

  const handleDir = async () => {
    const path = currentDir().Path+'/NewDir';
    // console.log("New dir path: ", path);
    newDir(path);
    setCurrentMenu(await getDirList(currentDir().Path));
  };

  const handleFile = async () => {
    const path = currentDir().Path+'/NewFile';
    // console.log("New file path: ", path);
    newFile(path);
    setCurrentMenu(await getDirList(currentDir().Path));
  };

  const handleHome = async () => {
    setCurrentDir(await getDirInfo(""));
    // console.log("Home clicked", currentDir());
    setCurrentMenu(await getDirList(""));
  };

  const handleSave = async () => {
    if (currentFile().Path == '') {
      const path = currentDir().Path+'/NewFile';
      // console.log("New file path: ", path);
      newFile(path);
      setCurrentFile({
        Name: '',
        Path: path,
        IsDir: false,
        UpPath: currentDir().Path,
      });
      setCurrentMenu(await getDirList(currentDir().Path));
    }
    saveFile();
  };

  return (
      <div class='d-flex justify-content-between mx-3'>
        <i class="bi bi-folder img-mg" title='Home' onClick={[handleHome]}></i>
        <i class="bi bi-folder-plus img-mg" title='New Dir' onClick={[handleDir]}></i>
        <i class="bi bi-file-earmark-plus img-mg" title='New File' onClick={[handleFile]}></i>
        <i class="bi bi-floppy img-mg" title='Save' onClick={[handleSave]}></i>
      </div>
    );
  }
  
  export default NewHomeSave;