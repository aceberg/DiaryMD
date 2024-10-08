import BlogMain from "./BlogMain";

function Blog() {

  return (
    <div class='row mt-2'>
      <div class="col-md-1">
        <p>Left</p>  
      </div>
      <div class="col-md-9">
        <BlogMain></BlogMain>
      </div>
      <div class="col-md-2">
        <p>Right</p>
      </div>
    </div>
  );
}

export default Blog;