import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {    
    dark: {bg: '#222529', txt: '#D65F5f'}    
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
