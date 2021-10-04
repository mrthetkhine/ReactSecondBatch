import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import VirtualDomConcept from "./components/VirutalDomConcept";
import FunctionComponent from "./components/function/FunctionComponentDemo";
import ClassComp from "./components/classcomponent/ClassComp";
import Post from "./components/Post";

function App() {

    let data = {
        "title":"This is first post",
        "body":"This is first post description",
        comments:["This is first comment ","This is second comment","Third comment"]
    }
  return (
    <div>
        Hello from React
       {/* <Hello></Hello>
        <Hello/>*/}
       {/* <VirtualDomConcept></VirtualDomConcept>*/}
       {/*<FunctionComponent/>*/}
      {/* <ClassComp/>*/}
      <Post post={data} comments={data.comments}/>
    </div>
  );
}

export default App;
