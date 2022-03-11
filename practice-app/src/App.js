
import './App.css';
import Greet from "./Components/proptopic";
import Product from "./Components/propProduct";
import Counter from './Components/setstate';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import MethodaspropsinParentComponent from './Components/MethodaspropsinParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import StyleSheet from './Components/StyleSheet';
import InlineStyling from './Components/InlineStyling';
import './appStyles.css';
import styles from './appStyles.module.css'
import Newbootlog from './Components/newbootlog';
import Checkout from './Components/Checkout';
import FormHandling from './Components/FormHandling';



function App() {
  return (
    <div className="App">
          <FormHandling />
          {/* <Checkout /> */}
{/* <Newbootlog /> */}
      {/* <h1 className='error'>Error</h1>
      <h2 className={styles.success}>Success</h2> */}


      {/* <InlineStyling /> */}
      {/* <StyleSheet />
      Using props
<StyleSheet primary={true}/> */}
      {/* <ListRendering /> */}

<ConditionalRendering />

      <MethodaspropsinParentComponent />
     <EventBind />

     {/* <ClassClick />
     <FunctionClick />
      <Counter /> */}

{/* <hr /> */}
      {/* first method  connects to first type in proptopic.js file */}
      {/* <Greet  name= "Anudeep" /> */}
        
        {/* Second Method connects to first type in proptopic.js file */}
        {/* <Greet  name= "Anudeep">
        Used in App.js This is Child component name is Reddy
        </Greet> */}


{/* Third Method  connects to first type in proptopic.js file */}
        {/* <Greet  name= "Anudeep">
        Used in App.js <button>Change</button>
        </Greet> */}

        {/* Another Method connects to second type in proptopic.js file */}
        {/* <Greet /> */}

    {/* Last Method connects to fourth type in proptopic.js file */}
        {/* <Greet name="Ram" description="Hero" /> */}

        {/* Another Method connects to third type in proptopic.js file */}
        {/* <Product
        name="Google Home"
        description="Your AI assistant"
        price={9.99}
        />

<Product
        name="amazon"
        description="Your IOT assistant"
        price={8.99}
        />

<Product
        name="Google Home"
        description="Your ML assistant"
        price={10.99}
        /> */}

    </div>
  );
}

export default App;
