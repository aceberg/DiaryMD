const api = 'http://0.0.0.0:8830';

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