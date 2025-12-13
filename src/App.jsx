import react from 'react';
import './App.css'
import Home from './pages/home/Home';
import Navbar from './components/ui/navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>

    </>
  );
}

export default App;