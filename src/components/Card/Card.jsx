import "./Card.css";
import { Modal } from "react-bootstrap";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import More from "../More";



export default function Card({name,universe,alterego,occupation,friends,superpowers,url,info}){
    return(
        <>
          <div className="card">
            <h2 className="card-title">{name}</h2>
            <h6 className="card-subtitle mb-2 text-muted">Вселенная: {universe}</h6>
            <p className="card-text">Альтер Эго: {alterego}</p>
            <p className="card-text">Род деятельности: {occupation}</p>
            <p className="card-text">Друзья: {friends}</p>
            <p className="card-text">Суперсилы: {superpowers}</p>
            <img src={url} alt={name} className="card-img-top" />
            <More name={name} info={info}/>
        </div>
                </>
    )
}

