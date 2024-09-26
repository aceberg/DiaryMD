import "bootstrap/js/dist/modal";
import menu from '../assets/menu.svg';
import { deleteFileOrDir, renameFileOrDir } from "./api";

function MenuEdit(props) {

  const targetID = '#modal-'+props.data.ID;
  const modalID = 'modal-'+props.data.ID;
  const pathID = 'path-'+props.data.ID;
  // console.log("MODAL:", target, modalID);

  const handleEdit = (dir) => {
    console.log('Edit:', dir);
  };

  const handleDelete = (dir) => {
    console.log('Delete:', dir);
    deleteFileOrDir(dir.Path);
  };

  const handleSave = (dir) => {
    console.log('Save:', dir);
    const pathVal = document.getElementById(pathID).value;
    console.log('New path: ', pathVal);
    renameFileOrDir(dir.Path, pathVal);
  };

  return (
    <>
      <img src={menu} onClick={[handleEdit, props.data]} data-bs-toggle="modal" data-bs-target={targetID} class="shade-hover float-end mx-2 p-1"></img>

      {/* MODAL */}
      <div class="modal fade" id={modalID} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id='testID'>Edit {props.data.Name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input id={pathID} class="form-control mt-2" value={props.data.Path} title="Path"></input>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={[handleDelete, props.data]}>Delete</button>
              <button type="button" class="btn btn-primary" onClick={[handleSave, props.data]}>Save</button>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default MenuEdit;