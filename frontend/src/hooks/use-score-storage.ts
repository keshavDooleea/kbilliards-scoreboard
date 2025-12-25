import { useLocalStorage } from './use-local-storage';

export function useScoreStorage() {
  const { getNum, set } = useLocalStorage();

  const lStorageKey = 'lScore';
  const rStorageKey = 'rScore';

  const getLScore = () => getNum(lStorageKey);
  const getRScore = () => getNum(rStorageKey);

  const setLScore = (value: number) => set(lStorageKey, value);
  const setRScore = (value: number) => set(rStorageKey, value);

  return { getLScore, getRScore, setLScore, setRScore };
}
