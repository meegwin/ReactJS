import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyword } from "./modules/action";
class Search extends Component {
  handleOnChange = (e) => {
    const { value } = e.target;
    this.props.getKeyWord(value);
  };
  render() {
    return (
      <input
        onChange={this.handleOnChange}
        type="text"
        className="form-control mb-3 w-50"
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getKeyWord: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};
export default connect(null, mapDispatchToProps)(Search);
