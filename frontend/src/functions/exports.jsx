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
    Font: '#4d2700',
    Menu: '#dfb377',
    Back: '#f8e6cc',
    Edit: '#faeddc',
    Outline: '#babdb6',
};
const lakeTheme = {
    Theme: 'lake',
    Font: '#313136',
    Menu: '#3fa0a7',
    Back: '#89aeb1',
    Edit: '#babdb6',
    Outline: '#616161',
};
const darkTheme = {
    Theme: 'dark',
    Font: '#d3d7cf',
    Menu: '#2e3436',
    Back: '#2e3436',
    Edit: '#2e3436',
    Outline: '#616161',
};
const nightTheme = {
    Theme: 'night',
    Font: '#babdb6',
    Menu: '#03121f',
    Back: '#03121f',
    Edit: '#0f2c45',
    Outline: '#616161',
};

export const [currentFile, setCurrentFile] = createSignal(emptyFile);

export const [currentDir, setCurrentDir] = createSignal(emptyDir);

export const [currentMenu, setCurrentMenu] = createSignal([]);

export const [currentConfig, setCurrentConfig] = createSignal(emptyConf);

export const [currentTheme, setCurrentTheme] = createSignal(sandTheme);

export function applyCurrentTheme() {

    switch (currentTheme().Theme) {
        case 'dark':
            setCurrentTheme(darkTheme);
            break;
        case 'lake':
            setCurrentTheme(lakeTheme);
            break;
        case 'night':
            setCurrentTheme(nightTheme);
            break;
        case 'sand':
            setCurrentTheme(sandTheme);
            break;
    }

    document.documentElement.style.setProperty('--c-main', currentTheme().Back);
    document.documentElement.style.setProperty('--c-main-light', currentTheme().Edit);
    document.documentElement.style.setProperty('--c-main-dark', currentTheme().Menu);
    document.documentElement.style.setProperty('--c-main-font', currentTheme().Font);
    document.documentElement.style.setProperty('--c-main-out', currentTheme().Outline);

};

export const [currentBlog, setCurrentBlog] = createSignal(false);