import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import UserName from './components/UserName';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* For inline renderig and for custom routes, use the render method in the Route component */}
        <Route
          exact
          path='/'
          render={() => (
            <Home
              header='Welcome to Mexico City'
              img='https://latamlist.com/wp-content/uploads/2020/01/mexico-city-travel.adapt_.1900.1-1.jpg'
            />
          )}
        />
        {/* Pass components or elements to be rendered as children */}
        <Route path='/about'>
          <About header='Wanna know more about us?' />
        </Route>
        <Route path='/contact'>
          <Contact header='Drop a line' />
        </Route>
        {/* component propery: when you want to render only one component without props */}
        <Route path='/dynamic/:username' component={UserName} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
