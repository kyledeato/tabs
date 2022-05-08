import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
function App() {
  const tabs = ["1", "2", "3"];
  return (
    <div >
      <Tab tabs={tabs}/>
    </div>
  );
}

export default App;
