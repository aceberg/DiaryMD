import { createSignal } from "solid-js";

export const emptyFile = {
    ID: 0,
    Name: '',
    Path: '',
    IsDir: false,
    Parent: 0,
};

export const emptyDir = {
    ID: 0,
    Name: '',
    Path: '',
    IsDir: true,
    Parent: 0,
};

const emptyConf = {
    RepoPath: '',
};

export const [currentFile, setCurrentFile] = createSignal(emptyFile);

export const [currentDir, setCurrentDir] = createSignal(emptyDir);

export const [currentMenu, setCurrentMenu] = createSignal([]);

export const [currentConfig, setCurrentConfig] = createSignal(emptyConf);