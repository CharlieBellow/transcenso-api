
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Gender
 * 
 */
export type Gender = $Result.DefaultSelection<Prisma.$GenderPayload>
/**
 * Model Sexuality
 * 
 */
export type Sexuality = $Result.DefaultSelection<Prisma.$SexualityPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Genders
 * const genders = await prisma.gender.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Genders
   * const genders = await prisma.gender.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gender`: Exposes CRUD operations for the **Gender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.gender.findMany()
    * ```
    */
  get gender(): Prisma.GenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sexuality`: Exposes CRUD operations for the **Sexuality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sexualities
    * const sexualities = await prisma.sexuality.findMany()
    * ```
    */
  get sexuality(): Prisma.SexualityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Gender: 'Gender',
    Sexuality: 'Sexuality',
    Person: 'Person'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gender" | "sexuality" | "person"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Gender: {
        payload: Prisma.$GenderPayload<ExtArgs>
        fields: Prisma.GenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findFirst: {
            args: Prisma.GenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findMany: {
            args: Prisma.GenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          create: {
            args: Prisma.GenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          createMany: {
            args: Prisma.GenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          delete: {
            args: Prisma.GenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          update: {
            args: Prisma.GenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          deleteMany: {
            args: Prisma.GenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          upsert: {
            args: Prisma.GenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          aggregate: {
            args: Prisma.GenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGender>
          }
          groupBy: {
            args: Prisma.GenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenderCountArgs<ExtArgs>
            result: $Utils.Optional<GenderCountAggregateOutputType> | number
          }
        }
      }
      Sexuality: {
        payload: Prisma.$SexualityPayload<ExtArgs>
        fields: Prisma.SexualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SexualityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SexualityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          findFirst: {
            args: Prisma.SexualityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SexualityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          findMany: {
            args: Prisma.SexualityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>[]
          }
          create: {
            args: Prisma.SexualityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          createMany: {
            args: Prisma.SexualityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SexualityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>[]
          }
          delete: {
            args: Prisma.SexualityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          update: {
            args: Prisma.SexualityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          deleteMany: {
            args: Prisma.SexualityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SexualityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SexualityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>[]
          }
          upsert: {
            args: Prisma.SexualityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SexualityPayload>
          }
          aggregate: {
            args: Prisma.SexualityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSexuality>
          }
          groupBy: {
            args: Prisma.SexualityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SexualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SexualityCountArgs<ExtArgs>
            result: $Utils.Optional<SexualityCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    gender?: GenderOmit
    sexuality?: SexualityOmit
    person?: PersonOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GenderCountOutputType
   */

  export type GenderCountOutputType = {
    people: number
  }

  export type GenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | GenderCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenderCountOutputType
     */
    select?: GenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type SexualityCountOutputType
   */

  export type SexualityCountOutputType = {
    people: number
  }

  export type SexualityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | SexualityCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * SexualityCountOutputType without action
   */
  export type SexualityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SexualityCountOutputType
     */
    select?: SexualityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SexualityCountOutputType without action
   */
  export type SexualityCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Gender
   */

  export type AggregateGender = {
    _count: GenderCountAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  export type GenderMinAggregateOutputType = {
    id: string | null
    title: string | null
    acronym: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenderMaxAggregateOutputType = {
    id: string | null
    title: string | null
    acronym: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenderCountAggregateOutputType = {
    id: number
    title: number
    acronym: number
    description: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenderMinAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenderMaxAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenderCountAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gender to aggregate.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenderMaxAggregateInputType
  }

  export type GetGenderAggregateType<T extends GenderAggregateArgs> = {
        [P in keyof T & keyof AggregateGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGender[P]>
      : GetScalarType<T[P], AggregateGender[P]>
  }




  export type GenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenderWhereInput
    orderBy?: GenderOrderByWithAggregationInput | GenderOrderByWithAggregationInput[]
    by: GenderScalarFieldEnum[] | GenderScalarFieldEnum
    having?: GenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenderCountAggregateInputType | true
    _min?: GenderMinAggregateInputType
    _max?: GenderMaxAggregateInputType
  }

  export type GenderGroupByOutputType = {
    id: string
    title: string
    acronym: string
    description: string | null
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: GenderCountAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  type GetGenderGroupByPayload<T extends GenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenderGroupByOutputType[P]>
            : GetScalarType<T[P], GenderGroupByOutputType[P]>
        }
      >
    >


  export type GenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    people?: boolean | Gender$peopleArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectScalar = {
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "acronym" | "description" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["gender"]>
  export type GenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | Gender$peopleArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gender"
    objects: {
      people: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      acronym: string
      description: string | null
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gender"]>
    composites: {}
  }

  type GenderGetPayload<S extends boolean | null | undefined | GenderDefaultArgs> = $Result.GetResult<Prisma.$GenderPayload, S>

  type GenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenderCountAggregateInputType | true
    }

  export interface GenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gender'], meta: { name: 'Gender' } }
    /**
     * Find zero or one Gender that matches the filter.
     * @param {GenderFindUniqueArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenderFindUniqueArgs>(args: SelectSubset<T, GenderFindUniqueArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenderFindUniqueOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenderFindUniqueOrThrowArgs>(args: SelectSubset<T, GenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenderFindFirstArgs>(args?: SelectSubset<T, GenderFindFirstArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenderFindFirstOrThrowArgs>(args?: SelectSubset<T, GenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.gender.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.gender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genderWithIdOnly = await prisma.gender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenderFindManyArgs>(args?: SelectSubset<T, GenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gender.
     * @param {GenderCreateArgs} args - Arguments to create a Gender.
     * @example
     * // Create one Gender
     * const Gender = await prisma.gender.create({
     *   data: {
     *     // ... data to create a Gender
     *   }
     * })
     * 
     */
    create<T extends GenderCreateArgs>(args: SelectSubset<T, GenderCreateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GenderCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenderCreateManyArgs>(args?: SelectSubset<T, GenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genders and returns the data saved in the database.
     * @param {GenderCreateManyAndReturnArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genders and only return the `id`
     * const genderWithIdOnly = await prisma.gender.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenderCreateManyAndReturnArgs>(args?: SelectSubset<T, GenderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gender.
     * @param {GenderDeleteArgs} args - Arguments to delete one Gender.
     * @example
     * // Delete one Gender
     * const Gender = await prisma.gender.delete({
     *   where: {
     *     // ... filter to delete one Gender
     *   }
     * })
     * 
     */
    delete<T extends GenderDeleteArgs>(args: SelectSubset<T, GenderDeleteArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gender.
     * @param {GenderUpdateArgs} args - Arguments to update one Gender.
     * @example
     * // Update one Gender
     * const gender = await prisma.gender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenderUpdateArgs>(args: SelectSubset<T, GenderUpdateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GenderDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.gender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenderDeleteManyArgs>(args?: SelectSubset<T, GenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenderUpdateManyArgs>(args: SelectSubset<T, GenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders and returns the data updated in the database.
     * @param {GenderUpdateManyAndReturnArgs} args - Arguments to update many Genders.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genders and only return the `id`
     * const genderWithIdOnly = await prisma.gender.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenderUpdateManyAndReturnArgs>(args: SelectSubset<T, GenderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gender.
     * @param {GenderUpsertArgs} args - Arguments to update or create a Gender.
     * @example
     * // Update or create a Gender
     * const gender = await prisma.gender.upsert({
     *   create: {
     *     // ... data to create a Gender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gender we want to update
     *   }
     * })
     */
    upsert<T extends GenderUpsertArgs>(args: SelectSubset<T, GenderUpsertArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.gender.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GenderCountArgs>(
      args?: Subset<T, GenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenderAggregateArgs>(args: Subset<T, GenderAggregateArgs>): Prisma.PrismaPromise<GetGenderAggregateType<T>>

    /**
     * Group by Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenderGroupByArgs['orderBy'] }
        : { orderBy?: GenderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gender model
   */
  readonly fields: GenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people<T extends Gender$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Gender$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gender model
   */
  interface GenderFieldRefs {
    readonly id: FieldRef<"Gender", 'String'>
    readonly title: FieldRef<"Gender", 'String'>
    readonly acronym: FieldRef<"Gender", 'String'>
    readonly description: FieldRef<"Gender", 'String'>
    readonly slug: FieldRef<"Gender", 'String'>
    readonly createdAt: FieldRef<"Gender", 'DateTime'>
    readonly updatedAt: FieldRef<"Gender", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gender findUnique
   */
  export type GenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findUniqueOrThrow
   */
  export type GenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findFirst
   */
  export type GenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findFirstOrThrow
   */
  export type GenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findMany
   */
  export type GenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender create
   */
  export type GenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to create a Gender.
     */
    data: XOR<GenderCreateInput, GenderUncheckedCreateInput>
  }

  /**
   * Gender createMany
   */
  export type GenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gender createManyAndReturn
   */
  export type GenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gender update
   */
  export type GenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to update a Gender.
     */
    data: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
    /**
     * Choose, which Gender to update.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender updateMany
   */
  export type GenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender updateManyAndReturn
   */
  export type GenderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender upsert
   */
  export type GenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The filter to search for the Gender to update in case it exists.
     */
    where: GenderWhereUniqueInput
    /**
     * In case the Gender found by the `where` argument doesn't exist, create a new Gender with this data.
     */
    create: XOR<GenderCreateInput, GenderUncheckedCreateInput>
    /**
     * In case the Gender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
  }

  /**
   * Gender delete
   */
  export type GenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter which Gender to delete.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender deleteMany
   */
  export type GenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Gender.people
   */
  export type Gender$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Gender without action
   */
  export type GenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
  }


  /**
   * Model Sexuality
   */

  export type AggregateSexuality = {
    _count: SexualityCountAggregateOutputType | null
    _min: SexualityMinAggregateOutputType | null
    _max: SexualityMaxAggregateOutputType | null
  }

  export type SexualityMinAggregateOutputType = {
    id: string | null
    title: string | null
    acronym: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SexualityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    acronym: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SexualityCountAggregateOutputType = {
    id: number
    title: number
    acronym: number
    description: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SexualityMinAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SexualityMaxAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SexualityCountAggregateInputType = {
    id?: true
    title?: true
    acronym?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SexualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sexuality to aggregate.
     */
    where?: SexualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sexualities to fetch.
     */
    orderBy?: SexualityOrderByWithRelationInput | SexualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SexualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sexualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sexualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sexualities
    **/
    _count?: true | SexualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SexualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SexualityMaxAggregateInputType
  }

  export type GetSexualityAggregateType<T extends SexualityAggregateArgs> = {
        [P in keyof T & keyof AggregateSexuality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSexuality[P]>
      : GetScalarType<T[P], AggregateSexuality[P]>
  }




  export type SexualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SexualityWhereInput
    orderBy?: SexualityOrderByWithAggregationInput | SexualityOrderByWithAggregationInput[]
    by: SexualityScalarFieldEnum[] | SexualityScalarFieldEnum
    having?: SexualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SexualityCountAggregateInputType | true
    _min?: SexualityMinAggregateInputType
    _max?: SexualityMaxAggregateInputType
  }

  export type SexualityGroupByOutputType = {
    id: string
    title: string
    acronym: string
    description: string | null
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: SexualityCountAggregateOutputType | null
    _min: SexualityMinAggregateOutputType | null
    _max: SexualityMaxAggregateOutputType | null
  }

  type GetSexualityGroupByPayload<T extends SexualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SexualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SexualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SexualityGroupByOutputType[P]>
            : GetScalarType<T[P], SexualityGroupByOutputType[P]>
        }
      >
    >


  export type SexualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    people?: boolean | Sexuality$peopleArgs<ExtArgs>
    _count?: boolean | SexualityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sexuality"]>

  export type SexualitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sexuality"]>

  export type SexualitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sexuality"]>

  export type SexualitySelectScalar = {
    id?: boolean
    title?: boolean
    acronym?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SexualityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "acronym" | "description" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["sexuality"]>
  export type SexualityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | Sexuality$peopleArgs<ExtArgs>
    _count?: boolean | SexualityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SexualityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SexualityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SexualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sexuality"
    objects: {
      people: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      acronym: string
      description: string | null
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sexuality"]>
    composites: {}
  }

  type SexualityGetPayload<S extends boolean | null | undefined | SexualityDefaultArgs> = $Result.GetResult<Prisma.$SexualityPayload, S>

  type SexualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SexualityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SexualityCountAggregateInputType | true
    }

  export interface SexualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sexuality'], meta: { name: 'Sexuality' } }
    /**
     * Find zero or one Sexuality that matches the filter.
     * @param {SexualityFindUniqueArgs} args - Arguments to find a Sexuality
     * @example
     * // Get one Sexuality
     * const sexuality = await prisma.sexuality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SexualityFindUniqueArgs>(args: SelectSubset<T, SexualityFindUniqueArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sexuality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SexualityFindUniqueOrThrowArgs} args - Arguments to find a Sexuality
     * @example
     * // Get one Sexuality
     * const sexuality = await prisma.sexuality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SexualityFindUniqueOrThrowArgs>(args: SelectSubset<T, SexualityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sexuality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityFindFirstArgs} args - Arguments to find a Sexuality
     * @example
     * // Get one Sexuality
     * const sexuality = await prisma.sexuality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SexualityFindFirstArgs>(args?: SelectSubset<T, SexualityFindFirstArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sexuality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityFindFirstOrThrowArgs} args - Arguments to find a Sexuality
     * @example
     * // Get one Sexuality
     * const sexuality = await prisma.sexuality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SexualityFindFirstOrThrowArgs>(args?: SelectSubset<T, SexualityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sexualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sexualities
     * const sexualities = await prisma.sexuality.findMany()
     * 
     * // Get first 10 Sexualities
     * const sexualities = await prisma.sexuality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sexualityWithIdOnly = await prisma.sexuality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SexualityFindManyArgs>(args?: SelectSubset<T, SexualityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sexuality.
     * @param {SexualityCreateArgs} args - Arguments to create a Sexuality.
     * @example
     * // Create one Sexuality
     * const Sexuality = await prisma.sexuality.create({
     *   data: {
     *     // ... data to create a Sexuality
     *   }
     * })
     * 
     */
    create<T extends SexualityCreateArgs>(args: SelectSubset<T, SexualityCreateArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sexualities.
     * @param {SexualityCreateManyArgs} args - Arguments to create many Sexualities.
     * @example
     * // Create many Sexualities
     * const sexuality = await prisma.sexuality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SexualityCreateManyArgs>(args?: SelectSubset<T, SexualityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sexualities and returns the data saved in the database.
     * @param {SexualityCreateManyAndReturnArgs} args - Arguments to create many Sexualities.
     * @example
     * // Create many Sexualities
     * const sexuality = await prisma.sexuality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sexualities and only return the `id`
     * const sexualityWithIdOnly = await prisma.sexuality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SexualityCreateManyAndReturnArgs>(args?: SelectSubset<T, SexualityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sexuality.
     * @param {SexualityDeleteArgs} args - Arguments to delete one Sexuality.
     * @example
     * // Delete one Sexuality
     * const Sexuality = await prisma.sexuality.delete({
     *   where: {
     *     // ... filter to delete one Sexuality
     *   }
     * })
     * 
     */
    delete<T extends SexualityDeleteArgs>(args: SelectSubset<T, SexualityDeleteArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sexuality.
     * @param {SexualityUpdateArgs} args - Arguments to update one Sexuality.
     * @example
     * // Update one Sexuality
     * const sexuality = await prisma.sexuality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SexualityUpdateArgs>(args: SelectSubset<T, SexualityUpdateArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sexualities.
     * @param {SexualityDeleteManyArgs} args - Arguments to filter Sexualities to delete.
     * @example
     * // Delete a few Sexualities
     * const { count } = await prisma.sexuality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SexualityDeleteManyArgs>(args?: SelectSubset<T, SexualityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sexualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sexualities
     * const sexuality = await prisma.sexuality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SexualityUpdateManyArgs>(args: SelectSubset<T, SexualityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sexualities and returns the data updated in the database.
     * @param {SexualityUpdateManyAndReturnArgs} args - Arguments to update many Sexualities.
     * @example
     * // Update many Sexualities
     * const sexuality = await prisma.sexuality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sexualities and only return the `id`
     * const sexualityWithIdOnly = await prisma.sexuality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SexualityUpdateManyAndReturnArgs>(args: SelectSubset<T, SexualityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sexuality.
     * @param {SexualityUpsertArgs} args - Arguments to update or create a Sexuality.
     * @example
     * // Update or create a Sexuality
     * const sexuality = await prisma.sexuality.upsert({
     *   create: {
     *     // ... data to create a Sexuality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sexuality we want to update
     *   }
     * })
     */
    upsert<T extends SexualityUpsertArgs>(args: SelectSubset<T, SexualityUpsertArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sexualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityCountArgs} args - Arguments to filter Sexualities to count.
     * @example
     * // Count the number of Sexualities
     * const count = await prisma.sexuality.count({
     *   where: {
     *     // ... the filter for the Sexualities we want to count
     *   }
     * })
    **/
    count<T extends SexualityCountArgs>(
      args?: Subset<T, SexualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SexualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sexuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SexualityAggregateArgs>(args: Subset<T, SexualityAggregateArgs>): Prisma.PrismaPromise<GetSexualityAggregateType<T>>

    /**
     * Group by Sexuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SexualityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SexualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SexualityGroupByArgs['orderBy'] }
        : { orderBy?: SexualityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SexualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSexualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sexuality model
   */
  readonly fields: SexualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sexuality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SexualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people<T extends Sexuality$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Sexuality$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sexuality model
   */
  interface SexualityFieldRefs {
    readonly id: FieldRef<"Sexuality", 'String'>
    readonly title: FieldRef<"Sexuality", 'String'>
    readonly acronym: FieldRef<"Sexuality", 'String'>
    readonly description: FieldRef<"Sexuality", 'String'>
    readonly slug: FieldRef<"Sexuality", 'String'>
    readonly createdAt: FieldRef<"Sexuality", 'DateTime'>
    readonly updatedAt: FieldRef<"Sexuality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sexuality findUnique
   */
  export type SexualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter, which Sexuality to fetch.
     */
    where: SexualityWhereUniqueInput
  }

  /**
   * Sexuality findUniqueOrThrow
   */
  export type SexualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter, which Sexuality to fetch.
     */
    where: SexualityWhereUniqueInput
  }

  /**
   * Sexuality findFirst
   */
  export type SexualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter, which Sexuality to fetch.
     */
    where?: SexualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sexualities to fetch.
     */
    orderBy?: SexualityOrderByWithRelationInput | SexualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sexualities.
     */
    cursor?: SexualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sexualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sexualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sexualities.
     */
    distinct?: SexualityScalarFieldEnum | SexualityScalarFieldEnum[]
  }

  /**
   * Sexuality findFirstOrThrow
   */
  export type SexualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter, which Sexuality to fetch.
     */
    where?: SexualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sexualities to fetch.
     */
    orderBy?: SexualityOrderByWithRelationInput | SexualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sexualities.
     */
    cursor?: SexualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sexualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sexualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sexualities.
     */
    distinct?: SexualityScalarFieldEnum | SexualityScalarFieldEnum[]
  }

  /**
   * Sexuality findMany
   */
  export type SexualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter, which Sexualities to fetch.
     */
    where?: SexualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sexualities to fetch.
     */
    orderBy?: SexualityOrderByWithRelationInput | SexualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sexualities.
     */
    cursor?: SexualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sexualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sexualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sexualities.
     */
    distinct?: SexualityScalarFieldEnum | SexualityScalarFieldEnum[]
  }

  /**
   * Sexuality create
   */
  export type SexualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * The data needed to create a Sexuality.
     */
    data: XOR<SexualityCreateInput, SexualityUncheckedCreateInput>
  }

  /**
   * Sexuality createMany
   */
  export type SexualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sexualities.
     */
    data: SexualityCreateManyInput | SexualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sexuality createManyAndReturn
   */
  export type SexualityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * The data used to create many Sexualities.
     */
    data: SexualityCreateManyInput | SexualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sexuality update
   */
  export type SexualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * The data needed to update a Sexuality.
     */
    data: XOR<SexualityUpdateInput, SexualityUncheckedUpdateInput>
    /**
     * Choose, which Sexuality to update.
     */
    where: SexualityWhereUniqueInput
  }

  /**
   * Sexuality updateMany
   */
  export type SexualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sexualities.
     */
    data: XOR<SexualityUpdateManyMutationInput, SexualityUncheckedUpdateManyInput>
    /**
     * Filter which Sexualities to update
     */
    where?: SexualityWhereInput
    /**
     * Limit how many Sexualities to update.
     */
    limit?: number
  }

  /**
   * Sexuality updateManyAndReturn
   */
  export type SexualityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * The data used to update Sexualities.
     */
    data: XOR<SexualityUpdateManyMutationInput, SexualityUncheckedUpdateManyInput>
    /**
     * Filter which Sexualities to update
     */
    where?: SexualityWhereInput
    /**
     * Limit how many Sexualities to update.
     */
    limit?: number
  }

  /**
   * Sexuality upsert
   */
  export type SexualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * The filter to search for the Sexuality to update in case it exists.
     */
    where: SexualityWhereUniqueInput
    /**
     * In case the Sexuality found by the `where` argument doesn't exist, create a new Sexuality with this data.
     */
    create: XOR<SexualityCreateInput, SexualityUncheckedCreateInput>
    /**
     * In case the Sexuality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SexualityUpdateInput, SexualityUncheckedUpdateInput>
  }

  /**
   * Sexuality delete
   */
  export type SexualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
    /**
     * Filter which Sexuality to delete.
     */
    where: SexualityWhereUniqueInput
  }

  /**
   * Sexuality deleteMany
   */
  export type SexualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sexualities to delete
     */
    where?: SexualityWhereInput
    /**
     * Limit how many Sexualities to delete.
     */
    limit?: number
  }

  /**
   * Sexuality.people
   */
  export type Sexuality$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Sexuality without action
   */
  export type SexualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sexuality
     */
    select?: SexualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sexuality
     */
    omit?: SexualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SexualityInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    socialName: string | null
    slug: string | null
    cpf: string | null
    rg: string | null
    birthDate: Date | null
    pronouns: string | null
    genderId: string | null
    sexualityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    socialName: string | null
    slug: string | null
    cpf: string | null
    rg: string | null
    birthDate: Date | null
    pronouns: string | null
    genderId: string | null
    sexualityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    socialName: number
    slug: number
    cpf: number
    rg: number
    birthDate: number
    pronouns: number
    genderId: number
    sexualityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    socialName?: true
    slug?: true
    cpf?: true
    rg?: true
    birthDate?: true
    pronouns?: true
    genderId?: true
    sexualityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    socialName?: true
    slug?: true
    cpf?: true
    rg?: true
    birthDate?: true
    pronouns?: true
    genderId?: true
    sexualityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    socialName?: true
    slug?: true
    cpf?: true
    rg?: true
    birthDate?: true
    pronouns?: true
    genderId?: true
    sexualityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    name: string
    socialName: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date
    pronouns: string
    genderId: string
    sexualityId: string
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialName?: boolean
    slug?: boolean
    cpf?: boolean
    rg?: boolean
    birthDate?: boolean
    pronouns?: boolean
    genderId?: boolean
    sexualityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialName?: boolean
    slug?: boolean
    cpf?: boolean
    rg?: boolean
    birthDate?: boolean
    pronouns?: boolean
    genderId?: boolean
    sexualityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialName?: boolean
    slug?: boolean
    cpf?: boolean
    rg?: boolean
    birthDate?: boolean
    pronouns?: boolean
    genderId?: boolean
    sexualityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    socialName?: boolean
    slug?: boolean
    cpf?: boolean
    rg?: boolean
    birthDate?: boolean
    pronouns?: boolean
    genderId?: boolean
    sexualityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "socialName" | "slug" | "cpf" | "rg" | "birthDate" | "pronouns" | "genderId" | "sexualityId" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    sexuality?: boolean | SexualityDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      gender: Prisma.$GenderPayload<ExtArgs>
      sexuality: Prisma.$SexualityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      socialName: string | null
      slug: string
      cpf: string
      rg: string
      birthDate: Date
      pronouns: string
      genderId: string
      sexualityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gender<T extends GenderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenderDefaultArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sexuality<T extends SexualityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SexualityDefaultArgs<ExtArgs>>): Prisma__SexualityClient<$Result.GetResult<Prisma.$SexualityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly socialName: FieldRef<"Person", 'String'>
    readonly slug: FieldRef<"Person", 'String'>
    readonly cpf: FieldRef<"Person", 'String'>
    readonly rg: FieldRef<"Person", 'String'>
    readonly birthDate: FieldRef<"Person", 'DateTime'>
    readonly pronouns: FieldRef<"Person", 'String'>
    readonly genderId: FieldRef<"Person", 'String'>
    readonly sexualityId: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GenderScalarFieldEnum: {
    id: 'id',
    title: 'title',
    acronym: 'acronym',
    description: 'description',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenderScalarFieldEnum = (typeof GenderScalarFieldEnum)[keyof typeof GenderScalarFieldEnum]


  export const SexualityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    acronym: 'acronym',
    description: 'description',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SexualityScalarFieldEnum = (typeof SexualityScalarFieldEnum)[keyof typeof SexualityScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    socialName: 'socialName',
    slug: 'slug',
    cpf: 'cpf',
    rg: 'rg',
    birthDate: 'birthDate',
    pronouns: 'pronouns',
    genderId: 'genderId',
    sexualityId: 'sexualityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type GenderWhereInput = {
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    id?: StringFilter<"Gender"> | string
    title?: StringFilter<"Gender"> | string
    acronym?: StringFilter<"Gender"> | string
    description?: StringNullableFilter<"Gender"> | string | null
    slug?: StringFilter<"Gender"> | string
    createdAt?: DateTimeFilter<"Gender"> | Date | string
    updatedAt?: DateTimeFilter<"Gender"> | Date | string
    people?: PersonListRelationFilter
  }

  export type GenderOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    people?: PersonOrderByRelationAggregateInput
  }

  export type GenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    acronym?: string
    slug?: string
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    title?: StringFilter<"Gender"> | string
    description?: StringNullableFilter<"Gender"> | string | null
    createdAt?: DateTimeFilter<"Gender"> | Date | string
    updatedAt?: DateTimeFilter<"Gender"> | Date | string
    people?: PersonListRelationFilter
  }, "id" | "acronym" | "slug">

  export type GenderOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenderCountOrderByAggregateInput
    _max?: GenderMaxOrderByAggregateInput
    _min?: GenderMinOrderByAggregateInput
  }

  export type GenderScalarWhereWithAggregatesInput = {
    AND?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    OR?: GenderScalarWhereWithAggregatesInput[]
    NOT?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gender"> | string
    title?: StringWithAggregatesFilter<"Gender"> | string
    acronym?: StringWithAggregatesFilter<"Gender"> | string
    description?: StringNullableWithAggregatesFilter<"Gender"> | string | null
    slug?: StringWithAggregatesFilter<"Gender"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gender"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gender"> | Date | string
  }

  export type SexualityWhereInput = {
    AND?: SexualityWhereInput | SexualityWhereInput[]
    OR?: SexualityWhereInput[]
    NOT?: SexualityWhereInput | SexualityWhereInput[]
    id?: StringFilter<"Sexuality"> | string
    title?: StringFilter<"Sexuality"> | string
    acronym?: StringFilter<"Sexuality"> | string
    description?: StringNullableFilter<"Sexuality"> | string | null
    slug?: StringFilter<"Sexuality"> | string
    createdAt?: DateTimeFilter<"Sexuality"> | Date | string
    updatedAt?: DateTimeFilter<"Sexuality"> | Date | string
    people?: PersonListRelationFilter
  }

  export type SexualityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    people?: PersonOrderByRelationAggregateInput
  }

  export type SexualityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    acronym?: string
    slug?: string
    AND?: SexualityWhereInput | SexualityWhereInput[]
    OR?: SexualityWhereInput[]
    NOT?: SexualityWhereInput | SexualityWhereInput[]
    title?: StringFilter<"Sexuality"> | string
    description?: StringNullableFilter<"Sexuality"> | string | null
    createdAt?: DateTimeFilter<"Sexuality"> | Date | string
    updatedAt?: DateTimeFilter<"Sexuality"> | Date | string
    people?: PersonListRelationFilter
  }, "id" | "acronym" | "slug">

  export type SexualityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SexualityCountOrderByAggregateInput
    _max?: SexualityMaxOrderByAggregateInput
    _min?: SexualityMinOrderByAggregateInput
  }

  export type SexualityScalarWhereWithAggregatesInput = {
    AND?: SexualityScalarWhereWithAggregatesInput | SexualityScalarWhereWithAggregatesInput[]
    OR?: SexualityScalarWhereWithAggregatesInput[]
    NOT?: SexualityScalarWhereWithAggregatesInput | SexualityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sexuality"> | string
    title?: StringWithAggregatesFilter<"Sexuality"> | string
    acronym?: StringWithAggregatesFilter<"Sexuality"> | string
    description?: StringNullableWithAggregatesFilter<"Sexuality"> | string | null
    slug?: StringWithAggregatesFilter<"Sexuality"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sexuality"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sexuality"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    socialName?: StringNullableFilter<"Person"> | string | null
    slug?: StringFilter<"Person"> | string
    cpf?: StringFilter<"Person"> | string
    rg?: StringFilter<"Person"> | string
    birthDate?: DateTimeFilter<"Person"> | Date | string
    pronouns?: StringFilter<"Person"> | string
    genderId?: StringFilter<"Person"> | string
    sexualityId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    gender?: XOR<GenderScalarRelationFilter, GenderWhereInput>
    sexuality?: XOR<SexualityScalarRelationFilter, SexualityWhereInput>
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    socialName?: SortOrderInput | SortOrder
    slug?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    birthDate?: SortOrder
    pronouns?: SortOrder
    genderId?: SortOrder
    sexualityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gender?: GenderOrderByWithRelationInput
    sexuality?: SexualityOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    cpf?: string
    rg?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    socialName?: StringNullableFilter<"Person"> | string | null
    birthDate?: DateTimeFilter<"Person"> | Date | string
    pronouns?: StringFilter<"Person"> | string
    genderId?: StringFilter<"Person"> | string
    sexualityId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    gender?: XOR<GenderScalarRelationFilter, GenderWhereInput>
    sexuality?: XOR<SexualityScalarRelationFilter, SexualityWhereInput>
  }, "id" | "slug" | "cpf" | "rg">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    socialName?: SortOrderInput | SortOrder
    slug?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    birthDate?: SortOrder
    pronouns?: SortOrder
    genderId?: SortOrder
    sexualityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    socialName?: StringNullableWithAggregatesFilter<"Person"> | string | null
    slug?: StringWithAggregatesFilter<"Person"> | string
    cpf?: StringWithAggregatesFilter<"Person"> | string
    rg?: StringWithAggregatesFilter<"Person"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    pronouns?: StringWithAggregatesFilter<"Person"> | string
    genderId?: StringWithAggregatesFilter<"Person"> | string
    sexualityId?: StringWithAggregatesFilter<"Person"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type GenderCreateInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonCreateNestedManyWithoutGenderInput
  }

  export type GenderUncheckedCreateInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonUncheckedCreateNestedManyWithoutGenderInput
  }

  export type GenderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUpdateManyWithoutGenderNestedInput
  }

  export type GenderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUncheckedUpdateManyWithoutGenderNestedInput
  }

  export type GenderCreateManyInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SexualityCreateInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonCreateNestedManyWithoutSexualityInput
  }

  export type SexualityUncheckedCreateInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonUncheckedCreateNestedManyWithoutSexualityInput
  }

  export type SexualityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUpdateManyWithoutSexualityNestedInput
  }

  export type SexualityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUncheckedUpdateManyWithoutSexualityNestedInput
  }

  export type SexualityCreateManyInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SexualityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SexualityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gender: GenderCreateNestedOneWithoutPeopleInput
    sexuality: SexualityCreateNestedOneWithoutPeopleInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    genderId: string
    sexualityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: GenderUpdateOneRequiredWithoutPeopleNestedInput
    sexuality?: SexualityUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    genderId?: StringFieldUpdateOperationsInput | string
    sexualityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    genderId: string
    sexualityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    genderId?: StringFieldUpdateOperationsInput | string
    sexualityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenderCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SexualityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SexualityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SexualityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    acronym?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderScalarRelationFilter = {
    is?: GenderWhereInput
    isNot?: GenderWhereInput
  }

  export type SexualityScalarRelationFilter = {
    is?: SexualityWhereInput
    isNot?: SexualityWhereInput
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    socialName?: SortOrder
    slug?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    birthDate?: SortOrder
    pronouns?: SortOrder
    genderId?: SortOrder
    sexualityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    socialName?: SortOrder
    slug?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    birthDate?: SortOrder
    pronouns?: SortOrder
    genderId?: SortOrder
    sexualityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    socialName?: SortOrder
    slug?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    birthDate?: SortOrder
    pronouns?: SortOrder
    genderId?: SortOrder
    sexualityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonCreateNestedManyWithoutGenderInput = {
    create?: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput> | PersonCreateWithoutGenderInput[] | PersonUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGenderInput | PersonCreateOrConnectWithoutGenderInput[]
    createMany?: PersonCreateManyGenderInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutGenderInput = {
    create?: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput> | PersonCreateWithoutGenderInput[] | PersonUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGenderInput | PersonCreateOrConnectWithoutGenderInput[]
    createMany?: PersonCreateManyGenderInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput> | PersonCreateWithoutGenderInput[] | PersonUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGenderInput | PersonCreateOrConnectWithoutGenderInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutGenderInput | PersonUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PersonCreateManyGenderInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutGenderInput | PersonUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutGenderInput | PersonUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput> | PersonCreateWithoutGenderInput[] | PersonUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGenderInput | PersonCreateOrConnectWithoutGenderInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutGenderInput | PersonUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PersonCreateManyGenderInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutGenderInput | PersonUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutGenderInput | PersonUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonCreateNestedManyWithoutSexualityInput = {
    create?: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput> | PersonCreateWithoutSexualityInput[] | PersonUncheckedCreateWithoutSexualityInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutSexualityInput | PersonCreateOrConnectWithoutSexualityInput[]
    createMany?: PersonCreateManySexualityInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutSexualityInput = {
    create?: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput> | PersonCreateWithoutSexualityInput[] | PersonUncheckedCreateWithoutSexualityInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutSexualityInput | PersonCreateOrConnectWithoutSexualityInput[]
    createMany?: PersonCreateManySexualityInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUpdateManyWithoutSexualityNestedInput = {
    create?: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput> | PersonCreateWithoutSexualityInput[] | PersonUncheckedCreateWithoutSexualityInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutSexualityInput | PersonCreateOrConnectWithoutSexualityInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutSexualityInput | PersonUpsertWithWhereUniqueWithoutSexualityInput[]
    createMany?: PersonCreateManySexualityInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutSexualityInput | PersonUpdateWithWhereUniqueWithoutSexualityInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutSexualityInput | PersonUpdateManyWithWhereWithoutSexualityInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutSexualityNestedInput = {
    create?: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput> | PersonCreateWithoutSexualityInput[] | PersonUncheckedCreateWithoutSexualityInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutSexualityInput | PersonCreateOrConnectWithoutSexualityInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutSexualityInput | PersonUpsertWithWhereUniqueWithoutSexualityInput[]
    createMany?: PersonCreateManySexualityInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutSexualityInput | PersonUpdateWithWhereUniqueWithoutSexualityInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutSexualityInput | PersonUpdateManyWithWhereWithoutSexualityInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type GenderCreateNestedOneWithoutPeopleInput = {
    create?: XOR<GenderCreateWithoutPeopleInput, GenderUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: GenderCreateOrConnectWithoutPeopleInput
    connect?: GenderWhereUniqueInput
  }

  export type SexualityCreateNestedOneWithoutPeopleInput = {
    create?: XOR<SexualityCreateWithoutPeopleInput, SexualityUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: SexualityCreateOrConnectWithoutPeopleInput
    connect?: SexualityWhereUniqueInput
  }

  export type GenderUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<GenderCreateWithoutPeopleInput, GenderUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: GenderCreateOrConnectWithoutPeopleInput
    upsert?: GenderUpsertWithoutPeopleInput
    connect?: GenderWhereUniqueInput
    update?: XOR<XOR<GenderUpdateToOneWithWhereWithoutPeopleInput, GenderUpdateWithoutPeopleInput>, GenderUncheckedUpdateWithoutPeopleInput>
  }

  export type SexualityUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<SexualityCreateWithoutPeopleInput, SexualityUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: SexualityCreateOrConnectWithoutPeopleInput
    upsert?: SexualityUpsertWithoutPeopleInput
    connect?: SexualityWhereUniqueInput
    update?: XOR<XOR<SexualityUpdateToOneWithWhereWithoutPeopleInput, SexualityUpdateWithoutPeopleInput>, SexualityUncheckedUpdateWithoutPeopleInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonCreateWithoutGenderInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sexuality: SexualityCreateNestedOneWithoutPeopleInput
  }

  export type PersonUncheckedCreateWithoutGenderInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    sexualityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonCreateOrConnectWithoutGenderInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput>
  }

  export type PersonCreateManyGenderInputEnvelope = {
    data: PersonCreateManyGenderInput | PersonCreateManyGenderInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutGenderInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutGenderInput, PersonUncheckedUpdateWithoutGenderInput>
    create: XOR<PersonCreateWithoutGenderInput, PersonUncheckedCreateWithoutGenderInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutGenderInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutGenderInput, PersonUncheckedUpdateWithoutGenderInput>
  }

  export type PersonUpdateManyWithWhereWithoutGenderInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutGenderInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    socialName?: StringNullableFilter<"Person"> | string | null
    slug?: StringFilter<"Person"> | string
    cpf?: StringFilter<"Person"> | string
    rg?: StringFilter<"Person"> | string
    birthDate?: DateTimeFilter<"Person"> | Date | string
    pronouns?: StringFilter<"Person"> | string
    genderId?: StringFilter<"Person"> | string
    sexualityId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type PersonCreateWithoutSexualityInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gender: GenderCreateNestedOneWithoutPeopleInput
  }

  export type PersonUncheckedCreateWithoutSexualityInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    genderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonCreateOrConnectWithoutSexualityInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput>
  }

  export type PersonCreateManySexualityInputEnvelope = {
    data: PersonCreateManySexualityInput | PersonCreateManySexualityInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutSexualityInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutSexualityInput, PersonUncheckedUpdateWithoutSexualityInput>
    create: XOR<PersonCreateWithoutSexualityInput, PersonUncheckedCreateWithoutSexualityInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutSexualityInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutSexualityInput, PersonUncheckedUpdateWithoutSexualityInput>
  }

  export type PersonUpdateManyWithWhereWithoutSexualityInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutSexualityInput>
  }

  export type GenderCreateWithoutPeopleInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderUncheckedCreateWithoutPeopleInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderCreateOrConnectWithoutPeopleInput = {
    where: GenderWhereUniqueInput
    create: XOR<GenderCreateWithoutPeopleInput, GenderUncheckedCreateWithoutPeopleInput>
  }

  export type SexualityCreateWithoutPeopleInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SexualityUncheckedCreateWithoutPeopleInput = {
    id?: string
    title: string
    acronym: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SexualityCreateOrConnectWithoutPeopleInput = {
    where: SexualityWhereUniqueInput
    create: XOR<SexualityCreateWithoutPeopleInput, SexualityUncheckedCreateWithoutPeopleInput>
  }

  export type GenderUpsertWithoutPeopleInput = {
    update: XOR<GenderUpdateWithoutPeopleInput, GenderUncheckedUpdateWithoutPeopleInput>
    create: XOR<GenderCreateWithoutPeopleInput, GenderUncheckedCreateWithoutPeopleInput>
    where?: GenderWhereInput
  }

  export type GenderUpdateToOneWithWhereWithoutPeopleInput = {
    where?: GenderWhereInput
    data: XOR<GenderUpdateWithoutPeopleInput, GenderUncheckedUpdateWithoutPeopleInput>
  }

  export type GenderUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderUncheckedUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SexualityUpsertWithoutPeopleInput = {
    update: XOR<SexualityUpdateWithoutPeopleInput, SexualityUncheckedUpdateWithoutPeopleInput>
    create: XOR<SexualityCreateWithoutPeopleInput, SexualityUncheckedCreateWithoutPeopleInput>
    where?: SexualityWhereInput
  }

  export type SexualityUpdateToOneWithWhereWithoutPeopleInput = {
    where?: SexualityWhereInput
    data: XOR<SexualityUpdateWithoutPeopleInput, SexualityUncheckedUpdateWithoutPeopleInput>
  }

  export type SexualityUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SexualityUncheckedUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManyGenderInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    sexualityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sexuality?: SexualityUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonUncheckedUpdateWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    sexualityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyWithoutGenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    sexualityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManySexualityInput = {
    id?: string
    name: string
    socialName?: string | null
    slug: string
    cpf: string
    rg: string
    birthDate: Date | string
    pronouns: string
    genderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateWithoutSexualityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: GenderUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonUncheckedUpdateWithoutSexualityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    genderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyWithoutSexualityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pronouns?: StringFieldUpdateOperationsInput | string
    genderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}