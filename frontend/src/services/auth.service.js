import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACK_URL}/api/auth/`;

class AuthService {

  async login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        console.log(response.data)
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, lastName, email, password) {
    return axios.post(API_URL + "register", {
      'name': name,
      'lastName': lastName,
      'email': email,
      'password': password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();