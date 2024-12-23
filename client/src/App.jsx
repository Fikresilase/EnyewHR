import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Instructors from "./components/logging";
import Footer from "./components/footer";
import Signup from "./components/signup";
import Login from "./components/Login";

import About from "./components/About";
import Members from "./components/members";
import AddEdit from "./components/addEdit";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Instructors />
              <Footer />
              </>
          }
        />
        <Route path="/members" element={<Members />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addedit" element={<AddEdit />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
