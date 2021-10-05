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

function App() {

    let data = {
        "title":"This is first post",
        "body":"This is first post description",
        comments:[
            { id:1,text:"This is first comment "},
            {id:2,text:"This is second comment"}]
    }
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
    <ListDemo items={data.comments}/>
    </div>
  );
}

export default App;
