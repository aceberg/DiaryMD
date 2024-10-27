import { editWorkSpace, nowWorkSpace } from "./workspaces";

export function localSaveTabsFile(tabs, file) {

    let nowWSP = nowWorkSpace();
    if (nowWSP != null) {
        nowWSP.Tabs = tabs;
        nowWSP.CurFile = file;

        editWorkSpace(nowWSP.Name, nowWSP);

    } else {
        localStorage.setItem("tabs", JSON.stringify(tabs));
        localStorage.setItem("currentFile", JSON.stringify(file));
    }
}

export function localGetTabs() {

    let tabs = [];
    let nowWSP = nowWorkSpace();
    if (nowWSP != null) {
        tabs = nowWSP.Tabs;
    } else {
        tabs = JSON.parse(localStorage.getItem("tabs"));
    }

    if (tabs == null) {
        return [];
    }

    return tabs;
}

export function localGetFile() {

    let file = {};
    let nowWSP = nowWorkSpace();
    
    if (nowWSP != null) {
        file = nowWSP.CurFile;
    } else {
        file = JSON.parse(localStorage.getItem("currentFile"));
    }

    if (file == null) {
        return {};
    }

    return file;
}