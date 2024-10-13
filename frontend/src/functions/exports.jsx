import { createSignal } from "solid-js";
import { localGetFile, localGetTabs } from '../functions/local';

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
    BlogPath: '',
    PageStep: 2,
};

export const [currentFile, setCurrentFile] = createSignal(localGetFile());

export const [currentDir, setCurrentDir] = createSignal(emptyDir);

export const [currentMenu, setCurrentMenu] = createSignal([]);

export const [currentConfig, setCurrentConfig] = createSignal(emptyConf);

export const [currentTabList, setCurrentTabList] = createSignal(localGetTabs());

// BLOG
export const [currentBlog, setCurrentBlog] = createSignal(false);
export const [currentBlogJSON, setCurrentBlogJSON] = createSignal({});
export const [currentBlogPage, setCurrentBlogPage] = createSignal({});
export const [currentPageNum, setCurrentPageNum] = createSignal(0);

export const [currentTags, setCurrentTags] = createSignal([]);
