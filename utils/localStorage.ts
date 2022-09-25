export const getLocalStorageItem = (key: string, fallback?: any) => {
  if (typeof window === undefined) return;
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : fallback;
  } catch (error: any) {
    return fallback;
  }
};

export const setLocalStorageItem = (key: string, data: any) => {
  if (typeof window === undefined) return;
  const serializedData = JSON.stringify(data);
  localStorage.setItem(key, serializedData);
};

export const clearLocalStorageItem = (key: string) => {
  if (typeof window === undefined) return;
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  if (typeof window === undefined) return;
  localStorage.clear();
};
