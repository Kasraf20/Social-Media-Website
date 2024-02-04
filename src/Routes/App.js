import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from '../Componets/Navbar';
import Sidebar from '../Componets/Sidebar';
import Footer from '../Componets/Footer';
import PostListProvider from '../Store/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <PostListProvider>
      <div className="App">
        <Navbar/>
        <div className="post-container">
          <Sidebar/>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </PostListProvider>
  );
}

export default App;
