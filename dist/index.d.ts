declare type ClassNames = string | {
    [key: string]: boolean;
};
export declare const classNames: (...items: Array<ClassNames>) => string;
export {};
