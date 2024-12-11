# Hausaufgabe WID 2 - JavaScript

__Szenario:__
Morgen sollst du in einer Bürgerversammlung Fragen zu Strassenverkehrsunfällen im Kanton Basel-Stadt beantworten. Die IT schickt dir als Grundlage einen Datenbankauszug (als JSON Datei), jedoch gibt es keine Auswertung und keine Dokumentation zu den Daten. Für eine manuelle Datenauswertung ist der Datensatz zu gross, für eine aufwändige Visualisierung reicht die Zeit nicht mehr - aber zum Glück gibt es ja noch JavaScript... ;-)

### Vorbereitung / Vorgehen
Verschaffe dir zunächst einen Überblick über die Dateien in diesem Projekt:

- App.js: In dieser Datei sollst du deinen Javascript Code (= Lösungen) schreiben
- Beispiel.js: Zeigt dir, wie du JavaScript im JSX-Kontext schreibst und Resultate im Preview (linke Seite) anzeigen kannst. Denk daran, dass im "return-Block" Html-Elemente erwartet werden, aber du mit {} in den JS-Kontext wechseln kannst. Damit lassen sich Werte oder Ausdrücke (Expressions) direkt in HTML verwenden.
- unfaelle.json: Dieses ist die Datengrundlage, auf die sich die Aufgaben beziehen. Schaue dir die Datei an. Es handelt sich um eine Sammlung (Array) von Unfällen (Objekten). Die Objekte haben immer die selben Eigenschaften. Es genügt also, die Eigenschaften des ersten Objekts zu betrachten, um die später die entsprechenden Abfragen zu schreiben. 

Lies dir den Rest dieser Aufgabe (und die Tips!) vollständig durch, bevor du mit der Bearbeitung beginnst.

#### JavaScript in JSX

Schreibe deinen Code in die App.jsx Datei und innerhalb der `export default function App() {}` Komponente. Javascript wird überwiegend im _Funktionskörper_, also vor dem return-Statement geschrieben. Ausdrücke/Expressions (die einen Wert zurückgeben) oder Variablen (welche ebenfalls eine Wert zurückgeben) können auch innerhalb des return-Statements stehen. Ebenfalls können hier Funktionen aufgerufen werden. In jedem Fall muss ein solcher JS-Code immer innerhalb von `{}`-Klammern geschrieben werden. Siehe dazu die Beispiel.js - Datei.

Was bedeutet das für die Hausaufgabe?
- Zur Lösung der Aufgaben solltest du Funktionen gesammelt im Funktionskörper der App()-Komponente schreiben.
- Innerhalb des return-Statments / HTML Codes rufst du die Funktion auf, sodass ein Wert zurück gegeben wird. Achte darauf, dass das HTML "wohlgeformt" bleibt.


### Aufgaben:
Hinweis: Mit _"Beantworte die Frage"_ ist jeweils gemeint, dass das Ergebnis in JSX / im Preview auf der rechten Seite angezeigt wird. Optional kannst du Text, HTMl und CSS verwenden, um die Antwort zu stilisieren. 

##### Aufgabe 1
Nutze die `length` Eigenschaft von Arrays um die Gesamtanzahl von Unfällen heraus zu finden. 
Beantworte dann die Frage: "Wieviele Unfälle sind im Datensatz gespeichert?"


##### Aufgabe 2
Finde den Zeitraum der im Datensatz gespeicherten Unfälle, dh. das erste und letzte Jahr (Monat / Tag sind nicht nötig). Im Datensatz werden Jahre als "String" gespeichert, aber du kannst diese mit parseInt (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) in Zahlenwerte konvertieren. Schaue dir das `Math`Objekt an. Je nach Vorgehen benötigst du eventuell auch Array-Destrukturierung (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Beantworte dann die Frage: "Welcher Zeitraum ist im Datensatz abgebildet?"


##### Aufgabe 3
a) Schreibe eine Funktion, die feststellt, welche Typen von Unfallschwere (Eigenschaft: "schwere") es gibt. Diese sollen gesammelt und als Array ausgegeben werden, wobei jede vorhandene Unfallschwere im Zielarray nur genau einmal vorkommt.

