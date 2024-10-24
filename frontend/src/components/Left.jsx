import Menu from './Menu';
import Search from './Search';
import NewHomeSave from './NewHomeSave';
import { getConfig, getDirInfo, getDirList, getFileByPath } from '../functions/api';
import { currentFile, setCurrentConfig, setCurrentDir, setCurrentMenu } from '../functions/exports';
import './Left.css';
import { setEditorValue } from './Editor';

function Left() {  

  const setAtStart = async () => {
    setCurrentConfig(await getConfig());
    setCurrentDir(await getDirInfo(""));
    setCurrentMenu(await getDirList(""));
    
    setEditorValue(await getFileByPath(currentFile().Path));
  };

  setAtStart();

  return (
    <div class='col-md-3 mb-3'>
      <Search></Search>
      <div class='menu-head rounded-top'>
        <NewHomeSave></NewHomeSave>
      </div>
      <div class="menu-card rounded-bottom">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Left;