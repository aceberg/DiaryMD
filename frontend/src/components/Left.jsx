import Menu from './Menu';
import SelectRepo from './SelectRepo';
import NewHomeSave from './NewHomeSave';

function Left() {
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