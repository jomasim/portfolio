import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
