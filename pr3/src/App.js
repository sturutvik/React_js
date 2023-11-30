import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
       <Header/>
       <Section/>
       <Footer/>
    </div>
  );
}

export default App;
