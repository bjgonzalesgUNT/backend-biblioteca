import { POSITION_REPOSITORY } from '../../core/constants';
import { Position } from './position.entity';

export const positionProviders = [
  {
    provide: POSITION_REPOSITORY,
    useValue: Position,
  },
];
