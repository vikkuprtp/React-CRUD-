import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import SignIn from './pages/SignIn';
function App() {
  return (
    <div>
     <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
      </Routes>
     </AuthContextProvider>
    </div>
  );
}
export default App;
