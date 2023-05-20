import TodoPage from "components/pages";
import TestPage from "components/pages/testPage";
import { useAppStateService } from "hooks";
import React, { useEffect } from "react";

const App: React.FC = () => {
  const { isAppInitialized, dispatchAppInitialized } = useAppStateService();

  useEffect(() => {
    console.log("isAppInitialized2: " + isAppInitialized);
    !isAppInitialized && dispatchAppInitialized();
  });

  return <TodoPage />;
};

export default App;
