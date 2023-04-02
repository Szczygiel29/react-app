import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Howto from './components/howto';
import About from './components/about';
import Form from './components/form';
import { useState } from 'react'


function App() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayMain, setDisplayMain] = useState(true);

  console.log("displayAbout:", displayAbout);

  const handleAboutClick = () => {
    setDisplayAbout(true);
    setDisplayForm(false);
    setDisplayMain(false);
    window.location.href = `#${"main"}`;
    console.log("about")
  };

  const handleDonateClick = () => {
    window.location.href = `#${"main"}`;
    setDisplayAbout(false);
    setDisplayForm(true);
    setDisplayMain(false);
  };

  const handleNeedSausageClick = () => {
    window.location.href = `#${"main"}`;
    setDisplayAbout(false);
    setDisplayForm(false);
    setDisplayMain(true);
  };

  return (
    <div className="App">
      <Header onAboutClick={handleAboutClick} onDonateClick={handleDonateClick} onNeedSausageClick={handleNeedSausageClick} />
      {displayAbout && <About />}
      {displayForm && <Form />}
      {displayMain && <Main />}
      <Howto />
      <Footer />
      </div>
  );
}

export default App;
