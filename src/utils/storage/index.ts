export const saveLocalStorageKey = (key: string, value: unknown): void => {
  if (value) localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageKey = (key: string): void => {
  localStorage.removeItem(key);
};

export const getLocalStorageKey = (key: string) => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};
