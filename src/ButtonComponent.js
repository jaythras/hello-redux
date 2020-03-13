import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggle } from "./actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggle }, dispatch);
}

const ButtonComponent = props => {
  return (
    <AwesomeButton type="primary" onPress={props.toggle}>
      Toggle!
    </AwesomeButton>
  );
};

export default connect(null, mapDispatchToProps)(ButtonComponent);
