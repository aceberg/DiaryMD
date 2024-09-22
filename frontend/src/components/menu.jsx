import { createSignal, For } from 'solid-js';
import HomeNew from './homenew';

function Menu() {

  const [dirs, setDirs] = createSignal([
    { id: 1, name: 'Keyboard Cat' },
    { id: 2, name: 'Maru' },
    { id: 3, name: 'Henri The Existential Cat' }
  ]);
  const [files, setFiles] = createSignal([
    { id: 4, name: 'File1' },
    { id: 5, name: 'File2' },
    { id: 6, name: 'TempFile' }
  ]);

  const handleClick = (data) => {
    console.log("Menu Click", data);
  };
  
  return (
    <div class="menu-card">
      <HomeNew></HomeNew>
      <hr></hr>
      <p class='dir mx-3' onClick={[handleClick, 0]}>/</p>
      <ul id="menuUL">
        <For each={dirs()}>{(dir, i) =>
          <li class="dir" onClick={[handleClick, dir.id]}>{dir.name}</li>
        }</For>
        <For each={files()}>{(file, i) =>
          <li class="file" onClick={[handleClick, file.id]}>{file.name}</li>
        }</For>
      </ul>    
    </div>
  );
}

export default Menu;