import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {});

usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {},
  
);

export default usersRouter;
