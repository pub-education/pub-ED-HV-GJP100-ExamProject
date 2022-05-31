# Projekt Kurs GJP100 Högskolan Väst VT 2022.

##Av Chris Johannesson

Bygger ett program som kommer att visa samtliga övningar och lösningar till de problem som angivits i respektive modul. Pga min olycka och konvalecens så kommer jag bara att ta med Modul 1 och 2.

Idén till projektet var att skapa ett enkelt sätt att kunna visa alla uppgifter med dels frågeställningen, koden till lösningen och hur lösningen fungerar i praktiken allt i en SPA (Single Page Application).
Eftersom jag skrivit en hel del i react så valde jag att använda det ramverket för lösningen.
Vi använder oss också av Babel för transpiling och läsa in css, html, JSX och JS och lägga det i build-filen.
Vi använder oss av Webpack dels för att kontrollera Babel och dels Webpacks development server för att köra applikationen.

UI är intuitivt och använder sig av radio buttons både för val av modul och för övning i vald modul.

Vi använder inte scriptet create-react-app utan gör det manuellt istället med att installera vad vi behöver. Det enda som riktigt behövs för en react app är react och react-dom. I övrigt så instalerar vi också webpack, webpack.cli och webpack-dev-server och för babel framför allt @babel/core, @babel/preset-react och @babel/preset-env samt ett antal loaders för olika ändamål enligt package.json filen. Babels configuration återfinns i .babelrc filen och webpack konfigurationen finns i webpack.config.js.

Vi använder oss av den lite modernare react varianten med [hooks](https://reactjs.org/docs/hooks-intro.html). Framför allt så använder vi [useState()](https://reactjs.org/docs/hooks-state.html) och [useEffect()](https://reactjs.org/docs/hooks-effect.html) hookarna för att använda som persistent memory och kontrollera rendering i react. Som definierat i App.js så har vi 3 olika huvuddelar i sidan. Det är Navigation som först blir synlig då datan har laddats, Solution blir synlig då någon uppgift från Navigation har valts, samt en Footer.

All data för html, exekverbar kod och uppgifterna finns i en JSON fil i public/data foldern data.json. Vi har också en css folder i public för alla stylesheets och en src folder med en helper.js för en av uppgifterna.

Vi har alla våra komponenter i src/component foldern. Det är Navigation.js, Footer.js, ModuleItem.js, NavItem.js och Solutions.js.

Navigation filen använder sig av komponenterna ModuleItem för att skapa huvudmemnyn där man väljer vilken modul man vill titta på och NavItem för att välja vilken uppgift man vill se frågeställning, lösning och en praktisk demonstration av lösningen som den ter sig i en browser.

Solution är navet i hela sidan då det är där som all data från data.json placeras in i de tre områdena Assignment, Solution code och OUtput from code. Vi använder oss av ett iframe element då man kan ladda en hel html sida i den. Här så assimilerar vi html kod och javascripts koden till ett html dokument i variabeln html som sedan laddas med srcDoc attributet in i iframe.

Info:
För att kunna installera och köra projektet så rekomenderas node v17.3.0 jag rekomenderar också att man installerar nvm [nvm](https://github.com/nvm-sh/nvm) för att kunna jobba med olika versioner av node.

Packa upp zip filen och kör npm install i roten. Då installeras alla dependencies i node_modules foldern som inte skickas med pga storleken. Därefter så startas programmet med att man kör npm run app.

Referenser:
Alla moduler installerade via npm install cli med dokumentation från [npm packages](https://docs.npmjs.com/packages-and-modules)
react från [react](https://reactjs.org/)
react-dom från [react-dom](https://reactjs.org/docs/react-dom.html#gatsby-focus-wrapper)
webpack documentation from [Webpack docs](https://webpack.js.org/concepts/)
Babel from [babel docs](https://babeljs.io/docs/en/)
