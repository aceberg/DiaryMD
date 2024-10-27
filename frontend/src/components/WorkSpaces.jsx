import { initWorkSpace } from "../functions/init";
import { allWorkSpaces, setNowWorkSpace } from "../functions/workspaces";

function WorkSpaces() {

  const handleWorkSpace = (wsp) => {
    setNowWorkSpace(wsp);
    initWorkSpace();
  };

  return (
    <div class="dropdown">
      
      <i class="bi bi-inboxes shade-hover rounded-2 p-2 dropdown-toggle" data-bs-toggle="dropdown" title="WorkSpaces" style="font-size:25px"></i> 
      
      <ul class="dropdown-menu">
        <li><a href="#" class="dropdown-item" onClick={[handleWorkSpace, null]}>Default</a></li>
        <li><hr class="dropdown-divider"></hr></li>
        <For each={allWorkSpaces()}>{(wsp) =>
          <li><a href="#" class="dropdown-item" onClick={[handleWorkSpace, wsp]}>
            <i class="bi bi-inbox-fill me-3" style={{ color: wsp.Colors.Menu }}></i>
            {wsp.Name}
          </a></li>
        }</For>
      </ul>
    </div>
  );
}

export default WorkSpaces;