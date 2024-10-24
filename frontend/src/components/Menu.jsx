import { For, Show } from 'solid-js';
import { setEditorValue } from './Editor';
import { getFileByPath, getDirList, getDirInfo } from '../functions/api';
import { currentDir, currentMenu, setCurrentDir, setCurrentFile, setCurrentMenu } from '../functions/exports';
import MenuEdit from './MenuEdit';

function Menu() {

  const handleFile = async (file) => {
    const fileText = await getFileByPath(file.Path);
    setCurrentFile(file);
    setEditorValue(fileText);
  };

  const handleDir = async (dir) => {
    setCurrentMenu(await getDirList(dir.Path));
    const cd = await getDirInfo(dir.Path);
    setCurrentDir(cd);
  };
  
  return (
    <div>
      <For each={[currentDir()]}>{(ld) =>
        <p class='dir mx-3 mt-3' onClick={[handleDir, {Path: ld.UpPath}]}>
          <i class="bi bi-folder"></i>   {ld.Name}
        </p>
      }</For>

      <ul id="menuUL">
      {currentMenu() && currentMenu().length > 0 ? (
        <For each={currentMenu()}>{(dir) =>
          <Show
            when={dir.IsDir}
            fallback={<li class="dir d-flex flex-wrap">
              <div class='flex-grow-1' onClick={[handleFile, dir]}>
                <i class="bi bi-file-earmark-text"></i>   {dir.Name}
              </div>
              <MenuEdit data={dir}></MenuEdit>
            </li>}
          >
            <li class="dir d-flex flex-wrap">
            <div class='flex-grow-1' onClick={[handleDir, dir]}>
              <i class="bi bi-folder"></i>   {dir.Name}
            </div>
              <MenuEdit data={dir}></MenuEdit>
            </li>
          </Show>
        }</For>
      ) : (
        <p>...</p>
      )}
      </ul>    
    </div>
  );
}

export default Menu;