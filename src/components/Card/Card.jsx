import style from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
      </div>
   );
}
