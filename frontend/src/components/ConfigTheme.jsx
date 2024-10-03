import { currentConfig, currentTheme, setCurrentTheme } from "../functions/exports";

function ConfigTheme() {

  const handleSave = async () => {
    const menu = document.getElementById("menu-color").value;
    const edit = document.getElementById("edit-color").value;
    const back = document.getElementById("back-color").value;
    const col = document.getElementById("color").value;
    setCurrentTheme({
      Theme: 'new',
      Color: col,
      Menu: menu,
      Background: back,
      Editor: edit,
    });

    document.documentElement.style.setProperty('--c-main', currentTheme().Background);
    document.documentElement.style.setProperty('--c-main-light', currentTheme().Editor);
    document.documentElement.style.setProperty('--c-main-dark', currentTheme().Menu);
    document.documentElement.style.setProperty('--bs-primary', currentTheme().Menu);
    document.documentElement.setAttribute('data-bs-theme', currentTheme().Color);

    console.log("Theme:", menu, edit, back);
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
                  <td><input id="theme" class="form-control" value={currentConfig().Theme}></input></td>
                </tr>
                <tr>
                  <td>Color mode</td>
                  <td>
                    <select id="color" class="form-select">
                      <option value={currentConfig().Color}>{currentConfig().Color}</option>
                      <Show
                        when={currentConfig().Color === "light"}
                        fallback={<option value="light">light</option>}
                      ><option value="dark">dark</option></Show>
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