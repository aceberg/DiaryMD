import { createResource } from "solid-js";
import { getFileByPath } from '../functions/api';
import { currentFile, setCurrentFile, emptyFile, setCurrentTabList, currentTabList } from "../functions/exports";
import { setEditorValue } from './Editor';
import { Show } from "solid-js";
import { localSaveTabsFile } from "../functions/local";

const updTabList = (curFile) => {
  let tabs = currentTabList();

  if (curFile.ID == 0) {
    // console.log("Remove from Tabs", curFile);
    tabs = removeFromArray(tabs, curFile);
    setCurrentTabList(tabs);
  } else {
    if (!inArray(tabs, curFile)) {
      tabs.push(curFile);
      setCurrentTabList(tabs);
    }
  }
  localSaveTabsFile(tabs, curFile);
  // console.log("TABS", tabs);

  return tabs;
};

function Tabs() {

  const [tabList] = createResource(currentFile, updTabList);

  const handleClose = async () => {
    // console.log("Close");

    let file = emptyFile;
    file.Path = currentFile().Path;
    const tabs = await updTabList(file);
    if (tabs.length > 0) {
      file = tabs[0];
    } 
    handleFile(file);
  };

  const handleFile = async (file) => {
    // console.log("File", file);
    let fileText = '';
    if (file.ID !== 0) {
      fileText = await getFileByPath(file.Path);
    }
    setCurrentFile(file);
    setEditorValue(fileText);
  };

  return (
    <div class='file-place'>
      <For each={[currentFile()]}>{(f) =>
        <For each={tabList()}>{(tab) =>
          <Show
            when={f.Path == tab.Path}
            fallback={
              <button class="tab rounded-top" title={tab.Path}>
                <span class="mx-3" onClick={[handleFile, tab]}>{tab.Name}</span>
              </button>
            }
          >
            <button class="tab-main rounded-top" title={tab.Path}>
              {/* <Show
                when={f.Unsaved}
                ><p>U</p></Show> */}
              <span class="mx-3">{tab.Name}</span>
              <i class="bi bi-x shade-hover rounded-2 p-1" title='Close' onClick={handleClose}></i>
            </button>
          </Show>
        }</For>
      }</For>
    </div>
  );
}

export default Tabs;

function inArray(tabs, file) {
  for (let t of tabs) {
    if (t.Path == file.Path) {
      return true;
    }
  }
  return false;
}

function removeFromArray(tabs, file) {
  let newTabs = [];

  for (let t of tabs) {
    if (t.Path !== file.Path) {
      newTabs.push(t);
    }
  }
  return newTabs;
}