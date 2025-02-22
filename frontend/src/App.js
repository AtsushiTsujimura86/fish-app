import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React, {useState, useEffect} from 'react';
import CreateFishModal from './Components/CreateFishModal';
import FishList from './Components/FishList';
import useFish from './Components/useFish';
import useModalShow from './Components/useModalShow';


function App() {
  const [showModal, handleShowModal] = useModalShow()
  const [fishList, addFish] = useFish()
  return (
    <div className="App">      
        <Header handleShowModal={handleShowModal} />
        <div className="bg-dark min-vh-100 w-100">
        {/* modal */}
        <CreateFishModal showModal={showModal} handleShowModal={handleShowModal}/>        
        <FishList />
        </div>
    </div>
  );
}

export default App;
