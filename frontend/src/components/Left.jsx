import Menu from './Menu';
import Search from './Search';
import NewHomeSave from './NewHomeSave';
import './Left.css';

function Left() {  
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