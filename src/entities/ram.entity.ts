import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'rams' })
export class Ram extends AbstractEntity<Ram> {
  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'value' })
  value: string;
}
