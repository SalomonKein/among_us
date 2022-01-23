import {IUser} from "./../types/user.type";
import User from "../models/User";

export default class UserService {
  async findAll() {
    const users = await User.find({});
    return users;
  }
  async create(props: IUser) {
    const user = new User({
      email: props.email,
      password: props.password,
      avatar: props.avatar,
    });
    await user.save();
    return user;
  }
  async delete(id: string) {
    console.log(id, "deleted");
    const user = User.findByIdAndRemove(id);
    return "user is deleted";
  }
}
