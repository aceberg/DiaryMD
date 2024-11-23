import { Show } from 'solid-js';
import { currentBlog } from './functions/exports';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';
import Blog from './components/Blog';
import DownButton from './components/DownButton';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "font-awesome/css/font-awesome.min.css"; // For EasyMDE
import './App.css';

function App() {
  
  return (
    <div class='container-lg'>
      <div class='row'>
        <Header></Header>
      </div>
      <Show
        when={currentBlog()}
        fallback={
          <div class='row mt-2'>
            <Left></Left>
            <Right></Right>
          </div>}
      >
      <Blog></Blog>
      </Show>
      <DownButton></DownButton>
    </div>
  );
}

export default App;
