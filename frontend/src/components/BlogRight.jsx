import { currentTags, setCurrentBlogJSON, setCurrentBlogPage } from "../functions/exports";
import { blogGetJSON, blogGetPage } from "../functions/blog";

function BlogRight() {

  const handleTag = async (tag) => {
    const blog = await blogGetJSON();

    let found = [];
    for (let i in blog) {
      if (blog[i].tags.includes(tag)) {
        found.push(blog[i]);
      }
    }
    setCurrentBlogJSON(found);
    setCurrentBlogPage(await blogGetPage(0));
  };

  return (
    <div>
      <For each={currentTags()}>{(tag) =>
        <p><a href="#" onClick={[handleTag, tag]}>#{tag}</a></p>
      }</For>
    </div>
  );
}

export default BlogRight;