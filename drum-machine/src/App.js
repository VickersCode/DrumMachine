
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Drum Machine by VickersCode</h1>
      </header>
      <div id='drum-machine'>
        <div id='display'>
          <div id="drums">
            <button className='drum-pad' id='q'>Q</button>
            <button className='drum-pad' id='w'>W</button>
            <button className='drum-pad' id='e'>E</button>
            <button className='drum-pad' id='a'>A</button>
            <button className='drum-pad' id='s'>S</button>
            <button className='drum-pad' id='d'>D</button>
            <button className='drum-pad' id='z'>Z</button>
            <button className='drum-pad' id='x'>X</button>
            <button className='drum-pad' id='c'>C</button>
          </div>
          <div id="control">

          </div>  
        </div>
        
      </div>
    </div>
  );
}

export default App;
