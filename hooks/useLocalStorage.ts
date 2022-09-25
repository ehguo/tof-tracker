import { useEffect, useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

const useLocalStorage = (storageKey: string, fallback?: any) => {
  const [item, setItem] = useState(getLocalStorageItem(storageKey, fallback));

  useEffect(() => {
    setLocalStorageItem(storageKey, item ?? fallback);
  }, [fallback, item, storageKey]);

  return [item, setItem];
};

export default useLocalStorage;
