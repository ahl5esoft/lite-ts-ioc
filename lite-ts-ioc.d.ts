declare function get<T>(typer: any): T;
declare function set(typer: any, value: any): void;
declare const ioc: {
    get: typeof get;
    set: typeof set;
};