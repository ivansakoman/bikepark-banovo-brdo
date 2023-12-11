import { IframeHTMLAttributes } from "react";

const ContactPage = () => {
  const mapConfig: IframeHTMLAttributes<HTMLIFrameElement> = {
    className: "contact__map",
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d759.7122754636655!2d18.69070492854609!3d45.79748093319883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ3JzUwLjkiTiAxOMKwNDEnMjguOSJF!5e1!3m2!1sen!2shr!4v1702261810018!5m2!1sen!2shr",
    allowFullScreen: false,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };
  return (
    <>
      <div className="container--primary">
        <div className="header__divider"></div>
        <h1 className="type__h1 mb-8 pt-20">Kontakt</h1>
        <div className="contact__grid">
          <div>
            <h2 className="type__h2 mb-8">Ovdje nas možete pronaći</h2>
            <p className="type__p type--bold mb-12">
              Vaša strast prema biciklizmu je i naša strast. Ako imate bilo
              kakva pitanja, prijedloge ili želite jednostavno podijeliti svoje
              iskustvo s nama, slobodno nas kontaktirajte. Ovdje smo da vam
              pomognemo!
            </p>
          </div>
          <div className="contact__card">
            <h2 className="type__h2 mb-8">Kontakt informacije</h2>
            <p className="type__p">
              <strong>Email:</strong> info@banovobrdo.hr
            </p>
            <p className="type__p">
              <strong>Telefon:</strong> +385 91 234 5678
            </p>
            <p className="type__p">
              <strong>Adresa:</strong> Banovo Brdo, Baranja, Hrvatska
            </p>
          </div>
        </div>
      </div>
      <iframe {...mapConfig}></iframe>
    </>
  );
};
export default ContactPage;
