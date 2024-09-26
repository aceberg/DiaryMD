const api = 'http://0.0.0.0:8830';

export const getConfig = async () => {
  const url = api+'/api/config';
  const conf = await (await fetch(url)).json();

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