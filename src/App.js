import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/post/:id" element={ <Post /> } />
        <Route path="/post/add" element={ <AddPost /> } />
        <Route path="/post/edit/:id" element={ <EditPost /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;