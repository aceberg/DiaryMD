
export function localSaveTabsFile(tabs, file) {

    localStorage.setItem("tabs", JSON.stringify(tabs));
    localStorage.setItem("currentFile", JSON.stringify(file));
}

export function localGetTabs() {

    const tabs = JSON.parse(localStorage.getItem("tabs"));

    if (tabs == null) {
        return [];
    }

    return tabs;
}

export function localGetFile() {

    const file = JSON.parse(localStorage.getItem("currentFile"));

    if (file == null) {
        return {};
    }

    return file;
}