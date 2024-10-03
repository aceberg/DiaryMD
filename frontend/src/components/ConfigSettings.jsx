import { apiSaveConfig } from "../functions/api";
import { currentConfig, setCurrentConfig } from "../functions/exports";

function ConfigSettings() {

  const handleSave = async () => {
    const path = document.getElementById("path").value;

    setCurrentConfig({RepoPath: path,});
    apiSaveConfig(path);

    console.log("Path:", path);
  };

  return (
    <>
      {/* MODAL */}
    <div class="modal modal-lg fade" id="configModal" tabindex="-1" aria-labelledby="configModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Config</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-floating">
              <input class="form-control mt-2" id="path" value={currentConfig().RepoPath} placeholder="Path to repo"></input>
              <label for="path">Path to repo</label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ConfigSettings;