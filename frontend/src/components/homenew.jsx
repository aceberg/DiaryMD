import folder from '../assets/folder.svg';
import newfolder from '../assets/folder-plus.svg';
import newfile from '../assets/file-plus.svg';

function HomeNew() {

  const handleClick = (data) => {
    console.log("Home click", data);
  };

    return (
      <>
        <img src={folder} class='img-mg' title='Home' onClick={[handleClick, 'home']}></img><img src={newfolder} class='img-mg' title='New dir' onClick={[handleClick, 'dir']}></img><img src={newfile} class='img-mg' title='New file' onClick={[handleClick, 'file']}></img>
      </>
    );
  }
  
  export default HomeNew;