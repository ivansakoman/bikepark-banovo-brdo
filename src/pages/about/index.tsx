import heroImg from "./../../assets/photos/about.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="container--primary">
        <div className="header__divider"></div>
        <div className="img__wrapper">
          <img
            className="img img--primary mb-8"
            src={heroImg}
            alt="Grablje na novoj stazi banovog brda"
          />
          <div className="img__border"></div>
        </div>
        <h1 className="type__h1 mb-12">Dobrodošli u Bikepark Banovo Brdo!</h1>
        <div className="about__grid">
          <div>
            <h2 className="type__h2">Naša Priča</h2>
            <p className="type__p type--bold">
              2012 godine, članovi BK Osijek krenuli su s neobičnim projektom -
              istraživanje i gradnja staza za brdski biciklizam na Banovom Brdu.
              Ono što je počelo kao šetnja i entuzijazam par pojedinaca, ubrzo
              je preraslo u ozbiljan poduhvat stvaranja pravog biciklističkog
              raja.
            </p>
          </div>
          <div>
            <h2 className="type__h2">Trail Graditelji</h2>
            <p className="type__p type--bold">
              Srce i duša naših staza su Tihomir Kovač i Ivan Sakoman,
              strastveni trail builderi koji su posvetili svoje vrijeme obnovi
              starih i izgradnji novih staza. Njihova kreativnost i predanost
              osiguravaju da svaki pedalj na Banovom Brdu bude iskustvo za
              pamćenje. Ne smijemo zaboraviti ni ostatak kluba koji povremeno
              pomažu u izgradnji i održavanju staza. Njihova podrška je
              neprocjenjiva, i na tome im veliko hvala.
            </p>
          </div>
          <div>
            <h2 className="type__h2">Od Zapuštene do Osvježene</h2>
            <p className="type__p type--bold">
              Iako su neke staze zarasle u korov tijekom godina, od Rujna 2023.
              godine intenzivno radimo na njihovoj obnovi i izgradnji novih.
              Cilj nam je stvoriti raznolike staze prilagođene svim vještinama,
              od laganih vožnji do adrenalinskih izazova.
            </p>
          </div>
          <div>
            <h2 className="type__h2">Raznolikost našeg Bikeparka</h2>
            <p className="type__p type--bold">
              Želimo potaknuti razvoj brdskog biciklizma u Slavoniji i pokazati
              svima da se u Baranji može pronaći mjesto za avanturu. Bikepark
              Banovo Brdo će ponuditi staze za sve - od početnika do iskusnih
              biciklista željnih izazova.
            </p>
          </div>
          <div>
            <h2 className="type__h2">Pridružite Nam Se</h2>
            <p className="type__p type--bold">
              Ako ste ljubitelj biciklizma ili tražite novi izazov, dođite i
              istražite naše staze. Postanite dio zajednice entuzijasta koji
              vjeruju da se u Slavoniji krije pravi dragulj za ljubitelje
              brdskog biciklizma. Banovo Brdo - mjesto gdje rad susreće zabavu!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
