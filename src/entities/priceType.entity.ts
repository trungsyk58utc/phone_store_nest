import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'price_types' })
export class PriceType extends AbstractEntity<PriceType> {
  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'value' })
  value: string;
}
