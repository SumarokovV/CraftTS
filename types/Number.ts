export type NumberRange<
  TO extends number,
  R extends number[] = [],
> = TO extends R['length'] ? [...R, TO][number] : NumberRange<TO, [...R, R['length']]>
