import { setEditorValue } from "../components/Editor";
import { getDirInfo, getDirList, getFileByPath } from "./api";
import { currentFile, currentTabList, emptyFile, setCurrentDir, setCurrentFile, setCurrentMenu, setCurrentTabList } from "./exports";
import { localSaveTabsFile } from "./local";


export const openFileAndTab = async (file) => {
  let fileText = '';

  if (file.Name !== '') {
    fileText = await getFileByPath(file.Path);
  }
  setCurrentFile(file);
  setEditorValue(fileText);
  
  setCurrentDir(await getDirInfo(file.UpPath));
  setCurrentMenu(await getDirList(file.UpPath));

  updTabList(file);
};

export const closeFileAndTab = async () => {
  let file = emptyFile;

  file.Path = currentFile().Path;
  const tabs = await updTabList(file);

  if (tabs.length > 0) {
    file = tabs[0];
  } 
  openFileAndTab(file);
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