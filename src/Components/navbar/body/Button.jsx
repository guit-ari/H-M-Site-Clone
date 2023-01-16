import { useState } from "react";

export default function Button(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btmimg" onClick={() => setShow(!show)}>
        {" "}
        Aggiungi al carrello{" "}
      </button>{" "}
      {show && <div className="img-result">Prodotto aggiunto al carrello</div>}
    </>
  );
}
