import "bootstrap/js/dist/modal";
import menu from '../assets/menu.svg';

function MenuEdit(props) {
  
  const handleEdit = (dir) => {
    console.log('DIR:', dir);
  };

  return (
    <>
      <img src={menu} onClick={[handleEdit, props.data]} data-bs-toggle="modal" data-bs-target="#exampleModal" class="shade-hover float-end mx-2 p-1"></img>

      {/* MODAL */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit {props.data.Name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input class="form-control" value={props.data.Name} title="Name"></input>
              <input class="form-control mt-2" value={props.data.Path} title="Path"></input>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuEdit;