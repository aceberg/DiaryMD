import Header from './components/header';
import Editor from './components/editor';
import Menu from './components/menu';
import './App.css';
import "aceberg-bootswatch-fork/dist/sand/bootstrap.min.css";

function App() {
  return (
    <div class='container-lg'>
      <div class='row'>
        <Header></Header>
      </div>
      <div class='row mt-4'>
        <div class='col-3 h-100 d-flex flex-column'>
          <Menu></Menu>
        </div>
        <div class='col-9 h-100 d-flex flex-column'>
          <Editor></Editor>
        </div>
      </div>
    </div>
  );
}

export default App;
