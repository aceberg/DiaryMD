import { setEditorValue } from "../components/Editor";
import { getConfig, getDirInfo, getDirList, getFileByPath, getWorkSpaces } from "./api";
import { currentConfig, currentFile, setCurrentConfig, setCurrentDir, setCurrentFile, setCurrentMenu, setCurrentTabList } from "./exports";
import { localGetFile, localGetTabs } from "./local";
import { applyCurrentTheme, setCurrentTheme } from "./themes";
import { nowWorkSpace, saveWspToFile, setAllWorkSpaces } from "./workspaces";

export async function initWorkSpace() {

    const wsp = nowWorkSpace();

    if (wsp == null) {
        await initDefault();
    } else {
        await initWsp(wsp);
    }
    
    // setCurrentTabList needs to be BEFORE setCurrentFile for correct Tabs work
    setCurrentTabList(localGetTabs());  
    setCurrentFile(localGetFile());

    setCurrentDir(await getDirInfo(currentConfig().RepoPath));
    setCurrentMenu(await getDirList(currentConfig().RepoPath));
    setEditorValue(await getFileByPath(currentFile().Path));
}

async function initDefault() {

    setCurrentConfig(await getConfig());
    setAllWorkSpaces(await getWorkSpaces());
}

async function initWsp(wsp) {

    setCurrentTheme(wsp.Colors);
    applyCurrentTheme();
    
    const conf = {
        RepoPath: wsp.RepoPath,
        BlogPath: wsp.BlogPath,
        PageStep: wsp.PageStep,
    };
    setCurrentConfig(conf);

    saveWspToFile();
}