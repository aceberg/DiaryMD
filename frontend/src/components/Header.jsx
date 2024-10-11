import { Show } from "solid-js";
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
        <span onClick={handleReload} class="shade-hover rounded-2 p-2">DiaryMD</span>
        <Show
          when={currentBlog()}
          fallback={
            <span onClick={handleBlog} class="shade-hover rounded-2 p-2 mx-5">Blog</span>
          }
        >
          <span onClick={handleBlog} class="shade-hover rounded-2 p-2 mx-5">Edit</span>
        </Show>
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