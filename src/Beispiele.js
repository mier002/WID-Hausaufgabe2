import "./styles.css";

export const Beispiele = () => {
  // Registriere deine Variablen bzw. Funktionen  im Funktionskörper von App()

  const testVariable = "ein Wert";

  const testFunction = () => {
    const testArray = [1, "b"];
    return testArray;
  };

  // ... dein Code

  return (
    <div className="App">
      <h5>Beispiele</h5>
      <h3>Lösung 0:</h3>
      {/* Rufe hier die Variablen bzw. Funktionen auf. Vergiss die geschweiften und runden Klammern nicht */}

      <div>Die Variable hat den Wert: {testVariable}</div>

      <div>
        Der Array sieht so aus:
        <span style={{ color: "blue" }}>{testFunction()}</span>
      </div>

      <div>
        <ul style={{ textAlign: "left" }}>
          Aus dem Array lässt sich auch direkt eine Liste erzeugen:
          {testFunction().map((eintrag) => (
            <li>{eintrag}</li>
          ))}
        </ul>
      </div>
      <hr />

      {/*
       *
       * Deine Lösungen.
       *
       *
       */}
    </div>
  );
};
