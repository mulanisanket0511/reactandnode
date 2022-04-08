import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./component/Loginform";
import ClippedDrawer from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomizedTables from "./component/Table";
import InputAdornments from "./component/Editform";
import Todolist from "./component/Todolist";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <div>
        <ClippedDrawer />
       </div>
       <div style={{marginTop:100}}>
        <Switch>
          <Route exact path="/table">
            <div>
            <CustomizedTables />
            </div>
          </Route>
          <Route exact path="/form">
            <div style={{marginLeft:-320}}>
            <SignIn />
            </div>
          </Route>
          {/* <Route exact path="/todolist">
            <Todolist/>
          </Route> */}
          <Route exact path="/:id">
          <div style={{marginLeft:-320}}>
            <InputAdornments />
            </div>
          </Route>
        </Switch>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
