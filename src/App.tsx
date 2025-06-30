import { Home } from "./pages/Home";

import "./styles/themes.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/taskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
