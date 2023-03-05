import { useSelector } from 'react-redux';
import Error from './pages/Error';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const error = useSelector(state => state.error);
  return (    
    <div className="App">
      <Header/>
     {error
      ?<Error />:
      <Main/>
      }
      <Footer/>
    </div>
  );
}

export default App;
