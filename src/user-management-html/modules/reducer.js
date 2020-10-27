import {
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
  SUBMIT_USER,
  GET_KEYWORD,
} from "./constant";

//tao ra cai state
let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],
  userEdit: null, // userEdit: null => Add ; userEdit : !null =>Edit
  keyword: "",
};
// tao ra 1 child reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      console.log(action);
      let userList = [...state.userList];
      userList = userList.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.userList = userList;
      return { ...state };
    }
    case ADD_USER: {
      const user = { ...action.payload, id: Math.random() };
      let userList = [...state.userList, user];
      state.userList = userList;
      return { ...state };
    }
    case EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }
    case SUBMIT_USER: {
      /**
       * 2 hướng
       * Nếu id tồn tại
       * - Edit
       * Nếu id k tồn tại
       * - Add
       */
      let index = -1;
      if (action.payload.id) {
        index = state.userList.findIndex((item) => {
          return item.id === action.payload.id;
        });
        if (index !== -1) {
          let userList = [...state.userList];
          userList[index] = action.payload;
          state.userList = userList;
        } else {
          //ADD
          const user = { ...action.payload, id: Math.random() };
          let userList = [...state.userList, user];
          state.userList = userList;
        }
      }
      return { ...state };
    }
    case GET_KEYWORD: {
      console.log(action);
      state.keyword = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
