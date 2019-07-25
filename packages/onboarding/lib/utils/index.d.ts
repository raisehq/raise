export declare function getHost(name: string): any;
export declare function getMimeType(base64: string): string;
export declare function isBrowser(): boolean;
export declare const Right: (x: any) => {
    map: (f: any) => any;
    fold: (f: any, g: any) => any;
    inspect: () => string;
};
export declare const Left: (x: any) => {
    map: () => any;
    fold: (f: any) => any;
    inspect: () => string;
};
export declare const Either: {
    either: (coor: any) => {
        map: (f: any) => any;
        fold: (f: any, g: any) => any;
        inspect: () => string;
    };
};
export declare const to: (promise: any) => any;
