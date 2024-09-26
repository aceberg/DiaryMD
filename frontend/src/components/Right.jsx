import Editor from './Editor';
import Tabs from "./Tabs";

function Right() {
  return (
    <div class='col-9 h-100 d-flex flex-column'>
      <Tabs></Tabs>
      <Editor></Editor>
    </div>
  );
}

export default Right;