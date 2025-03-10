import { currentFile, currentUnsaved } from "../functions/exports";
import { Show } from "solid-js";
import { closeFileAndTab, openFileAndTab } from '../functions/tabs';

function TabOne(props) {

  const curPath = currentFile().Path;

  const handleClose = async () => {
    closeFileAndTab();
  };

  const handleFile = async (file) => {
    openFileAndTab(file);
  };

  return (
    <Show
      when={curPath == props.data.Path}
      fallback={
        <button class="tab rounded-top" title={props.data.Path}>
          <span class="mx-2" onClick={[handleFile, props.data]}>{props.data.Name}</span>
        </button>
      }
    >
      <button class="tab-main rounded-top" title={props.data.Path}>
        <Show
          when={currentUnsaved()}
          >
            <i class="bi bi-balloon p-1" title='Unsaved'></i>
        </Show>
        <span class="mx-2">{props.data.Name}</span>
        <i class="bi bi-x shade-hover rounded-2 p-1" title='Close' onClick={handleClose}></i>
      </button>
    </Show>
  );
}

export default TabOne;