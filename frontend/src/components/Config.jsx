import "bootstrap/js/dist/modal";

function Config() {

  return (
    <>
      <div class="dropdown">
        
        <i class="bi bi-gear shade-hover dropdown-toggle" data-bs-toggle="dropdown" title="Settings"></i> 
        
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#themeModal">Theme</a></li>
          <li><a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#configModal">Settings</a></li>
        </ul>
      </div>
    </>
  );
}

export default Config;