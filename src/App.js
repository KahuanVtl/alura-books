import './App.css';
import logo from './Imagens/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='Logo da Alura Books'></img>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
