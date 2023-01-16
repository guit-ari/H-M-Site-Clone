import "./Pacchetto.css";
const items=["Uomo","Donna","Bambino","Neonato","Beauty","Sport","Saldi"];
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