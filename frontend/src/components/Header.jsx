import { Show } from "solid-js";
import { currentBlog, currentConfig, setCurrentBlog } from "../functions/exports";
import Config from "./Config";
import ConfigAbout from "./ConfigAbout";
import ConfigSettings from "./ConfigSettings";
import ConfigTheme from "./ConfigTheme";
import WorkSpaces from "./WorkSpaces";
import { nowWorkSpace } from "../functions/workspaces";

function Header() {

  const handleBlog = () => {
    setCurrentBlog(!currentBlog());
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div class="col-md mt-4 mx-1">
    <div class='d-flex justify-content-between'>
      <div class='d-flex justify-content-left'>
        <WorkSpaces></WorkSpaces>
        <div>
          <span onClick={[handleReload]} class="shade-hover rounded-2 p-2 mx-5" title="Reload">DiaryMD</span>
          <Show
            when={currentConfig().BlogPath != ''}
          >
            <Show
              when={currentBlog()}
              fallback={
                <span onClick={handleBlog} class="shade-hover rounded-2 p-2 mx-5">Blog</span>
              }
            >
              <span onClick={handleBlog} class="shade-hover rounded-2 p-2 mx-5">Edit</span>
            </Show>
          </Show>
        </div>
      </div>
      <Show
        when={nowWorkSpace() != null}
      >
        <span class="shade-hover rounded-2 p-2">{nowWorkSpace().Name}</span>
      </Show>
      <Config></Config>
    </div>
    <ConfigSettings></ConfigSettings>
    <ConfigTheme></ConfigTheme>
    <ConfigAbout></ConfigAbout>
    </div>
  );
}

export default Header;