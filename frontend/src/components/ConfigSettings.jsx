import { apiSaveConfig } from "../functions/api";
import { currentConfig, setCurrentConfig } from "../functions/exports";

function ConfigSettings() {

  const handleSave = async () => {
    const path = document.getElementById("path").value;
    const blog = document.getElementById("blog").value;

    setCurrentConfig({RepoPath: path,BlogPath: blog});
    apiSaveConfig({RepoPath: path,BlogPath: blog});

    console.log("Path:", path);
    console.log("Blog:", blog);
  };

  return (
    <>
      {/* MODAL */}
    <div class="modal modal-lg fade" id="configModal" tabindex="-1" aria-labelledby="configModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Config</h1>
            <button type="button" class="btn-close shade-hover" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>Path to repo</td>
                <td>
                  <input class="form-control mt-2" id="path" value={currentConfig().RepoPath} placeholder="Path to repo"></input>
                </td>
              </tr>
              <tr>
                <td>Path to blog</td>
                <td>
                  <input class="form-control mt-2" id="blog" value={currentConfig().BlogPath} placeholder="Path to blog"></input>
                </td>
              </tr>
            </tbody>
          </table>
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