import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {    
    dark: {bg: '#53737a', txt: '#00000'}    
  };


  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
