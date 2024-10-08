import { currentBlogJSON } from "../functions/exports";

function BlogMain() {

  console.log("BLOG", currentBlogJSON());

  return (
    <div>
      <For each={currentBlogJSON()}>{(b) =>
        <div class='menu-head d-flex justify-content-between'>
          <span class="fw-bold fs-5 p-2">{b.name}</span>
          <span class="fw-bold fs-5 p-2">{b.date}</span>
        </div>
      }</For>
    </div>
  );
}

export default BlogMain;