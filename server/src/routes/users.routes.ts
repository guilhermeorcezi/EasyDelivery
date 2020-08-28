import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', upload.single('avatar'), async (request, response) => {
  const {
    name,
    email,
    password,
    whatsapp,
    is_motoboy,
    uf,
    city,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    whatsapp,
    avatarFileName: request.file.filename,
    is_motoboy,
    uf,
    city,
  });

  delete user.password;

  return response.json(user);
});
/*
usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {},
);
*/
export default usersRouter;
