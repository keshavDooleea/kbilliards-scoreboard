import { ReactNode } from 'react';

export * from './new-game';
export * from './board-color';
export * from './board-score';
export * from './player-name';

export interface IChildrenProviderProps {
  children: ReactNode;
}
