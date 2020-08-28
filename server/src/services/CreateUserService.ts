import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
  avatarFileName: string;
  is_motoboy: boolean;
  uf: string;
  city: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    whatsapp,
    avatarFileName,
    is_motoboy,
    uf,
    city,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({ where: { email } });

    if (checkUserExists) throw Error('Email adress already used');

    const checkWhatsappExists = await usersRepository.findOne({
      where: { whatsapp },
    });

    if (checkWhatsappExists) throw Error('Whatsapp number already used');

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      whatsapp,
      avatar: avatarFileName,
      is_motoboy,
      uf,
      city,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
