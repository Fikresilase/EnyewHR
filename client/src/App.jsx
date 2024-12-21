import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./components/utils/AuthContext";
import Header from "./components/header";
import Hero from "./components/hero";
import Students from "./components/students";
import Instructors from "./components/instructors";
import Footer from "./components/footer";
import Materials from "./components/materials";
import LearningMaterials from "./components/materials/learningmaterilas";
import ElectronicMaterials from "./components/materials/electronicmaterilas";
import VideoMaterials from "./components/materials/videomaterials";
import AudioMaterials from "./components/materials/audiomaterials";
import LightMaterials from "./components/materials/lightmaterials";
import CommunicationMaterials from "./components/materials/communicationmaterials";
import Level1 from "./components/materials/level1";
import Level2 from "./components/materials/level2";
import Level3 from "./components/materials/level3";
import Level4 from "./components/materials/level4";
import Tests from "./components/tests";
import Signup from "./components/signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/utils/protectedroutes";
import ManageMaterials from "./components/manageelEctronicMaterials";
import AddElectronics from "./components/materials/manageem/addElectronics";
import AddLearning from "./components/materials/manageem/addLearning";
import AudioTest from "./components/tests/audio";
import Current from "./components/current/current";
import CurrentAudio from "./components/current/audio";
import VideoTest from "./components/tests/video";
import LightTest from "./components/tests/light";
import CameraTest from "./components/tests/camera";
import RfTest from "./components/tests/RF";
import ItTest from "./components/tests/BroadcastIT";
import EditingTest from "./components/tests/editingandgraphics";
import AddTest from "./components/materials/manageem/addtest";
import CurrentVideo from "./components/current/video";
import CurrentIt from "./components/current/it";
import CurrentLight from "./components/current/light";
import CurrentEditing from "./components/current/editing";
import CurrentCamera from "./components/current/camera";
import CurrentRf from "./components/current/rf";

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
              <Students />
              <Instructors />
              <Footer />
              {/* <Route path="/tests" element={<Tests />}  */}
            </>
          }
        />

        {/* Route for the Materials component */}
        {/* <Route path="/tests" element={<Tests />} /> */}

        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        {/* <Route path="/audio" element={<AudioTest />} /> */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/learningmaterials" element={<LearningMaterials />} />
        <Route path="/electronicmaterials" element={<ElectronicMaterials />} />
        <Route path="/videomaterials" element={<VideoMaterials />} />
        <Route path="/audiomaterials" element={<AudioMaterials />} />
        <Route path="/lightmaterials" element={<LightMaterials />} />
        <Route
          path="/communicationmaterials"
          element={<CommunicationMaterials />}
        />
        <Route path="/current" element={<Current />} />
        <Route path="/currentAudio" element={<CurrentAudio />} />
        <Route path="/currentVideo" element={<CurrentVideo />} />
        <Route path="/currentIt" element={<CurrentIt />} />
        <Route path="/currentLight" element={<CurrentLight />} />
        <Route path="/currentEditing" element={<CurrentEditing />} />
        <Route path="/currentCamera" element={<CurrentCamera />} />
        <Route path="/currentRf" element={<CurrentRf />} />

        {/* Login and Signup Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* protected routes */}
        <Route
          path="/tests"
          element={
            <ProtectedRoute>
              <Tests /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />

<Route
          path="/audio"
          element={
            <ProtectedRoute>
              <AudioTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/video"
          element={
            <ProtectedRoute>
              <VideoTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/light"
          element={
            <ProtectedRoute>
              <LightTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/camera"
          element={
            <ProtectedRoute>
              <CameraTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/rf"
          element={
            <ProtectedRoute>
              <RfTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/it"
          element={
            <ProtectedRoute>
              <ItTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/editing"
          element={
            <ProtectedRoute>
              <EditingTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
<Route
          path="/addtest"
          element={
            <ProtectedRoute>
              <AddTest /> {/* This component is protected */}
            </ProtectedRoute>
          }
        />
{/*  */}

        <Route
          path="/manageMaterials"
          element={
            <ProtectedRoute>
              <ManageMaterials /> {/* Protected Route 2 */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/addelectronics"
          element={
            <ProtectedRoute>
              <AddElectronics /> {/* Protected Route 2 */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/addlearning"
          element={
            <ProtectedRoute>
              <AddLearning /> {/* Protected Route 2 */}
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
    // </AuthProvider>
  );
}

export default App;
