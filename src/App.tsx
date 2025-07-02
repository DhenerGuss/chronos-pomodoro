import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/taskContextProvider";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
