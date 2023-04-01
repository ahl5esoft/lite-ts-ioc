type Typer = Function | string;

export const injectMetadata: {
    [component: string]: {
        property: string;
        typer: string;
    }[];
} = {};
const instance = {};

function get<T>(typer: any) {
    const key = getKey(typer);
    if (key)
        return instance[key] as T;

    throw new Error(`ioc.get: 缺少${key}`);
}

function getKey(typer: any) {
    return typeof typer == 'string' ? typer : typer.ctor ?? typer.name;
}

function inject(target: object) {
    const properties = injectMetadata[target.constructor.name] ?? [];
    for (const r of properties) {
        target[r.property] = get(r.typer);
    }
}

function Inject(typer: Typer) {
    return (target: object, property: string) => {
        injectMetadata[target.constructor.name] ??= [
            ...injectMetadata[Object.getPrototypeOf(
                target.constructor,
            ).name] ?? []
        ];
        injectMetadata[target.constructor.name].push({
            property,
            typer: getKey(typer)
        });
    };
}

function set(typer: any, value: any) {
    const key = getKey(typer);
    instance[key] = value;
}

export const ioc = { get, inject, Inject, set };