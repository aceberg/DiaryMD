

export const getDirsFromAPI = async (id) => {
  const url = 'http://0.0.0.0:8830/api/dirs/'+id;
  const dirsAndFiles = await (await fetch(url)).json();

  dirsAndFiles.sort((a, b) => a.Name > b.Name);
  dirsAndFiles.sort((a, b) => a.IsDir < b.IsDir);

  return dirsAndFiles;
};