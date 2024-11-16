import { setEditorValue } from "../components/Editor";
import { getFileByPath } from "./api";
import { currentTabList, emptyFile, setCurrentFile, setCurrentTabList } from "./exports";
import { localSaveTabsFile } from "./local";


export const openFileAndTab = async (file) => {
  let fileText = '';

  if (file.Name !== '') {
    fileText = await getFileByPath(file.Path);
  }
  setCurrentFile(file);
  setEditorValue(fileText);

  updTabList(file);
};

export const updTabList = (curFile) => {
  let tabs = currentTabList();

  if (curFile.Name == '') {
    setCurrentFile(emptyFile);
    tabs = removeFromArray(tabs, curFile);
  } else {
    if (!inArray(tabs, curFile)) {
      tabs.push(curFile);
    }
  }
  localSaveTabsFile(tabs, curFile);
  setCurrentTabList([]); // Needed for SolidJS to update component
  
  setCurrentTabList(tabs);

  return tabs;
};

function inArray(tabs, file) {
  for (let t of tabs) {
    if (t.Path == file.Path) {
      return true;
    }
  }
  return false;
};
  
function removeFromArray(tabs, file) {
  let newTabs = [];

  for (let t of tabs) {
    if (t.Path !== file.Path) {
      newTabs.push(t);
    }
  }
  return newTabs;
};