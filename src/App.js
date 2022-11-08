import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Exp6 from './exp6'
// import Exp7props from './exp7props'
// import Exp7state from './exp7state'
// import Exp8 from './exp8'
// import Exp9 from './exp9'
import Exp12 from './exp12'
import About from "./About";
import Contect from "./Contect";
function App() {
  return (
    <div className="App">
    {/* <Exp6/> */}

    {/* passing props for exp7  */}
    {/* <Exp7props name="Aniket"/> */}

{/* state example  */}
{/* <Exp7state/> */}

{/* <Exp8/> */}

{/* <Exp9/> */}

<BrowserRouter>
      <Routes>
          <Route exact path="" element={<Exp12 />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Contect" element={<Contect />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
