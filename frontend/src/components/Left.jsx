import Menu from './Menu';
import SelectRepo from './SelectRepo';

function Left() {
  return (
    <div class='col-3 h-100 d-flex flex-column'>
      <SelectRepo></SelectRepo>
      <Menu></Menu>
    </div>
  );
}

export default Left;