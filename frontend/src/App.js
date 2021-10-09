import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import VirtualDomConcept from "./components/VirutalDomConcept";
import FunctionComponent from "./components/function/FunctionComponentDemo";
import ClassComp from "./components/classcomponent/ClassComp";
import Post from "./components/Post";
import Counter from "./components/Counter";
import TimeDisplay from "./TimeDisplay";
import ConditionalRendering from "./components/ConditionalRendering";
import ListDemo from "./components/ListDemo";
import FormDemo from "./components/form/FormDemo";
import FancyBorder from "./components/pattern/composition/FanyBorder";
import Tab from "./components/pattern/composition/Tab";
function App() {

    let data = {
        "title":"This is first post",
        "body":"This is first post description",
        comments:[
            { id:1,text:"This is first comment "},
            {id:2,text:"This is second comment"}]
    }
    let headers =[
        "one",
        "two",
        "three"
    ]
  return (
    <div>
        Hello from React
       {/* <Hello></Hello>
        <Hello/>*/}
       {/* <VirtualDomConcept></VirtualDomConcept>*/}
       {/*<FunctionComponent/>*/}
      {/* <ClassComp/>*/}
  {/*  <Post post={data} comments={data.comments}/>*/}
    {/* <Counter start={5}/>
     <Counter start={15}/>*/}
    {/*<TimeDisplay/>*/}
   {/* <ConditionalRendering/>*/}
   {/* <ListDemo items={data.comments}/>*/}
  {/* <FormDemo/>*/}
      {/*<FancyBorder color="blue">
          <Post post={data} comments={data.comments}/>
      </FancyBorder>
        <FancyBorder color="green">
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ol>
        </FancyBorder>*/}
        <Tab headers={headers}>
            <div>
                Page 1
            </div>
            <div>
                Page 2
            </div>
            <div>
                Page 3
            </div>
        </Tab>
    </div>
  );
}

export default App;
