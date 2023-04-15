import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'


function App() {


   //?HOOKS
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]); // agrego el navigate para q no salga la warning



   //? CREDENCIALES FAKE
   const username = "jvega@mail.com";
   const password = "mipass123";
   


   //? EVENT HANDLER
   const onSearch = (id) => {
      const URL_BASE = "https://be-a-rym.up.railway.app/api"
      const KEY = '9aec2138fa98.e2377cc1baf93279dd94'
      
      if(characters.find((char) => char.id === id)) {
         return alert('Personaje Repetido');
      }

      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      //fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               // setCharactes([...characters, data]); otra forma 
            } else {
               window.alert('Algo salió mal');
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   const login = (userData) => {
      if(userData.username === username && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else {
         alert('Credenciales falsas')
      }
   };



   //? RENDER 
   return (
      <div className = 'App' style = {{ padding: "25px" }}>
         <div className = {style.nav}>
            { pathname !== '/' && <Nav onSearch={onSearch}/>}
         </div>

         <div>
            <Routes>
               <Route path='/' element={<Form login={login} />} />

               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
               
               <Route path='/about' element={<About />} />

               <Route path='/detail/:detailId' element={<Detail />} />          
            
            </Routes>
         </div>
         
      </div>
   );
}

export default App;
