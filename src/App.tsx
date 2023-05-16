import TodoPage from "components/pages";
import { useAppStateService, useTodoStateService } from "hooks";
import React, { useEffect } from "react";

const App: React.FC = () => {
  const { isAppInitialized, dispatchAppInitialized } = useAppStateService();
  const { dispatchReadyInitializeTodoState } = useTodoStateService();
  console.log("App");

  useEffect(() => {
    console.log("App useEffect");
    console.log("isAppInitialized2: " + isAppInitialized);
    if (!isAppInitialized) {
      dispatchAppInitialized();
      dispatchReadyInitializeTodoState();
    }
  });

  return <TodoPage />;
};

export default App;
