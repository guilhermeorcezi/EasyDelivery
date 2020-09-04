import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import ShowFavoritedDeliverymanService from '../services/ShowFavoritedDeliverymanService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', upload.single('avatar'), async (request, response) => {
  const {
    name,
    email,
    password,
    whatsapp,
    is_deliveryman,
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
    is_deliveryman,
    uf,
    city,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar '),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json(user);
  },
);

usersRouter.get(
  '/favorites',
  ensureAuthenticated,
  async (request, response) => {
    const showFavoritedDeliveryman = new ShowFavoritedDeliverymanService();

    const logged_user_id = request.user.id;

    const favoritedDeliveryman = await showFavoritedDeliveryman.execute(
      logged_user_id,
    );

    return response.json(favoritedDeliveryman);
  },
);

export default usersRouter;
