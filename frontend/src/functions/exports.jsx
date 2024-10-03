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

const sandTheme = {
    Theme: 'sand',
    Color: 'light',
    Menu: '#dfb377',
    Background: '#f8e6cc',
    Editor: '#faeddc',
};
const lakeTheme = {
    Theme: 'lake',
    Color: 'light',
    Menu: '#3fa0a7',
    Background: '#89aeb1',
    Editor: '#babdb6',
};
const darkTheme = {
    Theme: 'dark',
    Color: 'dark',
    Menu: '#2e3436',
    Background: '#2e3436',
    Editor: '#888a85',
};

export const [currentFile, setCurrentFile] = createSignal(emptyFile);

export const [currentDir, setCurrentDir] = createSignal(emptyDir);

export const [currentMenu, setCurrentMenu] = createSignal([]);

export const [currentConfig, setCurrentConfig] = createSignal(emptyConf);

export const [currentTheme, setCurrentTheme] = createSignal(sandTheme);

export function applyCurrentTheme() {

    if (currentTheme().Theme === "sand") {
        setCurrentTheme(sandTheme);
    }
    if (currentTheme().Theme === "lake") {
        setCurrentTheme(lakeTheme);
    }
    if (currentTheme().Theme === "dark") {
        setCurrentTheme(darkTheme);
    }

    document.documentElement.style.setProperty('--c-main', currentTheme().Background);
    document.documentElement.style.setProperty('--c-main-light', currentTheme().Editor);
    document.documentElement.style.setProperty('--c-main-dark', currentTheme().Menu);
    document.documentElement.setAttribute('data-bs-theme', currentTheme().Color);
};