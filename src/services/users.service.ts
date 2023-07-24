import IUser from '../interfaces/user.interface';
import userModel from '../models/usersModel';

async function addAUser(userData:IUser) {
  const result = await userModel.create(userData);
  return { result };
}

const toExport = { addAUser };

export default toExport;