Beantworte dann die Frage: "Welche Schweregrade gibt es, bzw. wie werden diese im Datensatz genannt?"


b) Schreibe eine Funktion, die feststellt welche Unfalltypen (Eigenschaft: "typ") es gibt. Diese sollen als Array ausgegeben werden, wobei jeder vorhandene Unfalltype im Zielarray nur genau einmal vorkommt.

Beantworte dann die Frage: "Welche Unfalltypen gibt es, bzw. wie werden diese im Datensatz genannt?"


c) Deine Funktionen in a und b machen praktisch das Gleiche, nur für unterschiedliche Daten.
Schreibe eine Funktion, welche sowohl a und b berechnen kann, wenn die gewünschte Eigenschaft ("schwere" oder "typ") als Argument übergeben werden. Verwende dazu innerhalb der Funktion eine Kondition die den Parameter überprüft und das passende Ergebnis zurück gibt. Demonstriere, dass deine Funktion die jeweils richtigen Ergebnisse ausgibt.

d) OPTIONAL: Wie liesse sich die Funktion noch weiter generalisieren und für weitere Eigenschaften nutzen? 
Demonstriere die erfolgreiche Umsetzung mithilfe der Strasseart (Eigenschaft: "strasseart") und zeige die Ergebnisse an.


##### Aufgabe 4
Filter den Datensatz und erstelle jeweils eine neuen Array der nur Unfälle mit:
1) Fussgänger-Beteiligung ("fussgg_bet" ist true)
2) Velo-Beteiligung ("fahrrd_bet" ist true)
3) Auto- Beteiligung (Tip: Weder "fussgg_bet" true, noch "fahrrd_bet" true, noch "motord_bet" true)
enthält.

Beachte, dass im Datensatz diese Information vom Datentyp String ist (und nicht Boolean).

Beantworte die Fragen:
a) Wieviele Unfälle gibt es jeweils für Fussgänger / Velo  / Auto? Gib eine absolute Zahl an und berechne zudem den Anteil (%) an der Gesamtzahl an Unfällen.
b) Gab es Unfälle auf einer Autobahn, bei denen Fussgänger beteiligt waren? Wie schaut es bei Velos aus? Gib jeweils ein "Ja" oder "Nein" aus.
c) Gab es 2020 einen Autounfall auf einer Autobahn, der an einem Mittwoch im September oder Oktober geschah? Schreibe eine entsprechende Kondition mit logischen Operatoren. Falls ja, welche id (id_unfall) hatte der Unfall?.


### Tips:
- Du importierst und arbeitest mit dem JSON (JavaScript Object Notation) Format, welches auch von Servern (Backend) verwendet wird um Daten an den Client (Frontent) zu senden. 
- Auch wenn JSON einige spezielle Anforderungen hat (z.B. Anführungszeichen für die Schlüssel), so kannst du dir JSON als Array und / oder Objekt vorstellen und Funktionen und Methoden für diese Datenstrukturen verwenden. 
- Schaue dir vor allem `map()`, `filter()`, `find()`, `includes()` als wichtige Array Methoden an. `forEach()`, `every()` und `some()`können ebenfalls sehr nützlich sein (siehe Links). Auf `for` oder `while` -Loops solltest du hingegen besser verzichten.
- JSON lässt sich einfach in - und von - einem String konvertieren. Wirf einen Blick auf die Methoden `JSON.parse()` und `JSON.stringify()` (siehe Links). 

### Regeln

Bitte halte dich an diese Regeln:

- Du bearbeitest die Aufgaben eigenständig. 
- Keine Benutzung von externen Hilfsmitteln / Tools um den Code oder eine Lösung zu generieren, kein Copy & Paste von ausserhalb der Sandbox.  

### Links:

- JS Referenz: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- JSON: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

