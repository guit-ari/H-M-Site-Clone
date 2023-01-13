import "./Pacchetto.css";
const items=["Uomo","Donna","Bambino"];
export default function Pacchetto() {
  return (
    <>
      <div className="pacchetto">
        {items.map((e)=>{
            return <div className="pacchetto_item">{e}</div>
        })}
      </div>
    </>
  );
}
