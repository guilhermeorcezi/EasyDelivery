import { getRepository } from 'typeorm';

import Delivery from '../models/Delivery';
import AppError from '../errors/AppError';

interface Request {
  service_id: string;
  description: string;
  deliveryman_id: string;
  user_id: string;
}

class CreateDeliveryService {
  public async execute({
    service_id,
    description,
    deliveryman_id,
    user_id,
  }: Request): Promise<Delivery> {
    const deliveryRepository = getRepository(Delivery);

    const delivery = await deliveryRepository.create({
      service_id,
      description,
      deliveryman_id,
      user_id,
    });

    deliveryRepository.save(delivery);

    return delivery;
  }
}

export default CreateDeliveryService;
