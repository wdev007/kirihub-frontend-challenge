import { IAuthService } from "../types/auth.service.interface";
import api from "../../../shared/services/api.http";

const authService: IAuthService = {
  signIn: async (username: string) => {
    const userExists = await api.get(`/users?username=${username}`);

    if (userExists.data.length) return userExists.data[0];

    const { data } = await api.post("/users", {
      username,
    });

    return data;
  },
};

export default authService;
