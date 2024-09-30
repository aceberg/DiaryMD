import gear from "../assets/gear.svg";
import "bootstrap/js/dist/modal";

function Config() {

  return (
    <>
      <div class="dropdown">
        
        <img src={gear} class="shade-hover dropdown-toggle" data-bs-toggle="dropdown" style="height: 25px;" title="Settings"></img> 
        
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#themeModal">Theme</a></li>
          <li><a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#configModal">Settings</a></li>
        </ul>
      </div>
    </>
  );
}

export default Config;