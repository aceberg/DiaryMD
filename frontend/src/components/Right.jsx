import Editor from './Editor';
import PathBtn from "./PathBtn";

function Right() {
  return (
    <div class='col-9 h-100 d-flex flex-column'>
      <PathBtn></PathBtn>
      <Editor></Editor>
    </div>
  );
}

export default Right;