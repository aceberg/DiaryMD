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