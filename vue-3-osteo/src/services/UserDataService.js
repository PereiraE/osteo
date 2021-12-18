import http from "../http-common";

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class UserDataService {
    signup(data) {
    return http.post("/user/signup", data, config);
    }
    login(data) {
    return http.post("/user/login", data);
    }
}

export default new UserDataService();