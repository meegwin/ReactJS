import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manv: "",
      tennv: "",
      email: "",
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false,
    };
  }
  handleError = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    let mess = value === "" ? name + " không được rỗng" : "";
    let { manvValid, tennvValid, emailValid } = this.state;
    switch (name) {
      case "manv":
        manvValid = mess !== "" ? false : true;
        if (value && value.length < 4) {
          manvValid = false;
          mess = " Độ dài phải lớn hơn 3 ";
        }
        break;
      case "tennv":
        tennvValid = mess !== "" ? false : true;
        break;
      case "email":
        emailValid = mess !== "" ? false : true;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
          mess = "email không đúng !";
        }
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        console.log(this.state);
        this.handleFormValid();
      }
    );
    // if(value == ""){
    //     mess = "kh de rong";
    // }else{
    //     mess = "";
    // }
  };
  handleFormValid = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            {this.state.errors.manv !== "" ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            {this.state.errors.tennv !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            {this.state.errors.email !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
