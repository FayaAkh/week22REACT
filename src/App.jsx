
import "./App.css";
import Card from "./components/Card/Card";
import { json } from "./data";





export default function App() {
  return (
    <>
    <div className="card-container">
    <Card {...json[0]}/>
    <Card {...json[1]}/>
    <Card {...json[2]}/>
    <Card {...json[3]}/>
    <Card {...json[4]}/>
    <Card {...json[5]}/>
    <Card {...json[6]}/>
    <Card {...json[7]}/>
    <Card {...json[8]}/>
    <Card {...json[9]}/>
     </div>
    </>
  );
}


