type Typer = Function | string;
declare const injectMetadata: {
    [component: string]: {
        property: string;
        typer: string;
    }[];
};
declare function get<T>(typer: any): T;
declare function inject(target: object): void;
declare function Inject(typer: Typer): (target: object, property: string) => void;
declare function set(typer: any, value: any): void;
declare const ioc: {
    get: typeof get;
    inject: typeof inject;
    Inject: typeof Inject;
    set: typeof set;
};