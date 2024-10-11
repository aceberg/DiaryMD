import { createSignal } from "solid-js";

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
    document.documentElement.style.setProperty('--c-trans-light', currentTheme().Font+'20');
};