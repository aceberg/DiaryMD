import { apiSaveTheme } from "../functions/api";
import { applyCurrentTheme, currentConfig, currentTheme, setCurrentTheme } from "../functions/exports";

function ConfigTheme() {

  console.log("Theme before:", currentTheme());

  const handleSave = async () => {
    const theme = document.getElementById("theme").value;
    const menu = document.getElementById("menu-color").value;
    const edit = document.getElementById("edit-color").value;
    const back = document.getElementById("back-color").value;

    setCurrentTheme({
      Theme: theme,
      Color: "light",
      Menu: menu,
      Background: back,
      Editor: edit,
    });

    applyCurrentTheme();
    apiSaveTheme(currentTheme());

    console.log("Theme:", currentTheme());
  };

  return (
    <>
      {/* MODAL */}
    <div class="modal modal-lg fade" id="themeModal" tabindex="-1" aria-labelledby="configModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Theme</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>Theme</td>
                  <td>
                    <select id="theme" class="form-select">
                      <option value={currentConfig().Theme} selected>{currentConfig().Theme}</option>
                      <option value="dark">dark</option>
                      <option value="lake">lake</option>
                      <option value="sand">sand</option>
                      <option value="CUSTOM">CUSTOM</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Menu</td>
                  <td><input id="menu-color" type="color" class="form-control" value={currentTheme().Menu}></input></td>
                </tr>
                <tr>
                  <td>Editor</td>
                  <td><input id="edit-color" type="color" class="form-control" value={currentTheme().Editor}></input></td>
                </tr>
                <tr>
                  <td>Back</td>
                  <td><input id="back-color" type="color" class="form-control" value={currentTheme().Background}></input></td>
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

export default ConfigTheme;