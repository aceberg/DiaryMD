import { onMount } from "solid-js";
import EasyMDE from "easymde";

function BlogText(props) {

  let textareaRef;

  onMount(() => {
    let easyMDE = new EasyMDE({
      element: textareaRef,
      toolbar: false,
      maxHeight: "300px",
      status: false,
    });
    easyMDE.value(props.data);
    easyMDE.togglePreview();
  });

  return (
    <div class="mb-1">
      <textarea ref={textareaRef} />
    </div>
  );
}

export default BlogText;