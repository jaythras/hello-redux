import React from "react";
import ButtonComponent from "./ButtonComponent";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { state };
}

function App(props) {
  return (
    <div className="App" style={props.state.status ? styles.day : styles.night}>
      <ButtonComponent />
    </div>
  );
}

const styles = {
  day: {
    backgroundColor: "#E0FEF0",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  night: {
    backgroundColor: "#1f263b",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default connect(mapStateToProps)(App);
