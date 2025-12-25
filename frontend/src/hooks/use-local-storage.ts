export function useLocalStorage() {
  const set = (key: string, value: number | string | boolean): void =>
    localStorage.setItem(key, `${value}`);

  const get = (key: string): string | null => localStorage.getItem(key);

  const getNum = (key: string): number => {
    const value = get(key);
    return value ? +value : 0;
  };

  const getBool = (key: string): boolean => {
    const value = get(key);
    return value === 'true';
  };

  const rm = (key: string): void => localStorage.removeItem(key);

  return { get, getNum, set, rm, getBool };
}
