import { createResource, createSignal, For, Show } from 'solid-js';
import { setEditorValue } from './Editor';
import { getDirsFromAPI, getDirByID, getFileByID } from './api';
import { currentDir, setCurrentDir, setCurrentFile } from './exports';

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
    <>
      <For each={[currentDir()]}>{(ld) =>
        <p class='dir mx-3 mt-3' onClick={[handleDir, {ID: ld.Parent}]}>{ld.Name}</p>
      }</For>

      <ul id="menuUL">
      {dirsAndFiles() && dirsAndFiles().length > 0 ? (
        <For each={dirsAndFiles()}>{(dir) =>
          <Show
            when={dir.IsDir}
            fallback={<li class="file" onClick={[handleFile, dir]}>{dir.Name}</li>}
          >
            <li class="dir" onClick={[handleDir, dir]}>{dir.Name}</li>
          </Show>
        }</For>
      ) : (
        <p>...</p>
      )}
      </ul>    
    </>
  );
}

export default Menu;