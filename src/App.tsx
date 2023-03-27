import '@/index.css';
import NotFound from '@components/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Walkingdog from './pages/Walkingdog';
import Header from '@components/Header';
import MungWiki from '@components/MungWiki';
import IndexWalking from './pages/walking/IndexWalking';
import NewPost from './pages/walking/NewPost';
import ReadPost from './pages/walking/ReadPost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<MungWiki />} />
        <Route path="/walking" element={<IndexWalking />} />
        <Route path="/walking/posts/:id" element={<ReadPost />} />
        <Route path="/walking/newpost" element={<NewPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
