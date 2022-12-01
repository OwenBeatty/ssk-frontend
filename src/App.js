import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import NewGameArea from './components/NewGameArea';
import Signup from './components/Signup';
import Login from './components/Login';
import History from './components/History';
import { useAuthContext } from "./hooks/useAuthContext";
import Footer from './components/Footer';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<History />}
        />
        <Route
          path="/newgame"
          element={<NewGameArea />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        /><Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
