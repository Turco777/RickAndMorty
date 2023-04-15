import {useState} from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   
   const[id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.bar}>
         <input type='search' onChange = {handleChange} className={style.searchInput}/>
         <button onClick={() => onSearch(id)} className={style.searchButton}>Agregar</button>
      </div>
   );
}
