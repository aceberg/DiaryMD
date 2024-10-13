import { getFileByPath } from "./api";
import { currentBlogJSON, currentConfig, setCurrentBlogJSON, setCurrentPageNum, setCurrentTags } from "./exports";

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
  const len = blog.length;
  // const step = currentConfig().PageStep;
  const step = 3;

  let start = step * page;
  let end = start + step;

  if (start >= len) {
    start = 0;
    end = step;
    setCurrentPageNum(0);
  }
  if (end >= len) {
    end = len;
  }

  for (let i = start; i < end; i++) {

    blog[i].text = await getFileByPath(currentConfig().BlogPath+blog[i].path);
    displayBlog.push(blog[i]);
  }

  return displayBlog;
};