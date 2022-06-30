export type Split<
  S extends string,
  D extends string = '',
> = S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S]

export type StrLength<T extends string> = Split<T>['length'];
  