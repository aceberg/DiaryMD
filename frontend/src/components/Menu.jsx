import { createResource, createSignal, For, Show } from 'solid-js';
import { setEditorValue } from './Editor';
import { getDirsFromAPI, getDirByID, getFileByID } from './api';
import { currentDir, setCurrentDir, setCurrentFile } from './exports';
import MenuEdit from './MenuEdit';

export const [menuDirID, setMenuDirID] = createSignal(0);

function Menu() {

  const [dirsAndFiles] = createResource(menuDirID, getDirsFromAPI);
  
  const handleFile = async (file) => {
    const fileText = await getFileByID(file.ID);
    setCurrentFile(file);
    setEditorValue(fileText);
  };

  const handleDir = async (dir) => {
    // console.log('DIR:', dir);
    setMenuDirID(dir.ID);
    const cd = await getDirByID(dir.ID);
    setCurrentDir(cd);
  };
  
  return (
    <div>
      <For each={[currentDir()]}>{(ld) =>
        <p class='dir mx-3 mt-3' onClick={[handleDir, {ID: ld.Parent}]}>{ld.Name}</p>
      }</For>

      <ul id="menuUL">
      {dirsAndFiles() && dirsAndFiles().length > 0 ? (
        <For each={dirsAndFiles()}>{(dir) =>
          <Show
            when={dir.IsDir}
            fallback={<li class="file d-flex flex-wrap">
              <div class='flex-grow-1' onClick={[handleFile, dir]}>{dir.Name}</div>
              <MenuEdit data={dir}></MenuEdit>
            </li>}
          >
            <li class="dir d-flex flex-wrap">
            <div class='flex-grow-1' onClick={[handleDir, dir]}>{dir.Name}</div>
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