import './App.css';
import BusinessOwner from "./components/BusinessOwner";
import { Router , Route , Switch} from "react-router-dom";
import history from "./hs";
import LocationOfUser from "./components/locationOfUser";
import LoginOption from "./components/LoginOption";
import CorpSize from "./components/CorpSize";
import AccessDenied from "./components/AccessDenied";
import TakingSurvey from "./components/TakingSurvey";
import ContractLargeCorp from "./components/ContactLargeCorp";
import LargeCorp from "./components/LargeCorp";
import LargeCorpSignupForm from "./components/LargeCorpSignupForm";
import FaceBookLogin from "./components/FaceBookLogin";
import SmallCorpSignupForm from "./components/SmallCorpSignupForm";
import EmailSignupForm from "./components/EmailSignupForm";



function App() {

  const responseFacebook = (response) => {
    console.log(response)
  }

  const componentClicked = () => {console.log("clicked")}
  return (

      <Router history={history}>
    <div className="App">
    <Switch>
      <Route exact path="/" component={BusinessOwner} />
      <Route exact path="/location" component={LocationOfUser} />
      <Route exact path="/login-option" component={LoginOption} />
      <Route exact path="/login-option" component={LoginOption} />
      <Route exact path="/login-option/facebook-login" component={FaceBookLogin} />
      <Route exact path="/login-option/email-sign-up" component={EmailSignupForm} />
      <Route exact path="/location/corp-size" component={CorpSize} />
      <Route exact path="/location/access-denied" component={AccessDenied} />
      <Route exact path="/location/corp-size/take-survey" component={TakingSurvey} />
      <Route exact path="/location/corp-size/contact-large-corp" component={ContractLargeCorp} />
      <Route exact path="/location/corp-size/contact-large-corp/large-corp" component={LargeCorp} />
      <Route exact path="/location/corp-size/contact-large-corp/sign-up" component={SmallCorpSignupForm} />
      <Route exact path="/location/corp-size/take-survey/sign-up" component={LargeCorpSignupForm} />

    </Switch>
    </div>
      </Router>
  );
}

export default App;
