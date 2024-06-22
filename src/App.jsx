
import "./App.css";
import Card from "./components/Card/Card";
import { json } from "./data";
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  return (
    <>
    <div className="card-container">
      {json.map((item) => {
        return <Card key={uuidv4()} {...item} />;
      })}
    </div>
    </>
  );
}


