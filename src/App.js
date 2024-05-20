import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: "India",
      }),
    })
      .then((response) => response.json())
      .then((data) => setCities(data.data))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <Weather cities={cities} />
      </main>
    </div>
  );
}

export default App;
