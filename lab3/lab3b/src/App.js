import './sassStyles.scss';
import Navigation from './nav'


function App() {
  return (
    <div className="App">
      <Navigation />
      <p> some sample text</p>
      <p className="inverse"> some more text</p>
    </div>
  );
}

export default App;
