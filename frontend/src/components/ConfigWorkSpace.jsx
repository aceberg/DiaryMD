import { addWorkSpace, allWorkSpaces, editWorkSpace } from "../functions/workspaces";

function ConfigWorkSpace() {

  const handleAdd = () => {
    const name = document.getElementById("addwsp").value;
    if (name != '') {
      addWorkSpace(name);
    }
    console.log("ADD:", name);
  };

  const handleDel = (name) => {
    editWorkSpace(name, null);
    console.log("DEL:", name);
  };

  return (
    <>
      {/* MODAL */}
    <div class="modal fade" id="workModal" tabindex="-1" aria-labelledby="workModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">WorkSpaces</h1>
            <button type="button" class="btn-close shade-hover" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <For each={allWorkSpaces()}>{(wsp) =>
            <div class='d-flex justify-content-between shade-hover px-3'>
              <div>
                <i class="bi bi-inbox-fill me-3" style={{ color: wsp.Colors.Menu }}></i>{wsp.Name}
              </div>
              <i class="bi bi-x shade-hover rounded-2 p-1" title='Delete' onClick={[handleDel, wsp.Name]}></i>
            </div>
            }</For>
            <div class="input-group">
              <input class="form-control mt-2" id="addwsp" placeholder="New WorkSpace"></input>
              <button class="btn btn-primary mt-2" onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ConfigWorkSpace;