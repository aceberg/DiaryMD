import BlogRight from "./BlogRight";
import BlogMain from "./BlogMain";
import BlogLeft from "./BlogLeft";

function Blog() {

  return (
    <div class='row mt-4'>
      <div class="col-md-2">
        <BlogLeft></BlogLeft>
      </div>
      <div class="col-md-9">
        <BlogMain></BlogMain>
      </div>
      <div class="col-md-1">
        <BlogRight></BlogRight>
      </div>
    </div>
  );
}

export default Blog;