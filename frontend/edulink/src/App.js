import "./App.css";
import Edulink from "./components/Edulink"
// import Signup from "./components/Singup";
// import Login from "./components/Login";
function App() {
  const user = localStorage.getItem("token");
  return (
    
    <div className="App">
      {/* <h1>This is for testing</h1> */}
      <Edulink/>
    </div>
  );
}

export default App;
