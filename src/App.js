import React from "react";

// Components
import CardList from "./components/CardList";
import Footer from "./components/Footer";

// Contexts
import ChanelContextProvider from "./contexts/ChanelContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ChanelContextProvider>
        <CardList />
        <Footer />
      </ChanelContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
