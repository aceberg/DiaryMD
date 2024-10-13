import { currentBlogPage } from "../functions/exports";
import BlogText from "./BlogText";

function BlogMain() {

  return (
    <div class="mb-3">
      <For each={currentBlogPage()}>{(b) =>
      <div>
        <div class='menu-head d-flex justify-content-between'>
          <span class="fw-bold fs-5 p-2">{b.name}</span>
          <span class="fw-bold fs-5 p-2">{b.date}</span>
        </div>
        <BlogText data={b.text}></BlogText>
      </div>
      }</For>
    </div>
  );
}

export default BlogMain;