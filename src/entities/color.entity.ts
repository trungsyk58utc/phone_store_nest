import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'colors' })
export class Color extends AbstractEntity<Color> {
  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'value' })
  value: string;
}
