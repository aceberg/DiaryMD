import { blogGetPage } from "../functions/blog";
import { currentBlog, currentBlogPage, currentPageNum, setCurrentBlog, setCurrentBlogPage, setCurrentPageNum } from "../functions/exports";
import BlogText from "./BlogText";

function BlogMain() {

  const handleEdit = async (blog) => {

    setCurrentBlog(!currentBlog());
  };

  const handleNext = async () => {

    const page = currentPageNum() + 1;

    setCurrentPageNum(page);
    setCurrentBlogPage(await blogGetPage(page));
  };

  const handlePrev = async () => {

    let page = currentPageNum() - 1;

    if (page < 0) {
      page = 0;
    }

    setCurrentPageNum(page);
    setCurrentBlogPage(await blogGetPage(page));
  };

  return (
    <div class="mb-3">
      <div class='d-flex justify-content-between mb-2'>
        <i class="bi bi-chevron-double-left shade-hover rounded-2 p-1" title="Prev" onClick={[handlePrev]}></i>
        <span title="Page" class="shade-hover rounded-2 p-1">{currentPageNum()}</span>
        <i class="bi bi-chevron-double-right shade-hover rounded-2 p-1" title="Next" onClick={[handleNext]}></i>
      </div>
      <For each={currentBlogPage()}>{(b) =>
      <div>
        <div class='menu-head d-flex justify-content-between' title={b.path}>
          <span class="fw-bold fs-5 p-2 mx-2">{b.name}</span>
          <span class="fw-bold fs-5 p-2">
            <span class="mx-4">{b.date}</span>
            <i class="bi bi-three-dots-vertical shade-hover rounded-2 p-1" title="Edit" onClick={[handleEdit, b]}></i>
          </span>
        </div>
        <BlogText data={b.text}></BlogText>
      </div>
      }</For>
      <div class='d-flex justify-content-between'>
        <i class="bi bi-chevron-double-left shade-hover rounded-2 p-1" title="Prev" onClick={[handlePrev]}></i>
        <i class="bi bi-chevron-double-right shade-hover rounded-2 p-1" title="Next" onClick={[handleNext]}></i>
      </div>
    </div>
  );
}

export default BlogMain;