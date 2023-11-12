import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'memories' })
export class Memory extends AbstractEntity<Memory> {
  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'value' })
  value: string;
}
