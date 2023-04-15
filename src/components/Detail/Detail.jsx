import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Detail = () => {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = '9aec2138fa98.e2377cc1baf93279dd94';

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
            setCharacter(response.data)
        );
    }, [detailId]); 

    return(
        <div>
            {character.name ? (
                <>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p> 
                    <img src={character.image} alt="img" />
                </>
            ) : (
            <h3>Loading... </h3>
            )}
        </div> 
    );
};

// pregunta ? positiva : negativa 

export default Detail;