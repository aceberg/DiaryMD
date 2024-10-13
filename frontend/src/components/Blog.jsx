import BlogRight from "./BlogRight";
import BlogMain from "./BlogMain";
import BlogLeft from "./BlogLeft";
import { blogGetJSON, blogGetPage, blogGetTags } from "../functions/blog";
import { setCurrentBlogPage } from "../functions/exports";

function Blog() {

  const setAtStart = async () => {
    await blogGetJSON();
    blogGetTags();
    setCurrentBlogPage(await blogGetPage(0));
  };

  setAtStart();

  return (
    <div class='row mt-4'>
      <div class="col-md-1">
        <BlogLeft></BlogLeft>
      </div>
      <div class="col-md-9">
        <BlogMain></BlogMain>
      </div>
      <div class="col-md-2">
        <BlogRight></BlogRight>
      </div>
    </div>
  );
}

export default Blog;