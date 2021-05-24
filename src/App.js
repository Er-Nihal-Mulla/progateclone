import './main.scss';
import Header from "./components/Header";
import About from './components/About';
import Journey from './components/Journey';
import IllustrativeSlides from './components/IllustrativeSlides';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Journey />
      <IllustrativeSlides />
      <Card />
    </div>
  );
}

export default App;
