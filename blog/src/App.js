import './App.css';
import logo from './logo.svg';

function App() {
  const posts = { color: 'white', fontSize: '20px' };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts}>Dev Blog</div>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
