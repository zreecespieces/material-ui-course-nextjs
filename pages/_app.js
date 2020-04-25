import React from "react";
import ReactGA from "react-ga";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/Theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";
import Fonts from "../src/ui/Fonts";

import { LazyLoadComponent } from "react-lazy-load-image-component";

ReactGA.initialize("UA-154916062-1");

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = { value: 0, selectedIndex: 0 };
  }

  setValue = index => {
    this.setState({ value: index });
  };

  setSelectedIndex = index => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    Fonts();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={Theme}>
          <Header
            value={this.state.value}
            setValue={this.setValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Component
            {...pageProps}
            setSelectedIndex={this.setSelectedIndex}
            setValue={this.setValue}
          />
          <LazyLoadComponent threshold={400}>
            <Footer
              setSelectedIndex={this.setSelectedIndex}
              setValue={this.setValue}
            />
          </LazyLoadComponent>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
