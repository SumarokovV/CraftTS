import { Split } from './String';

export type NumberRange<
  TO extends number,
  R extends number[] = [],
> = TO extends R['length'] ? [...R, TO][number] : NumberRange<TO, [...R, R['length']]>;

export type Uint<
  T extends number,
  I extends string[] = Split<`${T}`>,
> = I[0] extends '-' ? never : T;
