import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Brand } from './brand.entity';
import { Color } from './color.entity';
import { Ram } from './ram.entity';
import { Memory } from './memory.entity';
import { PriceType } from './priceType.entity';

@Entity({ name: 'smart_phone' })
export class SmartPhone extends AbstractEntity<SmartPhone> {
  @Column({ name: 'model', nullable: false })
  model: string;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @Column({ name: 'brand_id', nullable: true })
  brandId: number;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'color_id' })
  color: Color;

  @Column({ name: 'color_id', nullable: true })
  colorId: number;

  @ManyToOne(() => Ram)
  @JoinColumn({ name: 'ram_id' })
  ram: Ram;

  @Column({ name: 'ram_id', nullable: true })
  ramId: number;

  @ManyToOne(() => Memory)
  @JoinColumn({ name: 'memory_id' })
  memory: Memory;

  @Column({ name: 'memory_id', nullable: true })
  memoryId: number;

  @Column()
  price: string;

  @ManyToOne(() => PriceType)
  @JoinColumn({ name: 'price_type_id' })
  priceType: PriceType;

  @Column({ name: 'price_type_id', nullable: true })
  priceTypeId: number;
}
