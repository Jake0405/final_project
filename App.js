import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          홈 화면
        </p>
        <button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          주가 확인
        </a>
        </button>
        <button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          포트폴리오 작성
        </a>
        </button>
      </header>
    </div>
  );
}

export default App;
