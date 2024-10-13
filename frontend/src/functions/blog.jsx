import { getFileByPath } from "./api";
import { currentBlogJSON, currentConfig, setCurrentBlogJSON, setCurrentBlogPage, setCurrentTags } from "./exports";

export const blogGetJSON = async () => {
    
  const blogRaw = await getFileByPath(currentConfig().BlogPath+'/blog.json');
  const blog = JSON.parse(blogRaw);

  setCurrentBlogJSON(blog);

  return blog;
};

export const blogGetTags = () => {
    
  const blog = currentBlogJSON();

  let tags = [];
  for (let i in blog) {
    tags.push(...blog[i].tags);
  }
  tags = [...new Set(tags)];
  tags.sort();

  setCurrentTags(tags);

  return tags;
};

export const blogGetPage = async (page) => {
    
  let displayBlog = []; 
  let blog = currentBlogJSON();

  for (let i in blog) {

    blog[i].text = await getFileByPath(currentConfig().BlogPath+blog[i].path);
    displayBlog[i] = blog[i];
  }

  return displayBlog;
};