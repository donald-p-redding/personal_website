import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/*" component={Homepage} />
      </Switch>
  );
}

export default App; //
