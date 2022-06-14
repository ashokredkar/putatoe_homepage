import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Follow from './pages/Follow';
import Chat from './pages/Chat';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/articles' element={<Articles />} />
        <Route exact path='/follow-list' element={<Follow />} />
        <Route exact path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
