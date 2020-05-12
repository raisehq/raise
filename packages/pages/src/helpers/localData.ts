const LocalData = {
  set: (name: string, data: string) => {
    window.localStorage.setItem(name, data);
  },
  setObj: (name: string, data: object) => {
    window.localStorage.setItem(name, JSON.stringify(data));
  },
  get: (name: string): string | null => window.localStorage.getItem(name) || null,
  getObj: (name: string) => {
    const data = window.localStorage.getItem(name);
    const jsonData = JSON.parse(data || '{}');
    return Object.keys(jsonData).length > 0 ? jsonData : null;
  },
  remove: (name: string) => window.localStorage.removeItem(name)
};
export default LocalData;
