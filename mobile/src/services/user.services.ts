import {HttpSerivce} from "./http.services";

export class UserService extends HttpSerivce {
  constructor() {
    super();
  }
  async getUser(id: string) {
    const user = await this.get({
      url: `user/${id}`,
    });
    return user;
  }
  async createUser(user: any) {
    const userCreate = await this.post({
      url: "user",
      data: user,
      headers: undefined,
    });
    return userCreate;
  }
}
