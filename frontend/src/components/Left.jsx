import Menu from './Menu';
import Search from './Search';
import NewHomeSave from './NewHomeSave';
import { getConfig, getDirByID, getDirsFromAPI, apiGetBlogJSON } from '../functions/api';
import { setCurrentBlogJSON, setCurrentConfig, setCurrentDir, setCurrentMenu, setCurrentTags} from '../functions/exports';
import './Left.css';

function Left() {  

  const setAtStart = async () => {
    setCurrentConfig(await getConfig());
    setCurrentDir(await getDirByID(0));
    setCurrentMenu(await getDirsFromAPI(0));
    
    const [blog, tags] = await apiGetBlogJSON();
    setCurrentBlogJSON(blog);
    setCurrentTags(tags);
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