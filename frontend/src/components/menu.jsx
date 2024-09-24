import { createResource, createSignal, For, Show } from 'solid-js';
import HomeNew from './homenew';
import { setEditorValue } from './editor';
import { getDirsFromAPI, getDirByID, getFileByID } from './api';


function Menu() {

  const [dirID, setDirID] = createSignal(0);
  const [dirsAndFiles] = createResource(dirID, getDirsFromAPI);

  const [lastDir, setLastDir] = createSignal([{ID: 0, Name: '/'}]);

  const handleFile = async (editFile) => {
    const file = await getFileByID(editFile.ID);
    setEditorValue(file, editFile.Path);
  };

  const handleDir = async (newDir) => {
    setDirID(newDir.ID);
    const l = await getDirByID(newDir.ID);
    setLastDir([{ID: l.Parent, Name: l.Name}]);
  };
  
  return (
    <div>
      <div class='file-place'>
        <select class='form-select'>
          <option>Select repo</option>
        </select>
      </div>
      <div class='menu-head'>
        <HomeNew onCommand={handleDir}></HomeNew>
      </div>
      <div class="menu-card">
        <For each={lastDir()}>{(ld) =>
          <p class='dir mx-3 mt-3' onClick={[handleDir, ld]}>{ld.Name}</p>
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
      </div>
    </div>
  );
}

export default Menu;