import BanovoBrdoSign from "./components/banovo-brdo-sign";
import Hero from "./components/hero";
import WorkInProgressSign from "./components/work-in-progress-sign";

const HomeAlt = () => {
  return (
    <>
      <div className="container--hero">
        <Hero />
      </div>
      <div className="container--primary">
        <div className="section">
          <div className="section__img">
            <BanovoBrdoSign />
          </div>
          <div className="section__text">
            <h4 className="type__h2">#BikePark</h4>
            <p className="type__p">
              U srcu Baranje, tik uz Osijek, gradimo Bike Park koji će
              redefinirati MTB u Slavoniji. Suradnja biciklističkog kluba i
              strasti prema dvokotačima stvorila je oazu za sve ljubitelje
              brdskog biciklizma.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section__img">
            <WorkInProgressSign />
          </div>
          <div className="section__text">
            <h4 className="type__h2">Working on it</h4>
            <p className="type__p">
              Glavna zvijezda našeg parka je XCO staza koja se trenutno obnavlja
              kako bismo je pripremili za nezaboravne utrke u idućoj sezoni.
              Doživite brzinu, izazov, i adrenalin na stazi koja će biti jedna
              od najboljih u Hrvatskoj.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAlt;
