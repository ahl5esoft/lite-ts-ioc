const instance = {};

/**
 * 获取实例
 * @param typer 键
 * @returns 
 */
export function get<T>(typer: any) {
    const key = typer.ctor ?? typer.name ?? typer;
    if (key)
        return instance[key] as T;

    throw new Error(`ioc.get: 缺少${key}`);
}

/**
 * 
 * @param typer 键
 * @param value 值
 */
export function set(typer: any, value: any) {
    instance[typer.ctor ?? typer.name ?? typer] = value;
}