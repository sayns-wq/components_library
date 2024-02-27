import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGear,
  faHome,
  faPhotoFilm,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import CircularNavigation from "./components/CircularNavigarion/CircularNavigation";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import NavigarionTab from "./components/NavigarionTab/NavigarionTab";
import NumberPicker from "./components/NumberPicker/NumberPicker";
import Notification from "./components/Notification/Notification";
const CountDownTimerConfig = {
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

const NavigarionTabConfig = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    text: "Домой",
    link: "#",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    text: "Профиль",
    link: "#",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    text: "Сообщения",
    link: "#",
  },
  {
    icon: <FontAwesomeIcon icon={faPhotoFilm} />,
    text: "Форографии",
    link: "#",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    text: "Настройки",
    link: "#",
  },
];

const NumberPickerConfig = {
  maxValue: 10,
  colors: {
    max: "#ff0000",
    normal: "#0f0",
  },
};
const endDate = "01/01/2025 00:00:00";

const notifivationVariants = [
  {
    variant: "info" as const,
    text: "Вы успешно зарегистрировались",
  },
  {
    variant: "worning" as const,
    text: "Вы не можете регистрироваться",
  },
  {
    variant: "danger" as const,
    text: "Вы не можете регистрироваться",
  },
];
function App() {
  return (
    <div className="App">
      <CircularNavigation></CircularNavigation>
      <CountDownTimer
        config={CountDownTimerConfig}
        endDate={endDate}
      ></CountDownTimer>
      <NavigarionTab config={NavigarionTabConfig} />
      <NumberPicker config={NumberPickerConfig} />
      {notifivationVariants.map((item) => (
        <Notification variant={item.variant} text={item.text} />
      ))}
    </div>
  );
}

export default App;
