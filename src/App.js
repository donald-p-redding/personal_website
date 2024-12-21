import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route, HashRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/*" component={Homepage} />
      </Switch>
  );
}

export default App;
