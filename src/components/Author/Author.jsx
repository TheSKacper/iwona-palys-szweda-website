import React from "react";
import "./author.css";
import photo1 from "../../assets/author/Strona 2 zdjecie 1.JPG";
import photo2 from "../../assets/author/Strona 2 zdjecie 2.JPG";

const Author = () => {
  return (
    <div className="boxMainAuthor">
      <div className="boxAuthor">
      <div className="text">
          <h1 className="h1Author">O autorce...</h1>
          <p className="pAuthor">
            Pierwsze prace malarskie i rysunkowe powstały w ramach
            uczestniczenia w obozie malarskim w Białym Borze z osielowego Koła
            Plastycznego w Tychach. Niestety obrazy i rysunki nie przetrwały do
            teraz, zaginęły gdzieś w składziku Spółdzielczego Klubu
            Młodzieżowego na osiedlu „F”. Myślę, że wtedy to odkryłam, że lubię
            ten rodzaj wyrażania siebie za pomocą barw i swojego stylu, który
            zmienia się i kształtuje do dziś. <br /> <br /> Z nieogarniętej
            dziedziny malarstwa szczególnie sympatyzuję z okresem świetności
            takich malarzy jak Monet, Renoir czy van Gogh przedstawicieli
            „impresjonizmu” i „postimpresjonizmu”. Tłumacząc z łaciny pierwsze z
            nich oznaczało: odbicie, wrażenie, natomiast drugie jest negacją
            pierwszego co w konsekwencji wyrażało poszukiwanie własnego stylu.
            Wpływ tego okresu stał się motorem do namalowania trzech kopii
            obrazów van Gogha. Teraz po wielu próbach poszłam w innym kierunku
            warunkowanym uczuciami i nastrojami. Preferuję technikę olejną
            grubofakturową, która wymaga znacznego nakładu czasu, ale daje też
            możliwości zmiany w trakcie opracowania szczegółowości kompozycji
            obrazu. <br /> <br /> To malarstwo wynika z realizacji marzeń,
            wyobrażeń, ucieczki od szarych pochmurnych, zimnych polskich dni w
            swoisty wymiar przestrzeni ciepłych barw i spokoju. Jest
            spełnieniem. <br /> <br /> Konsekwencją przejścia po ścieżce
            historii przez kolejne obrazy jest znalezienie się w magicznym
            ogrodzie wśród kwiatów…..
          </p>
        </div>
        <div className="photoAuthor">
          <div className="firstPhotoAuthor">
            <img className="imgAuthor" src={photo1} alt="" />
            <h1 className="h1Author">1989</h1>
          </div>
          <div className="secondPhotoAuthor">
            <img className="imgAuthor" src={photo2} alt="" />
            <h1 className="h1Author">2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
