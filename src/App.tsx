import React from 'react';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>

      {/* header section */}
       <Header name={"Ratchanon"} surname={"Niwat"}/>
      <TodoList></TodoList>

      {/* footer section */}
      <Footer name={"Ratchanon"} surname={"Niwat"}/>
      
    </div>
  );
}

export default App;
