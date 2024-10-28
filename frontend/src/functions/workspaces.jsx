import { createSignal } from "solid-js";
import { apiSaveConfig, apiSaveTheme, apiSaveWorkSpaces } from "./api";
import { currentTheme } from "./themes";
import { currentConfig } from "./exports";

export const [allWorkSpaces, setAllWorkSpaces] = createSignal([]);
export const [nowWorkSpace, setNowWorkSpace] = createSignal(null);

let wspChanged = false;

export function saveThemeForWsp(theme) {
    let wsp = nowWorkSpace();

    if (wsp == null) {
        apiSaveTheme(theme);
    } else {
        wsp.Colors = theme;
        editWorkSpace(wsp.Name, wsp);
    }
}

export function saveConfForWsp(conf) {
    let wsp = nowWorkSpace();

    if (wsp == null) {
        apiSaveConfig(conf);
    } else {
        wsp.RepoPath = conf.RepoPath;
        wsp.BlogPath = conf.BlogPath;
        wsp.PageStep = conf.PageStep;
        editWorkSpace(wsp.Name, wsp);
    }
}

export function editWorkSpace(name, wsp) {

    const all = allWorkSpaces();
    let newAll = [];

    for (let i in all) {
        if (all[i].Name != name) {
            newAll.push(all[i]);
        } 
    }
    if (wsp != null) {
        newAll.push(wsp);
    }
    newAll.sort((a, b) => a.Name < b.Name ? -1 : 1);

    setAllWorkSpaces(newAll);
    wspChanged = true;
}

export function saveWspToFile() {

    const interval = setInterval(function () {
        if (wspChanged) {
            wspChanged = false;
            const wsps = allWorkSpaces();
            apiSaveWorkSpaces(wsps);
        }
    }, 2000);
}

export function addWorkSpace(name) {
    let wsp = {};
    wsp.Name = name;
    wsp.Colors = currentTheme();
    wsp.RepoPath = currentConfig().RepoPath;
    wsp.BlogPath = '';
    wsp.PageStep = 0;
    
    editWorkSpace(name, wsp);
}