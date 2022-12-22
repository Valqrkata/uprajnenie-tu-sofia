import { Power } from 'src/powers/power.entity';
import { DataSource } from 'typeorm';
import { Hero } from './hero.entity';

export const heroProviders = [
  {
    provide: 'HERO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Hero),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'POWER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Power),
    inject: ['DATA_SOURCE'],
  },
];
