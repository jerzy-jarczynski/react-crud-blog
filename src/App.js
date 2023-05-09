import { Routes, Route } from 'react-router-dom';
// pages
import Home from "./components/pages/Home/Home";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
// views
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
// bootstrap
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;