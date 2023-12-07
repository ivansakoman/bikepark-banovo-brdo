import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__col">
            <h4 className="footer__title">Kontaktirajte nas</h4>
            <div className="footer__text">Adresa: Banovo Brdo, Baranja</div>
            <div className="footer__text">Telefon: 098987654321</div>
            <div className="footer__text">E-mail: info@bikapark.hr</div>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Poveznice</h4>
            <div>
              <NavLink to={"/track"}>Staze</NavLink>
            </div>
            <div>
              <NavLink to={"/about"}>O nama</NavLink>
            </div>
            <div>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </div>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Pratite nas</h4>
            <div className="footer__text">Facebook</div>
            <div className="footer__text">Instagram</div>
            <div className="footer__text">Twitter</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
