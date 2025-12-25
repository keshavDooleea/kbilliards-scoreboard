export function useLocalStorage() {
  const set = (key: string, value: number | string): void =>
    localStorage.setItem(key, `${value}`);

  const get = (key: string): string | null => localStorage.getItem(key);

  const getNum = (key: string): number => {
    const value = get(key);
    return value ? +value : 0;
  };

  return { get, getNum, set };
}
