import { apiCopy, deleteFileOrDir, getDirList, renameFileOrDir } from "../functions/api";
import { currentDir, setCurrentMenu} from '../functions/exports';

function MenuEdit(props) {

  const targetID = '#modal-'+props.data.Name;
  const modalID = 'modal-'+props.data.Name;
  const pathID = 'path-'+props.data.Name;

  const handleEdit = (dir) => {
    console.log('Edit:', dir);
  };

  const handleDelete = async (dir) => {
    console.log('Delete:', dir);
    await deleteFileOrDir(dir.Path);
    setCurrentMenu(await getDirList(currentDir().Path));
  };

  const handleCopy = async (dir) => {
    console.log('Copy:', dir);
    await apiCopy(dir.Path);
    setCurrentMenu(await getDirList(currentDir().Path));
  };

  const handleSave = async (dir) => {
    console.log('Save:', dir);
    const pathVal = document.getElementById(pathID).value;
    console.log('New path: ', pathVal);
    await renameFileOrDir(dir.Path, pathVal);
    setCurrentMenu(await getDirList(currentDir().Path));
  };

  return (
    <>
      <i onClick={[handleEdit, props.data]} data-bs-toggle="modal" data-bs-target={targetID} class="bi bi-three-dots-vertical shade-hover float-end mx-2 p-1" title="Edit"></i>

      {/* MODAL */}
      <div class="modal fade" id={modalID} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id='testID'>Edit {props.data.Name}</h1>
              <button type="button" class="btn-close shade-hover" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input id={pathID} class="form-control mt-2" value={props.data.Path} title="Path"></input>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={[handleDelete, props.data]}>Delete</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={[handleCopy, props.data]}>Copy</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={[handleSave, props.data]}>Save</button>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default MenuEdit;