import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Login from './pages/login';
import Admin from './admin';
import Home from './pages/home'
import Music from "./pages/music";
import Tools from "./pages/tool/tools";
import Editor from "./pages/tool/editor";
import TodoList from "./pages/tool/todolist";
import Album from "./pages/pic/album";
import Waterfall from "./pages/pic/waterfall";
import SearchEngine from "./pages/search";
import Mock from "./pages/mock/mock";
import Reform from "./pages/mock/reform";
import Todo from "./pages/mock/todo";
import Follow from "./pages/follow";
import Report from "./pages/report";
import NewReport from "./pages/report/new";

export default class Routes extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Route path="/login" component={Login}/>

                {/*<Route path="/" render={()=>(*/}
                    {/*<Admin>*/}
                        {/*<Switch>*/}
                            {/*<Route path="/home" component={Home}/>*/}
                            {/*<Route path="/music" component={Music}/>*/}
                            {/*<Route path="/tools" component={Tools}/>*/}
                            {/*<Route path="/editor" component={Editor}/>*/}
                            {/*<Route path="/todoList" component={TodoList}/>*/}
                            {/*<Route path="/album" component={Album}/>*/}
                            {/*<Route path="/waterfall" component={Waterfall}/>*/}
                            {/*<Route path="/searchEngine" component={SearchEngine}/>*/}
                            {/*<Route path="/mock" component={Mock} />*/}
                            {/*<Route path="/reform" component={Reform} />*/}
                            {/*<Route path="/todo" component={Todo} />*/}
                            {/*<Route path="/follow" component={Follow} />*/}
                        {/*</Switch>*/}
                    {/*</Admin>*/}
                {/*)}/>*/}
                <Admin>
                    <Route path="/home" component={Home}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/tools" component={Tools}/>
                    <Route path="/editor" component={Editor}/>
                    <Route path="/todoList" component={TodoList}/>
                    <Route path="/album" component={Album}/>
                    <Route path="/waterfall" component={Waterfall}/>
                    <Route path="/searchEngine" component={SearchEngine}/>
                    <Route path="/mock" component={Mock} />
                    <Route path="/reform" component={Reform} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/follow" component={Follow} />
                    <Route path="/report" component={Report} />
                    <Route path="/newReport" component={NewReport} />
                    {/*<Redirect to='/home'/>*/}
                </Admin>

            </BrowserRouter>
        )
    }
}