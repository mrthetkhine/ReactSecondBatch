import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
import TableDemo from "./components/fragment/TableDemo";
import ImportDemo,{ComponentOne} from "./components/importdemo/ImportDemo";
import DomRef from "./components/ref/DomRef";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";
import ErrorComponent from "./components/errorboundary/ErrorComponent";
import Parent from "./components/context/Parent";
import {DataContext} from "./components/context/DataContext";
import ForwardRef from "./components/ref/ForwardRef";
//import PointerEvent from "./components/pointerevent/PointerEvent";

import loadingSpinner from "./components/hoc/loadingSpinner";
import Page from "./components/hoc/Page";
import HocDemo from "./components/hoc/HocDemo";
import MouseTracker, {View1,View2} from "./components/render-props/MouseTracker";
import ThirdParty from "./components/thirdparty/ThridParty";
import JSXElement from "./components/jsx/JSXElement";
import Mapper, {ChildElement} from "./components/jsx/Mapper";
import PureCounter from "./components/PureCounter";
import ListOfWord from "./components/ListOfWord";
import {PortalParent} from "./components/portal/PortalComponent";
import HookCounter from "./components/hook/HookCounter";
import UseEffectDemo from "./components/hook/UseEffectDemo";
import CleanUpDemo from "./components/hook/CleanUpDemo";
import APICallDemo from "./components/hook/APICallDemo";
import UseCallBackDemo from "./components/hook/UseCallBackDemo";
import {UseRefDemo} from "./components/hook/UseRefDemo";
import {ReduxCounter} from "./components/hook/redux/ReduxCounter";
import ToDoRedux from "./components/hook/redux/ToDoRedux";
import FormikDemo from "./components/form/FormikDemo";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import auth from "./pages/auth";
import PageNotFound from "./pages/PageNotFound";

const PointerEvent = React.lazy(() => import('./components/pointerevent/PointerEvent'));
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
    ];

    let loading = true;
    /*
    setTimeout(()=>{
        console.log("Loading completed");
        loading = false;
    },5000)
    */
    let user= 'user';
  return (
    <div>

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
   {/* <TableDemo items={data.comments}/>*/}

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
        {/*<Tab headers={headers}>
            <div>
                Page 1
            </div>
            <div>
                Page 2
            </div>
            <div>
                Page 3
            </div>
        </Tab>*/}
        {/*<TableDemo data={data.comments}/>*/}
        {/*<ImportDemo/>
        <ComponentOne/>*/}
       {/* <DomRef/>*/}
       {/* <Suspense fallback={<div>Loading...</div>}>
            <PointerEvent/>
        </Suspense>*/}
        {/*<ErrorBoundary>
            <ErrorComponent/>
        </ErrorBoundary>*/}
        {/*<DataContext.Provider value={headers}>
            <Parent/>
        </DataContext.Provider>*/}
       {/* <ForwardRef/>*/}
       {/* <HocDemo/>*/}
       {/*<MouseTracker view={mouse=><View2 mouse={mouse}/>}/>*/}
      {/* <ThirdParty/>*/}
    {/*  <JSXElement/>*/}
       {/* <Mapper data={data.comments} element={ChildElement}/> */}
       {/* <PureCounter/>*/}
      {/* <ListOfWord/>
       <PortalParent/>*/}
     {/*  <HookCounter/>*/}
    {/*   <CleanUpDemo/>*/}
   {/* <APICallDemo/>*/}
   {/*<UseCallBackDemo/>*/}
   {/*<UseRefDemo/>*/}
  {/* <ReduxCounter/>*/}
  {/*<ToDoRedux/>*/}

  {/*<FormDemo/>*/}
  {/*<FormikDemo/>*/}
        <Router>


            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            {/*<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>*/}
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">Users</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/movie/1" className="nav-link">Movies</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/protected" className="nav-link">Protected</Link>

                            </li>
                        </ul>

                    </div>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <PrivateRoute path="/protected"
                            auth={ auth() && user=='admin'}>
                        <ProtectedPage/>
                    </PrivateRoute>
                    <Route path="/users">
                        <UserPage/>
                    </Route>
                    <Route path="/movie/:id">
                        <MoviePage/>
                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
