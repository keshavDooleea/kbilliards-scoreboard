import { useLocalStorage } from './use-local-storage';

export function usePlayerStorage() {
  const { get, set } = useLocalStorage();

  const lStorageKey = 'lName';
  const rStorageKey = 'rName';

  const getLName = (): string => get(lStorageKey) ?? 'k';
  const getRName = (): string => get(rStorageKey) ?? 'v';

  const setLName = (value: string) => set(lStorageKey, value);
  const setRName = (value: string) => set(rStorageKey, value);

  return { getLName, getRName, setLName, setRName };
}
