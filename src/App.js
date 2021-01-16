import "./App.css";
import ImagesList from "./components/ImagesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/albums" component={ImagesList} />
        <Route path="/" component={ImagesList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
