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

@Entity('favorites')
class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  logged_user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'logged_user_id' })
  LoggedUser: User;

  @Column()
  favorited_user_id: string;

  @ManyToOne(() => User, user => user.favorite, { eager: true })
  @JoinColumn({ name: 'favorited_user_id' })
  FavoritedUser: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Favorite;
