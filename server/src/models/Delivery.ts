import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';
import Service from './Service';

@Entity('deliveries')
class Delivery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  UserId: User;

  @Column()
  deliveryman_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'deliveryman_id' })
  DeliverymanId: User;

  @Column()
  service_id: string;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  ServiceId: Service;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Delivery;
