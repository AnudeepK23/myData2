
import './App.css';
import Signup from './Components/signup';
import {useForm} from "react-hook-form"

// function App(props) {
  
function App() {
  // const form = useForm();
  
  return (
    <div className="App">
{/* <Signup {...props} {...form} /> */}
<Signup  />
    </div>
  );
}

export default App;
