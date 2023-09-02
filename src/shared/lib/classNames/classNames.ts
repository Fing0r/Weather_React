export type Mods = Record<string, boolean | string | undefined>;
export type Additional = (string | undefined)[];

const classNames = (cls: string, mods: Mods = {}, additional: Additional = []) =>
    [
        cls,
        ...additional.filter(Boolean),
        ...(Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className) ?? []),
    ].join(" ");

export { classNames };
