import logo from './logo.svg';
import './App.css';
import FlippedCircularDivContainer from './FlippedCircularDivContainer'
import FlippedCircularDiv from './FlippedCircularDiv';
function App() {
  return (
    <div className="App">
      <FlippedCircularDiv n = {10}></FlippedCircularDiv>
    </div>
  );
}

export default App;
