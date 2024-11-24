import { useNavigate } from "@solidjs/router";
import { getWorkSpaces } from "../functions/api";
import { initWorkSpace } from "../functions/init";
import { setNowWorkSpace } from "../functions/workspaces";

function Wsp(props) {

  const navigate = useNavigate();

  const loadWorkspace = async () => {
    const name = props.params.name;
    const allWsps = await getWorkSpaces();

    for (let i in allWsps) {
      if (allWsps[i].Name == name) {

        navigate("/", { replace: true });

        setNowWorkSpace(allWsps[i]);
        initWorkSpace();

        break;
      } 
    }
  };

  loadWorkspace();

  return (<></>);
}

export default Wsp;