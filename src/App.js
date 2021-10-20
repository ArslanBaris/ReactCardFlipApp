import React from "react";

// Components
import CardList from "./components/CardList";

// Contexts
import ChanelContextProvider from "./contexts/ChanelContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ChanelContextProvider>
        <CardList />
      </ChanelContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
