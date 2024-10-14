import { currentConfig } from "./exports";
import { applyCurrentTheme, setCurrentTheme } from "./themes";

const api = 'http://0.0.0.0:8830';

export const getConfig = async () => {
  const url = api+'/api/config';
  const conf = await (await fetch(url)).json();

  setCurrentTheme({
    Theme: conf.Colors.Theme,
    Menu: conf.Colors.Menu,
    Back: conf.Colors.Back,
    Edit: conf.Colors.Edit,
    Font: conf.Colors.Font,
    Outline: conf.Colors.Outline,
  });
  applyCurrentTheme();

  return conf;
};

export const getDirsFromAPI = async (id) => {
  const url = api+'/api/dirs/ls/'+id;
  const dirsAndFiles = await (await fetch(url)).json();

  if (dirsAndFiles && dirsAndFiles.length > 0) {
    dirsAndFiles.sort((a, b) => a.Name > b.Name);
    dirsAndFiles.sort((a, b) => a.IsDir < b.IsDir);
  }

  return dirsAndFiles;
};

export const getDirByID = async (id) => {
  const url = api+'/api/dirs/info/'+id;
  const dir = await (await fetch(url)).json();

  return dir;
};

export const saveFileToAPI = async (path, text) => {

  let data = new FormData();
  data.set('path', path);
  data.set('text', text);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/file', true);
  request.send(data);
};

export const newFile = async (path) => {

  let data = new FormData();
  data.set('path', path);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/new/file', true);
  request.send(data);
};

export const newDir = async (path) => {

  let data = new FormData();
  data.set('path', path);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/new/dir', true);
  request.send(data);
};

export const deleteFileOrDir = async (path) => {

  let data = new FormData();
  data.set('path', path);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/del', true);
  request.send(data);
};

export const renameFileOrDir = async (path, newPath) => {

  let data = new FormData();
  data.set('path', path);
  data.set('newpath', newPath);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/move', true);
  request.send(data);
};

export const apiSearch = async (id, str) => {

  const url = api+'/api/search/'+id+'/'+str;
  const dirs = await (await fetch(url)).json();

  return dirs;
};

export const apiSaveTheme = async (newTheme) => {

  let data = new FormData();
  data.set('theme', newTheme.Theme);
  data.set('font', newTheme.Font);
  data.set('menu', newTheme.Menu);
  data.set('back', newTheme.Back);
  data.set('edit', newTheme.Edit);
  data.set('outline', newTheme.Outline);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/theme', true);
  request.send(data);
};

export const apiSaveConfig = async (conf) => {

  let data = new FormData();
  data.set('path', conf.RepoPath);
  data.set('blog', conf.BlogPath);
  data.set('step', conf.PageStep);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/config', true);
  request.send(data);
};

export const getFileByPath = async (path) => {
  const url = api+'/api/file/text?path='+path;
  const file = await (await fetch(url)).json();

  return file;
};