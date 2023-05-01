export const saveLocalStorageKey = (key: string, value: any): void => {
  if (value) localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key: string) => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};
