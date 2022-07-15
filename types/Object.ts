export type ParseObject<
  O extends object,
  K extends string,
> = K extends keyof O ? keyof O[K] :
  K extends `${infer F}.${infer N}` ? F extends keyof O ? O[F] extends object ? ParseObject<O[F], N> : never : never : never 
