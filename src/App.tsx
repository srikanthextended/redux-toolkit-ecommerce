import { Component } from "react";
import Home from "./Components/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import { store } from "./Components/redux/store";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const theme = createTheme();
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}
