import { createSignal } from "solid-js";
import { localGetFile, localGetTabs } from "./local";

export const emptyFile = {
    Name: '',
    Path: '',
    IsDir: false,
    UpPath: '',
};

export const emptyDir = {
    Name: '',
    Path: '',
    IsDir: true,
    UpPath: '',
};

const emptyConf = {
    RepoPath: '',
    BlogPath: '',
    PageStep: 2,
};

export const [currentFile, setCurrentFile] = createSignal(localGetFile());

export const [currentDir, setCurrentDir] = createSignal(emptyDir);

export const [currentMenu, setCurrentMenu] = createSignal([]);

export const [currentConfig, setCurrentConfig] = createSignal(emptyConf);

export const [currentTabList, setCurrentTabList] = createSignal(localGetTabs());

export const [currentUnsaved, setCurrentUnsaved] = createSignal(false);

// BLOG
export const [currentBlog, setCurrentBlog] = createSignal(false);
export const [currentBlogJSON, setCurrentBlogJSON] = createSignal({});
export const [currentBlogPage, setCurrentBlogPage] = createSignal({});
export const [currentPageNum, setCurrentPageNum] = createSignal(0);

export const [currentTags, setCurrentTags] = createSignal([]);
