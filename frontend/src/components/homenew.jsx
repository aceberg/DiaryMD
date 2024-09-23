import folder from '../assets/folder.svg';
import newfolder from '../assets/folder-plus.svg';
import newfile from '../assets/file-plus.svg';
import { setEditorValue } from './editor';

function HomeNew(props) {

  const handleClick = (data) => {
    console.log("Click", data);
    setEditorValue("Click "+data);
  };

  const handleHome = () => {
    // console.log("Home click");
    props.onCommand({ID: 0,});
    setEditorValue('');
  };

  return (
      <>
        <img src={folder} class='img-mg' title='Home' onClick={[handleHome]}></img><img src={newfolder} class='img-mg' title='New dir' onClick={[handleClick, 'dir']}></img><img src={newfile} class='img-mg' title='New file' onClick={[handleClick, 'file']}></img>
      </>
    );
  }
  
  export default HomeNew;