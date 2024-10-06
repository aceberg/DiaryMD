import { currentBlog, setCurrentBlog } from "../functions/exports";
import Config from "./Config";
import ConfigAbout from "./ConfigAbout";
import ConfigSettings from "./ConfigSettings";
import ConfigTheme from "./ConfigTheme";

function Header() {

  const handleReload = () => {
    window.location.reload();
  };

  const handleBlog = () => {
    setCurrentBlog(!currentBlog());
  };

  return (
    <div class="col-md mt-4 mx-1">
    <div class='d-flex justify-content-between'>
      <div>
        <span onClick={handleReload} class="shade-hover">DiaryMD</span>
        {/* <span onClick={handleBlog} class="shade-hover mx-5">Blog</span> */}
      </div>
      <Config></Config>
    </div>
    <ConfigSettings></ConfigSettings>
    <ConfigTheme></ConfigTheme>
    <ConfigAbout></ConfigAbout>
    </div>
  );
}

export default Header;