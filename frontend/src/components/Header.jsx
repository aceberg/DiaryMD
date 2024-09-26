import logo from "../assets/diary1.png";
import gear from "../assets/gear.svg";
import "bootstrap/js/dist/offcanvas";
import Config from "./Config";

function Header() {
  return (
    <div class='d-flex justify-content-between mt-4 mx-4'>
      <a href="/">
        <img src={logo} style="height: 30px;"></img>
      </a>
      <img src={gear} class="shade-hover" style="height: 25px;" title="Settings" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></img>

      {/* CONFIG */}
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Config</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <Config></Config>
        </div>
      </div>
    </div>
  );
}

export default Header;