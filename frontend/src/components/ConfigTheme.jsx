import { applyCurrentTheme, currentTheme, setCurrentTheme } from "../functions/themes";
import { saveThemeForWsp } from "../functions/workspaces";

function ConfigTheme() {

  const handleSave = async () => {
    const theme = document.getElementById("theme").value;
    const menu = document.getElementById("menu-color").value;
    const edit = document.getElementById("edit-color").value;
    const back = document.getElementById("back-color").value;
    const font = document.getElementById("font-color").value;
    const out = document.getElementById("out-color").value;

    setCurrentTheme({
      Theme: theme,
      Font: font,
      Menu: menu,
      Back: back,
      Edit: edit,
      Outline: out,
    });

    applyCurrentTheme();
    // apiSaveTheme(currentTheme());
    saveThemeForWsp(currentTheme());
  };

  return (
    <>
      {/* MODAL */}
    <div class="modal fade" id="themeModal" tabindex="-1" aria-labelledby="configModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Theme</h1>
            <button type="button" class="btn-close shade-hover" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>Theme</td>
                  <td>
                    <select id="theme" class="form-select">
                      <option value={currentTheme().Theme} selected disabled>{currentTheme().Theme}</option>
                      <option value="dark">dark</option>
                      <option value="grey">grey</option>
                      <option value="lake">lake</option>
                      <option value="night">night</option>
                      <option value="sand">sand</option>
                      <option value="CUSTOM">CUSTOM</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">To change colors set Theme to CUSTOM</td>
                </tr>
                <tr>
                  <td>Menu</td>
                  <td><input id="menu-color" type="color" class="form-control" value={currentTheme().Menu}></input></td>
                </tr>
                <tr>
                  <td>Editor</td>
                  <td><input id="edit-color" type="color" class="form-control" value={currentTheme().Edit}></input></td>
                </tr>
                <tr>
                  <td>Back</td>
                  <td><input id="back-color" type="color" class="form-control" value={currentTheme().Back}></input></td>
                </tr>
                <tr>
                  <td>Font</td>
                  <td><input id="font-color" type="color" class="form-control" value={currentTheme().Font}></input></td>
                </tr>
                <tr>
                  <td>Outline</td>
                  <td><input id="out-color" type="color" class="form-control" value={currentTheme().Outline}></input></td>
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