import { currentTabList } from "../functions/exports";
import TabOne from "./TabOne";

function Tabs() {

  return (
    <div class='file-place'>
        <For each={currentTabList()}>{(tab) =>
          <TabOne data={tab}></TabOne>          
        }</For>
    </div>
  );
}

export default Tabs;