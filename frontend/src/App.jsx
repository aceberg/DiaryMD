import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import './App.css';

function App() {
  return (
    <div class='container-lg'>
      <div class='row'>
        <Header></Header>
      </div>
      <div class='row mt-4'>
        <Left></Left>
        <Right></Right>
      </div>
    </div>
  );
}

export default App;
