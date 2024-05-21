import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Layout">
        <Sidebar />

        <div className="Layout_Content">
          Main Content
        </div>
      </div>
    </div>
  );
}

export default App;
