import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from './pages/Home';
import Reserve from './pages/Reserve';

function Routes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/reserve" component={Reserve} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;