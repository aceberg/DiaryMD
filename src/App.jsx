import Header from './components/header';
import Editor from './components/editor';
import Menu from './components/menu';
import './App.css';

function App() {
  return (
    <div>
    <Header></Header>
    <table>
      <tbody>
        <tr>
          <td>
            <Menu></Menu>
          </td>
          <td>
            <Editor></Editor>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default App;
