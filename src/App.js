import logo from './logo.svg';
import './App.css';
import FlippedCircularDivContainer from './FlippedCircularDivContainer'
import FlippedCircularDiv from './FlippedCircularDiv';
function App() {
  return (
    <div className="App">
      <FlippedCircularDivContainer n = {10}></FlippedCircularDivContainer>
    </div>
  );
}

export default App;
