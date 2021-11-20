import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />}>
            </Route>
            <Route path="/" >
            </Route>
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
