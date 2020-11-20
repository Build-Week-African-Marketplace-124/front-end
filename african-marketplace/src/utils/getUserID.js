import jwt_decode from "jwt-decode";

function getUserID(token) {
//   let token = localStorage.getItem("token");
  if (token) {
    let decoded = jwt_decode(token);
    return decoded.subject;
  }
}

export default getUserID;