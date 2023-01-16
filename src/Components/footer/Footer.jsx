import "./Footer.css";
export default function Footer() {
  const footerValues = [
    "Reparto",
    "Informazioni sull'azienda",
    "Aiuto",
    "Iscriviti ora",
  ];
  return (
    <>
      <div className="footer">
        {footerValues.map((f) => {
          return <div className="footer_item">{f}</div>;
        })}
      </div>
    </>
  );
}
