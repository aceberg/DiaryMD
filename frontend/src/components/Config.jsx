import { currentConfig } from "./exports";

function Config() {

  const handleSave = async () => {
    const path = document.getElementById("path").value;
    console.log("Path:", path);
  };

  return (
    <div>
      <div class="form-floating">
        <input id="theme" class="form-control mt-2" placeholder="Theme" value={currentConfig().Theme}></input>
        <label for="theme">Theme</label>
      </div>
      <div class="form-floating">
        <input id="color" class="form-control mt-2" placeholder="Color" value={currentConfig().Color}></input>
        <label for="theme">Theme</label>
      </div>
      <div class="form-floating">
        <input class="form-control mt-2" id="path" value={currentConfig().RepoPath} placeholder="Path to repo"></input>
        <label for="path">Path to repo</label>
      </div>
      <button class="btn btn-primary mt-2" onClick={handleSave}>Save</button>
    </div>
  );
}

export default Config;