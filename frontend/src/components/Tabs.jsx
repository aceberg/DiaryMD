import { createResource } from "solid-js";
import { getFileByID } from '../functions/api';
import { currentFile, setCurrentFile, emptyFile, setCurrentTabList, currentTabList } from "../functions/exports";
import { setEditorValue } from './Editor';

const updTabList = (curFile) => {
  let tabs = currentTabList();
  if ((curFile.Path !== '') && (!inArray(tabs, curFile))) {
    tabs.push(curFile);
    setCurrentTabList(tabs);
  }

  console.log("TABS", tabs);

  return tabs;
};

function Tabs() {

  const [tabList] = createResource(currentFile, updTabList);

  const handleClose = (data) => {
    console.log("Close", data);
    setCurrentFile(emptyFile);
    setEditorValue('');
  };

  const handleFile = async (file) => {
    console.log("File", file);
    const fileText = await getFileByID(file.ID);
    setCurrentFile(file);
    setEditorValue(fileText);
  };

  // const handlePin = (tab) => {
  //   console.log("Pin", tab);
  //   allTabs = currentTabList();
  //   // setCurrentTabList();
  // };

  return (
    <div class='file-place'>
      {/* <button class="tab rounded-top" title={currentFile().Path}>
        <span class="mx-3">{currentFile().Name}</span>
        <i class="bi bi-x tab-close" title='Close' onClick={[handleClose, '']}></i>
      </button> */}
      <For each={[currentFile()]}>{(f) =>
        <For each={tabList()}>{(tab) =>
        <button class="tab rounded-top" title={tab.Path}>
          {/* <i class="bi bi-pin shade-hover" title="Pin" onClick={[handlePin, tab]}></i> */}
          <span class="mx-3" name={f.Name} onClick={[handleFile, tab]}>{tab.Name}</span>
          <i class="bi bi-x tab-close" title='Close' onClick={[handleClose, '']}></i>
        </button>
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