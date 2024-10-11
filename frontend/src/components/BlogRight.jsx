import { currentTags, setCurrentBlogJSON } from "../functions/exports";
import { apiGetBlogJSON } from '../functions/api';

function BlogRight() {

  const handleTag = async (tag) => {
    const [blog, _] = await apiGetBlogJSON();

    let found = [];
    for (let i in blog) {
      if (blog[i].tags.includes(tag)) {
        found.push(blog[i]);
      }
    }
    setCurrentBlogJSON(found);
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