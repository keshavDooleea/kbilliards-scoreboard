import { useRef, useEffect } from 'react';

interface IUsePlayerName {
  name: string;
  onNameChanged: (name: string) => void;
}

export function usePlayerName({ name, onNameChanged }: IUsePlayerName) {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current && nameRef.current.textContent !== name) {
      nameRef.current.textContent = name;
    }
  }, [name]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newName = e.currentTarget.textContent || '';
    onNameChanged(newName);
  };

  return { nameRef, handleInput };
}
