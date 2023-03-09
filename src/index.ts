const instance = {};

/**
 * 获取实例
 * @param typer 键
 */
function get<T>(typer: any) {
    const key = getKey(typer);
    if (key)
        return instance[key] as T;

    throw new Error(`ioc.get: 缺少${key}`);
}

/**
 * 获取键
 * @param typer 键
 */
function getKey(typer: any) {
    return typeof typer == 'string' ? typer : typer.ctor ?? typer.name;
}

/**
 * 设置容器内容
 * @param typer 键
 * @param value 值
 */
function set(typer: any, value: any) {
    const key = getKey(typer);
    instance[key] = value;
}

export const ioc = { get, set };