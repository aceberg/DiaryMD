import Menu from './Menu';
import SelectRepo from './SelectRepo';
import NewHomeSave from './NewHomeSave';
import { getDirByID, getDirsFromAPI } from './api';
import { setCurrentDir, setCurrentMenu} from './exports';

function Left() {  

  const setAtStart = async () => {
    setCurrentDir(await getDirByID(0));
    setCurrentMenu(await getDirsFromAPI(0));
  };

  setAtStart();

  return (
    <div class='col-3 h-100 d-flex flex-column'>
      <SelectRepo></SelectRepo>
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