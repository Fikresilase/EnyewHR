import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./components/utils/AuthContext";
import Header from "./components/header";
import Hero from "./components/hero";
import Instructors from "./components/logging";
import Footer from "./components/footer";
import Signup from "./components/signup";
import Login from "./components/Login";


import About from "./components/About";
import Members from "./components/members";

function App() {
  return (
    // <AuthProvider>
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About/>
              <Instructors />
              <Footer />
              {/* <Route path="/tests" element={<Tests />}  */}
            </>
          }
        />
        {/* Login and Signup Pages */}
        <Route path="/members" element={<Members/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
   
      </Routes>
      {/* </AuthProvider> */}
    </Router>
    // </AuthProvider>
  );
}

export default App;
