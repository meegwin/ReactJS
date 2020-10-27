import React, { Component } from "react";
import { actDelete,actAddUser, actEditUser } from "./modules/action";
import { connect } from "react-redux";
class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user)
            }}
          >
            Edit
          </button>
          <button 
          onClick={()=>{
            this.props.deleteUser(user)
          }}
          className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => {
      dispatch(actDelete(user));
    },
    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};
export default connect(null,mapDispatchToProps)(UserItem);
