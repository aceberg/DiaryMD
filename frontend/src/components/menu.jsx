import { createResource, createSignal, For, Show } from 'solid-js';
import HomeNew from './homenew';
import { setEditorValue } from './editor';
import { getDirsFromAPI } from './api';

function Menu() {

  const [dirID, setDirID] = createSignal(0);
  const [dirsAndFiles] = createResource(dirID, getDirsFromAPI);

  const handleClick = (data) => {
    console.log("Menu Click", data);
    setEditorValue("Menu click "+data);
  };

  const handleDir = (data) => {
    console.log("Menu Dir", data);
    setDirID(data);
  };
  
  return (
    <div class="menu-card">
      <HomeNew></HomeNew>
      <hr></hr>
      <p class='dir mx-3' onClick={[handleDir, 0]}>/</p>
      <ul id="menuUL">
        <For each={dirsAndFiles()}>{(dir) =>
          <Show
            when={dir.IsDir}
            fallback={<li class="file" onClick={[handleClick, dir.ID]}>{dir.Name}</li>}
          >
            <li class="dir" onClick={[handleDir, dir.ID]}>{dir.Name}</li>
          </Show>
        }</For>
      </ul>    
    </div>
  );
}

export default Menu;