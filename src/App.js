import { Beispiele } from "./Beispiele";
import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  // Aufgabe 1
  const Laenge = data.length;

  // Aufgabe 2
  const array_zahlen = data
    .map((element) => parseInt(element.jahr))
    .sort((a, b) => a - b);
  const start = array_zahlen[0];
  const ende = array_zahlen[array_zahlen.length - 1];

  // Aufgabe 3a
  const schwere = data.map((eintrag) => eintrag.schwere);
  const unique = [...new Set(schwere)];

  // Aufgabe 3b
  const typ = data.map((eintrag) => eintrag.typ);
  const unique2 = [...new Set(typ)];

  // Aufgabe 3c
  function extract(toextract) {
    let extraction = [];
    data.forEach((incident) => {
      extraction = checkExtraction(incident, extraction, toextract);
    });
    return extraction;
  }

  function checkExtraction(incident, extraction, toextract) {
    if (!extraction.includes(incident[toextract])) {
      extraction.push(incident[toextract]);
    }
    return extraction;
  }

  // Aufgabe 4a - Anzahl der Unfälle
  function fourA() {
    const carIncidents = filterCar().length;
    const bikeIncidents = filterBikeFoot("fahrrad_bet").length;
    const footIncidents = filterBikeFoot("fussgg_bet").length;
    const number = data.length;

    const carPercent = ((carIncidents / number) * 100).toFixed(2);
    const bikePercent = ((bikeIncidents / number) * 100).toFixed(2);
    const footPercent = ((footIncidents / number) * 100).toFixed(2);

    return (
      <div>
        <div>
          Autounfälle: {carIncidents} ({carPercent}%)
        </div>
        <div>
          Fahrradunfälle: {bikeIncidents} ({bikePercent}%)
        </div>
        <div>
          Fussgängerunfälle: {footIncidents} ({footPercent}%)
        </div>
      </div>
    );
  }

  // Aufgabe 4b - Autobahnunfälle
  function fourB() {
    return (
      <div>
        <div>Fahrrad: {filterAutobahn("fahrrad_bet").length}</div>
        <div>Fussgänger: {filterAutobahn("fussgg_bet").length}</div>
      </div>
    );
  }

  // Filter-Funktion für Fahrrad- oder Fußgängerbeteiligung
  function filterBikeFoot(type) {
    const filteredData = data.filter((incident) => incident[type] === "true");
    return filteredData;
  }

  // Filter-Funktion für Autounfälle (ohne Fußgänger, Fahrräder oder Motorräder)
  function filterCar() {
    const filteredData = data.filter(
      (incident) =>
        incident["fussgg_bet"] === "false" &&
        incident["fahrrad_bet"] === "false" &&
        incident["motorrad_bet"] === "false"
    );
    return filteredData;
  }

  // Filter für Autobahnunfälle mit bestimmter Beteiligung
  function filterAutobahn(type) {
    const filteredData = data.filter(
      (incident) =>
        incident.strasseart === "Autobahn" && incident[type] === "true"
    );
    return filteredData;
  }

  // Filter für spezifische Unfälle auf der Autobahn im September/Oktober 2020 am Mittwoch
  function filterMaximum() {
    const filteredData = data.filter(
      (incident) =>
        incident.strasseart === "Autobahn" &&
        parseInt(incident.jahr) === 2020 &&
        (parseInt(incident.monat) === 9 || parseInt(incident.monat) === 10) &&
        incident.wochentag === "3 Mittwoch"
    );
    return filteredData;
  }

  return (
    <div className="App">
      <h1>Hausaufgabe 2 - JavaScript</h1>
      <Beispiele />
      <h1>Aufgabe 1</h1>
      <div>Anzahl Unfälle in Datensatz: {Laenge}</div>

      <h1>Aufgabe 2</h1>
      <div>
        Zeitraum des Datensatz: {start} - {ende}
      </div>

      <h1>Aufgabe 3</h1>
      <h2>a) Es gibt folgende Schweregrade:</h2>
      {unique.map((element, index) => (
        <div key={index}>{element}</div>
      ))}

      <h2>b) Es gibt folgende Unfalltypen:</h2>
      {unique2.map((element, index) => (
        <div key={index}>{element}</div>
      ))}

      <h2>c) Kombinierte Funktion:</h2>
      {extract("typ").map((extraction, index) => (
        <div key={index}>{extraction}</div>
      ))}
      {extract("schwere").map((extraction, index) => (
        <div key={index}>{extraction}</div>
      ))}

      <h1>Aufgabe 4</h1>
      <h2>a) Unfallbeteiligungen</h2>
      {fourA()}

      <h2>b) Autobahnunfälle mit Beteiligung </h2>
      {fourB()}

      <h2>
        c) Unfall auf Autobahn an einem Mittwoch im September/Oktober 2020
      </h2>
      <ul>
        {filterMaximum().map((incident) => (
          <div key={incident.id_unfall}>{incident.id_unfall}</div>
        ))}
      </ul>
    </div>
  );
}
