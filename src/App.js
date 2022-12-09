import './App.css';
import {useState} from 'react'

function App() {

  const [krugovi, setKrugovi] = useState([])
  const [povijest, setPovijest] = useState(0)
  const [trenutno, setTrenutno] = useState(0)
  const [boja, setBoja] = useState(0)

  const kreirakKrug = (e) => {
    if(e.target.classList.contains('l-btn')||e.target.classList.contains('btn'))return;
    let staviPovijest= povijest;
    if (povijest === trenutno) staviPovijest = povijest +1
    if (povijest > trenutno) staviPovijest = trenutno +1 ;
  
    const kruzic = {
      x: e.clientX,
      y: e.clientY,
      id: staviPovijest,
      boja: boja
    }
 
    setKrugovi([...krugovi.filter(krug=>krug.id<=trenutno), kruzic]);
    setPovijest(staviPovijest)
    setTrenutno(trenutno +1)
    setBoja(boja + 25)
  }

 
  const vrati = ()=>{
    if(trenutno > 0)
    setTrenutno(trenutno -1)
 
  }

  const dalje = ()=>{
    if(trenutno < povijest)
    setTrenutno(trenutno +1)

  }

  return (
    <div className="l-app" onClick={kreirakKrug}>
      <div className='l-btn'>
        <button className="btn" onClick={vrati}>Vrati</button>
        <button className="btn"  onClick={dalje}>Dalje</button>
      </div>

    {krugovi.filter((krug)=>krug.id<=trenutno)
    .map((krug)=>{
      const {x, y, id, boja} = krug;
      const stil = {left: `${x}px`, top: `${y}px`, background:`hsl(${boja}, 100%, 50%)`}
      return<div key={id} className='krug' style={stil} ></div>
    })}

    </div>
  );
}

export default App;
