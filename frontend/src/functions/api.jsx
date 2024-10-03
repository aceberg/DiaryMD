import { applyCurrentTheme, setCurrentTheme } from "./exports";

const api = 'http://0.0.0.0:8830';

export const getConfig = async () => {
  const url = api+'/api/config';
  const conf = await (await fetch(url)).json();

  setCurrentTheme({
    Theme: conf.Theme,
    Color: conf.ColorMode,
    Menu: conf.ColorMenu,
    Background: conf.ColorBack,
    Editor: conf.ColorEdit,
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

export const getFileByID = async (id) => {
  const url = api+'/api/file/'+id;
  const file = await (await fetch(url)).json();

  return file;
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
  data.set('mode', newTheme.Color);
  data.set('menu', newTheme.Menu);
  data.set('back', newTheme.Background);
  data.set('edit', newTheme.Editor);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/theme', true);
  request.send(data);
};

export const apiSaveConfig = async (path) => {

  let data = new FormData();
  data.set('path', path);

  let request = new XMLHttpRequest();
  request.open("POST", api+'/api/config', true);
  request.send(data);
};