import { currentFile } from "./exports";

function PathBtn() {

  return (
    <div class='file-place'>
      <button class="btn btn-outline-primary" title={currentFile().Path}>{currentFile().Name}</button>
    </div>
  );
}

export default PathBtn;