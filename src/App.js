import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './utils/firebase';

import MainPage from './pages/MainPage';
import UserForm from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{height: "100vh"}}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/form" component={UserForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
