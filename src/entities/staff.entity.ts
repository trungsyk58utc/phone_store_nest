import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'staffs' })
export class Staff extends AbstractEntity<Staff> {
  @Column({ name: 'account', nullable: false })
  account: string;

  @Exclude({ toPlainOnly: true })
  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'frist_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone' })
  phone: string;
}
