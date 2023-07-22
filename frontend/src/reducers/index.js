import { combineReducers } from "redux";
import tutorials from "./tutorials";

export default combineReducers({
  tutorials,
});

//if you have Auth Reducer that manages authentication logic, you can use combineReducers() like following code:

// import { combineReducers } from "redux";
// import tutorials from "./tutorials";
// import auth from "./auth";

// export default combineReducers({
//   tutorials,
//   auth
// });
