import "./App.css";
import CircularNavigation from "./components/CircularNavigarion/CircularNavigation";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";

const config = {
  timerConfig: [
    {
      label: "Дней",
      color: "#1eb9ff",
    },
    {
      label: "Часов",
      color: "#ff2972",
    },
    {
      label: "Минут",
      color: "#fee800",
    },
    {
      label: "Секунд",
      color: "#04fc43",
    },
  ],
  timerOrder: ["days", "hours", "minutes", "seconds"],
};

const endDate = "01/01/2025 00:00:00";

function App() {
  return (
    <div className="App">
      <CircularNavigation></CircularNavigation>
      <CountDownTimer config={config} endDate={endDate}></CountDownTimer>
    </div>
  );
}

export default App;
