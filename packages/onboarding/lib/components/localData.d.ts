declare const LocalData: {
    set: (name: string, data: string) => void;
    setObj: (name: string, data: object) => void;
    get: (name: string) => string;
    getObj: (name: string) => any;
    remove: (name: string) => void;
};
export default LocalData;
