import React, { useState } from 'react';
import './App.css';
import { Tree } from "./components/Tree/Tree";
import { ConceptCreation } from "./components/ConceptCreation";

function App() {

    const [stage,setStage] = useState(1);


  return (
      <div className="App">
          <Tree nodes={[]}/>
              <ConceptCreation stage={stage} setStage={(newStage) =>setStage(newStage) } />
      </div>
  );
}

export default App;
