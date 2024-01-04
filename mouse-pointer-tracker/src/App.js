import { useEffect, useState } from "react";

function App() {

  const [coords, setCoords] = useState({x: 0, y:0});
  const [globalCoords, setGlobalCoords] = useState({x: 0, y:0});

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return() => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, []);
  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    });
  }
  return (
    <div>
      <div onMouseMove={handleMouseMove}
      style={{padding:'3rem', background: 'lightgray', margin: '5px'}} />
      <h2>
        Component Coords: {coords.x} {coords.y} 
      </h2>
      <br />
      <h2>
        Global Coords: {globalCoords.x} {globalCoords.y}
      </h2>
    </div>
  );
}

export default App;
