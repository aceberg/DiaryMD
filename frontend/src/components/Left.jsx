import Menu from './Menu';
import Search from './Search';
import NewHomeSave from './NewHomeSave';
import { getConfig, getDirByID, getDirsFromAPI } from '../functions/api';
import { setCurrentConfig, setCurrentDir, setCurrentMenu} from '../functions/exports';
import './Left.css';

function Left() {  

  const setAtStart = async () => {
    setCurrentConfig(await getConfig());
    setCurrentDir(await getDirByID(0));
    setCurrentMenu(await getDirsFromAPI(0));
  };

  setAtStart();

  return (
    <div class='col-3 h-100 d-flex flex-column'>
      <Search></Search>
      <div class='menu-head'>
        <NewHomeSave></NewHomeSave>
      </div>
      <div class="menu-card">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Left;