import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Layout">
        <div className="Layout_Sidebar">
          Sidebar Content
        </div>
        <div className="Layout_Content">
          Main Content
        </div>
      </div>
    </div>
  );
}

export default App;
