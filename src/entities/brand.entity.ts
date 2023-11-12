import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'brands' })
export class Brand extends AbstractEntity<Brand> {
  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'value' })
  value: string;
}
