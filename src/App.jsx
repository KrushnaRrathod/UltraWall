import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./(root)/home/Page.jsx";
import Preview from "./(root)/preview/Page.jsx";

function App() {
  return(
    <Router>
      <AppContent/>
    </Router>
  )
}

function AppContent() {
  const location = useLocation();
  const hiddeNavRoutes = ['/sign-in', '/sign-up'];
  return(
    <>
      {!hiddeNavRoutes.includes(location.pathname) && <Nav/>}
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/preview/:previewNo" element={<Preview />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
