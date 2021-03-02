import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Home
        header='Welcome to Mexico City'
        img='https://latamlist.com/wp-content/uploads/2020/01/mexico-city-travel.adapt_.1900.1-1.jpg'
      />
      <About header='Wanna know more about us?' />
      <Contact header='Drop a line' />
    </div>
  );
};

export default App;
