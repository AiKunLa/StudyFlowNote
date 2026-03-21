
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model MaterialChunk
 * 
 */
export type MaterialChunk = $Result.DefaultSelection<Prisma.$MaterialChunkPayload>
/**
 * Model KnowledgeUnit
 * 
 */
export type KnowledgeUnit = $Result.DefaultSelection<Prisma.$KnowledgeUnitPayload>
/**
 * Model StudyPlan
 * 
 */
export type StudyPlan = $Result.DefaultSelection<Prisma.$StudyPlanPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskKnowledgeUnit
 * 
 */
export type TaskKnowledgeUnit = $Result.DefaultSelection<Prisma.$TaskKnowledgeUnitPayload>
/**
 * Model LearningSession
 * 
 */
export type LearningSession = $Result.DefaultSelection<Prisma.$LearningSessionPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizAnswer
 * 
 */
export type QuizAnswer = $Result.DefaultSelection<Prisma.$QuizAnswerPayload>
/**
 * Model ReviewRecord
 * 
 */
export type ReviewRecord = $Result.DefaultSelection<Prisma.$ReviewRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MaterialType: {
  PDF: 'PDF',
  MARKDOWN: 'MARKDOWN',
  TEXT: 'TEXT'
};

export type MaterialType = (typeof MaterialType)[keyof typeof MaterialType]


export const MaterialStatus: {
  UPLOADING: 'UPLOADING',
  PARSING: 'PARSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type MaterialStatus = (typeof MaterialStatus)[keyof typeof MaterialStatus]


export const PlanStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const TaskType: {
  LEARN: 'LEARN',
  REVIEW: 'REVIEW',
  REINFORCE: 'REINFORCE',
  QUIZ: 'QUIZ'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  SKIPPED: 'SKIPPED',
  OVERDUE: 'OVERDUE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const SessionStatus: {
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const QuizStatus: {
  GENERATED: 'GENERATED',
  SUBMITTED: 'SUBMITTED',
  GRADED: 'GRADED'
};

export type QuizStatus = (typeof QuizStatus)[keyof typeof QuizStatus]


export const ReviewResult: {
  POOR: 'POOR',
  FAIR: 'FAIR',
  GOOD: 'GOOD',
  EXCELLENT: 'EXCELLENT'
};

export type ReviewResult = (typeof ReviewResult)[keyof typeof ReviewResult]

}

export type MaterialType = $Enums.MaterialType

export const MaterialType: typeof $Enums.MaterialType

export type MaterialStatus = $Enums.MaterialStatus

export const MaterialStatus: typeof $Enums.MaterialStatus

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type QuizStatus = $Enums.QuizStatus

export const QuizStatus: typeof $Enums.QuizStatus

export type ReviewResult = $Enums.ReviewResult

export const ReviewResult: typeof $Enums.ReviewResult

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialChunk`: Exposes CRUD operations for the **MaterialChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialChunks
    * const materialChunks = await prisma.materialChunk.findMany()
    * ```
    */
  get materialChunk(): Prisma.MaterialChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeUnit`: Exposes CRUD operations for the **KnowledgeUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeUnits
    * const knowledgeUnits = await prisma.knowledgeUnit.findMany()
    * ```
    */
  get knowledgeUnit(): Prisma.KnowledgeUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyPlan`: Exposes CRUD operations for the **StudyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPlans
    * const studyPlans = await prisma.studyPlan.findMany()
    * ```
    */
  get studyPlan(): Prisma.StudyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskKnowledgeUnit`: Exposes CRUD operations for the **TaskKnowledgeUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskKnowledgeUnits
    * const taskKnowledgeUnits = await prisma.taskKnowledgeUnit.findMany()
    * ```
    */
  get taskKnowledgeUnit(): Prisma.TaskKnowledgeUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningSession`: Exposes CRUD operations for the **LearningSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningSessions
    * const learningSessions = await prisma.learningSession.findMany()
    * ```
    */
  get learningSession(): Prisma.LearningSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAnswer`: Exposes CRUD operations for the **QuizAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAnswers
    * const quizAnswers = await prisma.quizAnswer.findMany()
    * ```
    */
  get quizAnswer(): Prisma.QuizAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewRecord`: Exposes CRUD operations for the **ReviewRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewRecords
    * const reviewRecords = await prisma.reviewRecord.findMany()
    * ```
    */
  get reviewRecord(): Prisma.ReviewRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    User: 'User',
    Project: 'Project',
    Material: 'Material',
    MaterialChunk: 'MaterialChunk',
    KnowledgeUnit: 'KnowledgeUnit',
    StudyPlan: 'StudyPlan',
    Task: 'Task',
    TaskKnowledgeUnit: 'TaskKnowledgeUnit',
    LearningSession: 'LearningSession',
    Note: 'Note',
    Quiz: 'Quiz',
    QuizAnswer: 'QuizAnswer',
    ReviewRecord: 'ReviewRecord'
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
      modelProps: "user" | "project" | "material" | "materialChunk" | "knowledgeUnit" | "studyPlan" | "task" | "taskKnowledgeUnit" | "learningSession" | "note" | "quiz" | "quizAnswer" | "reviewRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      MaterialChunk: {
        payload: Prisma.$MaterialChunkPayload<ExtArgs>
        fields: Prisma.MaterialChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          findFirst: {
            args: Prisma.MaterialChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          findMany: {
            args: Prisma.MaterialChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>[]
          }
          create: {
            args: Prisma.MaterialChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          createMany: {
            args: Prisma.MaterialChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>[]
          }
          delete: {
            args: Prisma.MaterialChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          update: {
            args: Prisma.MaterialChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          deleteMany: {
            args: Prisma.MaterialChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>[]
          }
          upsert: {
            args: Prisma.MaterialChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialChunkPayload>
          }
          aggregate: {
            args: Prisma.MaterialChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialChunk>
          }
          groupBy: {
            args: Prisma.MaterialChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialChunkCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialChunkCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeUnit: {
        payload: Prisma.$KnowledgeUnitPayload<ExtArgs>
        fields: Prisma.KnowledgeUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          findMany: {
            args: Prisma.KnowledgeUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>[]
          }
          create: {
            args: Prisma.KnowledgeUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          createMany: {
            args: Prisma.KnowledgeUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          update: {
            args: Prisma.KnowledgeUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeUnitPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeUnit>
          }
          groupBy: {
            args: Prisma.KnowledgeUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeUnitCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeUnitCountAggregateOutputType> | number
          }
        }
      }
      StudyPlan: {
        payload: Prisma.$StudyPlanPayload<ExtArgs>
        fields: Prisma.StudyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findFirst: {
            args: Prisma.StudyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findMany: {
            args: Prisma.StudyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          create: {
            args: Prisma.StudyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          createMany: {
            args: Prisma.StudyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          delete: {
            args: Prisma.StudyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          update: {
            args: Prisma.StudyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          deleteMany: {
            args: Prisma.StudyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          upsert: {
            args: Prisma.StudyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          aggregate: {
            args: Prisma.StudyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyPlan>
          }
          groupBy: {
            args: Prisma.StudyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskKnowledgeUnit: {
        payload: Prisma.$TaskKnowledgeUnitPayload<ExtArgs>
        fields: Prisma.TaskKnowledgeUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskKnowledgeUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskKnowledgeUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          findFirst: {
            args: Prisma.TaskKnowledgeUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskKnowledgeUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          findMany: {
            args: Prisma.TaskKnowledgeUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>[]
          }
          create: {
            args: Prisma.TaskKnowledgeUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          createMany: {
            args: Prisma.TaskKnowledgeUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskKnowledgeUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>[]
          }
          delete: {
            args: Prisma.TaskKnowledgeUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          update: {
            args: Prisma.TaskKnowledgeUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          deleteMany: {
            args: Prisma.TaskKnowledgeUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskKnowledgeUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskKnowledgeUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>[]
          }
          upsert: {
            args: Prisma.TaskKnowledgeUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskKnowledgeUnitPayload>
          }
          aggregate: {
            args: Prisma.TaskKnowledgeUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskKnowledgeUnit>
          }
          groupBy: {
            args: Prisma.TaskKnowledgeUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskKnowledgeUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskKnowledgeUnitCountArgs<ExtArgs>
            result: $Utils.Optional<TaskKnowledgeUnitCountAggregateOutputType> | number
          }
        }
      }
      LearningSession: {
        payload: Prisma.$LearningSessionPayload<ExtArgs>
        fields: Prisma.LearningSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          findFirst: {
            args: Prisma.LearningSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          findMany: {
            args: Prisma.LearningSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>[]
          }
          create: {
            args: Prisma.LearningSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          createMany: {
            args: Prisma.LearningSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>[]
          }
          delete: {
            args: Prisma.LearningSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          update: {
            args: Prisma.LearningSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          deleteMany: {
            args: Prisma.LearningSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>[]
          }
          upsert: {
            args: Prisma.LearningSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionPayload>
          }
          aggregate: {
            args: Prisma.LearningSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningSession>
          }
          groupBy: {
            args: Prisma.LearningSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningSessionCountArgs<ExtArgs>
            result: $Utils.Optional<LearningSessionCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizAnswer: {
        payload: Prisma.$QuizAnswerPayload<ExtArgs>
        fields: Prisma.QuizAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          findFirst: {
            args: Prisma.QuizAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          findMany: {
            args: Prisma.QuizAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[]
          }
          create: {
            args: Prisma.QuizAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          createMany: {
            args: Prisma.QuizAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[]
          }
          delete: {
            args: Prisma.QuizAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          update: {
            args: Prisma.QuizAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          deleteMany: {
            args: Prisma.QuizAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[]
          }
          upsert: {
            args: Prisma.QuizAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAnswerPayload>
          }
          aggregate: {
            args: Prisma.QuizAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAnswer>
          }
          groupBy: {
            args: Prisma.QuizAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAnswerCountAggregateOutputType> | number
          }
        }
      }
      ReviewRecord: {
        payload: Prisma.$ReviewRecordPayload<ExtArgs>
        fields: Prisma.ReviewRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          findFirst: {
            args: Prisma.ReviewRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          findMany: {
            args: Prisma.ReviewRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>[]
          }
          create: {
            args: Prisma.ReviewRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          createMany: {
            args: Prisma.ReviewRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>[]
          }
          delete: {
            args: Prisma.ReviewRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          update: {
            args: Prisma.ReviewRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          deleteMany: {
            args: Prisma.ReviewRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>[]
          }
          upsert: {
            args: Prisma.ReviewRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRecordPayload>
          }
          aggregate: {
            args: Prisma.ReviewRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewRecord>
          }
          groupBy: {
            args: Prisma.ReviewRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewRecordCountAggregateOutputType> | number
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
    user?: UserOmit
    project?: ProjectOmit
    material?: MaterialOmit
    materialChunk?: MaterialChunkOmit
    knowledgeUnit?: KnowledgeUnitOmit
    studyPlan?: StudyPlanOmit
    task?: TaskOmit
    taskKnowledgeUnit?: TaskKnowledgeUnitOmit
    learningSession?: LearningSessionOmit
    note?: NoteOmit
    quiz?: QuizOmit
    quizAnswer?: QuizAnswerOmit
    reviewRecord?: ReviewRecordOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    materials: number
    studyPlans: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ProjectCountOutputTypeCountMaterialsArgs
    studyPlans?: boolean | ProjectCountOutputTypeCountStudyPlansArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountStudyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    chunks: number
    knowledgeUnits: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | MaterialCountOutputTypeCountChunksArgs
    knowledgeUnits?: boolean | MaterialCountOutputTypeCountKnowledgeUnitsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialChunkWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountKnowledgeUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeUnitWhereInput
  }


  /**
   * Count Type KnowledgeUnitCountOutputType
   */

  export type KnowledgeUnitCountOutputType = {
    taskLinks: number
  }

  export type KnowledgeUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLinks?: boolean | KnowledgeUnitCountOutputTypeCountTaskLinksArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeUnitCountOutputType without action
   */
  export type KnowledgeUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnitCountOutputType
     */
    select?: KnowledgeUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeUnitCountOutputType without action
   */
  export type KnowledgeUnitCountOutputTypeCountTaskLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskKnowledgeUnitWhereInput
  }


  /**
   * Count Type StudyPlanCountOutputType
   */

  export type StudyPlanCountOutputType = {
    tasks: number
  }

  export type StudyPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | StudyPlanCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlanCountOutputType
     */
    select?: StudyPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    knowledgeLinks: number
    sessions: number
    notes: number
    quizzes: number
    reviewRecords: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeLinks?: boolean | TaskCountOutputTypeCountKnowledgeLinksArgs
    sessions?: boolean | TaskCountOutputTypeCountSessionsArgs
    notes?: boolean | TaskCountOutputTypeCountNotesArgs
    quizzes?: boolean | TaskCountOutputTypeCountQuizzesArgs
    reviewRecords?: boolean | TaskCountOutputTypeCountReviewRecordsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountKnowledgeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskKnowledgeUnitWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningSessionWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountReviewRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRecordWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    answers: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuizCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    dailyTimeBudget: number | null
  }

  export type ProjectSumAggregateOutputType = {
    dailyTimeBudget: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    goal: string | null
    examDate: Date | null
    dailyTimeBudget: number | null
    mode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    goal: string | null
    examDate: Date | null
    dailyTimeBudget: number | null
    mode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    goal: number
    examDate: number
    dailyTimeBudget: number
    mode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    dailyTimeBudget?: true
  }

  export type ProjectSumAggregateInputType = {
    dailyTimeBudget?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    goal?: true
    examDate?: true
    dailyTimeBudget?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    goal?: true
    examDate?: true
    dailyTimeBudget?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    goal?: true
    examDate?: true
    dailyTimeBudget?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    goal: string | null
    examDate: Date | null
    dailyTimeBudget: number | null
    mode: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    examDate?: boolean
    dailyTimeBudget?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    studyPlans?: boolean | Project$studyPlansArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    examDate?: boolean
    dailyTimeBudget?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    examDate?: boolean
    dailyTimeBudget?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    examDate?: boolean
    dailyTimeBudget?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "goal" | "examDate" | "dailyTimeBudget" | "mode" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    studyPlans?: boolean | Project$studyPlansArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      studyPlans: Prisma.$StudyPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      goal: string | null
      examDate: Date | null
      dailyTimeBudget: number | null
      mode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materials<T extends Project$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Project$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyPlans<T extends Project$studyPlansArgs<ExtArgs> = {}>(args?: Subset<T, Project$studyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly goal: FieldRef<"Project", 'String'>
    readonly examDate: FieldRef<"Project", 'DateTime'>
    readonly dailyTimeBudget: FieldRef<"Project", 'Int'>
    readonly mode: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.materials
   */
  export type Project$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Project.studyPlans
   */
  export type Project$studyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    cursor?: StudyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    type: $Enums.MaterialType | null
    sourcePath: string | null
    rawText: string | null
    status: $Enums.MaterialStatus | null
    parseError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    type: $Enums.MaterialType | null
    sourcePath: string | null
    rawText: string | null
    status: $Enums.MaterialStatus | null
    parseError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    type: number
    sourcePath: number
    rawText: number
    status: number
    parseError: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    type?: true
    sourcePath?: true
    rawText?: true
    status?: true
    parseError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    type?: true
    sourcePath?: true
    rawText?: true
    status?: true
    parseError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    type?: true
    sourcePath?: true
    rawText?: true
    status?: true
    parseError?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    projectId: string
    title: string
    type: $Enums.MaterialType
    sourcePath: string | null
    rawText: string | null
    status: $Enums.MaterialStatus
    parseError: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    type?: boolean
    sourcePath?: boolean
    rawText?: boolean
    status?: boolean
    parseError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    chunks?: boolean | Material$chunksArgs<ExtArgs>
    knowledgeUnits?: boolean | Material$knowledgeUnitsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    type?: boolean
    sourcePath?: boolean
    rawText?: boolean
    status?: boolean
    parseError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    type?: boolean
    sourcePath?: boolean
    rawText?: boolean
    status?: boolean
    parseError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    type?: boolean
    sourcePath?: boolean
    rawText?: boolean
    status?: boolean
    parseError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "title" | "type" | "sourcePath" | "rawText" | "status" | "parseError" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    chunks?: boolean | Material$chunksArgs<ExtArgs>
    knowledgeUnits?: boolean | Material$knowledgeUnitsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      chunks: Prisma.$MaterialChunkPayload<ExtArgs>[]
      knowledgeUnits: Prisma.$KnowledgeUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      title: string
      type: $Enums.MaterialType
      sourcePath: string | null
      rawText: string | null
      status: $Enums.MaterialStatus
      parseError: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chunks<T extends Material$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Material$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    knowledgeUnits<T extends Material$knowledgeUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Material$knowledgeUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly projectId: FieldRef<"Material", 'String'>
    readonly title: FieldRef<"Material", 'String'>
    readonly type: FieldRef<"Material", 'MaterialType'>
    readonly sourcePath: FieldRef<"Material", 'String'>
    readonly rawText: FieldRef<"Material", 'String'>
    readonly status: FieldRef<"Material", 'MaterialStatus'>
    readonly parseError: FieldRef<"Material", 'String'>
    readonly metadata: FieldRef<"Material", 'Json'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.chunks
   */
  export type Material$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    where?: MaterialChunkWhereInput
    orderBy?: MaterialChunkOrderByWithRelationInput | MaterialChunkOrderByWithRelationInput[]
    cursor?: MaterialChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialChunkScalarFieldEnum | MaterialChunkScalarFieldEnum[]
  }

  /**
   * Material.knowledgeUnits
   */
  export type Material$knowledgeUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    where?: KnowledgeUnitWhereInput
    orderBy?: KnowledgeUnitOrderByWithRelationInput | KnowledgeUnitOrderByWithRelationInput[]
    cursor?: KnowledgeUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KnowledgeUnitScalarFieldEnum | KnowledgeUnitScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model MaterialChunk
   */

  export type AggregateMaterialChunk = {
    _count: MaterialChunkCountAggregateOutputType | null
    _avg: MaterialChunkAvgAggregateOutputType | null
    _sum: MaterialChunkSumAggregateOutputType | null
    _min: MaterialChunkMinAggregateOutputType | null
    _max: MaterialChunkMaxAggregateOutputType | null
  }

  export type MaterialChunkAvgAggregateOutputType = {
    chunkIndex: number | null
    sourcePage: number | null
  }

  export type MaterialChunkSumAggregateOutputType = {
    chunkIndex: number | null
    sourcePage: number | null
  }

  export type MaterialChunkMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    chunkIndex: number | null
    title: string | null
    content: string | null
    summary: string | null
    sourcePage: number | null
    sourceSection: string | null
    createdAt: Date | null
  }

  export type MaterialChunkMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    chunkIndex: number | null
    title: string | null
    content: string | null
    summary: string | null
    sourcePage: number | null
    sourceSection: string | null
    createdAt: Date | null
  }

  export type MaterialChunkCountAggregateOutputType = {
    id: number
    materialId: number
    chunkIndex: number
    title: number
    content: number
    summary: number
    sourcePage: number
    sourceSection: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type MaterialChunkAvgAggregateInputType = {
    chunkIndex?: true
    sourcePage?: true
  }

  export type MaterialChunkSumAggregateInputType = {
    chunkIndex?: true
    sourcePage?: true
  }

  export type MaterialChunkMinAggregateInputType = {
    id?: true
    materialId?: true
    chunkIndex?: true
    title?: true
    content?: true
    summary?: true
    sourcePage?: true
    sourceSection?: true
    createdAt?: true
  }

  export type MaterialChunkMaxAggregateInputType = {
    id?: true
    materialId?: true
    chunkIndex?: true
    title?: true
    content?: true
    summary?: true
    sourcePage?: true
    sourceSection?: true
    createdAt?: true
  }

  export type MaterialChunkCountAggregateInputType = {
    id?: true
    materialId?: true
    chunkIndex?: true
    title?: true
    content?: true
    summary?: true
    sourcePage?: true
    sourceSection?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type MaterialChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialChunk to aggregate.
     */
    where?: MaterialChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialChunks to fetch.
     */
    orderBy?: MaterialChunkOrderByWithRelationInput | MaterialChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialChunks
    **/
    _count?: true | MaterialChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialChunkMaxAggregateInputType
  }

  export type GetMaterialChunkAggregateType<T extends MaterialChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialChunk[P]>
      : GetScalarType<T[P], AggregateMaterialChunk[P]>
  }




  export type MaterialChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialChunkWhereInput
    orderBy?: MaterialChunkOrderByWithAggregationInput | MaterialChunkOrderByWithAggregationInput[]
    by: MaterialChunkScalarFieldEnum[] | MaterialChunkScalarFieldEnum
    having?: MaterialChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialChunkCountAggregateInputType | true
    _avg?: MaterialChunkAvgAggregateInputType
    _sum?: MaterialChunkSumAggregateInputType
    _min?: MaterialChunkMinAggregateInputType
    _max?: MaterialChunkMaxAggregateInputType
  }

  export type MaterialChunkGroupByOutputType = {
    id: string
    materialId: string
    chunkIndex: number
    title: string | null
    content: string
    summary: string | null
    sourcePage: number | null
    sourceSection: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: MaterialChunkCountAggregateOutputType | null
    _avg: MaterialChunkAvgAggregateOutputType | null
    _sum: MaterialChunkSumAggregateOutputType | null
    _min: MaterialChunkMinAggregateOutputType | null
    _max: MaterialChunkMaxAggregateOutputType | null
  }

  type GetMaterialChunkGroupByPayload<T extends MaterialChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialChunkGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialChunkGroupByOutputType[P]>
        }
      >
    >


  export type MaterialChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    chunkIndex?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    sourcePage?: boolean
    sourceSection?: boolean
    metadata?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialChunk"]>

  export type MaterialChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    chunkIndex?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    sourcePage?: boolean
    sourceSection?: boolean
    metadata?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialChunk"]>

  export type MaterialChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    chunkIndex?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    sourcePage?: boolean
    sourceSection?: boolean
    metadata?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialChunk"]>

  export type MaterialChunkSelectScalar = {
    id?: boolean
    materialId?: boolean
    chunkIndex?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    sourcePage?: boolean
    sourceSection?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type MaterialChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "chunkIndex" | "title" | "content" | "summary" | "sourcePage" | "sourceSection" | "metadata" | "createdAt", ExtArgs["result"]["materialChunk"]>
  export type MaterialChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $MaterialChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialChunk"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      chunkIndex: number
      title: string | null
      content: string
      summary: string | null
      sourcePage: number | null
      sourceSection: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["materialChunk"]>
    composites: {}
  }

  type MaterialChunkGetPayload<S extends boolean | null | undefined | MaterialChunkDefaultArgs> = $Result.GetResult<Prisma.$MaterialChunkPayload, S>

  type MaterialChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialChunkCountAggregateInputType | true
    }

  export interface MaterialChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialChunk'], meta: { name: 'MaterialChunk' } }
    /**
     * Find zero or one MaterialChunk that matches the filter.
     * @param {MaterialChunkFindUniqueArgs} args - Arguments to find a MaterialChunk
     * @example
     * // Get one MaterialChunk
     * const materialChunk = await prisma.materialChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialChunkFindUniqueArgs>(args: SelectSubset<T, MaterialChunkFindUniqueArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialChunkFindUniqueOrThrowArgs} args - Arguments to find a MaterialChunk
     * @example
     * // Get one MaterialChunk
     * const materialChunk = await prisma.materialChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkFindFirstArgs} args - Arguments to find a MaterialChunk
     * @example
     * // Get one MaterialChunk
     * const materialChunk = await prisma.materialChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialChunkFindFirstArgs>(args?: SelectSubset<T, MaterialChunkFindFirstArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkFindFirstOrThrowArgs} args - Arguments to find a MaterialChunk
     * @example
     * // Get one MaterialChunk
     * const materialChunk = await prisma.materialChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialChunks
     * const materialChunks = await prisma.materialChunk.findMany()
     * 
     * // Get first 10 MaterialChunks
     * const materialChunks = await prisma.materialChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialChunkWithIdOnly = await prisma.materialChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialChunkFindManyArgs>(args?: SelectSubset<T, MaterialChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialChunk.
     * @param {MaterialChunkCreateArgs} args - Arguments to create a MaterialChunk.
     * @example
     * // Create one MaterialChunk
     * const MaterialChunk = await prisma.materialChunk.create({
     *   data: {
     *     // ... data to create a MaterialChunk
     *   }
     * })
     * 
     */
    create<T extends MaterialChunkCreateArgs>(args: SelectSubset<T, MaterialChunkCreateArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialChunks.
     * @param {MaterialChunkCreateManyArgs} args - Arguments to create many MaterialChunks.
     * @example
     * // Create many MaterialChunks
     * const materialChunk = await prisma.materialChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialChunkCreateManyArgs>(args?: SelectSubset<T, MaterialChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialChunks and returns the data saved in the database.
     * @param {MaterialChunkCreateManyAndReturnArgs} args - Arguments to create many MaterialChunks.
     * @example
     * // Create many MaterialChunks
     * const materialChunk = await prisma.materialChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialChunks and only return the `id`
     * const materialChunkWithIdOnly = await prisma.materialChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialChunk.
     * @param {MaterialChunkDeleteArgs} args - Arguments to delete one MaterialChunk.
     * @example
     * // Delete one MaterialChunk
     * const MaterialChunk = await prisma.materialChunk.delete({
     *   where: {
     *     // ... filter to delete one MaterialChunk
     *   }
     * })
     * 
     */
    delete<T extends MaterialChunkDeleteArgs>(args: SelectSubset<T, MaterialChunkDeleteArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialChunk.
     * @param {MaterialChunkUpdateArgs} args - Arguments to update one MaterialChunk.
     * @example
     * // Update one MaterialChunk
     * const materialChunk = await prisma.materialChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialChunkUpdateArgs>(args: SelectSubset<T, MaterialChunkUpdateArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialChunks.
     * @param {MaterialChunkDeleteManyArgs} args - Arguments to filter MaterialChunks to delete.
     * @example
     * // Delete a few MaterialChunks
     * const { count } = await prisma.materialChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialChunkDeleteManyArgs>(args?: SelectSubset<T, MaterialChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialChunks
     * const materialChunk = await prisma.materialChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialChunkUpdateManyArgs>(args: SelectSubset<T, MaterialChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialChunks and returns the data updated in the database.
     * @param {MaterialChunkUpdateManyAndReturnArgs} args - Arguments to update many MaterialChunks.
     * @example
     * // Update many MaterialChunks
     * const materialChunk = await prisma.materialChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialChunks and only return the `id`
     * const materialChunkWithIdOnly = await prisma.materialChunk.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialChunk.
     * @param {MaterialChunkUpsertArgs} args - Arguments to update or create a MaterialChunk.
     * @example
     * // Update or create a MaterialChunk
     * const materialChunk = await prisma.materialChunk.upsert({
     *   create: {
     *     // ... data to create a MaterialChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialChunk we want to update
     *   }
     * })
     */
    upsert<T extends MaterialChunkUpsertArgs>(args: SelectSubset<T, MaterialChunkUpsertArgs<ExtArgs>>): Prisma__MaterialChunkClient<$Result.GetResult<Prisma.$MaterialChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkCountArgs} args - Arguments to filter MaterialChunks to count.
     * @example
     * // Count the number of MaterialChunks
     * const count = await prisma.materialChunk.count({
     *   where: {
     *     // ... the filter for the MaterialChunks we want to count
     *   }
     * })
    **/
    count<T extends MaterialChunkCountArgs>(
      args?: Subset<T, MaterialChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialChunkAggregateArgs>(args: Subset<T, MaterialChunkAggregateArgs>): Prisma.PrismaPromise<GetMaterialChunkAggregateType<T>>

    /**
     * Group by MaterialChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialChunkGroupByArgs} args - Group by arguments.
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
      T extends MaterialChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialChunkGroupByArgs['orderBy'] }
        : { orderBy?: MaterialChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialChunk model
   */
  readonly fields: MaterialChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialChunk model
   */
  interface MaterialChunkFieldRefs {
    readonly id: FieldRef<"MaterialChunk", 'String'>
    readonly materialId: FieldRef<"MaterialChunk", 'String'>
    readonly chunkIndex: FieldRef<"MaterialChunk", 'Int'>
    readonly title: FieldRef<"MaterialChunk", 'String'>
    readonly content: FieldRef<"MaterialChunk", 'String'>
    readonly summary: FieldRef<"MaterialChunk", 'String'>
    readonly sourcePage: FieldRef<"MaterialChunk", 'Int'>
    readonly sourceSection: FieldRef<"MaterialChunk", 'String'>
    readonly metadata: FieldRef<"MaterialChunk", 'Json'>
    readonly createdAt: FieldRef<"MaterialChunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialChunk findUnique
   */
  export type MaterialChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter, which MaterialChunk to fetch.
     */
    where: MaterialChunkWhereUniqueInput
  }

  /**
   * MaterialChunk findUniqueOrThrow
   */
  export type MaterialChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter, which MaterialChunk to fetch.
     */
    where: MaterialChunkWhereUniqueInput
  }

  /**
   * MaterialChunk findFirst
   */
  export type MaterialChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter, which MaterialChunk to fetch.
     */
    where?: MaterialChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialChunks to fetch.
     */
    orderBy?: MaterialChunkOrderByWithRelationInput | MaterialChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialChunks.
     */
    cursor?: MaterialChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialChunks.
     */
    distinct?: MaterialChunkScalarFieldEnum | MaterialChunkScalarFieldEnum[]
  }

  /**
   * MaterialChunk findFirstOrThrow
   */
  export type MaterialChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter, which MaterialChunk to fetch.
     */
    where?: MaterialChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialChunks to fetch.
     */
    orderBy?: MaterialChunkOrderByWithRelationInput | MaterialChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialChunks.
     */
    cursor?: MaterialChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialChunks.
     */
    distinct?: MaterialChunkScalarFieldEnum | MaterialChunkScalarFieldEnum[]
  }

  /**
   * MaterialChunk findMany
   */
  export type MaterialChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter, which MaterialChunks to fetch.
     */
    where?: MaterialChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialChunks to fetch.
     */
    orderBy?: MaterialChunkOrderByWithRelationInput | MaterialChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialChunks.
     */
    cursor?: MaterialChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialChunks.
     */
    distinct?: MaterialChunkScalarFieldEnum | MaterialChunkScalarFieldEnum[]
  }

  /**
   * MaterialChunk create
   */
  export type MaterialChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialChunk.
     */
    data: XOR<MaterialChunkCreateInput, MaterialChunkUncheckedCreateInput>
  }

  /**
   * MaterialChunk createMany
   */
  export type MaterialChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialChunks.
     */
    data: MaterialChunkCreateManyInput | MaterialChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialChunk createManyAndReturn
   */
  export type MaterialChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialChunks.
     */
    data: MaterialChunkCreateManyInput | MaterialChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialChunk update
   */
  export type MaterialChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialChunk.
     */
    data: XOR<MaterialChunkUpdateInput, MaterialChunkUncheckedUpdateInput>
    /**
     * Choose, which MaterialChunk to update.
     */
    where: MaterialChunkWhereUniqueInput
  }

  /**
   * MaterialChunk updateMany
   */
  export type MaterialChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialChunks.
     */
    data: XOR<MaterialChunkUpdateManyMutationInput, MaterialChunkUncheckedUpdateManyInput>
    /**
     * Filter which MaterialChunks to update
     */
    where?: MaterialChunkWhereInput
    /**
     * Limit how many MaterialChunks to update.
     */
    limit?: number
  }

  /**
   * MaterialChunk updateManyAndReturn
   */
  export type MaterialChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * The data used to update MaterialChunks.
     */
    data: XOR<MaterialChunkUpdateManyMutationInput, MaterialChunkUncheckedUpdateManyInput>
    /**
     * Filter which MaterialChunks to update
     */
    where?: MaterialChunkWhereInput
    /**
     * Limit how many MaterialChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialChunk upsert
   */
  export type MaterialChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialChunk to update in case it exists.
     */
    where: MaterialChunkWhereUniqueInput
    /**
     * In case the MaterialChunk found by the `where` argument doesn't exist, create a new MaterialChunk with this data.
     */
    create: XOR<MaterialChunkCreateInput, MaterialChunkUncheckedCreateInput>
    /**
     * In case the MaterialChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialChunkUpdateInput, MaterialChunkUncheckedUpdateInput>
  }

  /**
   * MaterialChunk delete
   */
  export type MaterialChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
    /**
     * Filter which MaterialChunk to delete.
     */
    where: MaterialChunkWhereUniqueInput
  }

  /**
   * MaterialChunk deleteMany
   */
  export type MaterialChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialChunks to delete
     */
    where?: MaterialChunkWhereInput
    /**
     * Limit how many MaterialChunks to delete.
     */
    limit?: number
  }

  /**
   * MaterialChunk without action
   */
  export type MaterialChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialChunk
     */
    select?: MaterialChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialChunk
     */
    omit?: MaterialChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialChunkInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeUnit
   */

  export type AggregateKnowledgeUnit = {
    _count: KnowledgeUnitCountAggregateOutputType | null
    _avg: KnowledgeUnitAvgAggregateOutputType | null
    _sum: KnowledgeUnitSumAggregateOutputType | null
    _min: KnowledgeUnitMinAggregateOutputType | null
    _max: KnowledgeUnitMaxAggregateOutputType | null
  }

  export type KnowledgeUnitAvgAggregateOutputType = {
    difficulty: number | null
    importance: number | null
    estimatedMinutes: number | null
  }

  export type KnowledgeUnitSumAggregateOutputType = {
    difficulty: number | null
    importance: number | null
    estimatedMinutes: number | null
  }

  export type KnowledgeUnitMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    title: string | null
    summary: string | null
    topic: string | null
    difficulty: number | null
    importance: number | null
    estimatedMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeUnitMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    title: string | null
    summary: string | null
    topic: string | null
    difficulty: number | null
    importance: number | null
    estimatedMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeUnitCountAggregateOutputType = {
    id: number
    materialId: number
    title: number
    summary: number
    topic: number
    difficulty: number
    importance: number
    estimatedMinutes: number
    prerequisiteIds: number
    sourceRefs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeUnitAvgAggregateInputType = {
    difficulty?: true
    importance?: true
    estimatedMinutes?: true
  }

  export type KnowledgeUnitSumAggregateInputType = {
    difficulty?: true
    importance?: true
    estimatedMinutes?: true
  }

  export type KnowledgeUnitMinAggregateInputType = {
    id?: true
    materialId?: true
    title?: true
    summary?: true
    topic?: true
    difficulty?: true
    importance?: true
    estimatedMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeUnitMaxAggregateInputType = {
    id?: true
    materialId?: true
    title?: true
    summary?: true
    topic?: true
    difficulty?: true
    importance?: true
    estimatedMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeUnitCountAggregateInputType = {
    id?: true
    materialId?: true
    title?: true
    summary?: true
    topic?: true
    difficulty?: true
    importance?: true
    estimatedMinutes?: true
    prerequisiteIds?: true
    sourceRefs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeUnit to aggregate.
     */
    where?: KnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeUnits to fetch.
     */
    orderBy?: KnowledgeUnitOrderByWithRelationInput | KnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeUnits
    **/
    _count?: true | KnowledgeUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgeUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgeUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeUnitMaxAggregateInputType
  }

  export type GetKnowledgeUnitAggregateType<T extends KnowledgeUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeUnit[P]>
      : GetScalarType<T[P], AggregateKnowledgeUnit[P]>
  }




  export type KnowledgeUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeUnitWhereInput
    orderBy?: KnowledgeUnitOrderByWithAggregationInput | KnowledgeUnitOrderByWithAggregationInput[]
    by: KnowledgeUnitScalarFieldEnum[] | KnowledgeUnitScalarFieldEnum
    having?: KnowledgeUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeUnitCountAggregateInputType | true
    _avg?: KnowledgeUnitAvgAggregateInputType
    _sum?: KnowledgeUnitSumAggregateInputType
    _min?: KnowledgeUnitMinAggregateInputType
    _max?: KnowledgeUnitMaxAggregateInputType
  }

  export type KnowledgeUnitGroupByOutputType = {
    id: string
    materialId: string
    title: string
    summary: string | null
    topic: string | null
    difficulty: number | null
    importance: number | null
    estimatedMinutes: number | null
    prerequisiteIds: string[]
    sourceRefs: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeUnitCountAggregateOutputType | null
    _avg: KnowledgeUnitAvgAggregateOutputType | null
    _sum: KnowledgeUnitSumAggregateOutputType | null
    _min: KnowledgeUnitMinAggregateOutputType | null
    _max: KnowledgeUnitMaxAggregateOutputType | null
  }

  type GetKnowledgeUnitGroupByPayload<T extends KnowledgeUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeUnitGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeUnitGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    topic?: boolean
    difficulty?: boolean
    importance?: boolean
    estimatedMinutes?: boolean
    prerequisiteIds?: boolean
    sourceRefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    taskLinks?: boolean | KnowledgeUnit$taskLinksArgs<ExtArgs>
    _count?: boolean | KnowledgeUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeUnit"]>

  export type KnowledgeUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    topic?: boolean
    difficulty?: boolean
    importance?: boolean
    estimatedMinutes?: boolean
    prerequisiteIds?: boolean
    sourceRefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeUnit"]>

  export type KnowledgeUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    topic?: boolean
    difficulty?: boolean
    importance?: boolean
    estimatedMinutes?: boolean
    prerequisiteIds?: boolean
    sourceRefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeUnit"]>

  export type KnowledgeUnitSelectScalar = {
    id?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    topic?: boolean
    difficulty?: boolean
    importance?: boolean
    estimatedMinutes?: boolean
    prerequisiteIds?: boolean
    sourceRefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "title" | "summary" | "topic" | "difficulty" | "importance" | "estimatedMinutes" | "prerequisiteIds" | "sourceRefs" | "createdAt" | "updatedAt", ExtArgs["result"]["knowledgeUnit"]>
  export type KnowledgeUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    taskLinks?: boolean | KnowledgeUnit$taskLinksArgs<ExtArgs>
    _count?: boolean | KnowledgeUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type KnowledgeUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $KnowledgeUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeUnit"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      taskLinks: Prisma.$TaskKnowledgeUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      title: string
      summary: string | null
      topic: string | null
      difficulty: number | null
      importance: number | null
      estimatedMinutes: number | null
      prerequisiteIds: string[]
      sourceRefs: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeUnit"]>
    composites: {}
  }

  type KnowledgeUnitGetPayload<S extends boolean | null | undefined | KnowledgeUnitDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeUnitPayload, S>

  type KnowledgeUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeUnitCountAggregateInputType | true
    }

  export interface KnowledgeUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeUnit'], meta: { name: 'KnowledgeUnit' } }
    /**
     * Find zero or one KnowledgeUnit that matches the filter.
     * @param {KnowledgeUnitFindUniqueArgs} args - Arguments to find a KnowledgeUnit
     * @example
     * // Get one KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeUnitFindUniqueArgs>(args: SelectSubset<T, KnowledgeUnitFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeUnitFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeUnit
     * @example
     * // Get one KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitFindFirstArgs} args - Arguments to find a KnowledgeUnit
     * @example
     * // Get one KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeUnitFindFirstArgs>(args?: SelectSubset<T, KnowledgeUnitFindFirstArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitFindFirstOrThrowArgs} args - Arguments to find a KnowledgeUnit
     * @example
     * // Get one KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeUnits
     * const knowledgeUnits = await prisma.knowledgeUnit.findMany()
     * 
     * // Get first 10 KnowledgeUnits
     * const knowledgeUnits = await prisma.knowledgeUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeUnitWithIdOnly = await prisma.knowledgeUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeUnitFindManyArgs>(args?: SelectSubset<T, KnowledgeUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeUnit.
     * @param {KnowledgeUnitCreateArgs} args - Arguments to create a KnowledgeUnit.
     * @example
     * // Create one KnowledgeUnit
     * const KnowledgeUnit = await prisma.knowledgeUnit.create({
     *   data: {
     *     // ... data to create a KnowledgeUnit
     *   }
     * })
     * 
     */
    create<T extends KnowledgeUnitCreateArgs>(args: SelectSubset<T, KnowledgeUnitCreateArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeUnits.
     * @param {KnowledgeUnitCreateManyArgs} args - Arguments to create many KnowledgeUnits.
     * @example
     * // Create many KnowledgeUnits
     * const knowledgeUnit = await prisma.knowledgeUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeUnitCreateManyArgs>(args?: SelectSubset<T, KnowledgeUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeUnits and returns the data saved in the database.
     * @param {KnowledgeUnitCreateManyAndReturnArgs} args - Arguments to create many KnowledgeUnits.
     * @example
     * // Create many KnowledgeUnits
     * const knowledgeUnit = await prisma.knowledgeUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeUnits and only return the `id`
     * const knowledgeUnitWithIdOnly = await prisma.knowledgeUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeUnit.
     * @param {KnowledgeUnitDeleteArgs} args - Arguments to delete one KnowledgeUnit.
     * @example
     * // Delete one KnowledgeUnit
     * const KnowledgeUnit = await prisma.knowledgeUnit.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeUnit
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeUnitDeleteArgs>(args: SelectSubset<T, KnowledgeUnitDeleteArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeUnit.
     * @param {KnowledgeUnitUpdateArgs} args - Arguments to update one KnowledgeUnit.
     * @example
     * // Update one KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeUnitUpdateArgs>(args: SelectSubset<T, KnowledgeUnitUpdateArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeUnits.
     * @param {KnowledgeUnitDeleteManyArgs} args - Arguments to filter KnowledgeUnits to delete.
     * @example
     * // Delete a few KnowledgeUnits
     * const { count } = await prisma.knowledgeUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeUnitDeleteManyArgs>(args?: SelectSubset<T, KnowledgeUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeUnits
     * const knowledgeUnit = await prisma.knowledgeUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeUnitUpdateManyArgs>(args: SelectSubset<T, KnowledgeUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeUnits and returns the data updated in the database.
     * @param {KnowledgeUnitUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeUnits.
     * @example
     * // Update many KnowledgeUnits
     * const knowledgeUnit = await prisma.knowledgeUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeUnits and only return the `id`
     * const knowledgeUnitWithIdOnly = await prisma.knowledgeUnit.updateManyAndReturn({
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
    updateManyAndReturn<T extends KnowledgeUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeUnit.
     * @param {KnowledgeUnitUpsertArgs} args - Arguments to update or create a KnowledgeUnit.
     * @example
     * // Update or create a KnowledgeUnit
     * const knowledgeUnit = await prisma.knowledgeUnit.upsert({
     *   create: {
     *     // ... data to create a KnowledgeUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeUnit we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeUnitUpsertArgs>(args: SelectSubset<T, KnowledgeUnitUpsertArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitCountArgs} args - Arguments to filter KnowledgeUnits to count.
     * @example
     * // Count the number of KnowledgeUnits
     * const count = await prisma.knowledgeUnit.count({
     *   where: {
     *     // ... the filter for the KnowledgeUnits we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeUnitCountArgs>(
      args?: Subset<T, KnowledgeUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeUnitAggregateArgs>(args: Subset<T, KnowledgeUnitAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeUnitAggregateType<T>>

    /**
     * Group by KnowledgeUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUnitGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeUnitGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeUnit model
   */
  readonly fields: KnowledgeUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskLinks<T extends KnowledgeUnit$taskLinksArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeUnit$taskLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KnowledgeUnit model
   */
  interface KnowledgeUnitFieldRefs {
    readonly id: FieldRef<"KnowledgeUnit", 'String'>
    readonly materialId: FieldRef<"KnowledgeUnit", 'String'>
    readonly title: FieldRef<"KnowledgeUnit", 'String'>
    readonly summary: FieldRef<"KnowledgeUnit", 'String'>
    readonly topic: FieldRef<"KnowledgeUnit", 'String'>
    readonly difficulty: FieldRef<"KnowledgeUnit", 'Int'>
    readonly importance: FieldRef<"KnowledgeUnit", 'Int'>
    readonly estimatedMinutes: FieldRef<"KnowledgeUnit", 'Int'>
    readonly prerequisiteIds: FieldRef<"KnowledgeUnit", 'String[]'>
    readonly sourceRefs: FieldRef<"KnowledgeUnit", 'Json'>
    readonly createdAt: FieldRef<"KnowledgeUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeUnit findUnique
   */
  export type KnowledgeUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeUnit to fetch.
     */
    where: KnowledgeUnitWhereUniqueInput
  }

  /**
   * KnowledgeUnit findUniqueOrThrow
   */
  export type KnowledgeUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeUnit to fetch.
     */
    where: KnowledgeUnitWhereUniqueInput
  }

  /**
   * KnowledgeUnit findFirst
   */
  export type KnowledgeUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeUnit to fetch.
     */
    where?: KnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeUnits to fetch.
     */
    orderBy?: KnowledgeUnitOrderByWithRelationInput | KnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeUnits.
     */
    cursor?: KnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeUnits.
     */
    distinct?: KnowledgeUnitScalarFieldEnum | KnowledgeUnitScalarFieldEnum[]
  }

  /**
   * KnowledgeUnit findFirstOrThrow
   */
  export type KnowledgeUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeUnit to fetch.
     */
    where?: KnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeUnits to fetch.
     */
    orderBy?: KnowledgeUnitOrderByWithRelationInput | KnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeUnits.
     */
    cursor?: KnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeUnits.
     */
    distinct?: KnowledgeUnitScalarFieldEnum | KnowledgeUnitScalarFieldEnum[]
  }

  /**
   * KnowledgeUnit findMany
   */
  export type KnowledgeUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeUnits to fetch.
     */
    where?: KnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeUnits to fetch.
     */
    orderBy?: KnowledgeUnitOrderByWithRelationInput | KnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeUnits.
     */
    cursor?: KnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeUnits.
     */
    distinct?: KnowledgeUnitScalarFieldEnum | KnowledgeUnitScalarFieldEnum[]
  }

  /**
   * KnowledgeUnit create
   */
  export type KnowledgeUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeUnit.
     */
    data: XOR<KnowledgeUnitCreateInput, KnowledgeUnitUncheckedCreateInput>
  }

  /**
   * KnowledgeUnit createMany
   */
  export type KnowledgeUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeUnits.
     */
    data: KnowledgeUnitCreateManyInput | KnowledgeUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeUnit createManyAndReturn
   */
  export type KnowledgeUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeUnits.
     */
    data: KnowledgeUnitCreateManyInput | KnowledgeUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeUnit update
   */
  export type KnowledgeUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeUnit.
     */
    data: XOR<KnowledgeUnitUpdateInput, KnowledgeUnitUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeUnit to update.
     */
    where: KnowledgeUnitWhereUniqueInput
  }

  /**
   * KnowledgeUnit updateMany
   */
  export type KnowledgeUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeUnits.
     */
    data: XOR<KnowledgeUnitUpdateManyMutationInput, KnowledgeUnitUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeUnits to update
     */
    where?: KnowledgeUnitWhereInput
    /**
     * Limit how many KnowledgeUnits to update.
     */
    limit?: number
  }

  /**
   * KnowledgeUnit updateManyAndReturn
   */
  export type KnowledgeUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeUnits.
     */
    data: XOR<KnowledgeUnitUpdateManyMutationInput, KnowledgeUnitUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeUnits to update
     */
    where?: KnowledgeUnitWhereInput
    /**
     * Limit how many KnowledgeUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeUnit upsert
   */
  export type KnowledgeUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeUnit to update in case it exists.
     */
    where: KnowledgeUnitWhereUniqueInput
    /**
     * In case the KnowledgeUnit found by the `where` argument doesn't exist, create a new KnowledgeUnit with this data.
     */
    create: XOR<KnowledgeUnitCreateInput, KnowledgeUnitUncheckedCreateInput>
    /**
     * In case the KnowledgeUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeUnitUpdateInput, KnowledgeUnitUncheckedUpdateInput>
  }

  /**
   * KnowledgeUnit delete
   */
  export type KnowledgeUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeUnit to delete.
     */
    where: KnowledgeUnitWhereUniqueInput
  }

  /**
   * KnowledgeUnit deleteMany
   */
  export type KnowledgeUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeUnits to delete
     */
    where?: KnowledgeUnitWhereInput
    /**
     * Limit how many KnowledgeUnits to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeUnit.taskLinks
   */
  export type KnowledgeUnit$taskLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    where?: TaskKnowledgeUnitWhereInput
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskKnowledgeUnitScalarFieldEnum | TaskKnowledgeUnitScalarFieldEnum[]
  }

  /**
   * KnowledgeUnit without action
   */
  export type KnowledgeUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeUnit
     */
    select?: KnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeUnit
     */
    omit?: KnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeUnitInclude<ExtArgs> | null
  }


  /**
   * Model StudyPlan
   */

  export type AggregateStudyPlan = {
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  export type StudyPlanAvgAggregateOutputType = {
    totalDays: number | null
  }

  export type StudyPlanSumAggregateOutputType = {
    totalDays: number | null
  }

  export type StudyPlanMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    totalDays: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyPlanMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    totalDays: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyPlanCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    startDate: number
    endDate: number
    totalDays: number
    status: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyPlanAvgAggregateInputType = {
    totalDays?: true
  }

  export type StudyPlanSumAggregateInputType = {
    totalDays?: true
  }

  export type StudyPlanMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    startDate?: true
    endDate?: true
    totalDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyPlanMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    startDate?: true
    endDate?: true
    totalDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyPlanCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    startDate?: true
    endDate?: true
    totalDays?: true
    status?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlan to aggregate.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPlans
    **/
    _count?: true | StudyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyPlanMaxAggregateInputType
  }

  export type GetStudyPlanAggregateType<T extends StudyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyPlan[P]>
      : GetScalarType<T[P], AggregateStudyPlan[P]>
  }




  export type StudyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithAggregationInput | StudyPlanOrderByWithAggregationInput[]
    by: StudyPlanScalarFieldEnum[] | StudyPlanScalarFieldEnum
    having?: StudyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyPlanCountAggregateInputType | true
    _avg?: StudyPlanAvgAggregateInputType
    _sum?: StudyPlanSumAggregateInputType
    _min?: StudyPlanMinAggregateInputType
    _max?: StudyPlanMaxAggregateInputType
  }

  export type StudyPlanGroupByOutputType = {
    id: string
    projectId: string
    title: string
    startDate: Date
    endDate: Date
    totalDays: number
    status: $Enums.PlanStatus
    config: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  type GetStudyPlanGroupByPayload<T extends StudyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
        }
      >
    >


  export type StudyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    totalDays?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | StudyPlan$tasksArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    totalDays?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    totalDays?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    totalDays?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "title" | "startDate" | "endDate" | "totalDays" | "status" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["studyPlan"]>
  export type StudyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | StudyPlan$tasksArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $StudyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyPlan"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      title: string
      startDate: Date
      endDate: Date
      totalDays: number
      status: $Enums.PlanStatus
      config: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studyPlan"]>
    composites: {}
  }

  type StudyPlanGetPayload<S extends boolean | null | undefined | StudyPlanDefaultArgs> = $Result.GetResult<Prisma.$StudyPlanPayload, S>

  type StudyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyPlanCountAggregateInputType | true
    }

  export interface StudyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyPlan'], meta: { name: 'StudyPlan' } }
    /**
     * Find zero or one StudyPlan that matches the filter.
     * @param {StudyPlanFindUniqueArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyPlanFindUniqueArgs>(args: SelectSubset<T, StudyPlanFindUniqueArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyPlanFindUniqueOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyPlanFindFirstArgs>(args?: SelectSubset<T, StudyPlanFindFirstArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany()
     * 
     * // Get first 10 StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyPlanFindManyArgs>(args?: SelectSubset<T, StudyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyPlan.
     * @param {StudyPlanCreateArgs} args - Arguments to create a StudyPlan.
     * @example
     * // Create one StudyPlan
     * const StudyPlan = await prisma.studyPlan.create({
     *   data: {
     *     // ... data to create a StudyPlan
     *   }
     * })
     * 
     */
    create<T extends StudyPlanCreateArgs>(args: SelectSubset<T, StudyPlanCreateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyPlans.
     * @param {StudyPlanCreateManyArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyPlanCreateManyArgs>(args?: SelectSubset<T, StudyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyPlans and returns the data saved in the database.
     * @param {StudyPlanCreateManyAndReturnArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyPlan.
     * @param {StudyPlanDeleteArgs} args - Arguments to delete one StudyPlan.
     * @example
     * // Delete one StudyPlan
     * const StudyPlan = await prisma.studyPlan.delete({
     *   where: {
     *     // ... filter to delete one StudyPlan
     *   }
     * })
     * 
     */
    delete<T extends StudyPlanDeleteArgs>(args: SelectSubset<T, StudyPlanDeleteArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyPlan.
     * @param {StudyPlanUpdateArgs} args - Arguments to update one StudyPlan.
     * @example
     * // Update one StudyPlan
     * const studyPlan = await prisma.studyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyPlanUpdateArgs>(args: SelectSubset<T, StudyPlanUpdateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyPlans.
     * @param {StudyPlanDeleteManyArgs} args - Arguments to filter StudyPlans to delete.
     * @example
     * // Delete a few StudyPlans
     * const { count } = await prisma.studyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyPlanDeleteManyArgs>(args?: SelectSubset<T, StudyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyPlanUpdateManyArgs>(args: SelectSubset<T, StudyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans and returns the data updated in the database.
     * @param {StudyPlanUpdateManyAndReturnArgs} args - Arguments to update many StudyPlans.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyPlan.
     * @param {StudyPlanUpsertArgs} args - Arguments to update or create a StudyPlan.
     * @example
     * // Update or create a StudyPlan
     * const studyPlan = await prisma.studyPlan.upsert({
     *   create: {
     *     // ... data to create a StudyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyPlan we want to update
     *   }
     * })
     */
    upsert<T extends StudyPlanUpsertArgs>(args: SelectSubset<T, StudyPlanUpsertArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanCountArgs} args - Arguments to filter StudyPlans to count.
     * @example
     * // Count the number of StudyPlans
     * const count = await prisma.studyPlan.count({
     *   where: {
     *     // ... the filter for the StudyPlans we want to count
     *   }
     * })
    **/
    count<T extends StudyPlanCountArgs>(
      args?: Subset<T, StudyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyPlanAggregateArgs>(args: Subset<T, StudyPlanAggregateArgs>): Prisma.PrismaPromise<GetStudyPlanAggregateType<T>>

    /**
     * Group by StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanGroupByArgs} args - Group by arguments.
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
      T extends StudyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyPlanGroupByArgs['orderBy'] }
        : { orderBy?: StudyPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyPlan model
   */
  readonly fields: StudyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends StudyPlan$tasksArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudyPlan model
   */
  interface StudyPlanFieldRefs {
    readonly id: FieldRef<"StudyPlan", 'String'>
    readonly projectId: FieldRef<"StudyPlan", 'String'>
    readonly title: FieldRef<"StudyPlan", 'String'>
    readonly startDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly endDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly totalDays: FieldRef<"StudyPlan", 'Int'>
    readonly status: FieldRef<"StudyPlan", 'PlanStatus'>
    readonly config: FieldRef<"StudyPlan", 'Json'>
    readonly createdAt: FieldRef<"StudyPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"StudyPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyPlan findUnique
   */
  export type StudyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findUniqueOrThrow
   */
  export type StudyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findFirst
   */
  export type StudyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findFirstOrThrow
   */
  export type StudyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findMany
   */
  export type StudyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlans to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan create
   */
  export type StudyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyPlan.
     */
    data: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
  }

  /**
   * StudyPlan createMany
   */
  export type StudyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyPlan createManyAndReturn
   */
  export type StudyPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan update
   */
  export type StudyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyPlan.
     */
    data: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
    /**
     * Choose, which StudyPlan to update.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan updateMany
   */
  export type StudyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
  }

  /**
   * StudyPlan updateManyAndReturn
   */
  export type StudyPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan upsert
   */
  export type StudyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyPlan to update in case it exists.
     */
    where: StudyPlanWhereUniqueInput
    /**
     * In case the StudyPlan found by the `where` argument doesn't exist, create a new StudyPlan with this data.
     */
    create: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
    /**
     * In case the StudyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
  }

  /**
   * StudyPlan delete
   */
  export type StudyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter which StudyPlan to delete.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan deleteMany
   */
  export type StudyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlans to delete
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to delete.
     */
    limit?: number
  }

  /**
   * StudyPlan.tasks
   */
  export type StudyPlan$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * StudyPlan without action
   */
  export type StudyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
    difficulty: number | null
    priority: number | null
    masteryScore: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null
    difficulty: number | null
    priority: number | null
    masteryScore: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    studyPlanId: string | null
    title: string | null
    description: string | null
    taskType: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    scheduledDate: Date | null
    estimatedMinutes: number | null
    difficulty: number | null
    priority: number | null
    masteryScore: number | null
    nextReviewDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    studyPlanId: string | null
    title: string | null
    description: string | null
    taskType: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    scheduledDate: Date | null
    estimatedMinutes: number | null
    difficulty: number | null
    priority: number | null
    masteryScore: number | null
    nextReviewDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    studyPlanId: number
    title: number
    description: number
    taskType: number
    status: number
    scheduledDate: number
    estimatedMinutes: number
    difficulty: number
    priority: number
    masteryScore: number
    nextReviewDate: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true
    difficulty?: true
    priority?: true
    masteryScore?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedMinutes?: true
    difficulty?: true
    priority?: true
    masteryScore?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    studyPlanId?: true
    title?: true
    description?: true
    taskType?: true
    status?: true
    scheduledDate?: true
    estimatedMinutes?: true
    difficulty?: true
    priority?: true
    masteryScore?: true
    nextReviewDate?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    studyPlanId?: true
    title?: true
    description?: true
    taskType?: true
    status?: true
    scheduledDate?: true
    estimatedMinutes?: true
    difficulty?: true
    priority?: true
    masteryScore?: true
    nextReviewDate?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    studyPlanId?: true
    title?: true
    description?: true
    taskType?: true
    status?: true
    scheduledDate?: true
    estimatedMinutes?: true
    difficulty?: true
    priority?: true
    masteryScore?: true
    nextReviewDate?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    studyPlanId: string
    title: string
    description: string | null
    taskType: $Enums.TaskType
    status: $Enums.TaskStatus
    scheduledDate: Date
    estimatedMinutes: number | null
    difficulty: number | null
    priority: number | null
    masteryScore: number | null
    nextReviewDate: Date | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyPlanId?: boolean
    title?: boolean
    description?: boolean
    taskType?: boolean
    status?: boolean
    scheduledDate?: boolean
    estimatedMinutes?: boolean
    difficulty?: boolean
    priority?: boolean
    masteryScore?: boolean
    nextReviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    knowledgeLinks?: boolean | Task$knowledgeLinksArgs<ExtArgs>
    sessions?: boolean | Task$sessionsArgs<ExtArgs>
    notes?: boolean | Task$notesArgs<ExtArgs>
    quizzes?: boolean | Task$quizzesArgs<ExtArgs>
    reviewRecords?: boolean | Task$reviewRecordsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyPlanId?: boolean
    title?: boolean
    description?: boolean
    taskType?: boolean
    status?: boolean
    scheduledDate?: boolean
    estimatedMinutes?: boolean
    difficulty?: boolean
    priority?: boolean
    masteryScore?: boolean
    nextReviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyPlanId?: boolean
    title?: boolean
    description?: boolean
    taskType?: boolean
    status?: boolean
    scheduledDate?: boolean
    estimatedMinutes?: boolean
    difficulty?: boolean
    priority?: boolean
    masteryScore?: boolean
    nextReviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    studyPlanId?: boolean
    title?: boolean
    description?: boolean
    taskType?: boolean
    status?: boolean
    scheduledDate?: boolean
    estimatedMinutes?: boolean
    difficulty?: boolean
    priority?: boolean
    masteryScore?: boolean
    nextReviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studyPlanId" | "title" | "description" | "taskType" | "status" | "scheduledDate" | "estimatedMinutes" | "difficulty" | "priority" | "masteryScore" | "nextReviewDate" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    knowledgeLinks?: boolean | Task$knowledgeLinksArgs<ExtArgs>
    sessions?: boolean | Task$sessionsArgs<ExtArgs>
    notes?: boolean | Task$notesArgs<ExtArgs>
    quizzes?: boolean | Task$quizzesArgs<ExtArgs>
    reviewRecords?: boolean | Task$reviewRecordsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      studyPlan: Prisma.$StudyPlanPayload<ExtArgs>
      knowledgeLinks: Prisma.$TaskKnowledgeUnitPayload<ExtArgs>[]
      sessions: Prisma.$LearningSessionPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      reviewRecords: Prisma.$ReviewRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studyPlanId: string
      title: string
      description: string | null
      taskType: $Enums.TaskType
      status: $Enums.TaskStatus
      scheduledDate: Date
      estimatedMinutes: number | null
      difficulty: number | null
      priority: number | null
      masteryScore: number | null
      nextReviewDate: Date | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyPlan<T extends StudyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlanDefaultArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    knowledgeLinks<T extends Task$knowledgeLinksArgs<ExtArgs> = {}>(args?: Subset<T, Task$knowledgeLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Task$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Task$notesArgs<ExtArgs> = {}>(args?: Subset<T, Task$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Task$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Task$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewRecords<T extends Task$reviewRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Task$reviewRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly studyPlanId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly taskType: FieldRef<"Task", 'TaskType'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly scheduledDate: FieldRef<"Task", 'DateTime'>
    readonly estimatedMinutes: FieldRef<"Task", 'Int'>
    readonly difficulty: FieldRef<"Task", 'Int'>
    readonly priority: FieldRef<"Task", 'Int'>
    readonly masteryScore: FieldRef<"Task", 'Float'>
    readonly nextReviewDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.knowledgeLinks
   */
  export type Task$knowledgeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    where?: TaskKnowledgeUnitWhereInput
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskKnowledgeUnitScalarFieldEnum | TaskKnowledgeUnitScalarFieldEnum[]
  }

  /**
   * Task.sessions
   */
  export type Task$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    where?: LearningSessionWhereInput
    orderBy?: LearningSessionOrderByWithRelationInput | LearningSessionOrderByWithRelationInput[]
    cursor?: LearningSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningSessionScalarFieldEnum | LearningSessionScalarFieldEnum[]
  }

  /**
   * Task.notes
   */
  export type Task$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Task.quizzes
   */
  export type Task$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Task.reviewRecords
   */
  export type Task$reviewRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    where?: ReviewRecordWhereInput
    orderBy?: ReviewRecordOrderByWithRelationInput | ReviewRecordOrderByWithRelationInput[]
    cursor?: ReviewRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewRecordScalarFieldEnum | ReviewRecordScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskKnowledgeUnit
   */

  export type AggregateTaskKnowledgeUnit = {
    _count: TaskKnowledgeUnitCountAggregateOutputType | null
    _min: TaskKnowledgeUnitMinAggregateOutputType | null
    _max: TaskKnowledgeUnitMaxAggregateOutputType | null
  }

  export type TaskKnowledgeUnitMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    knowledgeUnitId: string | null
  }

  export type TaskKnowledgeUnitMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    knowledgeUnitId: string | null
  }

  export type TaskKnowledgeUnitCountAggregateOutputType = {
    id: number
    taskId: number
    knowledgeUnitId: number
    _all: number
  }


  export type TaskKnowledgeUnitMinAggregateInputType = {
    id?: true
    taskId?: true
    knowledgeUnitId?: true
  }

  export type TaskKnowledgeUnitMaxAggregateInputType = {
    id?: true
    taskId?: true
    knowledgeUnitId?: true
  }

  export type TaskKnowledgeUnitCountAggregateInputType = {
    id?: true
    taskId?: true
    knowledgeUnitId?: true
    _all?: true
  }

  export type TaskKnowledgeUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskKnowledgeUnit to aggregate.
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskKnowledgeUnits to fetch.
     */
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskKnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskKnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskKnowledgeUnits
    **/
    _count?: true | TaskKnowledgeUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskKnowledgeUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskKnowledgeUnitMaxAggregateInputType
  }

  export type GetTaskKnowledgeUnitAggregateType<T extends TaskKnowledgeUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskKnowledgeUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskKnowledgeUnit[P]>
      : GetScalarType<T[P], AggregateTaskKnowledgeUnit[P]>
  }




  export type TaskKnowledgeUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskKnowledgeUnitWhereInput
    orderBy?: TaskKnowledgeUnitOrderByWithAggregationInput | TaskKnowledgeUnitOrderByWithAggregationInput[]
    by: TaskKnowledgeUnitScalarFieldEnum[] | TaskKnowledgeUnitScalarFieldEnum
    having?: TaskKnowledgeUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskKnowledgeUnitCountAggregateInputType | true
    _min?: TaskKnowledgeUnitMinAggregateInputType
    _max?: TaskKnowledgeUnitMaxAggregateInputType
  }

  export type TaskKnowledgeUnitGroupByOutputType = {
    id: string
    taskId: string
    knowledgeUnitId: string
    _count: TaskKnowledgeUnitCountAggregateOutputType | null
    _min: TaskKnowledgeUnitMinAggregateOutputType | null
    _max: TaskKnowledgeUnitMaxAggregateOutputType | null
  }

  type GetTaskKnowledgeUnitGroupByPayload<T extends TaskKnowledgeUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskKnowledgeUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskKnowledgeUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskKnowledgeUnitGroupByOutputType[P]>
            : GetScalarType<T[P], TaskKnowledgeUnitGroupByOutputType[P]>
        }
      >
    >


  export type TaskKnowledgeUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    knowledgeUnitId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskKnowledgeUnit"]>

  export type TaskKnowledgeUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    knowledgeUnitId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskKnowledgeUnit"]>

  export type TaskKnowledgeUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    knowledgeUnitId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskKnowledgeUnit"]>

  export type TaskKnowledgeUnitSelectScalar = {
    id?: boolean
    taskId?: boolean
    knowledgeUnitId?: boolean
  }

  export type TaskKnowledgeUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "knowledgeUnitId", ExtArgs["result"]["taskKnowledgeUnit"]>
  export type TaskKnowledgeUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }
  export type TaskKnowledgeUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }
  export type TaskKnowledgeUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    knowledgeUnit?: boolean | KnowledgeUnitDefaultArgs<ExtArgs>
  }

  export type $TaskKnowledgeUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskKnowledgeUnit"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      knowledgeUnit: Prisma.$KnowledgeUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      knowledgeUnitId: string
    }, ExtArgs["result"]["taskKnowledgeUnit"]>
    composites: {}
  }

  type TaskKnowledgeUnitGetPayload<S extends boolean | null | undefined | TaskKnowledgeUnitDefaultArgs> = $Result.GetResult<Prisma.$TaskKnowledgeUnitPayload, S>

  type TaskKnowledgeUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskKnowledgeUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskKnowledgeUnitCountAggregateInputType | true
    }

  export interface TaskKnowledgeUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskKnowledgeUnit'], meta: { name: 'TaskKnowledgeUnit' } }
    /**
     * Find zero or one TaskKnowledgeUnit that matches the filter.
     * @param {TaskKnowledgeUnitFindUniqueArgs} args - Arguments to find a TaskKnowledgeUnit
     * @example
     * // Get one TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskKnowledgeUnitFindUniqueArgs>(args: SelectSubset<T, TaskKnowledgeUnitFindUniqueArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskKnowledgeUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskKnowledgeUnitFindUniqueOrThrowArgs} args - Arguments to find a TaskKnowledgeUnit
     * @example
     * // Get one TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskKnowledgeUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskKnowledgeUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskKnowledgeUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitFindFirstArgs} args - Arguments to find a TaskKnowledgeUnit
     * @example
     * // Get one TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskKnowledgeUnitFindFirstArgs>(args?: SelectSubset<T, TaskKnowledgeUnitFindFirstArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskKnowledgeUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitFindFirstOrThrowArgs} args - Arguments to find a TaskKnowledgeUnit
     * @example
     * // Get one TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskKnowledgeUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskKnowledgeUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskKnowledgeUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskKnowledgeUnits
     * const taskKnowledgeUnits = await prisma.taskKnowledgeUnit.findMany()
     * 
     * // Get first 10 TaskKnowledgeUnits
     * const taskKnowledgeUnits = await prisma.taskKnowledgeUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskKnowledgeUnitWithIdOnly = await prisma.taskKnowledgeUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskKnowledgeUnitFindManyArgs>(args?: SelectSubset<T, TaskKnowledgeUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskKnowledgeUnit.
     * @param {TaskKnowledgeUnitCreateArgs} args - Arguments to create a TaskKnowledgeUnit.
     * @example
     * // Create one TaskKnowledgeUnit
     * const TaskKnowledgeUnit = await prisma.taskKnowledgeUnit.create({
     *   data: {
     *     // ... data to create a TaskKnowledgeUnit
     *   }
     * })
     * 
     */
    create<T extends TaskKnowledgeUnitCreateArgs>(args: SelectSubset<T, TaskKnowledgeUnitCreateArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskKnowledgeUnits.
     * @param {TaskKnowledgeUnitCreateManyArgs} args - Arguments to create many TaskKnowledgeUnits.
     * @example
     * // Create many TaskKnowledgeUnits
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskKnowledgeUnitCreateManyArgs>(args?: SelectSubset<T, TaskKnowledgeUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskKnowledgeUnits and returns the data saved in the database.
     * @param {TaskKnowledgeUnitCreateManyAndReturnArgs} args - Arguments to create many TaskKnowledgeUnits.
     * @example
     * // Create many TaskKnowledgeUnits
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskKnowledgeUnits and only return the `id`
     * const taskKnowledgeUnitWithIdOnly = await prisma.taskKnowledgeUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskKnowledgeUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskKnowledgeUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskKnowledgeUnit.
     * @param {TaskKnowledgeUnitDeleteArgs} args - Arguments to delete one TaskKnowledgeUnit.
     * @example
     * // Delete one TaskKnowledgeUnit
     * const TaskKnowledgeUnit = await prisma.taskKnowledgeUnit.delete({
     *   where: {
     *     // ... filter to delete one TaskKnowledgeUnit
     *   }
     * })
     * 
     */
    delete<T extends TaskKnowledgeUnitDeleteArgs>(args: SelectSubset<T, TaskKnowledgeUnitDeleteArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskKnowledgeUnit.
     * @param {TaskKnowledgeUnitUpdateArgs} args - Arguments to update one TaskKnowledgeUnit.
     * @example
     * // Update one TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskKnowledgeUnitUpdateArgs>(args: SelectSubset<T, TaskKnowledgeUnitUpdateArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskKnowledgeUnits.
     * @param {TaskKnowledgeUnitDeleteManyArgs} args - Arguments to filter TaskKnowledgeUnits to delete.
     * @example
     * // Delete a few TaskKnowledgeUnits
     * const { count } = await prisma.taskKnowledgeUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskKnowledgeUnitDeleteManyArgs>(args?: SelectSubset<T, TaskKnowledgeUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskKnowledgeUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskKnowledgeUnits
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskKnowledgeUnitUpdateManyArgs>(args: SelectSubset<T, TaskKnowledgeUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskKnowledgeUnits and returns the data updated in the database.
     * @param {TaskKnowledgeUnitUpdateManyAndReturnArgs} args - Arguments to update many TaskKnowledgeUnits.
     * @example
     * // Update many TaskKnowledgeUnits
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskKnowledgeUnits and only return the `id`
     * const taskKnowledgeUnitWithIdOnly = await prisma.taskKnowledgeUnit.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskKnowledgeUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskKnowledgeUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskKnowledgeUnit.
     * @param {TaskKnowledgeUnitUpsertArgs} args - Arguments to update or create a TaskKnowledgeUnit.
     * @example
     * // Update or create a TaskKnowledgeUnit
     * const taskKnowledgeUnit = await prisma.taskKnowledgeUnit.upsert({
     *   create: {
     *     // ... data to create a TaskKnowledgeUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskKnowledgeUnit we want to update
     *   }
     * })
     */
    upsert<T extends TaskKnowledgeUnitUpsertArgs>(args: SelectSubset<T, TaskKnowledgeUnitUpsertArgs<ExtArgs>>): Prisma__TaskKnowledgeUnitClient<$Result.GetResult<Prisma.$TaskKnowledgeUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskKnowledgeUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitCountArgs} args - Arguments to filter TaskKnowledgeUnits to count.
     * @example
     * // Count the number of TaskKnowledgeUnits
     * const count = await prisma.taskKnowledgeUnit.count({
     *   where: {
     *     // ... the filter for the TaskKnowledgeUnits we want to count
     *   }
     * })
    **/
    count<T extends TaskKnowledgeUnitCountArgs>(
      args?: Subset<T, TaskKnowledgeUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskKnowledgeUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskKnowledgeUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskKnowledgeUnitAggregateArgs>(args: Subset<T, TaskKnowledgeUnitAggregateArgs>): Prisma.PrismaPromise<GetTaskKnowledgeUnitAggregateType<T>>

    /**
     * Group by TaskKnowledgeUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskKnowledgeUnitGroupByArgs} args - Group by arguments.
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
      T extends TaskKnowledgeUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskKnowledgeUnitGroupByArgs['orderBy'] }
        : { orderBy?: TaskKnowledgeUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskKnowledgeUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskKnowledgeUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskKnowledgeUnit model
   */
  readonly fields: TaskKnowledgeUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskKnowledgeUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskKnowledgeUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    knowledgeUnit<T extends KnowledgeUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeUnitDefaultArgs<ExtArgs>>): Prisma__KnowledgeUnitClient<$Result.GetResult<Prisma.$KnowledgeUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskKnowledgeUnit model
   */
  interface TaskKnowledgeUnitFieldRefs {
    readonly id: FieldRef<"TaskKnowledgeUnit", 'String'>
    readonly taskId: FieldRef<"TaskKnowledgeUnit", 'String'>
    readonly knowledgeUnitId: FieldRef<"TaskKnowledgeUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskKnowledgeUnit findUnique
   */
  export type TaskKnowledgeUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which TaskKnowledgeUnit to fetch.
     */
    where: TaskKnowledgeUnitWhereUniqueInput
  }

  /**
   * TaskKnowledgeUnit findUniqueOrThrow
   */
  export type TaskKnowledgeUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which TaskKnowledgeUnit to fetch.
     */
    where: TaskKnowledgeUnitWhereUniqueInput
  }

  /**
   * TaskKnowledgeUnit findFirst
   */
  export type TaskKnowledgeUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which TaskKnowledgeUnit to fetch.
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskKnowledgeUnits to fetch.
     */
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskKnowledgeUnits.
     */
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskKnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskKnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskKnowledgeUnits.
     */
    distinct?: TaskKnowledgeUnitScalarFieldEnum | TaskKnowledgeUnitScalarFieldEnum[]
  }

  /**
   * TaskKnowledgeUnit findFirstOrThrow
   */
  export type TaskKnowledgeUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which TaskKnowledgeUnit to fetch.
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskKnowledgeUnits to fetch.
     */
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskKnowledgeUnits.
     */
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskKnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskKnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskKnowledgeUnits.
     */
    distinct?: TaskKnowledgeUnitScalarFieldEnum | TaskKnowledgeUnitScalarFieldEnum[]
  }

  /**
   * TaskKnowledgeUnit findMany
   */
  export type TaskKnowledgeUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter, which TaskKnowledgeUnits to fetch.
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskKnowledgeUnits to fetch.
     */
    orderBy?: TaskKnowledgeUnitOrderByWithRelationInput | TaskKnowledgeUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskKnowledgeUnits.
     */
    cursor?: TaskKnowledgeUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskKnowledgeUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskKnowledgeUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskKnowledgeUnits.
     */
    distinct?: TaskKnowledgeUnitScalarFieldEnum | TaskKnowledgeUnitScalarFieldEnum[]
  }

  /**
   * TaskKnowledgeUnit create
   */
  export type TaskKnowledgeUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskKnowledgeUnit.
     */
    data: XOR<TaskKnowledgeUnitCreateInput, TaskKnowledgeUnitUncheckedCreateInput>
  }

  /**
   * TaskKnowledgeUnit createMany
   */
  export type TaskKnowledgeUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskKnowledgeUnits.
     */
    data: TaskKnowledgeUnitCreateManyInput | TaskKnowledgeUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskKnowledgeUnit createManyAndReturn
   */
  export type TaskKnowledgeUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * The data used to create many TaskKnowledgeUnits.
     */
    data: TaskKnowledgeUnitCreateManyInput | TaskKnowledgeUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskKnowledgeUnit update
   */
  export type TaskKnowledgeUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskKnowledgeUnit.
     */
    data: XOR<TaskKnowledgeUnitUpdateInput, TaskKnowledgeUnitUncheckedUpdateInput>
    /**
     * Choose, which TaskKnowledgeUnit to update.
     */
    where: TaskKnowledgeUnitWhereUniqueInput
  }

  /**
   * TaskKnowledgeUnit updateMany
   */
  export type TaskKnowledgeUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskKnowledgeUnits.
     */
    data: XOR<TaskKnowledgeUnitUpdateManyMutationInput, TaskKnowledgeUnitUncheckedUpdateManyInput>
    /**
     * Filter which TaskKnowledgeUnits to update
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * Limit how many TaskKnowledgeUnits to update.
     */
    limit?: number
  }

  /**
   * TaskKnowledgeUnit updateManyAndReturn
   */
  export type TaskKnowledgeUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * The data used to update TaskKnowledgeUnits.
     */
    data: XOR<TaskKnowledgeUnitUpdateManyMutationInput, TaskKnowledgeUnitUncheckedUpdateManyInput>
    /**
     * Filter which TaskKnowledgeUnits to update
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * Limit how many TaskKnowledgeUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskKnowledgeUnit upsert
   */
  export type TaskKnowledgeUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskKnowledgeUnit to update in case it exists.
     */
    where: TaskKnowledgeUnitWhereUniqueInput
    /**
     * In case the TaskKnowledgeUnit found by the `where` argument doesn't exist, create a new TaskKnowledgeUnit with this data.
     */
    create: XOR<TaskKnowledgeUnitCreateInput, TaskKnowledgeUnitUncheckedCreateInput>
    /**
     * In case the TaskKnowledgeUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskKnowledgeUnitUpdateInput, TaskKnowledgeUnitUncheckedUpdateInput>
  }

  /**
   * TaskKnowledgeUnit delete
   */
  export type TaskKnowledgeUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
    /**
     * Filter which TaskKnowledgeUnit to delete.
     */
    where: TaskKnowledgeUnitWhereUniqueInput
  }

  /**
   * TaskKnowledgeUnit deleteMany
   */
  export type TaskKnowledgeUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskKnowledgeUnits to delete
     */
    where?: TaskKnowledgeUnitWhereInput
    /**
     * Limit how many TaskKnowledgeUnits to delete.
     */
    limit?: number
  }

  /**
   * TaskKnowledgeUnit without action
   */
  export type TaskKnowledgeUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskKnowledgeUnit
     */
    select?: TaskKnowledgeUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskKnowledgeUnit
     */
    omit?: TaskKnowledgeUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskKnowledgeUnitInclude<ExtArgs> | null
  }


  /**
   * Model LearningSession
   */

  export type AggregateLearningSession = {
    _count: LearningSessionCountAggregateOutputType | null
    _avg: LearningSessionAvgAggregateOutputType | null
    _sum: LearningSessionSumAggregateOutputType | null
    _min: LearningSessionMinAggregateOutputType | null
    _max: LearningSessionMaxAggregateOutputType | null
  }

  export type LearningSessionAvgAggregateOutputType = {
    durationSeconds: number | null
    questionCount: number | null
  }

  export type LearningSessionSumAggregateOutputType = {
    durationSeconds: number | null
    questionCount: number | null
  }

  export type LearningSessionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
    questionCount: number | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
  }

  export type LearningSessionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
    questionCount: number | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
  }

  export type LearningSessionCountAggregateOutputType = {
    id: number
    taskId: number
    startedAt: number
    endedAt: number
    durationSeconds: number
    questionCount: number
    status: number
    createdAt: number
    _all: number
  }


  export type LearningSessionAvgAggregateInputType = {
    durationSeconds?: true
    questionCount?: true
  }

  export type LearningSessionSumAggregateInputType = {
    durationSeconds?: true
    questionCount?: true
  }

  export type LearningSessionMinAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
    questionCount?: true
    status?: true
    createdAt?: true
  }

  export type LearningSessionMaxAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
    questionCount?: true
    status?: true
    createdAt?: true
  }

  export type LearningSessionCountAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
    questionCount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LearningSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSession to aggregate.
     */
    where?: LearningSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessions to fetch.
     */
    orderBy?: LearningSessionOrderByWithRelationInput | LearningSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningSessions
    **/
    _count?: true | LearningSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningSessionMaxAggregateInputType
  }

  export type GetLearningSessionAggregateType<T extends LearningSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningSession[P]>
      : GetScalarType<T[P], AggregateLearningSession[P]>
  }




  export type LearningSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningSessionWhereInput
    orderBy?: LearningSessionOrderByWithAggregationInput | LearningSessionOrderByWithAggregationInput[]
    by: LearningSessionScalarFieldEnum[] | LearningSessionScalarFieldEnum
    having?: LearningSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningSessionCountAggregateInputType | true
    _avg?: LearningSessionAvgAggregateInputType
    _sum?: LearningSessionSumAggregateInputType
    _min?: LearningSessionMinAggregateInputType
    _max?: LearningSessionMaxAggregateInputType
  }

  export type LearningSessionGroupByOutputType = {
    id: string
    taskId: string
    startedAt: Date
    endedAt: Date | null
    durationSeconds: number | null
    questionCount: number
    status: $Enums.SessionStatus
    createdAt: Date
    _count: LearningSessionCountAggregateOutputType | null
    _avg: LearningSessionAvgAggregateOutputType | null
    _sum: LearningSessionSumAggregateOutputType | null
    _min: LearningSessionMinAggregateOutputType | null
    _max: LearningSessionMaxAggregateOutputType | null
  }

  type GetLearningSessionGroupByPayload<T extends LearningSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LearningSessionGroupByOutputType[P]>
        }
      >
    >


  export type LearningSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    questionCount?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSession"]>

  export type LearningSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    questionCount?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSession"]>

  export type LearningSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    questionCount?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSession"]>

  export type LearningSessionSelectScalar = {
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    questionCount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LearningSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "startedAt" | "endedAt" | "durationSeconds" | "questionCount" | "status" | "createdAt", ExtArgs["result"]["learningSession"]>
  export type LearningSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type LearningSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type LearningSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $LearningSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningSession"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      startedAt: Date
      endedAt: Date | null
      durationSeconds: number | null
      questionCount: number
      status: $Enums.SessionStatus
      createdAt: Date
    }, ExtArgs["result"]["learningSession"]>
    composites: {}
  }

  type LearningSessionGetPayload<S extends boolean | null | undefined | LearningSessionDefaultArgs> = $Result.GetResult<Prisma.$LearningSessionPayload, S>

  type LearningSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningSessionCountAggregateInputType | true
    }

  export interface LearningSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningSession'], meta: { name: 'LearningSession' } }
    /**
     * Find zero or one LearningSession that matches the filter.
     * @param {LearningSessionFindUniqueArgs} args - Arguments to find a LearningSession
     * @example
     * // Get one LearningSession
     * const learningSession = await prisma.learningSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningSessionFindUniqueArgs>(args: SelectSubset<T, LearningSessionFindUniqueArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningSessionFindUniqueOrThrowArgs} args - Arguments to find a LearningSession
     * @example
     * // Get one LearningSession
     * const learningSession = await prisma.learningSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionFindFirstArgs} args - Arguments to find a LearningSession
     * @example
     * // Get one LearningSession
     * const learningSession = await prisma.learningSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningSessionFindFirstArgs>(args?: SelectSubset<T, LearningSessionFindFirstArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionFindFirstOrThrowArgs} args - Arguments to find a LearningSession
     * @example
     * // Get one LearningSession
     * const learningSession = await prisma.learningSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningSessions
     * const learningSessions = await prisma.learningSession.findMany()
     * 
     * // Get first 10 LearningSessions
     * const learningSessions = await prisma.learningSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningSessionWithIdOnly = await prisma.learningSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningSessionFindManyArgs>(args?: SelectSubset<T, LearningSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningSession.
     * @param {LearningSessionCreateArgs} args - Arguments to create a LearningSession.
     * @example
     * // Create one LearningSession
     * const LearningSession = await prisma.learningSession.create({
     *   data: {
     *     // ... data to create a LearningSession
     *   }
     * })
     * 
     */
    create<T extends LearningSessionCreateArgs>(args: SelectSubset<T, LearningSessionCreateArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningSessions.
     * @param {LearningSessionCreateManyArgs} args - Arguments to create many LearningSessions.
     * @example
     * // Create many LearningSessions
     * const learningSession = await prisma.learningSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningSessionCreateManyArgs>(args?: SelectSubset<T, LearningSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningSessions and returns the data saved in the database.
     * @param {LearningSessionCreateManyAndReturnArgs} args - Arguments to create many LearningSessions.
     * @example
     * // Create many LearningSessions
     * const learningSession = await prisma.learningSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningSessions and only return the `id`
     * const learningSessionWithIdOnly = await prisma.learningSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningSession.
     * @param {LearningSessionDeleteArgs} args - Arguments to delete one LearningSession.
     * @example
     * // Delete one LearningSession
     * const LearningSession = await prisma.learningSession.delete({
     *   where: {
     *     // ... filter to delete one LearningSession
     *   }
     * })
     * 
     */
    delete<T extends LearningSessionDeleteArgs>(args: SelectSubset<T, LearningSessionDeleteArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningSession.
     * @param {LearningSessionUpdateArgs} args - Arguments to update one LearningSession.
     * @example
     * // Update one LearningSession
     * const learningSession = await prisma.learningSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningSessionUpdateArgs>(args: SelectSubset<T, LearningSessionUpdateArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningSessions.
     * @param {LearningSessionDeleteManyArgs} args - Arguments to filter LearningSessions to delete.
     * @example
     * // Delete a few LearningSessions
     * const { count } = await prisma.learningSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningSessionDeleteManyArgs>(args?: SelectSubset<T, LearningSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningSessions
     * const learningSession = await prisma.learningSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningSessionUpdateManyArgs>(args: SelectSubset<T, LearningSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSessions and returns the data updated in the database.
     * @param {LearningSessionUpdateManyAndReturnArgs} args - Arguments to update many LearningSessions.
     * @example
     * // Update many LearningSessions
     * const learningSession = await prisma.learningSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningSessions and only return the `id`
     * const learningSessionWithIdOnly = await prisma.learningSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends LearningSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningSession.
     * @param {LearningSessionUpsertArgs} args - Arguments to update or create a LearningSession.
     * @example
     * // Update or create a LearningSession
     * const learningSession = await prisma.learningSession.upsert({
     *   create: {
     *     // ... data to create a LearningSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningSession we want to update
     *   }
     * })
     */
    upsert<T extends LearningSessionUpsertArgs>(args: SelectSubset<T, LearningSessionUpsertArgs<ExtArgs>>): Prisma__LearningSessionClient<$Result.GetResult<Prisma.$LearningSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionCountArgs} args - Arguments to filter LearningSessions to count.
     * @example
     * // Count the number of LearningSessions
     * const count = await prisma.learningSession.count({
     *   where: {
     *     // ... the filter for the LearningSessions we want to count
     *   }
     * })
    **/
    count<T extends LearningSessionCountArgs>(
      args?: Subset<T, LearningSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningSessionAggregateArgs>(args: Subset<T, LearningSessionAggregateArgs>): Prisma.PrismaPromise<GetLearningSessionAggregateType<T>>

    /**
     * Group by LearningSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionGroupByArgs} args - Group by arguments.
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
      T extends LearningSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningSessionGroupByArgs['orderBy'] }
        : { orderBy?: LearningSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningSession model
   */
  readonly fields: LearningSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningSession model
   */
  interface LearningSessionFieldRefs {
    readonly id: FieldRef<"LearningSession", 'String'>
    readonly taskId: FieldRef<"LearningSession", 'String'>
    readonly startedAt: FieldRef<"LearningSession", 'DateTime'>
    readonly endedAt: FieldRef<"LearningSession", 'DateTime'>
    readonly durationSeconds: FieldRef<"LearningSession", 'Int'>
    readonly questionCount: FieldRef<"LearningSession", 'Int'>
    readonly status: FieldRef<"LearningSession", 'SessionStatus'>
    readonly createdAt: FieldRef<"LearningSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningSession findUnique
   */
  export type LearningSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter, which LearningSession to fetch.
     */
    where: LearningSessionWhereUniqueInput
  }

  /**
   * LearningSession findUniqueOrThrow
   */
  export type LearningSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter, which LearningSession to fetch.
     */
    where: LearningSessionWhereUniqueInput
  }

  /**
   * LearningSession findFirst
   */
  export type LearningSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter, which LearningSession to fetch.
     */
    where?: LearningSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessions to fetch.
     */
    orderBy?: LearningSessionOrderByWithRelationInput | LearningSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSessions.
     */
    cursor?: LearningSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSessions.
     */
    distinct?: LearningSessionScalarFieldEnum | LearningSessionScalarFieldEnum[]
  }

  /**
   * LearningSession findFirstOrThrow
   */
  export type LearningSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter, which LearningSession to fetch.
     */
    where?: LearningSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessions to fetch.
     */
    orderBy?: LearningSessionOrderByWithRelationInput | LearningSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSessions.
     */
    cursor?: LearningSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSessions.
     */
    distinct?: LearningSessionScalarFieldEnum | LearningSessionScalarFieldEnum[]
  }

  /**
   * LearningSession findMany
   */
  export type LearningSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessions to fetch.
     */
    where?: LearningSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessions to fetch.
     */
    orderBy?: LearningSessionOrderByWithRelationInput | LearningSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningSessions.
     */
    cursor?: LearningSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSessions.
     */
    distinct?: LearningSessionScalarFieldEnum | LearningSessionScalarFieldEnum[]
  }

  /**
   * LearningSession create
   */
  export type LearningSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningSession.
     */
    data: XOR<LearningSessionCreateInput, LearningSessionUncheckedCreateInput>
  }

  /**
   * LearningSession createMany
   */
  export type LearningSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningSessions.
     */
    data: LearningSessionCreateManyInput | LearningSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningSession createManyAndReturn
   */
  export type LearningSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * The data used to create many LearningSessions.
     */
    data: LearningSessionCreateManyInput | LearningSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSession update
   */
  export type LearningSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningSession.
     */
    data: XOR<LearningSessionUpdateInput, LearningSessionUncheckedUpdateInput>
    /**
     * Choose, which LearningSession to update.
     */
    where: LearningSessionWhereUniqueInput
  }

  /**
   * LearningSession updateMany
   */
  export type LearningSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningSessions.
     */
    data: XOR<LearningSessionUpdateManyMutationInput, LearningSessionUncheckedUpdateManyInput>
    /**
     * Filter which LearningSessions to update
     */
    where?: LearningSessionWhereInput
    /**
     * Limit how many LearningSessions to update.
     */
    limit?: number
  }

  /**
   * LearningSession updateManyAndReturn
   */
  export type LearningSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * The data used to update LearningSessions.
     */
    data: XOR<LearningSessionUpdateManyMutationInput, LearningSessionUncheckedUpdateManyInput>
    /**
     * Filter which LearningSessions to update
     */
    where?: LearningSessionWhereInput
    /**
     * Limit how many LearningSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSession upsert
   */
  export type LearningSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningSession to update in case it exists.
     */
    where: LearningSessionWhereUniqueInput
    /**
     * In case the LearningSession found by the `where` argument doesn't exist, create a new LearningSession with this data.
     */
    create: XOR<LearningSessionCreateInput, LearningSessionUncheckedCreateInput>
    /**
     * In case the LearningSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningSessionUpdateInput, LearningSessionUncheckedUpdateInput>
  }

  /**
   * LearningSession delete
   */
  export type LearningSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
    /**
     * Filter which LearningSession to delete.
     */
    where: LearningSessionWhereUniqueInput
  }

  /**
   * LearningSession deleteMany
   */
  export type LearningSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSessions to delete
     */
    where?: LearningSessionWhereInput
    /**
     * Limit how many LearningSessions to delete.
     */
    limit?: number
  }

  /**
   * LearningSession without action
   */
  export type LearningSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSession
     */
    select?: LearningSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSession
     */
    omit?: LearningSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    content: string | null
    isImportant: boolean | null
    isConfusing: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    content: string | null
    isImportant: boolean | null
    isConfusing: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    taskId: number
    content: number
    isImportant: number
    isConfusing: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    isImportant?: true
    isConfusing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    isImportant?: true
    isConfusing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    isImportant?: true
    isConfusing?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    taskId: string
    content: string
    isImportant: boolean
    isConfusing: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    taskId?: boolean
    content?: boolean
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "content" | "isImportant" | "isConfusing" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      content: string
      isImportant: boolean
      isConfusing: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly taskId: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly isImportant: FieldRef<"Note", 'Boolean'>
    readonly isConfusing: FieldRef<"Note", 'Boolean'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    score: number | null
  }

  export type QuizSumAggregateOutputType = {
    score: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    status: $Enums.QuizStatus | null
    score: number | null
    generatedAt: Date | null
    submittedAt: Date | null
    gradedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    status: $Enums.QuizStatus | null
    score: number | null
    generatedAt: Date | null
    submittedAt: Date | null
    gradedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    taskId: number
    title: number
    status: number
    score: number
    feedback: number
    generatedAt: number
    submittedAt: number
    gradedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    score?: true
  }

  export type QuizSumAggregateInputType = {
    score?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    status?: true
    score?: true
    generatedAt?: true
    submittedAt?: true
    gradedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    status?: true
    score?: true
    generatedAt?: true
    submittedAt?: true
    gradedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    status?: true
    score?: true
    feedback?: true
    generatedAt?: true
    submittedAt?: true
    gradedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    taskId: string
    title: string | null
    status: $Enums.QuizStatus
    score: number | null
    feedback: JsonValue | null
    generatedAt: Date
    submittedAt: Date | null
    gradedAt: Date | null
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    status?: boolean
    score?: boolean
    feedback?: boolean
    generatedAt?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    answers?: boolean | Quiz$answersArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    status?: boolean
    score?: boolean
    feedback?: boolean
    generatedAt?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    status?: boolean
    score?: boolean
    feedback?: boolean
    generatedAt?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    taskId?: boolean
    title?: boolean
    status?: boolean
    score?: boolean
    feedback?: boolean
    generatedAt?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "title" | "status" | "score" | "feedback" | "generatedAt" | "submittedAt" | "gradedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    answers?: boolean | Quiz$answersArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      answers: Prisma.$QuizAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      title: string | null
      status: $Enums.QuizStatus
      score: number | null
      feedback: Prisma.JsonValue | null
      generatedAt: Date
      submittedAt: Date | null
      gradedAt: Date | null
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Quiz$answersArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly taskId: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly status: FieldRef<"Quiz", 'QuizStatus'>
    readonly score: FieldRef<"Quiz", 'Float'>
    readonly feedback: FieldRef<"Quiz", 'Json'>
    readonly generatedAt: FieldRef<"Quiz", 'DateTime'>
    readonly submittedAt: FieldRef<"Quiz", 'DateTime'>
    readonly gradedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.answers
   */
  export type Quiz$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    where?: QuizAnswerWhereInput
    orderBy?: QuizAnswerOrderByWithRelationInput | QuizAnswerOrderByWithRelationInput[]
    cursor?: QuizAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAnswerScalarFieldEnum | QuizAnswerScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizAnswer
   */

  export type AggregateQuizAnswer = {
    _count: QuizAnswerCountAggregateOutputType | null
    _avg: QuizAnswerAvgAggregateOutputType | null
    _sum: QuizAnswerSumAggregateOutputType | null
    _min: QuizAnswerMinAggregateOutputType | null
    _max: QuizAnswerMaxAggregateOutputType | null
  }

  export type QuizAnswerAvgAggregateOutputType = {
    questionIndex: number | null
    score: number | null
  }

  export type QuizAnswerSumAggregateOutputType = {
    questionIndex: number | null
    score: number | null
  }

  export type QuizAnswerMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    questionIndex: number | null
    questionType: string | null
    questionText: string | null
    referenceAnswer: string | null
    userAnswer: string | null
    isCorrect: boolean | null
    score: number | null
    analysis: string | null
    errorType: string | null
    createdAt: Date | null
  }

  export type QuizAnswerMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    questionIndex: number | null
    questionType: string | null
    questionText: string | null
    referenceAnswer: string | null
    userAnswer: string | null
    isCorrect: boolean | null
    score: number | null
    analysis: string | null
    errorType: string | null
    createdAt: Date | null
  }

  export type QuizAnswerCountAggregateOutputType = {
    id: number
    quizId: number
    questionIndex: number
    questionType: number
    questionText: number
    referenceAnswer: number
    userAnswer: number
    isCorrect: number
    score: number
    analysis: number
    errorType: number
    createdAt: number
    _all: number
  }


  export type QuizAnswerAvgAggregateInputType = {
    questionIndex?: true
    score?: true
  }

  export type QuizAnswerSumAggregateInputType = {
    questionIndex?: true
    score?: true
  }

  export type QuizAnswerMinAggregateInputType = {
    id?: true
    quizId?: true
    questionIndex?: true
    questionType?: true
    questionText?: true
    referenceAnswer?: true
    userAnswer?: true
    isCorrect?: true
    score?: true
    analysis?: true
    errorType?: true
    createdAt?: true
  }

  export type QuizAnswerMaxAggregateInputType = {
    id?: true
    quizId?: true
    questionIndex?: true
    questionType?: true
    questionText?: true
    referenceAnswer?: true
    userAnswer?: true
    isCorrect?: true
    score?: true
    analysis?: true
    errorType?: true
    createdAt?: true
  }

  export type QuizAnswerCountAggregateInputType = {
    id?: true
    quizId?: true
    questionIndex?: true
    questionType?: true
    questionText?: true
    referenceAnswer?: true
    userAnswer?: true
    isCorrect?: true
    score?: true
    analysis?: true
    errorType?: true
    createdAt?: true
    _all?: true
  }

  export type QuizAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAnswer to aggregate.
     */
    where?: QuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAnswers to fetch.
     */
    orderBy?: QuizAnswerOrderByWithRelationInput | QuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAnswers
    **/
    _count?: true | QuizAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAnswerMaxAggregateInputType
  }

  export type GetQuizAnswerAggregateType<T extends QuizAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAnswer[P]>
      : GetScalarType<T[P], AggregateQuizAnswer[P]>
  }




  export type QuizAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAnswerWhereInput
    orderBy?: QuizAnswerOrderByWithAggregationInput | QuizAnswerOrderByWithAggregationInput[]
    by: QuizAnswerScalarFieldEnum[] | QuizAnswerScalarFieldEnum
    having?: QuizAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAnswerCountAggregateInputType | true
    _avg?: QuizAnswerAvgAggregateInputType
    _sum?: QuizAnswerSumAggregateInputType
    _min?: QuizAnswerMinAggregateInputType
    _max?: QuizAnswerMaxAggregateInputType
  }

  export type QuizAnswerGroupByOutputType = {
    id: string
    quizId: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer: string | null
    userAnswer: string | null
    isCorrect: boolean | null
    score: number | null
    analysis: string | null
    errorType: string | null
    createdAt: Date
    _count: QuizAnswerCountAggregateOutputType | null
    _avg: QuizAnswerAvgAggregateOutputType | null
    _sum: QuizAnswerSumAggregateOutputType | null
    _min: QuizAnswerMinAggregateOutputType | null
    _max: QuizAnswerMaxAggregateOutputType | null
  }

  type GetQuizAnswerGroupByPayload<T extends QuizAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAnswerGroupByOutputType[P]>
        }
      >
    >


  export type QuizAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questionIndex?: boolean
    questionType?: boolean
    questionText?: boolean
    referenceAnswer?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    analysis?: boolean
    errorType?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAnswer"]>

  export type QuizAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questionIndex?: boolean
    questionType?: boolean
    questionText?: boolean
    referenceAnswer?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    analysis?: boolean
    errorType?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAnswer"]>

  export type QuizAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questionIndex?: boolean
    questionType?: boolean
    questionText?: boolean
    referenceAnswer?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    analysis?: boolean
    errorType?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAnswer"]>

  export type QuizAnswerSelectScalar = {
    id?: boolean
    quizId?: boolean
    questionIndex?: boolean
    questionType?: boolean
    questionText?: boolean
    referenceAnswer?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    analysis?: boolean
    errorType?: boolean
    createdAt?: boolean
  }

  export type QuizAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "questionIndex" | "questionType" | "questionText" | "referenceAnswer" | "userAnswer" | "isCorrect" | "score" | "analysis" | "errorType" | "createdAt", ExtArgs["result"]["quizAnswer"]>
  export type QuizAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAnswer"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      questionIndex: number
      questionType: string
      questionText: string
      referenceAnswer: string | null
      userAnswer: string | null
      isCorrect: boolean | null
      score: number | null
      analysis: string | null
      errorType: string | null
      createdAt: Date
    }, ExtArgs["result"]["quizAnswer"]>
    composites: {}
  }

  type QuizAnswerGetPayload<S extends boolean | null | undefined | QuizAnswerDefaultArgs> = $Result.GetResult<Prisma.$QuizAnswerPayload, S>

  type QuizAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAnswerCountAggregateInputType | true
    }

  export interface QuizAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAnswer'], meta: { name: 'QuizAnswer' } }
    /**
     * Find zero or one QuizAnswer that matches the filter.
     * @param {QuizAnswerFindUniqueArgs} args - Arguments to find a QuizAnswer
     * @example
     * // Get one QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAnswerFindUniqueArgs>(args: SelectSubset<T, QuizAnswerFindUniqueArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAnswerFindUniqueOrThrowArgs} args - Arguments to find a QuizAnswer
     * @example
     * // Get one QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerFindFirstArgs} args - Arguments to find a QuizAnswer
     * @example
     * // Get one QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAnswerFindFirstArgs>(args?: SelectSubset<T, QuizAnswerFindFirstArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerFindFirstOrThrowArgs} args - Arguments to find a QuizAnswer
     * @example
     * // Get one QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAnswers
     * const quizAnswers = await prisma.quizAnswer.findMany()
     * 
     * // Get first 10 QuizAnswers
     * const quizAnswers = await prisma.quizAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAnswerWithIdOnly = await prisma.quizAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAnswerFindManyArgs>(args?: SelectSubset<T, QuizAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAnswer.
     * @param {QuizAnswerCreateArgs} args - Arguments to create a QuizAnswer.
     * @example
     * // Create one QuizAnswer
     * const QuizAnswer = await prisma.quizAnswer.create({
     *   data: {
     *     // ... data to create a QuizAnswer
     *   }
     * })
     * 
     */
    create<T extends QuizAnswerCreateArgs>(args: SelectSubset<T, QuizAnswerCreateArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAnswers.
     * @param {QuizAnswerCreateManyArgs} args - Arguments to create many QuizAnswers.
     * @example
     * // Create many QuizAnswers
     * const quizAnswer = await prisma.quizAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAnswerCreateManyArgs>(args?: SelectSubset<T, QuizAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAnswers and returns the data saved in the database.
     * @param {QuizAnswerCreateManyAndReturnArgs} args - Arguments to create many QuizAnswers.
     * @example
     * // Create many QuizAnswers
     * const quizAnswer = await prisma.quizAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAnswers and only return the `id`
     * const quizAnswerWithIdOnly = await prisma.quizAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAnswer.
     * @param {QuizAnswerDeleteArgs} args - Arguments to delete one QuizAnswer.
     * @example
     * // Delete one QuizAnswer
     * const QuizAnswer = await prisma.quizAnswer.delete({
     *   where: {
     *     // ... filter to delete one QuizAnswer
     *   }
     * })
     * 
     */
    delete<T extends QuizAnswerDeleteArgs>(args: SelectSubset<T, QuizAnswerDeleteArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAnswer.
     * @param {QuizAnswerUpdateArgs} args - Arguments to update one QuizAnswer.
     * @example
     * // Update one QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAnswerUpdateArgs>(args: SelectSubset<T, QuizAnswerUpdateArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAnswers.
     * @param {QuizAnswerDeleteManyArgs} args - Arguments to filter QuizAnswers to delete.
     * @example
     * // Delete a few QuizAnswers
     * const { count } = await prisma.quizAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAnswerDeleteManyArgs>(args?: SelectSubset<T, QuizAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAnswers
     * const quizAnswer = await prisma.quizAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAnswerUpdateManyArgs>(args: SelectSubset<T, QuizAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAnswers and returns the data updated in the database.
     * @param {QuizAnswerUpdateManyAndReturnArgs} args - Arguments to update many QuizAnswers.
     * @example
     * // Update many QuizAnswers
     * const quizAnswer = await prisma.quizAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAnswers and only return the `id`
     * const quizAnswerWithIdOnly = await prisma.quizAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAnswer.
     * @param {QuizAnswerUpsertArgs} args - Arguments to update or create a QuizAnswer.
     * @example
     * // Update or create a QuizAnswer
     * const quizAnswer = await prisma.quizAnswer.upsert({
     *   create: {
     *     // ... data to create a QuizAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAnswer we want to update
     *   }
     * })
     */
    upsert<T extends QuizAnswerUpsertArgs>(args: SelectSubset<T, QuizAnswerUpsertArgs<ExtArgs>>): Prisma__QuizAnswerClient<$Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerCountArgs} args - Arguments to filter QuizAnswers to count.
     * @example
     * // Count the number of QuizAnswers
     * const count = await prisma.quizAnswer.count({
     *   where: {
     *     // ... the filter for the QuizAnswers we want to count
     *   }
     * })
    **/
    count<T extends QuizAnswerCountArgs>(
      args?: Subset<T, QuizAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAnswerAggregateArgs>(args: Subset<T, QuizAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuizAnswerAggregateType<T>>

    /**
     * Group by QuizAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAnswerGroupByArgs} args - Group by arguments.
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
      T extends QuizAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAnswerGroupByArgs['orderBy'] }
        : { orderBy?: QuizAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAnswer model
   */
  readonly fields: QuizAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizAnswer model
   */
  interface QuizAnswerFieldRefs {
    readonly id: FieldRef<"QuizAnswer", 'String'>
    readonly quizId: FieldRef<"QuizAnswer", 'String'>
    readonly questionIndex: FieldRef<"QuizAnswer", 'Int'>
    readonly questionType: FieldRef<"QuizAnswer", 'String'>
    readonly questionText: FieldRef<"QuizAnswer", 'String'>
    readonly referenceAnswer: FieldRef<"QuizAnswer", 'String'>
    readonly userAnswer: FieldRef<"QuizAnswer", 'String'>
    readonly isCorrect: FieldRef<"QuizAnswer", 'Boolean'>
    readonly score: FieldRef<"QuizAnswer", 'Float'>
    readonly analysis: FieldRef<"QuizAnswer", 'String'>
    readonly errorType: FieldRef<"QuizAnswer", 'String'>
    readonly createdAt: FieldRef<"QuizAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizAnswer findUnique
   */
  export type QuizAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuizAnswer to fetch.
     */
    where: QuizAnswerWhereUniqueInput
  }

  /**
   * QuizAnswer findUniqueOrThrow
   */
  export type QuizAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuizAnswer to fetch.
     */
    where: QuizAnswerWhereUniqueInput
  }

  /**
   * QuizAnswer findFirst
   */
  export type QuizAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuizAnswer to fetch.
     */
    where?: QuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAnswers to fetch.
     */
    orderBy?: QuizAnswerOrderByWithRelationInput | QuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAnswers.
     */
    cursor?: QuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAnswers.
     */
    distinct?: QuizAnswerScalarFieldEnum | QuizAnswerScalarFieldEnum[]
  }

  /**
   * QuizAnswer findFirstOrThrow
   */
  export type QuizAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuizAnswer to fetch.
     */
    where?: QuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAnswers to fetch.
     */
    orderBy?: QuizAnswerOrderByWithRelationInput | QuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAnswers.
     */
    cursor?: QuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAnswers.
     */
    distinct?: QuizAnswerScalarFieldEnum | QuizAnswerScalarFieldEnum[]
  }

  /**
   * QuizAnswer findMany
   */
  export type QuizAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuizAnswers to fetch.
     */
    where?: QuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAnswers to fetch.
     */
    orderBy?: QuizAnswerOrderByWithRelationInput | QuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAnswers.
     */
    cursor?: QuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAnswers.
     */
    distinct?: QuizAnswerScalarFieldEnum | QuizAnswerScalarFieldEnum[]
  }

  /**
   * QuizAnswer create
   */
  export type QuizAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAnswer.
     */
    data: XOR<QuizAnswerCreateInput, QuizAnswerUncheckedCreateInput>
  }

  /**
   * QuizAnswer createMany
   */
  export type QuizAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAnswers.
     */
    data: QuizAnswerCreateManyInput | QuizAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAnswer createManyAndReturn
   */
  export type QuizAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAnswers.
     */
    data: QuizAnswerCreateManyInput | QuizAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAnswer update
   */
  export type QuizAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAnswer.
     */
    data: XOR<QuizAnswerUpdateInput, QuizAnswerUncheckedUpdateInput>
    /**
     * Choose, which QuizAnswer to update.
     */
    where: QuizAnswerWhereUniqueInput
  }

  /**
   * QuizAnswer updateMany
   */
  export type QuizAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAnswers.
     */
    data: XOR<QuizAnswerUpdateManyMutationInput, QuizAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuizAnswers to update
     */
    where?: QuizAnswerWhereInput
    /**
     * Limit how many QuizAnswers to update.
     */
    limit?: number
  }

  /**
   * QuizAnswer updateManyAndReturn
   */
  export type QuizAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * The data used to update QuizAnswers.
     */
    data: XOR<QuizAnswerUpdateManyMutationInput, QuizAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuizAnswers to update
     */
    where?: QuizAnswerWhereInput
    /**
     * Limit how many QuizAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAnswer upsert
   */
  export type QuizAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAnswer to update in case it exists.
     */
    where: QuizAnswerWhereUniqueInput
    /**
     * In case the QuizAnswer found by the `where` argument doesn't exist, create a new QuizAnswer with this data.
     */
    create: XOR<QuizAnswerCreateInput, QuizAnswerUncheckedCreateInput>
    /**
     * In case the QuizAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAnswerUpdateInput, QuizAnswerUncheckedUpdateInput>
  }

  /**
   * QuizAnswer delete
   */
  export type QuizAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
    /**
     * Filter which QuizAnswer to delete.
     */
    where: QuizAnswerWhereUniqueInput
  }

  /**
   * QuizAnswer deleteMany
   */
  export type QuizAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAnswers to delete
     */
    where?: QuizAnswerWhereInput
    /**
     * Limit how many QuizAnswers to delete.
     */
    limit?: number
  }

  /**
   * QuizAnswer without action
   */
  export type QuizAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAnswer
     */
    select?: QuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAnswer
     */
    omit?: QuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAnswerInclude<ExtArgs> | null
  }


  /**
   * Model ReviewRecord
   */

  export type AggregateReviewRecord = {
    _count: ReviewRecordCountAggregateOutputType | null
    _avg: ReviewRecordAvgAggregateOutputType | null
    _sum: ReviewRecordSumAggregateOutputType | null
    _min: ReviewRecordMinAggregateOutputType | null
    _max: ReviewRecordMaxAggregateOutputType | null
  }

  export type ReviewRecordAvgAggregateOutputType = {
    score: number | null
    intervalDays: number | null
  }

  export type ReviewRecordSumAggregateOutputType = {
    score: number | null
    intervalDays: number | null
  }

  export type ReviewRecordMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    reviewDate: Date | null
    result: $Enums.ReviewResult | null
    score: number | null
    intervalDays: number | null
    nextReviewDate: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ReviewRecordMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    reviewDate: Date | null
    result: $Enums.ReviewResult | null
    score: number | null
    intervalDays: number | null
    nextReviewDate: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ReviewRecordCountAggregateOutputType = {
    id: number
    taskId: number
    reviewDate: number
    result: number
    score: number
    intervalDays: number
    nextReviewDate: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ReviewRecordAvgAggregateInputType = {
    score?: true
    intervalDays?: true
  }

  export type ReviewRecordSumAggregateInputType = {
    score?: true
    intervalDays?: true
  }

  export type ReviewRecordMinAggregateInputType = {
    id?: true
    taskId?: true
    reviewDate?: true
    result?: true
    score?: true
    intervalDays?: true
    nextReviewDate?: true
    notes?: true
    createdAt?: true
  }

  export type ReviewRecordMaxAggregateInputType = {
    id?: true
    taskId?: true
    reviewDate?: true
    result?: true
    score?: true
    intervalDays?: true
    nextReviewDate?: true
    notes?: true
    createdAt?: true
  }

  export type ReviewRecordCountAggregateInputType = {
    id?: true
    taskId?: true
    reviewDate?: true
    result?: true
    score?: true
    intervalDays?: true
    nextReviewDate?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRecord to aggregate.
     */
    where?: ReviewRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRecords to fetch.
     */
    orderBy?: ReviewRecordOrderByWithRelationInput | ReviewRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewRecords
    **/
    _count?: true | ReviewRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewRecordMaxAggregateInputType
  }

  export type GetReviewRecordAggregateType<T extends ReviewRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewRecord[P]>
      : GetScalarType<T[P], AggregateReviewRecord[P]>
  }




  export type ReviewRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRecordWhereInput
    orderBy?: ReviewRecordOrderByWithAggregationInput | ReviewRecordOrderByWithAggregationInput[]
    by: ReviewRecordScalarFieldEnum[] | ReviewRecordScalarFieldEnum
    having?: ReviewRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewRecordCountAggregateInputType | true
    _avg?: ReviewRecordAvgAggregateInputType
    _sum?: ReviewRecordSumAggregateInputType
    _min?: ReviewRecordMinAggregateInputType
    _max?: ReviewRecordMaxAggregateInputType
  }

  export type ReviewRecordGroupByOutputType = {
    id: string
    taskId: string
    reviewDate: Date
    result: $Enums.ReviewResult
    score: number | null
    intervalDays: number | null
    nextReviewDate: Date | null
    notes: string | null
    createdAt: Date
    _count: ReviewRecordCountAggregateOutputType | null
    _avg: ReviewRecordAvgAggregateOutputType | null
    _sum: ReviewRecordSumAggregateOutputType | null
    _min: ReviewRecordMinAggregateOutputType | null
    _max: ReviewRecordMaxAggregateOutputType | null
  }

  type GetReviewRecordGroupByPayload<T extends ReviewRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewRecordGroupByOutputType[P]>
        }
      >
    >


  export type ReviewRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    reviewDate?: boolean
    result?: boolean
    score?: boolean
    intervalDays?: boolean
    nextReviewDate?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRecord"]>

  export type ReviewRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    reviewDate?: boolean
    result?: boolean
    score?: boolean
    intervalDays?: boolean
    nextReviewDate?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRecord"]>

  export type ReviewRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    reviewDate?: boolean
    result?: boolean
    score?: boolean
    intervalDays?: boolean
    nextReviewDate?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRecord"]>

  export type ReviewRecordSelectScalar = {
    id?: boolean
    taskId?: boolean
    reviewDate?: boolean
    result?: boolean
    score?: boolean
    intervalDays?: boolean
    nextReviewDate?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ReviewRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "reviewDate" | "result" | "score" | "intervalDays" | "nextReviewDate" | "notes" | "createdAt", ExtArgs["result"]["reviewRecord"]>
  export type ReviewRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ReviewRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ReviewRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $ReviewRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewRecord"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      reviewDate: Date
      result: $Enums.ReviewResult
      score: number | null
      intervalDays: number | null
      nextReviewDate: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["reviewRecord"]>
    composites: {}
  }

  type ReviewRecordGetPayload<S extends boolean | null | undefined | ReviewRecordDefaultArgs> = $Result.GetResult<Prisma.$ReviewRecordPayload, S>

  type ReviewRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewRecordCountAggregateInputType | true
    }

  export interface ReviewRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewRecord'], meta: { name: 'ReviewRecord' } }
    /**
     * Find zero or one ReviewRecord that matches the filter.
     * @param {ReviewRecordFindUniqueArgs} args - Arguments to find a ReviewRecord
     * @example
     * // Get one ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewRecordFindUniqueArgs>(args: SelectSubset<T, ReviewRecordFindUniqueArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewRecordFindUniqueOrThrowArgs} args - Arguments to find a ReviewRecord
     * @example
     * // Get one ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordFindFirstArgs} args - Arguments to find a ReviewRecord
     * @example
     * // Get one ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewRecordFindFirstArgs>(args?: SelectSubset<T, ReviewRecordFindFirstArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordFindFirstOrThrowArgs} args - Arguments to find a ReviewRecord
     * @example
     * // Get one ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewRecords
     * const reviewRecords = await prisma.reviewRecord.findMany()
     * 
     * // Get first 10 ReviewRecords
     * const reviewRecords = await prisma.reviewRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewRecordWithIdOnly = await prisma.reviewRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewRecordFindManyArgs>(args?: SelectSubset<T, ReviewRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewRecord.
     * @param {ReviewRecordCreateArgs} args - Arguments to create a ReviewRecord.
     * @example
     * // Create one ReviewRecord
     * const ReviewRecord = await prisma.reviewRecord.create({
     *   data: {
     *     // ... data to create a ReviewRecord
     *   }
     * })
     * 
     */
    create<T extends ReviewRecordCreateArgs>(args: SelectSubset<T, ReviewRecordCreateArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewRecords.
     * @param {ReviewRecordCreateManyArgs} args - Arguments to create many ReviewRecords.
     * @example
     * // Create many ReviewRecords
     * const reviewRecord = await prisma.reviewRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewRecordCreateManyArgs>(args?: SelectSubset<T, ReviewRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewRecords and returns the data saved in the database.
     * @param {ReviewRecordCreateManyAndReturnArgs} args - Arguments to create many ReviewRecords.
     * @example
     * // Create many ReviewRecords
     * const reviewRecord = await prisma.reviewRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewRecords and only return the `id`
     * const reviewRecordWithIdOnly = await prisma.reviewRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewRecord.
     * @param {ReviewRecordDeleteArgs} args - Arguments to delete one ReviewRecord.
     * @example
     * // Delete one ReviewRecord
     * const ReviewRecord = await prisma.reviewRecord.delete({
     *   where: {
     *     // ... filter to delete one ReviewRecord
     *   }
     * })
     * 
     */
    delete<T extends ReviewRecordDeleteArgs>(args: SelectSubset<T, ReviewRecordDeleteArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewRecord.
     * @param {ReviewRecordUpdateArgs} args - Arguments to update one ReviewRecord.
     * @example
     * // Update one ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewRecordUpdateArgs>(args: SelectSubset<T, ReviewRecordUpdateArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewRecords.
     * @param {ReviewRecordDeleteManyArgs} args - Arguments to filter ReviewRecords to delete.
     * @example
     * // Delete a few ReviewRecords
     * const { count } = await prisma.reviewRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewRecordDeleteManyArgs>(args?: SelectSubset<T, ReviewRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewRecords
     * const reviewRecord = await prisma.reviewRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewRecordUpdateManyArgs>(args: SelectSubset<T, ReviewRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRecords and returns the data updated in the database.
     * @param {ReviewRecordUpdateManyAndReturnArgs} args - Arguments to update many ReviewRecords.
     * @example
     * // Update many ReviewRecords
     * const reviewRecord = await prisma.reviewRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewRecords and only return the `id`
     * const reviewRecordWithIdOnly = await prisma.reviewRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewRecord.
     * @param {ReviewRecordUpsertArgs} args - Arguments to update or create a ReviewRecord.
     * @example
     * // Update or create a ReviewRecord
     * const reviewRecord = await prisma.reviewRecord.upsert({
     *   create: {
     *     // ... data to create a ReviewRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewRecord we want to update
     *   }
     * })
     */
    upsert<T extends ReviewRecordUpsertArgs>(args: SelectSubset<T, ReviewRecordUpsertArgs<ExtArgs>>): Prisma__ReviewRecordClient<$Result.GetResult<Prisma.$ReviewRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordCountArgs} args - Arguments to filter ReviewRecords to count.
     * @example
     * // Count the number of ReviewRecords
     * const count = await prisma.reviewRecord.count({
     *   where: {
     *     // ... the filter for the ReviewRecords we want to count
     *   }
     * })
    **/
    count<T extends ReviewRecordCountArgs>(
      args?: Subset<T, ReviewRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewRecordAggregateArgs>(args: Subset<T, ReviewRecordAggregateArgs>): Prisma.PrismaPromise<GetReviewRecordAggregateType<T>>

    /**
     * Group by ReviewRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRecordGroupByArgs} args - Group by arguments.
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
      T extends ReviewRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewRecordGroupByArgs['orderBy'] }
        : { orderBy?: ReviewRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewRecord model
   */
  readonly fields: ReviewRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewRecord model
   */
  interface ReviewRecordFieldRefs {
    readonly id: FieldRef<"ReviewRecord", 'String'>
    readonly taskId: FieldRef<"ReviewRecord", 'String'>
    readonly reviewDate: FieldRef<"ReviewRecord", 'DateTime'>
    readonly result: FieldRef<"ReviewRecord", 'ReviewResult'>
    readonly score: FieldRef<"ReviewRecord", 'Float'>
    readonly intervalDays: FieldRef<"ReviewRecord", 'Int'>
    readonly nextReviewDate: FieldRef<"ReviewRecord", 'DateTime'>
    readonly notes: FieldRef<"ReviewRecord", 'String'>
    readonly createdAt: FieldRef<"ReviewRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewRecord findUnique
   */
  export type ReviewRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRecord to fetch.
     */
    where: ReviewRecordWhereUniqueInput
  }

  /**
   * ReviewRecord findUniqueOrThrow
   */
  export type ReviewRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRecord to fetch.
     */
    where: ReviewRecordWhereUniqueInput
  }

  /**
   * ReviewRecord findFirst
   */
  export type ReviewRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRecord to fetch.
     */
    where?: ReviewRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRecords to fetch.
     */
    orderBy?: ReviewRecordOrderByWithRelationInput | ReviewRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRecords.
     */
    cursor?: ReviewRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRecords.
     */
    distinct?: ReviewRecordScalarFieldEnum | ReviewRecordScalarFieldEnum[]
  }

  /**
   * ReviewRecord findFirstOrThrow
   */
  export type ReviewRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRecord to fetch.
     */
    where?: ReviewRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRecords to fetch.
     */
    orderBy?: ReviewRecordOrderByWithRelationInput | ReviewRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRecords.
     */
    cursor?: ReviewRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRecords.
     */
    distinct?: ReviewRecordScalarFieldEnum | ReviewRecordScalarFieldEnum[]
  }

  /**
   * ReviewRecord findMany
   */
  export type ReviewRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRecords to fetch.
     */
    where?: ReviewRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRecords to fetch.
     */
    orderBy?: ReviewRecordOrderByWithRelationInput | ReviewRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewRecords.
     */
    cursor?: ReviewRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRecords.
     */
    distinct?: ReviewRecordScalarFieldEnum | ReviewRecordScalarFieldEnum[]
  }

  /**
   * ReviewRecord create
   */
  export type ReviewRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewRecord.
     */
    data: XOR<ReviewRecordCreateInput, ReviewRecordUncheckedCreateInput>
  }

  /**
   * ReviewRecord createMany
   */
  export type ReviewRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewRecords.
     */
    data: ReviewRecordCreateManyInput | ReviewRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewRecord createManyAndReturn
   */
  export type ReviewRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewRecords.
     */
    data: ReviewRecordCreateManyInput | ReviewRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRecord update
   */
  export type ReviewRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewRecord.
     */
    data: XOR<ReviewRecordUpdateInput, ReviewRecordUncheckedUpdateInput>
    /**
     * Choose, which ReviewRecord to update.
     */
    where: ReviewRecordWhereUniqueInput
  }

  /**
   * ReviewRecord updateMany
   */
  export type ReviewRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewRecords.
     */
    data: XOR<ReviewRecordUpdateManyMutationInput, ReviewRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRecords to update
     */
    where?: ReviewRecordWhereInput
    /**
     * Limit how many ReviewRecords to update.
     */
    limit?: number
  }

  /**
   * ReviewRecord updateManyAndReturn
   */
  export type ReviewRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * The data used to update ReviewRecords.
     */
    data: XOR<ReviewRecordUpdateManyMutationInput, ReviewRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRecords to update
     */
    where?: ReviewRecordWhereInput
    /**
     * Limit how many ReviewRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRecord upsert
   */
  export type ReviewRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewRecord to update in case it exists.
     */
    where: ReviewRecordWhereUniqueInput
    /**
     * In case the ReviewRecord found by the `where` argument doesn't exist, create a new ReviewRecord with this data.
     */
    create: XOR<ReviewRecordCreateInput, ReviewRecordUncheckedCreateInput>
    /**
     * In case the ReviewRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewRecordUpdateInput, ReviewRecordUncheckedUpdateInput>
  }

  /**
   * ReviewRecord delete
   */
  export type ReviewRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
    /**
     * Filter which ReviewRecord to delete.
     */
    where: ReviewRecordWhereUniqueInput
  }

  /**
   * ReviewRecord deleteMany
   */
  export type ReviewRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRecords to delete
     */
    where?: ReviewRecordWhereInput
    /**
     * Limit how many ReviewRecords to delete.
     */
    limit?: number
  }

  /**
   * ReviewRecord without action
   */
  export type ReviewRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRecord
     */
    select?: ReviewRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRecord
     */
    omit?: ReviewRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRecordInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    goal: 'goal',
    examDate: 'examDate',
    dailyTimeBudget: 'dailyTimeBudget',
    mode: 'mode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    type: 'type',
    sourcePath: 'sourcePath',
    rawText: 'rawText',
    status: 'status',
    parseError: 'parseError',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const MaterialChunkScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    chunkIndex: 'chunkIndex',
    title: 'title',
    content: 'content',
    summary: 'summary',
    sourcePage: 'sourcePage',
    sourceSection: 'sourceSection',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type MaterialChunkScalarFieldEnum = (typeof MaterialChunkScalarFieldEnum)[keyof typeof MaterialChunkScalarFieldEnum]


  export const KnowledgeUnitScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    title: 'title',
    summary: 'summary',
    topic: 'topic',
    difficulty: 'difficulty',
    importance: 'importance',
    estimatedMinutes: 'estimatedMinutes',
    prerequisiteIds: 'prerequisiteIds',
    sourceRefs: 'sourceRefs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgeUnitScalarFieldEnum = (typeof KnowledgeUnitScalarFieldEnum)[keyof typeof KnowledgeUnitScalarFieldEnum]


  export const StudyPlanScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    totalDays: 'totalDays',
    status: 'status',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyPlanScalarFieldEnum = (typeof StudyPlanScalarFieldEnum)[keyof typeof StudyPlanScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    studyPlanId: 'studyPlanId',
    title: 'title',
    description: 'description',
    taskType: 'taskType',
    status: 'status',
    scheduledDate: 'scheduledDate',
    estimatedMinutes: 'estimatedMinutes',
    difficulty: 'difficulty',
    priority: 'priority',
    masteryScore: 'masteryScore',
    nextReviewDate: 'nextReviewDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskKnowledgeUnitScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    knowledgeUnitId: 'knowledgeUnitId'
  };

  export type TaskKnowledgeUnitScalarFieldEnum = (typeof TaskKnowledgeUnitScalarFieldEnum)[keyof typeof TaskKnowledgeUnitScalarFieldEnum]


  export const LearningSessionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    durationSeconds: 'durationSeconds',
    questionCount: 'questionCount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LearningSessionScalarFieldEnum = (typeof LearningSessionScalarFieldEnum)[keyof typeof LearningSessionScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    content: 'content',
    isImportant: 'isImportant',
    isConfusing: 'isConfusing',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    title: 'title',
    status: 'status',
    score: 'score',
    feedback: 'feedback',
    generatedAt: 'generatedAt',
    submittedAt: 'submittedAt',
    gradedAt: 'gradedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizAnswerScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    questionIndex: 'questionIndex',
    questionType: 'questionType',
    questionText: 'questionText',
    referenceAnswer: 'referenceAnswer',
    userAnswer: 'userAnswer',
    isCorrect: 'isCorrect',
    score: 'score',
    analysis: 'analysis',
    errorType: 'errorType',
    createdAt: 'createdAt'
  };

  export type QuizAnswerScalarFieldEnum = (typeof QuizAnswerScalarFieldEnum)[keyof typeof QuizAnswerScalarFieldEnum]


  export const ReviewRecordScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    reviewDate: 'reviewDate',
    result: 'result',
    score: 'score',
    intervalDays: 'intervalDays',
    nextReviewDate: 'nextReviewDate',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ReviewRecordScalarFieldEnum = (typeof ReviewRecordScalarFieldEnum)[keyof typeof ReviewRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'MaterialType'
   */
  export type EnumMaterialTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialType'>
    


  /**
   * Reference to a field of type 'MaterialType[]'
   */
  export type ListEnumMaterialTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialType[]'>
    


  /**
   * Reference to a field of type 'MaterialStatus'
   */
  export type EnumMaterialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialStatus'>
    


  /**
   * Reference to a field of type 'MaterialStatus[]'
   */
  export type ListEnumMaterialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuizStatus'
   */
  export type EnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus'>
    


  /**
   * Reference to a field of type 'QuizStatus[]'
   */
  export type ListEnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus[]'>
    


  /**
   * Reference to a field of type 'ReviewResult'
   */
  export type EnumReviewResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewResult'>
    


  /**
   * Reference to a field of type 'ReviewResult[]'
   */
  export type ListEnumReviewResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewResult[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    goal?: StringNullableFilter<"Project"> | string | null
    examDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    dailyTimeBudget?: IntNullableFilter<"Project"> | number | null
    mode?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    materials?: MaterialListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    examDate?: SortOrderInput | SortOrder
    dailyTimeBudget?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    materials?: MaterialOrderByRelationAggregateInput
    studyPlans?: StudyPlanOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    goal?: StringNullableFilter<"Project"> | string | null
    examDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    dailyTimeBudget?: IntNullableFilter<"Project"> | number | null
    mode?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    materials?: MaterialListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    examDate?: SortOrderInput | SortOrder
    dailyTimeBudget?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    goal?: StringNullableWithAggregatesFilter<"Project"> | string | null
    examDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    dailyTimeBudget?: IntNullableWithAggregatesFilter<"Project"> | number | null
    mode?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    projectId?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    type?: EnumMaterialTypeFilter<"Material"> | $Enums.MaterialType
    sourcePath?: StringNullableFilter<"Material"> | string | null
    rawText?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    parseError?: StringNullableFilter<"Material"> | string | null
    metadata?: JsonNullableFilter<"Material">
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    chunks?: MaterialChunkListRelationFilter
    knowledgeUnits?: KnowledgeUnitListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    sourcePath?: SortOrderInput | SortOrder
    rawText?: SortOrderInput | SortOrder
    status?: SortOrder
    parseError?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    chunks?: MaterialChunkOrderByRelationAggregateInput
    knowledgeUnits?: KnowledgeUnitOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    projectId?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    type?: EnumMaterialTypeFilter<"Material"> | $Enums.MaterialType
    sourcePath?: StringNullableFilter<"Material"> | string | null
    rawText?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    parseError?: StringNullableFilter<"Material"> | string | null
    metadata?: JsonNullableFilter<"Material">
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    chunks?: MaterialChunkListRelationFilter
    knowledgeUnits?: KnowledgeUnitListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    sourcePath?: SortOrderInput | SortOrder
    rawText?: SortOrderInput | SortOrder
    status?: SortOrder
    parseError?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    projectId?: StringWithAggregatesFilter<"Material"> | string
    title?: StringWithAggregatesFilter<"Material"> | string
    type?: EnumMaterialTypeWithAggregatesFilter<"Material"> | $Enums.MaterialType
    sourcePath?: StringNullableWithAggregatesFilter<"Material"> | string | null
    rawText?: StringNullableWithAggregatesFilter<"Material"> | string | null
    status?: EnumMaterialStatusWithAggregatesFilter<"Material"> | $Enums.MaterialStatus
    parseError?: StringNullableWithAggregatesFilter<"Material"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Material">
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type MaterialChunkWhereInput = {
    AND?: MaterialChunkWhereInput | MaterialChunkWhereInput[]
    OR?: MaterialChunkWhereInput[]
    NOT?: MaterialChunkWhereInput | MaterialChunkWhereInput[]
    id?: StringFilter<"MaterialChunk"> | string
    materialId?: StringFilter<"MaterialChunk"> | string
    chunkIndex?: IntFilter<"MaterialChunk"> | number
    title?: StringNullableFilter<"MaterialChunk"> | string | null
    content?: StringFilter<"MaterialChunk"> | string
    summary?: StringNullableFilter<"MaterialChunk"> | string | null
    sourcePage?: IntNullableFilter<"MaterialChunk"> | number | null
    sourceSection?: StringNullableFilter<"MaterialChunk"> | string | null
    metadata?: JsonNullableFilter<"MaterialChunk">
    createdAt?: DateTimeFilter<"MaterialChunk"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type MaterialChunkOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    chunkIndex?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourcePage?: SortOrderInput | SortOrder
    sourceSection?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type MaterialChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    materialId_chunkIndex?: MaterialChunkMaterialIdChunkIndexCompoundUniqueInput
    AND?: MaterialChunkWhereInput | MaterialChunkWhereInput[]
    OR?: MaterialChunkWhereInput[]
    NOT?: MaterialChunkWhereInput | MaterialChunkWhereInput[]
    materialId?: StringFilter<"MaterialChunk"> | string
    chunkIndex?: IntFilter<"MaterialChunk"> | number
    title?: StringNullableFilter<"MaterialChunk"> | string | null
    content?: StringFilter<"MaterialChunk"> | string
    summary?: StringNullableFilter<"MaterialChunk"> | string | null
    sourcePage?: IntNullableFilter<"MaterialChunk"> | number | null
    sourceSection?: StringNullableFilter<"MaterialChunk"> | string | null
    metadata?: JsonNullableFilter<"MaterialChunk">
    createdAt?: DateTimeFilter<"MaterialChunk"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id" | "materialId_chunkIndex">

  export type MaterialChunkOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    chunkIndex?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourcePage?: SortOrderInput | SortOrder
    sourceSection?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MaterialChunkCountOrderByAggregateInput
    _avg?: MaterialChunkAvgOrderByAggregateInput
    _max?: MaterialChunkMaxOrderByAggregateInput
    _min?: MaterialChunkMinOrderByAggregateInput
    _sum?: MaterialChunkSumOrderByAggregateInput
  }

  export type MaterialChunkScalarWhereWithAggregatesInput = {
    AND?: MaterialChunkScalarWhereWithAggregatesInput | MaterialChunkScalarWhereWithAggregatesInput[]
    OR?: MaterialChunkScalarWhereWithAggregatesInput[]
    NOT?: MaterialChunkScalarWhereWithAggregatesInput | MaterialChunkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialChunk"> | string
    materialId?: StringWithAggregatesFilter<"MaterialChunk"> | string
    chunkIndex?: IntWithAggregatesFilter<"MaterialChunk"> | number
    title?: StringNullableWithAggregatesFilter<"MaterialChunk"> | string | null
    content?: StringWithAggregatesFilter<"MaterialChunk"> | string
    summary?: StringNullableWithAggregatesFilter<"MaterialChunk"> | string | null
    sourcePage?: IntNullableWithAggregatesFilter<"MaterialChunk"> | number | null
    sourceSection?: StringNullableWithAggregatesFilter<"MaterialChunk"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"MaterialChunk">
    createdAt?: DateTimeWithAggregatesFilter<"MaterialChunk"> | Date | string
  }

  export type KnowledgeUnitWhereInput = {
    AND?: KnowledgeUnitWhereInput | KnowledgeUnitWhereInput[]
    OR?: KnowledgeUnitWhereInput[]
    NOT?: KnowledgeUnitWhereInput | KnowledgeUnitWhereInput[]
    id?: StringFilter<"KnowledgeUnit"> | string
    materialId?: StringFilter<"KnowledgeUnit"> | string
    title?: StringFilter<"KnowledgeUnit"> | string
    summary?: StringNullableFilter<"KnowledgeUnit"> | string | null
    topic?: StringNullableFilter<"KnowledgeUnit"> | string | null
    difficulty?: IntNullableFilter<"KnowledgeUnit"> | number | null
    importance?: IntNullableFilter<"KnowledgeUnit"> | number | null
    estimatedMinutes?: IntNullableFilter<"KnowledgeUnit"> | number | null
    prerequisiteIds?: StringNullableListFilter<"KnowledgeUnit">
    sourceRefs?: JsonNullableFilter<"KnowledgeUnit">
    createdAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    taskLinks?: TaskKnowledgeUnitListRelationFilter
  }

  export type KnowledgeUnitOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    importance?: SortOrderInput | SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    prerequisiteIds?: SortOrder
    sourceRefs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
    taskLinks?: TaskKnowledgeUnitOrderByRelationAggregateInput
  }

  export type KnowledgeUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeUnitWhereInput | KnowledgeUnitWhereInput[]
    OR?: KnowledgeUnitWhereInput[]
    NOT?: KnowledgeUnitWhereInput | KnowledgeUnitWhereInput[]
    materialId?: StringFilter<"KnowledgeUnit"> | string
    title?: StringFilter<"KnowledgeUnit"> | string
    summary?: StringNullableFilter<"KnowledgeUnit"> | string | null
    topic?: StringNullableFilter<"KnowledgeUnit"> | string | null
    difficulty?: IntNullableFilter<"KnowledgeUnit"> | number | null
    importance?: IntNullableFilter<"KnowledgeUnit"> | number | null
    estimatedMinutes?: IntNullableFilter<"KnowledgeUnit"> | number | null
    prerequisiteIds?: StringNullableListFilter<"KnowledgeUnit">
    sourceRefs?: JsonNullableFilter<"KnowledgeUnit">
    createdAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    taskLinks?: TaskKnowledgeUnitListRelationFilter
  }, "id">

  export type KnowledgeUnitOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    importance?: SortOrderInput | SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    prerequisiteIds?: SortOrder
    sourceRefs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeUnitCountOrderByAggregateInput
    _avg?: KnowledgeUnitAvgOrderByAggregateInput
    _max?: KnowledgeUnitMaxOrderByAggregateInput
    _min?: KnowledgeUnitMinOrderByAggregateInput
    _sum?: KnowledgeUnitSumOrderByAggregateInput
  }

  export type KnowledgeUnitScalarWhereWithAggregatesInput = {
    AND?: KnowledgeUnitScalarWhereWithAggregatesInput | KnowledgeUnitScalarWhereWithAggregatesInput[]
    OR?: KnowledgeUnitScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeUnitScalarWhereWithAggregatesInput | KnowledgeUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeUnit"> | string
    materialId?: StringWithAggregatesFilter<"KnowledgeUnit"> | string
    title?: StringWithAggregatesFilter<"KnowledgeUnit"> | string
    summary?: StringNullableWithAggregatesFilter<"KnowledgeUnit"> | string | null
    topic?: StringNullableWithAggregatesFilter<"KnowledgeUnit"> | string | null
    difficulty?: IntNullableWithAggregatesFilter<"KnowledgeUnit"> | number | null
    importance?: IntNullableWithAggregatesFilter<"KnowledgeUnit"> | number | null
    estimatedMinutes?: IntNullableWithAggregatesFilter<"KnowledgeUnit"> | number | null
    prerequisiteIds?: StringNullableListFilter<"KnowledgeUnit">
    sourceRefs?: JsonNullableWithAggregatesFilter<"KnowledgeUnit">
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeUnit"> | Date | string
  }

  export type StudyPlanWhereInput = {
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    projectId?: StringFilter<"StudyPlan"> | string
    title?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    totalDays?: IntFilter<"StudyPlan"> | number
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    config?: JsonNullableFilter<"StudyPlan">
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type StudyPlanOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalDays?: SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type StudyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    projectId?: StringFilter<"StudyPlan"> | string
    title?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    totalDays?: IntFilter<"StudyPlan"> | number
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    config?: JsonNullableFilter<"StudyPlan">
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type StudyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalDays?: SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyPlanCountOrderByAggregateInput
    _avg?: StudyPlanAvgOrderByAggregateInput
    _max?: StudyPlanMaxOrderByAggregateInput
    _min?: StudyPlanMinOrderByAggregateInput
    _sum?: StudyPlanSumOrderByAggregateInput
  }

  export type StudyPlanScalarWhereWithAggregatesInput = {
    AND?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    OR?: StudyPlanScalarWhereWithAggregatesInput[]
    NOT?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyPlan"> | string
    projectId?: StringWithAggregatesFilter<"StudyPlan"> | string
    title?: StringWithAggregatesFilter<"StudyPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    totalDays?: IntWithAggregatesFilter<"StudyPlan"> | number
    status?: EnumPlanStatusWithAggregatesFilter<"StudyPlan"> | $Enums.PlanStatus
    config?: JsonNullableWithAggregatesFilter<"StudyPlan">
    createdAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    studyPlanId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    taskType?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    scheduledDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    difficulty?: IntNullableFilter<"Task"> | number | null
    priority?: IntNullableFilter<"Task"> | number | null
    masteryScore?: FloatNullableFilter<"Task"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    knowledgeLinks?: TaskKnowledgeUnitListRelationFilter
    sessions?: LearningSessionListRelationFilter
    notes?: NoteListRelationFilter
    quizzes?: QuizListRelationFilter
    reviewRecords?: ReviewRecordListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    studyPlanId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    taskType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    masteryScore?: SortOrderInput | SortOrder
    nextReviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    studyPlan?: StudyPlanOrderByWithRelationInput
    knowledgeLinks?: TaskKnowledgeUnitOrderByRelationAggregateInput
    sessions?: LearningSessionOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
    reviewRecords?: ReviewRecordOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    studyPlanId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    taskType?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    scheduledDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    difficulty?: IntNullableFilter<"Task"> | number | null
    priority?: IntNullableFilter<"Task"> | number | null
    masteryScore?: FloatNullableFilter<"Task"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    knowledgeLinks?: TaskKnowledgeUnitListRelationFilter
    sessions?: LearningSessionListRelationFilter
    notes?: NoteListRelationFilter
    quizzes?: QuizListRelationFilter
    reviewRecords?: ReviewRecordListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    studyPlanId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    taskType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    masteryScore?: SortOrderInput | SortOrder
    nextReviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    studyPlanId?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    taskType?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    scheduledDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Task"> | number | null
    difficulty?: IntNullableWithAggregatesFilter<"Task"> | number | null
    priority?: IntNullableWithAggregatesFilter<"Task"> | number | null
    masteryScore?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    nextReviewDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type TaskKnowledgeUnitWhereInput = {
    AND?: TaskKnowledgeUnitWhereInput | TaskKnowledgeUnitWhereInput[]
    OR?: TaskKnowledgeUnitWhereInput[]
    NOT?: TaskKnowledgeUnitWhereInput | TaskKnowledgeUnitWhereInput[]
    id?: StringFilter<"TaskKnowledgeUnit"> | string
    taskId?: StringFilter<"TaskKnowledgeUnit"> | string
    knowledgeUnitId?: StringFilter<"TaskKnowledgeUnit"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    knowledgeUnit?: XOR<KnowledgeUnitScalarRelationFilter, KnowledgeUnitWhereInput>
  }

  export type TaskKnowledgeUnitOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    knowledgeUnitId?: SortOrder
    task?: TaskOrderByWithRelationInput
    knowledgeUnit?: KnowledgeUnitOrderByWithRelationInput
  }

  export type TaskKnowledgeUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_knowledgeUnitId?: TaskKnowledgeUnitTaskIdKnowledgeUnitIdCompoundUniqueInput
    AND?: TaskKnowledgeUnitWhereInput | TaskKnowledgeUnitWhereInput[]
    OR?: TaskKnowledgeUnitWhereInput[]
    NOT?: TaskKnowledgeUnitWhereInput | TaskKnowledgeUnitWhereInput[]
    taskId?: StringFilter<"TaskKnowledgeUnit"> | string
    knowledgeUnitId?: StringFilter<"TaskKnowledgeUnit"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    knowledgeUnit?: XOR<KnowledgeUnitScalarRelationFilter, KnowledgeUnitWhereInput>
  }, "id" | "taskId_knowledgeUnitId">

  export type TaskKnowledgeUnitOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    knowledgeUnitId?: SortOrder
    _count?: TaskKnowledgeUnitCountOrderByAggregateInput
    _max?: TaskKnowledgeUnitMaxOrderByAggregateInput
    _min?: TaskKnowledgeUnitMinOrderByAggregateInput
  }

  export type TaskKnowledgeUnitScalarWhereWithAggregatesInput = {
    AND?: TaskKnowledgeUnitScalarWhereWithAggregatesInput | TaskKnowledgeUnitScalarWhereWithAggregatesInput[]
    OR?: TaskKnowledgeUnitScalarWhereWithAggregatesInput[]
    NOT?: TaskKnowledgeUnitScalarWhereWithAggregatesInput | TaskKnowledgeUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskKnowledgeUnit"> | string
    taskId?: StringWithAggregatesFilter<"TaskKnowledgeUnit"> | string
    knowledgeUnitId?: StringWithAggregatesFilter<"TaskKnowledgeUnit"> | string
  }

  export type LearningSessionWhereInput = {
    AND?: LearningSessionWhereInput | LearningSessionWhereInput[]
    OR?: LearningSessionWhereInput[]
    NOT?: LearningSessionWhereInput | LearningSessionWhereInput[]
    id?: StringFilter<"LearningSession"> | string
    taskId?: StringFilter<"LearningSession"> | string
    startedAt?: DateTimeFilter<"LearningSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"LearningSession"> | number | null
    questionCount?: IntFilter<"LearningSession"> | number
    status?: EnumSessionStatusFilter<"LearningSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"LearningSession"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type LearningSessionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    questionCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type LearningSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningSessionWhereInput | LearningSessionWhereInput[]
    OR?: LearningSessionWhereInput[]
    NOT?: LearningSessionWhereInput | LearningSessionWhereInput[]
    taskId?: StringFilter<"LearningSession"> | string
    startedAt?: DateTimeFilter<"LearningSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"LearningSession"> | number | null
    questionCount?: IntFilter<"LearningSession"> | number
    status?: EnumSessionStatusFilter<"LearningSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"LearningSession"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type LearningSessionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    questionCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LearningSessionCountOrderByAggregateInput
    _avg?: LearningSessionAvgOrderByAggregateInput
    _max?: LearningSessionMaxOrderByAggregateInput
    _min?: LearningSessionMinOrderByAggregateInput
    _sum?: LearningSessionSumOrderByAggregateInput
  }

  export type LearningSessionScalarWhereWithAggregatesInput = {
    AND?: LearningSessionScalarWhereWithAggregatesInput | LearningSessionScalarWhereWithAggregatesInput[]
    OR?: LearningSessionScalarWhereWithAggregatesInput[]
    NOT?: LearningSessionScalarWhereWithAggregatesInput | LearningSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningSession"> | string
    taskId?: StringWithAggregatesFilter<"LearningSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"LearningSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"LearningSession"> | Date | string | null
    durationSeconds?: IntNullableWithAggregatesFilter<"LearningSession"> | number | null
    questionCount?: IntWithAggregatesFilter<"LearningSession"> | number
    status?: EnumSessionStatusWithAggregatesFilter<"LearningSession"> | $Enums.SessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"LearningSession"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    taskId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isImportant?: BoolFilter<"Note"> | boolean
    isConfusing?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    isImportant?: SortOrder
    isConfusing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    taskId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isImportant?: BoolFilter<"Note"> | boolean
    isConfusing?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    isImportant?: SortOrder
    isConfusing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    taskId?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    isImportant?: BoolWithAggregatesFilter<"Note"> | boolean
    isConfusing?: BoolWithAggregatesFilter<"Note"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    taskId?: StringFilter<"Quiz"> | string
    title?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    score?: FloatNullableFilter<"Quiz"> | number | null
    feedback?: JsonNullableFilter<"Quiz">
    generatedAt?: DateTimeFilter<"Quiz"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    answers?: QuizAnswerListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    answers?: QuizAnswerOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    taskId?: StringFilter<"Quiz"> | string
    title?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    score?: FloatNullableFilter<"Quiz"> | number | null
    feedback?: JsonNullableFilter<"Quiz">
    generatedAt?: DateTimeFilter<"Quiz"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    answers?: QuizAnswerListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    taskId?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    status?: EnumQuizStatusWithAggregatesFilter<"Quiz"> | $Enums.QuizStatus
    score?: FloatNullableWithAggregatesFilter<"Quiz"> | number | null
    feedback?: JsonNullableWithAggregatesFilter<"Quiz">
    generatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Quiz"> | Date | string | null
    gradedAt?: DateTimeNullableWithAggregatesFilter<"Quiz"> | Date | string | null
  }

  export type QuizAnswerWhereInput = {
    AND?: QuizAnswerWhereInput | QuizAnswerWhereInput[]
    OR?: QuizAnswerWhereInput[]
    NOT?: QuizAnswerWhereInput | QuizAnswerWhereInput[]
    id?: StringFilter<"QuizAnswer"> | string
    quizId?: StringFilter<"QuizAnswer"> | string
    questionIndex?: IntFilter<"QuizAnswer"> | number
    questionType?: StringFilter<"QuizAnswer"> | string
    questionText?: StringFilter<"QuizAnswer"> | string
    referenceAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    userAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAnswer"> | boolean | null
    score?: FloatNullableFilter<"QuizAnswer"> | number | null
    analysis?: StringNullableFilter<"QuizAnswer"> | string | null
    errorType?: StringNullableFilter<"QuizAnswer"> | string | null
    createdAt?: DateTimeFilter<"QuizAnswer"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizAnswerOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    questionIndex?: SortOrder
    questionType?: SortOrder
    questionText?: SortOrder
    referenceAnswer?: SortOrderInput | SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    analysis?: SortOrderInput | SortOrder
    errorType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId_questionIndex?: QuizAnswerQuizIdQuestionIndexCompoundUniqueInput
    AND?: QuizAnswerWhereInput | QuizAnswerWhereInput[]
    OR?: QuizAnswerWhereInput[]
    NOT?: QuizAnswerWhereInput | QuizAnswerWhereInput[]
    quizId?: StringFilter<"QuizAnswer"> | string
    questionIndex?: IntFilter<"QuizAnswer"> | number
    questionType?: StringFilter<"QuizAnswer"> | string
    questionText?: StringFilter<"QuizAnswer"> | string
    referenceAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    userAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAnswer"> | boolean | null
    score?: FloatNullableFilter<"QuizAnswer"> | number | null
    analysis?: StringNullableFilter<"QuizAnswer"> | string | null
    errorType?: StringNullableFilter<"QuizAnswer"> | string | null
    createdAt?: DateTimeFilter<"QuizAnswer"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "quizId_questionIndex">

  export type QuizAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    questionIndex?: SortOrder
    questionType?: SortOrder
    questionText?: SortOrder
    referenceAnswer?: SortOrderInput | SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    analysis?: SortOrderInput | SortOrder
    errorType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuizAnswerCountOrderByAggregateInput
    _avg?: QuizAnswerAvgOrderByAggregateInput
    _max?: QuizAnswerMaxOrderByAggregateInput
    _min?: QuizAnswerMinOrderByAggregateInput
    _sum?: QuizAnswerSumOrderByAggregateInput
  }

  export type QuizAnswerScalarWhereWithAggregatesInput = {
    AND?: QuizAnswerScalarWhereWithAggregatesInput | QuizAnswerScalarWhereWithAggregatesInput[]
    OR?: QuizAnswerScalarWhereWithAggregatesInput[]
    NOT?: QuizAnswerScalarWhereWithAggregatesInput | QuizAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAnswer"> | string
    quizId?: StringWithAggregatesFilter<"QuizAnswer"> | string
    questionIndex?: IntWithAggregatesFilter<"QuizAnswer"> | number
    questionType?: StringWithAggregatesFilter<"QuizAnswer"> | string
    questionText?: StringWithAggregatesFilter<"QuizAnswer"> | string
    referenceAnswer?: StringNullableWithAggregatesFilter<"QuizAnswer"> | string | null
    userAnswer?: StringNullableWithAggregatesFilter<"QuizAnswer"> | string | null
    isCorrect?: BoolNullableWithAggregatesFilter<"QuizAnswer"> | boolean | null
    score?: FloatNullableWithAggregatesFilter<"QuizAnswer"> | number | null
    analysis?: StringNullableWithAggregatesFilter<"QuizAnswer"> | string | null
    errorType?: StringNullableWithAggregatesFilter<"QuizAnswer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuizAnswer"> | Date | string
  }

  export type ReviewRecordWhereInput = {
    AND?: ReviewRecordWhereInput | ReviewRecordWhereInput[]
    OR?: ReviewRecordWhereInput[]
    NOT?: ReviewRecordWhereInput | ReviewRecordWhereInput[]
    id?: StringFilter<"ReviewRecord"> | string
    taskId?: StringFilter<"ReviewRecord"> | string
    reviewDate?: DateTimeFilter<"ReviewRecord"> | Date | string
    result?: EnumReviewResultFilter<"ReviewRecord"> | $Enums.ReviewResult
    score?: FloatNullableFilter<"ReviewRecord"> | number | null
    intervalDays?: IntNullableFilter<"ReviewRecord"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"ReviewRecord"> | Date | string | null
    notes?: StringNullableFilter<"ReviewRecord"> | string | null
    createdAt?: DateTimeFilter<"ReviewRecord"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type ReviewRecordOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    reviewDate?: SortOrder
    result?: SortOrder
    score?: SortOrderInput | SortOrder
    intervalDays?: SortOrderInput | SortOrder
    nextReviewDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type ReviewRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewRecordWhereInput | ReviewRecordWhereInput[]
    OR?: ReviewRecordWhereInput[]
    NOT?: ReviewRecordWhereInput | ReviewRecordWhereInput[]
    taskId?: StringFilter<"ReviewRecord"> | string
    reviewDate?: DateTimeFilter<"ReviewRecord"> | Date | string
    result?: EnumReviewResultFilter<"ReviewRecord"> | $Enums.ReviewResult
    score?: FloatNullableFilter<"ReviewRecord"> | number | null
    intervalDays?: IntNullableFilter<"ReviewRecord"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"ReviewRecord"> | Date | string | null
    notes?: StringNullableFilter<"ReviewRecord"> | string | null
    createdAt?: DateTimeFilter<"ReviewRecord"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type ReviewRecordOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    reviewDate?: SortOrder
    result?: SortOrder
    score?: SortOrderInput | SortOrder
    intervalDays?: SortOrderInput | SortOrder
    nextReviewDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewRecordCountOrderByAggregateInput
    _avg?: ReviewRecordAvgOrderByAggregateInput
    _max?: ReviewRecordMaxOrderByAggregateInput
    _min?: ReviewRecordMinOrderByAggregateInput
    _sum?: ReviewRecordSumOrderByAggregateInput
  }

  export type ReviewRecordScalarWhereWithAggregatesInput = {
    AND?: ReviewRecordScalarWhereWithAggregatesInput | ReviewRecordScalarWhereWithAggregatesInput[]
    OR?: ReviewRecordScalarWhereWithAggregatesInput[]
    NOT?: ReviewRecordScalarWhereWithAggregatesInput | ReviewRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewRecord"> | string
    taskId?: StringWithAggregatesFilter<"ReviewRecord"> | string
    reviewDate?: DateTimeWithAggregatesFilter<"ReviewRecord"> | Date | string
    result?: EnumReviewResultWithAggregatesFilter<"ReviewRecord"> | $Enums.ReviewResult
    score?: FloatNullableWithAggregatesFilter<"ReviewRecord"> | number | null
    intervalDays?: IntNullableWithAggregatesFilter<"ReviewRecord"> | number | null
    nextReviewDate?: DateTimeNullableWithAggregatesFilter<"ReviewRecord"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ReviewRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReviewRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    studyPlans?: StudyPlanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMaterialsInput
    chunks?: MaterialChunkCreateNestedManyWithoutMaterialInput
    knowledgeUnits?: KnowledgeUnitCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    projectId: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: MaterialChunkUncheckedCreateNestedManyWithoutMaterialInput
    knowledgeUnits?: KnowledgeUnitUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMaterialsNestedInput
    chunks?: MaterialChunkUpdateManyWithoutMaterialNestedInput
    knowledgeUnits?: KnowledgeUnitUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: MaterialChunkUncheckedUpdateManyWithoutMaterialNestedInput
    knowledgeUnits?: KnowledgeUnitUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    projectId: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkCreateInput = {
    id?: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutChunksInput
  }

  export type MaterialChunkUncheckedCreateInput = {
    id?: string
    materialId: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaterialChunkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutChunksNestedInput
  }

  export type MaterialChunkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkCreateManyInput = {
    id?: string
    materialId: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaterialChunkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeUnitCreateInput = {
    id?: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    material: MaterialCreateNestedOneWithoutKnowledgeUnitsInput
    taskLinks?: TaskKnowledgeUnitCreateNestedManyWithoutKnowledgeUnitInput
  }

  export type KnowledgeUnitUncheckedCreateInput = {
    id?: string
    materialId: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    taskLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutKnowledgeUnitInput
  }

  export type KnowledgeUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutKnowledgeUnitsNestedInput
    taskLinks?: TaskKnowledgeUnitUpdateManyWithoutKnowledgeUnitNestedInput
  }

  export type KnowledgeUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutKnowledgeUnitNestedInput
  }

  export type KnowledgeUnitCreateManyInput = {
    id?: string
    materialId: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutStudyPlansInput
    tasks?: TaskCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateInput = {
    id?: string
    projectId: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutStudyPlansNestedInput
    tasks?: TaskUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanCreateManyInput = {
    id?: string
    projectId: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskKnowledgeUnitCreateInput = {
    id?: string
    task: TaskCreateNestedOneWithoutKnowledgeLinksInput
    knowledgeUnit: KnowledgeUnitCreateNestedOneWithoutTaskLinksInput
  }

  export type TaskKnowledgeUnitUncheckedCreateInput = {
    id?: string
    taskId: string
    knowledgeUnitId: string
  }

  export type TaskKnowledgeUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutKnowledgeLinksNestedInput
    knowledgeUnit?: KnowledgeUnitUpdateOneRequiredWithoutTaskLinksNestedInput
  }

  export type TaskKnowledgeUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    knowledgeUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskKnowledgeUnitCreateManyInput = {
    id?: string
    taskId: string
    knowledgeUnitId: string
  }

  export type TaskKnowledgeUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TaskKnowledgeUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    knowledgeUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type LearningSessionCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutSessionsInput
  }

  export type LearningSessionUncheckedCreateInput = {
    id?: string
    taskId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type LearningSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type LearningSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSessionCreateManyInput = {
    id?: string
    taskId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type LearningSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    taskId: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    taskId: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    task: TaskCreateNestedOneWithoutQuizzesInput
    answers?: QuizAnswerCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    taskId: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    answers?: QuizAnswerUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutQuizzesNestedInput
    answers?: QuizAnswerUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: QuizAnswerUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    taskId: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizAnswerCreateInput = {
    id?: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutAnswersInput
  }

  export type QuizAnswerUncheckedCreateInput = {
    id?: string
    quizId: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
  }

  export type QuizAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type QuizAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAnswerCreateManyInput = {
    id?: string
    quizId: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
  }

  export type QuizAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRecordCreateInput = {
    id?: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutReviewRecordsInput
  }

  export type ReviewRecordUncheckedCreateInput = {
    id?: string
    taskId: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReviewRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutReviewRecordsNestedInput
  }

  export type ReviewRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRecordCreateManyInput = {
    id?: string
    taskId: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReviewRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type StudyPlanListRelationFilter = {
    every?: StudyPlanWhereInput
    some?: StudyPlanWhereInput
    none?: StudyPlanWhereInput
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    examDate?: SortOrder
    dailyTimeBudget?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    dailyTimeBudget?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    examDate?: SortOrder
    dailyTimeBudget?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    examDate?: SortOrder
    dailyTimeBudget?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    dailyTimeBudget?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMaterialTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeFilter<$PrismaModel> | $Enums.MaterialType
  }

  export type EnumMaterialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialStatusFilter<$PrismaModel> | $Enums.MaterialStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type MaterialChunkListRelationFilter = {
    every?: MaterialChunkWhereInput
    some?: MaterialChunkWhereInput
    none?: MaterialChunkWhereInput
  }

  export type KnowledgeUnitListRelationFilter = {
    every?: KnowledgeUnitWhereInput
    some?: KnowledgeUnitWhereInput
    none?: KnowledgeUnitWhereInput
  }

  export type MaterialChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    sourcePath?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    parseError?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    sourcePath?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    parseError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    sourcePath?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    parseError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMaterialTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaterialType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialTypeFilter<$PrismaModel>
    _max?: NestedEnumMaterialTypeFilter<$PrismaModel>
  }

  export type EnumMaterialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaterialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialStatusFilter<$PrismaModel>
    _max?: NestedEnumMaterialStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type MaterialChunkMaterialIdChunkIndexCompoundUniqueInput = {
    materialId: string
    chunkIndex: number
  }

  export type MaterialChunkCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    chunkIndex?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    sourcePage?: SortOrder
    sourceSection?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialChunkAvgOrderByAggregateInput = {
    chunkIndex?: SortOrder
    sourcePage?: SortOrder
  }

  export type MaterialChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    chunkIndex?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    sourcePage?: SortOrder
    sourceSection?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialChunkMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    chunkIndex?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    sourcePage?: SortOrder
    sourceSection?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialChunkSumOrderByAggregateInput = {
    chunkIndex?: SortOrder
    sourcePage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TaskKnowledgeUnitListRelationFilter = {
    every?: TaskKnowledgeUnitWhereInput
    some?: TaskKnowledgeUnitWhereInput
    none?: TaskKnowledgeUnitWhereInput
  }

  export type TaskKnowledgeUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeUnitCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    importance?: SortOrder
    estimatedMinutes?: SortOrder
    prerequisiteIds?: SortOrder
    sourceRefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeUnitAvgOrderByAggregateInput = {
    difficulty?: SortOrder
    importance?: SortOrder
    estimatedMinutes?: SortOrder
  }

  export type KnowledgeUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    importance?: SortOrder
    estimatedMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeUnitMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    importance?: SortOrder
    estimatedMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeUnitSumOrderByAggregateInput = {
    difficulty?: SortOrder
    importance?: SortOrder
    estimatedMinutes?: SortOrder
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalDays?: SortOrder
    status?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanAvgOrderByAggregateInput = {
    totalDays?: SortOrder
  }

  export type StudyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanSumOrderByAggregateInput = {
    totalDays?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudyPlanScalarRelationFilter = {
    is?: StudyPlanWhereInput
    isNot?: StudyPlanWhereInput
  }

  export type LearningSessionListRelationFilter = {
    every?: LearningSessionWhereInput
    some?: LearningSessionWhereInput
    none?: LearningSessionWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type ReviewRecordListRelationFilter = {
    every?: ReviewRecordWhereInput
    some?: ReviewRecordWhereInput
    none?: ReviewRecordWhereInput
  }

  export type LearningSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    studyPlanId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    estimatedMinutes?: SortOrder
    difficulty?: SortOrder
    priority?: SortOrder
    masteryScore?: SortOrder
    nextReviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    difficulty?: SortOrder
    priority?: SortOrder
    masteryScore?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    studyPlanId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    estimatedMinutes?: SortOrder
    difficulty?: SortOrder
    priority?: SortOrder
    masteryScore?: SortOrder
    nextReviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    studyPlanId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    estimatedMinutes?: SortOrder
    difficulty?: SortOrder
    priority?: SortOrder
    masteryScore?: SortOrder
    nextReviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    difficulty?: SortOrder
    priority?: SortOrder
    masteryScore?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type KnowledgeUnitScalarRelationFilter = {
    is?: KnowledgeUnitWhereInput
    isNot?: KnowledgeUnitWhereInput
  }

  export type TaskKnowledgeUnitTaskIdKnowledgeUnitIdCompoundUniqueInput = {
    taskId: string
    knowledgeUnitId: string
  }

  export type TaskKnowledgeUnitCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    knowledgeUnitId?: SortOrder
  }

  export type TaskKnowledgeUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    knowledgeUnitId?: SortOrder
  }

  export type TaskKnowledgeUnitMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    knowledgeUnitId?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type LearningSessionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
    questionCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningSessionAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
    questionCount?: SortOrder
  }

  export type LearningSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
    questionCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningSessionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
    questionCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningSessionSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
    questionCount?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    isImportant?: SortOrder
    isConfusing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    isImportant?: SortOrder
    isConfusing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    isImportant?: SortOrder
    isConfusing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type QuizAnswerListRelationFilter = {
    every?: QuizAnswerWhereInput
    some?: QuizAnswerWhereInput
    none?: QuizAnswerWhereInput
  }

  export type QuizAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    generatedAt?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    score?: SortOrder
    generatedAt?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    score?: SortOrder
    generatedAt?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizAnswerQuizIdQuestionIndexCompoundUniqueInput = {
    quizId: string
    questionIndex: number
  }

  export type QuizAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questionIndex?: SortOrder
    questionType?: SortOrder
    questionText?: SortOrder
    referenceAnswer?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    analysis?: SortOrder
    errorType?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAnswerAvgOrderByAggregateInput = {
    questionIndex?: SortOrder
    score?: SortOrder
  }

  export type QuizAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questionIndex?: SortOrder
    questionType?: SortOrder
    questionText?: SortOrder
    referenceAnswer?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    analysis?: SortOrder
    errorType?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questionIndex?: SortOrder
    questionType?: SortOrder
    questionText?: SortOrder
    referenceAnswer?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    analysis?: SortOrder
    errorType?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAnswerSumOrderByAggregateInput = {
    questionIndex?: SortOrder
    score?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumReviewResultFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewResult | EnumReviewResultFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewResultFilter<$PrismaModel> | $Enums.ReviewResult
  }

  export type ReviewRecordCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    reviewDate?: SortOrder
    result?: SortOrder
    score?: SortOrder
    intervalDays?: SortOrder
    nextReviewDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewRecordAvgOrderByAggregateInput = {
    score?: SortOrder
    intervalDays?: SortOrder
  }

  export type ReviewRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    reviewDate?: SortOrder
    result?: SortOrder
    score?: SortOrder
    intervalDays?: SortOrder
    nextReviewDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewRecordMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    reviewDate?: SortOrder
    result?: SortOrder
    score?: SortOrder
    intervalDays?: SortOrder
    nextReviewDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewRecordSumOrderByAggregateInput = {
    score?: SortOrder
    intervalDays?: SortOrder
  }

  export type EnumReviewResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewResult | EnumReviewResultFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewResultWithAggregatesFilter<$PrismaModel> | $Enums.ReviewResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewResultFilter<$PrismaModel>
    _max?: NestedEnumReviewResultFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
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

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type MaterialCreateNestedManyWithoutProjectInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type StudyPlanCreateNestedManyWithoutProjectInput = {
    create?: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput> | StudyPlanCreateWithoutProjectInput[] | StudyPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutProjectInput | StudyPlanCreateOrConnectWithoutProjectInput[]
    createMany?: StudyPlanCreateManyProjectInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type StudyPlanUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput> | StudyPlanCreateWithoutProjectInput[] | StudyPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutProjectInput | StudyPlanCreateOrConnectWithoutProjectInput[]
    createMany?: StudyPlanCreateManyProjectInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type MaterialUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectInput | MaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectInput | MaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectInput | MaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type StudyPlanUpdateManyWithoutProjectNestedInput = {
    create?: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput> | StudyPlanCreateWithoutProjectInput[] | StudyPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutProjectInput | StudyPlanCreateOrConnectWithoutProjectInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutProjectInput | StudyPlanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: StudyPlanCreateManyProjectInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutProjectInput | StudyPlanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutProjectInput | StudyPlanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectInput | MaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectInput | MaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectInput | MaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type StudyPlanUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput> | StudyPlanCreateWithoutProjectInput[] | StudyPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutProjectInput | StudyPlanCreateOrConnectWithoutProjectInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutProjectInput | StudyPlanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: StudyPlanCreateManyProjectInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutProjectInput | StudyPlanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutProjectInput | StudyPlanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput
    connect?: ProjectWhereUniqueInput
  }

  export type MaterialChunkCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput> | MaterialChunkCreateWithoutMaterialInput[] | MaterialChunkUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialChunkCreateOrConnectWithoutMaterialInput | MaterialChunkCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialChunkCreateManyMaterialInputEnvelope
    connect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
  }

  export type KnowledgeUnitCreateNestedManyWithoutMaterialInput = {
    create?: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput> | KnowledgeUnitCreateWithoutMaterialInput[] | KnowledgeUnitUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutMaterialInput | KnowledgeUnitCreateOrConnectWithoutMaterialInput[]
    createMany?: KnowledgeUnitCreateManyMaterialInputEnvelope
    connect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
  }

  export type MaterialChunkUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput> | MaterialChunkCreateWithoutMaterialInput[] | MaterialChunkUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialChunkCreateOrConnectWithoutMaterialInput | MaterialChunkCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialChunkCreateManyMaterialInputEnvelope
    connect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
  }

  export type KnowledgeUnitUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput> | KnowledgeUnitCreateWithoutMaterialInput[] | KnowledgeUnitUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutMaterialInput | KnowledgeUnitCreateOrConnectWithoutMaterialInput[]
    createMany?: KnowledgeUnitCreateManyMaterialInputEnvelope
    connect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
  }

  export type EnumMaterialTypeFieldUpdateOperationsInput = {
    set?: $Enums.MaterialType
  }

  export type EnumMaterialStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaterialStatus
  }

  export type ProjectUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput
    upsert?: ProjectUpsertWithoutMaterialsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMaterialsInput, ProjectUpdateWithoutMaterialsInput>, ProjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type MaterialChunkUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput> | MaterialChunkCreateWithoutMaterialInput[] | MaterialChunkUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialChunkCreateOrConnectWithoutMaterialInput | MaterialChunkCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialChunkUpsertWithWhereUniqueWithoutMaterialInput | MaterialChunkUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialChunkCreateManyMaterialInputEnvelope
    set?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    disconnect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    delete?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    connect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    update?: MaterialChunkUpdateWithWhereUniqueWithoutMaterialInput | MaterialChunkUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialChunkUpdateManyWithWhereWithoutMaterialInput | MaterialChunkUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialChunkScalarWhereInput | MaterialChunkScalarWhereInput[]
  }

  export type KnowledgeUnitUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput> | KnowledgeUnitCreateWithoutMaterialInput[] | KnowledgeUnitUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutMaterialInput | KnowledgeUnitCreateOrConnectWithoutMaterialInput[]
    upsert?: KnowledgeUnitUpsertWithWhereUniqueWithoutMaterialInput | KnowledgeUnitUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: KnowledgeUnitCreateManyMaterialInputEnvelope
    set?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    disconnect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    delete?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    connect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    update?: KnowledgeUnitUpdateWithWhereUniqueWithoutMaterialInput | KnowledgeUnitUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: KnowledgeUnitUpdateManyWithWhereWithoutMaterialInput | KnowledgeUnitUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: KnowledgeUnitScalarWhereInput | KnowledgeUnitScalarWhereInput[]
  }

  export type MaterialChunkUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput> | MaterialChunkCreateWithoutMaterialInput[] | MaterialChunkUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialChunkCreateOrConnectWithoutMaterialInput | MaterialChunkCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialChunkUpsertWithWhereUniqueWithoutMaterialInput | MaterialChunkUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialChunkCreateManyMaterialInputEnvelope
    set?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    disconnect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    delete?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    connect?: MaterialChunkWhereUniqueInput | MaterialChunkWhereUniqueInput[]
    update?: MaterialChunkUpdateWithWhereUniqueWithoutMaterialInput | MaterialChunkUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialChunkUpdateManyWithWhereWithoutMaterialInput | MaterialChunkUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialChunkScalarWhereInput | MaterialChunkScalarWhereInput[]
  }

  export type KnowledgeUnitUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput> | KnowledgeUnitCreateWithoutMaterialInput[] | KnowledgeUnitUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutMaterialInput | KnowledgeUnitCreateOrConnectWithoutMaterialInput[]
    upsert?: KnowledgeUnitUpsertWithWhereUniqueWithoutMaterialInput | KnowledgeUnitUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: KnowledgeUnitCreateManyMaterialInputEnvelope
    set?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    disconnect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    delete?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    connect?: KnowledgeUnitWhereUniqueInput | KnowledgeUnitWhereUniqueInput[]
    update?: KnowledgeUnitUpdateWithWhereUniqueWithoutMaterialInput | KnowledgeUnitUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: KnowledgeUnitUpdateManyWithWhereWithoutMaterialInput | KnowledgeUnitUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: KnowledgeUnitScalarWhereInput | KnowledgeUnitScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutChunksInput = {
    create?: XOR<MaterialCreateWithoutChunksInput, MaterialUncheckedCreateWithoutChunksInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutChunksInput
    connect?: MaterialWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaterialUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<MaterialCreateWithoutChunksInput, MaterialUncheckedCreateWithoutChunksInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutChunksInput
    upsert?: MaterialUpsertWithoutChunksInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutChunksInput, MaterialUpdateWithoutChunksInput>, MaterialUncheckedUpdateWithoutChunksInput>
  }

  export type KnowledgeUnitCreateprerequisiteIdsInput = {
    set: string[]
  }

  export type MaterialCreateNestedOneWithoutKnowledgeUnitsInput = {
    create?: XOR<MaterialCreateWithoutKnowledgeUnitsInput, MaterialUncheckedCreateWithoutKnowledgeUnitsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutKnowledgeUnitsInput
    connect?: MaterialWhereUniqueInput
  }

  export type TaskKnowledgeUnitCreateNestedManyWithoutKnowledgeUnitInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput> | TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput[] | TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput | TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput[]
    createMany?: TaskKnowledgeUnitCreateManyKnowledgeUnitInputEnvelope
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
  }

  export type TaskKnowledgeUnitUncheckedCreateNestedManyWithoutKnowledgeUnitInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput> | TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput[] | TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput | TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput[]
    createMany?: TaskKnowledgeUnitCreateManyKnowledgeUnitInputEnvelope
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
  }

  export type KnowledgeUnitUpdateprerequisiteIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MaterialUpdateOneRequiredWithoutKnowledgeUnitsNestedInput = {
    create?: XOR<MaterialCreateWithoutKnowledgeUnitsInput, MaterialUncheckedCreateWithoutKnowledgeUnitsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutKnowledgeUnitsInput
    upsert?: MaterialUpsertWithoutKnowledgeUnitsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutKnowledgeUnitsInput, MaterialUpdateWithoutKnowledgeUnitsInput>, MaterialUncheckedUpdateWithoutKnowledgeUnitsInput>
  }

  export type TaskKnowledgeUnitUpdateManyWithoutKnowledgeUnitNestedInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput> | TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput[] | TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput | TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput[]
    upsert?: TaskKnowledgeUnitUpsertWithWhereUniqueWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpsertWithWhereUniqueWithoutKnowledgeUnitInput[]
    createMany?: TaskKnowledgeUnitCreateManyKnowledgeUnitInputEnvelope
    set?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    disconnect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    delete?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    update?: TaskKnowledgeUnitUpdateWithWhereUniqueWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpdateWithWhereUniqueWithoutKnowledgeUnitInput[]
    updateMany?: TaskKnowledgeUnitUpdateManyWithWhereWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpdateManyWithWhereWithoutKnowledgeUnitInput[]
    deleteMany?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
  }

  export type TaskKnowledgeUnitUncheckedUpdateManyWithoutKnowledgeUnitNestedInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput> | TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput[] | TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput | TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput[]
    upsert?: TaskKnowledgeUnitUpsertWithWhereUniqueWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpsertWithWhereUniqueWithoutKnowledgeUnitInput[]
    createMany?: TaskKnowledgeUnitCreateManyKnowledgeUnitInputEnvelope
    set?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    disconnect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    delete?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    update?: TaskKnowledgeUnitUpdateWithWhereUniqueWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpdateWithWhereUniqueWithoutKnowledgeUnitInput[]
    updateMany?: TaskKnowledgeUnitUpdateManyWithWhereWithoutKnowledgeUnitInput | TaskKnowledgeUnitUpdateManyWithWhereWithoutKnowledgeUnitInput[]
    deleteMany?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutStudyPlansInput = {
    create?: XOR<ProjectCreateWithoutStudyPlansInput, ProjectUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudyPlansInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput> | TaskCreateWithoutStudyPlanInput[] | TaskUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStudyPlanInput | TaskCreateOrConnectWithoutStudyPlanInput[]
    createMany?: TaskCreateManyStudyPlanInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput> | TaskCreateWithoutStudyPlanInput[] | TaskUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStudyPlanInput | TaskCreateOrConnectWithoutStudyPlanInput[]
    createMany?: TaskCreateManyStudyPlanInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type ProjectUpdateOneRequiredWithoutStudyPlansNestedInput = {
    create?: XOR<ProjectCreateWithoutStudyPlansInput, ProjectUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudyPlansInput
    upsert?: ProjectUpsertWithoutStudyPlansInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutStudyPlansInput, ProjectUpdateWithoutStudyPlansInput>, ProjectUncheckedUpdateWithoutStudyPlansInput>
  }

  export type TaskUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput> | TaskCreateWithoutStudyPlanInput[] | TaskUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStudyPlanInput | TaskCreateOrConnectWithoutStudyPlanInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStudyPlanInput | TaskUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: TaskCreateManyStudyPlanInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStudyPlanInput | TaskUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStudyPlanInput | TaskUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput> | TaskCreateWithoutStudyPlanInput[] | TaskUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStudyPlanInput | TaskCreateOrConnectWithoutStudyPlanInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStudyPlanInput | TaskUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: TaskCreateManyStudyPlanInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStudyPlanInput | TaskUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStudyPlanInput | TaskUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StudyPlanCreateNestedOneWithoutTasksInput = {
    create?: XOR<StudyPlanCreateWithoutTasksInput, StudyPlanUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutTasksInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type TaskKnowledgeUnitCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput> | TaskKnowledgeUnitCreateWithoutTaskInput[] | TaskKnowledgeUnitUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutTaskInput | TaskKnowledgeUnitCreateOrConnectWithoutTaskInput[]
    createMany?: TaskKnowledgeUnitCreateManyTaskInputEnvelope
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
  }

  export type LearningSessionCreateNestedManyWithoutTaskInput = {
    create?: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput> | LearningSessionCreateWithoutTaskInput[] | LearningSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LearningSessionCreateOrConnectWithoutTaskInput | LearningSessionCreateOrConnectWithoutTaskInput[]
    createMany?: LearningSessionCreateManyTaskInputEnvelope
    connect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutTaskInput = {
    create?: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput> | NoteCreateWithoutTaskInput[] | NoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTaskInput | NoteCreateOrConnectWithoutTaskInput[]
    createMany?: NoteCreateManyTaskInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutTaskInput = {
    create?: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput> | QuizCreateWithoutTaskInput[] | QuizUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTaskInput | QuizCreateOrConnectWithoutTaskInput[]
    createMany?: QuizCreateManyTaskInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ReviewRecordCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput> | ReviewRecordCreateWithoutTaskInput[] | ReviewRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewRecordCreateOrConnectWithoutTaskInput | ReviewRecordCreateOrConnectWithoutTaskInput[]
    createMany?: ReviewRecordCreateManyTaskInputEnvelope
    connect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
  }

  export type TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput> | TaskKnowledgeUnitCreateWithoutTaskInput[] | TaskKnowledgeUnitUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutTaskInput | TaskKnowledgeUnitCreateOrConnectWithoutTaskInput[]
    createMany?: TaskKnowledgeUnitCreateManyTaskInputEnvelope
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
  }

  export type LearningSessionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput> | LearningSessionCreateWithoutTaskInput[] | LearningSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LearningSessionCreateOrConnectWithoutTaskInput | LearningSessionCreateOrConnectWithoutTaskInput[]
    createMany?: LearningSessionCreateManyTaskInputEnvelope
    connect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput> | NoteCreateWithoutTaskInput[] | NoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTaskInput | NoteCreateOrConnectWithoutTaskInput[]
    createMany?: NoteCreateManyTaskInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput> | QuizCreateWithoutTaskInput[] | QuizUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTaskInput | QuizCreateOrConnectWithoutTaskInput[]
    createMany?: QuizCreateManyTaskInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ReviewRecordUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput> | ReviewRecordCreateWithoutTaskInput[] | ReviewRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewRecordCreateOrConnectWithoutTaskInput | ReviewRecordCreateOrConnectWithoutTaskInput[]
    createMany?: ReviewRecordCreateManyTaskInputEnvelope
    connect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudyPlanUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<StudyPlanCreateWithoutTasksInput, StudyPlanUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutTasksInput
    upsert?: StudyPlanUpsertWithoutTasksInput
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutTasksInput, StudyPlanUpdateWithoutTasksInput>, StudyPlanUncheckedUpdateWithoutTasksInput>
  }

  export type TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput> | TaskKnowledgeUnitCreateWithoutTaskInput[] | TaskKnowledgeUnitUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutTaskInput | TaskKnowledgeUnitCreateOrConnectWithoutTaskInput[]
    upsert?: TaskKnowledgeUnitUpsertWithWhereUniqueWithoutTaskInput | TaskKnowledgeUnitUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskKnowledgeUnitCreateManyTaskInputEnvelope
    set?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    disconnect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    delete?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    update?: TaskKnowledgeUnitUpdateWithWhereUniqueWithoutTaskInput | TaskKnowledgeUnitUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskKnowledgeUnitUpdateManyWithWhereWithoutTaskInput | TaskKnowledgeUnitUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
  }

  export type LearningSessionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput> | LearningSessionCreateWithoutTaskInput[] | LearningSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LearningSessionCreateOrConnectWithoutTaskInput | LearningSessionCreateOrConnectWithoutTaskInput[]
    upsert?: LearningSessionUpsertWithWhereUniqueWithoutTaskInput | LearningSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: LearningSessionCreateManyTaskInputEnvelope
    set?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    disconnect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    delete?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    connect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    update?: LearningSessionUpdateWithWhereUniqueWithoutTaskInput | LearningSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: LearningSessionUpdateManyWithWhereWithoutTaskInput | LearningSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: LearningSessionScalarWhereInput | LearningSessionScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput> | NoteCreateWithoutTaskInput[] | NoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTaskInput | NoteCreateOrConnectWithoutTaskInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutTaskInput | NoteUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NoteCreateManyTaskInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutTaskInput | NoteUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutTaskInput | NoteUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutTaskNestedInput = {
    create?: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput> | QuizCreateWithoutTaskInput[] | QuizUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTaskInput | QuizCreateOrConnectWithoutTaskInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTaskInput | QuizUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: QuizCreateManyTaskInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTaskInput | QuizUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTaskInput | QuizUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ReviewRecordUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput> | ReviewRecordCreateWithoutTaskInput[] | ReviewRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewRecordCreateOrConnectWithoutTaskInput | ReviewRecordCreateOrConnectWithoutTaskInput[]
    upsert?: ReviewRecordUpsertWithWhereUniqueWithoutTaskInput | ReviewRecordUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReviewRecordCreateManyTaskInputEnvelope
    set?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    disconnect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    delete?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    connect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    update?: ReviewRecordUpdateWithWhereUniqueWithoutTaskInput | ReviewRecordUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReviewRecordUpdateManyWithWhereWithoutTaskInput | ReviewRecordUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReviewRecordScalarWhereInput | ReviewRecordScalarWhereInput[]
  }

  export type TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput> | TaskKnowledgeUnitCreateWithoutTaskInput[] | TaskKnowledgeUnitUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskKnowledgeUnitCreateOrConnectWithoutTaskInput | TaskKnowledgeUnitCreateOrConnectWithoutTaskInput[]
    upsert?: TaskKnowledgeUnitUpsertWithWhereUniqueWithoutTaskInput | TaskKnowledgeUnitUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskKnowledgeUnitCreateManyTaskInputEnvelope
    set?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    disconnect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    delete?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    connect?: TaskKnowledgeUnitWhereUniqueInput | TaskKnowledgeUnitWhereUniqueInput[]
    update?: TaskKnowledgeUnitUpdateWithWhereUniqueWithoutTaskInput | TaskKnowledgeUnitUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskKnowledgeUnitUpdateManyWithWhereWithoutTaskInput | TaskKnowledgeUnitUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
  }

  export type LearningSessionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput> | LearningSessionCreateWithoutTaskInput[] | LearningSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LearningSessionCreateOrConnectWithoutTaskInput | LearningSessionCreateOrConnectWithoutTaskInput[]
    upsert?: LearningSessionUpsertWithWhereUniqueWithoutTaskInput | LearningSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: LearningSessionCreateManyTaskInputEnvelope
    set?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    disconnect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    delete?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    connect?: LearningSessionWhereUniqueInput | LearningSessionWhereUniqueInput[]
    update?: LearningSessionUpdateWithWhereUniqueWithoutTaskInput | LearningSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: LearningSessionUpdateManyWithWhereWithoutTaskInput | LearningSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: LearningSessionScalarWhereInput | LearningSessionScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput> | NoteCreateWithoutTaskInput[] | NoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTaskInput | NoteCreateOrConnectWithoutTaskInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutTaskInput | NoteUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NoteCreateManyTaskInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutTaskInput | NoteUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutTaskInput | NoteUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput> | QuizCreateWithoutTaskInput[] | QuizUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTaskInput | QuizCreateOrConnectWithoutTaskInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTaskInput | QuizUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: QuizCreateManyTaskInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTaskInput | QuizUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTaskInput | QuizUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput> | ReviewRecordCreateWithoutTaskInput[] | ReviewRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewRecordCreateOrConnectWithoutTaskInput | ReviewRecordCreateOrConnectWithoutTaskInput[]
    upsert?: ReviewRecordUpsertWithWhereUniqueWithoutTaskInput | ReviewRecordUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReviewRecordCreateManyTaskInputEnvelope
    set?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    disconnect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    delete?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    connect?: ReviewRecordWhereUniqueInput | ReviewRecordWhereUniqueInput[]
    update?: ReviewRecordUpdateWithWhereUniqueWithoutTaskInput | ReviewRecordUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReviewRecordUpdateManyWithWhereWithoutTaskInput | ReviewRecordUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReviewRecordScalarWhereInput | ReviewRecordScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutKnowledgeLinksInput = {
    create?: XOR<TaskCreateWithoutKnowledgeLinksInput, TaskUncheckedCreateWithoutKnowledgeLinksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutKnowledgeLinksInput
    connect?: TaskWhereUniqueInput
  }

  export type KnowledgeUnitCreateNestedOneWithoutTaskLinksInput = {
    create?: XOR<KnowledgeUnitCreateWithoutTaskLinksInput, KnowledgeUnitUncheckedCreateWithoutTaskLinksInput>
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutTaskLinksInput
    connect?: KnowledgeUnitWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutKnowledgeLinksNestedInput = {
    create?: XOR<TaskCreateWithoutKnowledgeLinksInput, TaskUncheckedCreateWithoutKnowledgeLinksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutKnowledgeLinksInput
    upsert?: TaskUpsertWithoutKnowledgeLinksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutKnowledgeLinksInput, TaskUpdateWithoutKnowledgeLinksInput>, TaskUncheckedUpdateWithoutKnowledgeLinksInput>
  }

  export type KnowledgeUnitUpdateOneRequiredWithoutTaskLinksNestedInput = {
    create?: XOR<KnowledgeUnitCreateWithoutTaskLinksInput, KnowledgeUnitUncheckedCreateWithoutTaskLinksInput>
    connectOrCreate?: KnowledgeUnitCreateOrConnectWithoutTaskLinksInput
    upsert?: KnowledgeUnitUpsertWithoutTaskLinksInput
    connect?: KnowledgeUnitWhereUniqueInput
    update?: XOR<XOR<KnowledgeUnitUpdateToOneWithWhereWithoutTaskLinksInput, KnowledgeUnitUpdateWithoutTaskLinksInput>, KnowledgeUnitUncheckedUpdateWithoutTaskLinksInput>
  }

  export type TaskCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSessionsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type TaskUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSessionsInput
    upsert?: TaskUpsertWithoutSessionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSessionsInput, TaskUpdateWithoutSessionsInput>, TaskUncheckedUpdateWithoutSessionsInput>
  }

  export type TaskCreateNestedOneWithoutNotesInput = {
    create?: XOR<TaskCreateWithoutNotesInput, TaskUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNotesInput
    connect?: TaskWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TaskCreateWithoutNotesInput, TaskUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNotesInput
    upsert?: TaskUpsertWithoutNotesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutNotesInput, TaskUpdateWithoutNotesInput>, TaskUncheckedUpdateWithoutNotesInput>
  }

  export type TaskCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<TaskCreateWithoutQuizzesInput, TaskUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutQuizzesInput
    connect?: TaskWhereUniqueInput
  }

  export type QuizAnswerCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput> | QuizAnswerCreateWithoutQuizInput[] | QuizAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAnswerCreateOrConnectWithoutQuizInput | QuizAnswerCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAnswerCreateManyQuizInputEnvelope
    connect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
  }

  export type QuizAnswerUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput> | QuizAnswerCreateWithoutQuizInput[] | QuizAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAnswerCreateOrConnectWithoutQuizInput | QuizAnswerCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAnswerCreateManyQuizInputEnvelope
    connect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
  }

  export type EnumQuizStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuizStatus
  }

  export type TaskUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<TaskCreateWithoutQuizzesInput, TaskUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutQuizzesInput
    upsert?: TaskUpsertWithoutQuizzesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutQuizzesInput, TaskUpdateWithoutQuizzesInput>, TaskUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizAnswerUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput> | QuizAnswerCreateWithoutQuizInput[] | QuizAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAnswerCreateOrConnectWithoutQuizInput | QuizAnswerCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAnswerUpsertWithWhereUniqueWithoutQuizInput | QuizAnswerUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAnswerCreateManyQuizInputEnvelope
    set?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    disconnect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    delete?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    connect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    update?: QuizAnswerUpdateWithWhereUniqueWithoutQuizInput | QuizAnswerUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAnswerUpdateManyWithWhereWithoutQuizInput | QuizAnswerUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAnswerScalarWhereInput | QuizAnswerScalarWhereInput[]
  }

  export type QuizAnswerUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput> | QuizAnswerCreateWithoutQuizInput[] | QuizAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAnswerCreateOrConnectWithoutQuizInput | QuizAnswerCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAnswerUpsertWithWhereUniqueWithoutQuizInput | QuizAnswerUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAnswerCreateManyQuizInputEnvelope
    set?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    disconnect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    delete?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    connect?: QuizAnswerWhereUniqueInput | QuizAnswerWhereUniqueInput[]
    update?: QuizAnswerUpdateWithWhereUniqueWithoutQuizInput | QuizAnswerUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAnswerUpdateManyWithWhereWithoutQuizInput | QuizAnswerUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAnswerScalarWhereInput | QuizAnswerScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuizCreateWithoutAnswersInput, QuizUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswersInput
    connect?: QuizWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type QuizUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuizCreateWithoutAnswersInput, QuizUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswersInput
    upsert?: QuizUpsertWithoutAnswersInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutAnswersInput, QuizUpdateWithoutAnswersInput>, QuizUncheckedUpdateWithoutAnswersInput>
  }

  export type TaskCreateNestedOneWithoutReviewRecordsInput = {
    create?: XOR<TaskCreateWithoutReviewRecordsInput, TaskUncheckedCreateWithoutReviewRecordsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutReviewRecordsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumReviewResultFieldUpdateOperationsInput = {
    set?: $Enums.ReviewResult
  }

  export type TaskUpdateOneRequiredWithoutReviewRecordsNestedInput = {
    create?: XOR<TaskCreateWithoutReviewRecordsInput, TaskUncheckedCreateWithoutReviewRecordsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutReviewRecordsInput
    upsert?: TaskUpsertWithoutReviewRecordsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutReviewRecordsInput, TaskUpdateWithoutReviewRecordsInput>, TaskUncheckedUpdateWithoutReviewRecordsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMaterialTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeFilter<$PrismaModel> | $Enums.MaterialType
  }

  export type NestedEnumMaterialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialStatusFilter<$PrismaModel> | $Enums.MaterialStatus
  }

  export type NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaterialType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialTypeFilter<$PrismaModel>
    _max?: NestedEnumMaterialTypeFilter<$PrismaModel>
  }

  export type NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialStatus[] | ListEnumMaterialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaterialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialStatusFilter<$PrismaModel>
    _max?: NestedEnumMaterialStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumReviewResultFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewResult | EnumReviewResultFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewResultFilter<$PrismaModel> | $Enums.ReviewResult
  }

  export type NestedEnumReviewResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewResult | EnumReviewResultFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewResult[] | ListEnumReviewResultFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewResultWithAggregatesFilter<$PrismaModel> | $Enums.ReviewResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewResultFilter<$PrismaModel>
    _max?: NestedEnumReviewResultFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialCreateNestedManyWithoutProjectInput
    studyPlans?: StudyPlanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    goal?: StringNullableFilter<"Project"> | string | null
    examDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    dailyTimeBudget?: IntNullableFilter<"Project"> | number | null
    mode?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type MaterialCreateWithoutProjectInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: MaterialChunkCreateNestedManyWithoutMaterialInput
    knowledgeUnits?: KnowledgeUnitCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: MaterialChunkUncheckedCreateNestedManyWithoutMaterialInput
    knowledgeUnits?: KnowledgeUnitUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput>
  }

  export type MaterialCreateManyProjectInputEnvelope = {
    data: MaterialCreateManyProjectInput | MaterialCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanCreateWithoutProjectInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutProjectInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput>
  }

  export type StudyPlanCreateManyProjectInputEnvelope = {
    data: StudyPlanCreateManyProjectInput | StudyPlanCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUpsertWithWhereUniqueWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutProjectInput, MaterialUncheckedUpdateWithoutProjectInput>
    create: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutProjectInput, MaterialUncheckedUpdateWithoutProjectInput>
  }

  export type MaterialUpdateManyWithWhereWithoutProjectInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutProjectInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: StringFilter<"Material"> | string
    projectId?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    type?: EnumMaterialTypeFilter<"Material"> | $Enums.MaterialType
    sourcePath?: StringNullableFilter<"Material"> | string | null
    rawText?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    parseError?: StringNullableFilter<"Material"> | string | null
    metadata?: JsonNullableFilter<"Material">
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type StudyPlanUpsertWithWhereUniqueWithoutProjectInput = {
    where: StudyPlanWhereUniqueInput
    update: XOR<StudyPlanUpdateWithoutProjectInput, StudyPlanUncheckedUpdateWithoutProjectInput>
    create: XOR<StudyPlanCreateWithoutProjectInput, StudyPlanUncheckedCreateWithoutProjectInput>
  }

  export type StudyPlanUpdateWithWhereUniqueWithoutProjectInput = {
    where: StudyPlanWhereUniqueInput
    data: XOR<StudyPlanUpdateWithoutProjectInput, StudyPlanUncheckedUpdateWithoutProjectInput>
  }

  export type StudyPlanUpdateManyWithWhereWithoutProjectInput = {
    where: StudyPlanScalarWhereInput
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyWithoutProjectInput>
  }

  export type StudyPlanScalarWhereInput = {
    AND?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    OR?: StudyPlanScalarWhereInput[]
    NOT?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    projectId?: StringFilter<"StudyPlan"> | string
    title?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    totalDays?: IntFilter<"StudyPlan"> | number
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    config?: JsonNullableFilter<"StudyPlan">
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
  }

  export type ProjectCreateWithoutMaterialsInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    studyPlans?: StudyPlanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMaterialsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMaterialsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
  }

  export type MaterialChunkCreateWithoutMaterialInput = {
    id?: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaterialChunkUncheckedCreateWithoutMaterialInput = {
    id?: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaterialChunkCreateOrConnectWithoutMaterialInput = {
    where: MaterialChunkWhereUniqueInput
    create: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialChunkCreateManyMaterialInputEnvelope = {
    data: MaterialChunkCreateManyMaterialInput | MaterialChunkCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type KnowledgeUnitCreateWithoutMaterialInput = {
    id?: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    taskLinks?: TaskKnowledgeUnitCreateNestedManyWithoutKnowledgeUnitInput
  }

  export type KnowledgeUnitUncheckedCreateWithoutMaterialInput = {
    id?: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    taskLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutKnowledgeUnitInput
  }

  export type KnowledgeUnitCreateOrConnectWithoutMaterialInput = {
    where: KnowledgeUnitWhereUniqueInput
    create: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput>
  }

  export type KnowledgeUnitCreateManyMaterialInputEnvelope = {
    data: KnowledgeUnitCreateManyMaterialInput | KnowledgeUnitCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutMaterialsInput = {
    update: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProjectUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type MaterialChunkUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MaterialChunkWhereUniqueInput
    update: XOR<MaterialChunkUpdateWithoutMaterialInput, MaterialChunkUncheckedUpdateWithoutMaterialInput>
    create: XOR<MaterialChunkCreateWithoutMaterialInput, MaterialChunkUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialChunkUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MaterialChunkWhereUniqueInput
    data: XOR<MaterialChunkUpdateWithoutMaterialInput, MaterialChunkUncheckedUpdateWithoutMaterialInput>
  }

  export type MaterialChunkUpdateManyWithWhereWithoutMaterialInput = {
    where: MaterialChunkScalarWhereInput
    data: XOR<MaterialChunkUpdateManyMutationInput, MaterialChunkUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialChunkScalarWhereInput = {
    AND?: MaterialChunkScalarWhereInput | MaterialChunkScalarWhereInput[]
    OR?: MaterialChunkScalarWhereInput[]
    NOT?: MaterialChunkScalarWhereInput | MaterialChunkScalarWhereInput[]
    id?: StringFilter<"MaterialChunk"> | string
    materialId?: StringFilter<"MaterialChunk"> | string
    chunkIndex?: IntFilter<"MaterialChunk"> | number
    title?: StringNullableFilter<"MaterialChunk"> | string | null
    content?: StringFilter<"MaterialChunk"> | string
    summary?: StringNullableFilter<"MaterialChunk"> | string | null
    sourcePage?: IntNullableFilter<"MaterialChunk"> | number | null
    sourceSection?: StringNullableFilter<"MaterialChunk"> | string | null
    metadata?: JsonNullableFilter<"MaterialChunk">
    createdAt?: DateTimeFilter<"MaterialChunk"> | Date | string
  }

  export type KnowledgeUnitUpsertWithWhereUniqueWithoutMaterialInput = {
    where: KnowledgeUnitWhereUniqueInput
    update: XOR<KnowledgeUnitUpdateWithoutMaterialInput, KnowledgeUnitUncheckedUpdateWithoutMaterialInput>
    create: XOR<KnowledgeUnitCreateWithoutMaterialInput, KnowledgeUnitUncheckedCreateWithoutMaterialInput>
  }

  export type KnowledgeUnitUpdateWithWhereUniqueWithoutMaterialInput = {
    where: KnowledgeUnitWhereUniqueInput
    data: XOR<KnowledgeUnitUpdateWithoutMaterialInput, KnowledgeUnitUncheckedUpdateWithoutMaterialInput>
  }

  export type KnowledgeUnitUpdateManyWithWhereWithoutMaterialInput = {
    where: KnowledgeUnitScalarWhereInput
    data: XOR<KnowledgeUnitUpdateManyMutationInput, KnowledgeUnitUncheckedUpdateManyWithoutMaterialInput>
  }

  export type KnowledgeUnitScalarWhereInput = {
    AND?: KnowledgeUnitScalarWhereInput | KnowledgeUnitScalarWhereInput[]
    OR?: KnowledgeUnitScalarWhereInput[]
    NOT?: KnowledgeUnitScalarWhereInput | KnowledgeUnitScalarWhereInput[]
    id?: StringFilter<"KnowledgeUnit"> | string
    materialId?: StringFilter<"KnowledgeUnit"> | string
    title?: StringFilter<"KnowledgeUnit"> | string
    summary?: StringNullableFilter<"KnowledgeUnit"> | string | null
    topic?: StringNullableFilter<"KnowledgeUnit"> | string | null
    difficulty?: IntNullableFilter<"KnowledgeUnit"> | number | null
    importance?: IntNullableFilter<"KnowledgeUnit"> | number | null
    estimatedMinutes?: IntNullableFilter<"KnowledgeUnit"> | number | null
    prerequisiteIds?: StringNullableListFilter<"KnowledgeUnit">
    sourceRefs?: JsonNullableFilter<"KnowledgeUnit">
    createdAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeUnit"> | Date | string
  }

  export type MaterialCreateWithoutChunksInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMaterialsInput
    knowledgeUnits?: KnowledgeUnitCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutChunksInput = {
    id?: string
    projectId: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    knowledgeUnits?: KnowledgeUnitUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutChunksInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutChunksInput, MaterialUncheckedCreateWithoutChunksInput>
  }

  export type MaterialUpsertWithoutChunksInput = {
    update: XOR<MaterialUpdateWithoutChunksInput, MaterialUncheckedUpdateWithoutChunksInput>
    create: XOR<MaterialCreateWithoutChunksInput, MaterialUncheckedCreateWithoutChunksInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutChunksInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutChunksInput, MaterialUncheckedUpdateWithoutChunksInput>
  }

  export type MaterialUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMaterialsNestedInput
    knowledgeUnits?: KnowledgeUnitUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    knowledgeUnits?: KnowledgeUnitUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateWithoutKnowledgeUnitsInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMaterialsInput
    chunks?: MaterialChunkCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutKnowledgeUnitsInput = {
    id?: string
    projectId: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: MaterialChunkUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutKnowledgeUnitsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutKnowledgeUnitsInput, MaterialUncheckedCreateWithoutKnowledgeUnitsInput>
  }

  export type TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput = {
    id?: string
    task: TaskCreateNestedOneWithoutKnowledgeLinksInput
  }

  export type TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput = {
    id?: string
    taskId: string
  }

  export type TaskKnowledgeUnitCreateOrConnectWithoutKnowledgeUnitInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    create: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput>
  }

  export type TaskKnowledgeUnitCreateManyKnowledgeUnitInputEnvelope = {
    data: TaskKnowledgeUnitCreateManyKnowledgeUnitInput | TaskKnowledgeUnitCreateManyKnowledgeUnitInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutKnowledgeUnitsInput = {
    update: XOR<MaterialUpdateWithoutKnowledgeUnitsInput, MaterialUncheckedUpdateWithoutKnowledgeUnitsInput>
    create: XOR<MaterialCreateWithoutKnowledgeUnitsInput, MaterialUncheckedCreateWithoutKnowledgeUnitsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutKnowledgeUnitsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutKnowledgeUnitsInput, MaterialUncheckedUpdateWithoutKnowledgeUnitsInput>
  }

  export type MaterialUpdateWithoutKnowledgeUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMaterialsNestedInput
    chunks?: MaterialChunkUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutKnowledgeUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: MaterialChunkUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type TaskKnowledgeUnitUpsertWithWhereUniqueWithoutKnowledgeUnitInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    update: XOR<TaskKnowledgeUnitUpdateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedUpdateWithoutKnowledgeUnitInput>
    create: XOR<TaskKnowledgeUnitCreateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedCreateWithoutKnowledgeUnitInput>
  }

  export type TaskKnowledgeUnitUpdateWithWhereUniqueWithoutKnowledgeUnitInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    data: XOR<TaskKnowledgeUnitUpdateWithoutKnowledgeUnitInput, TaskKnowledgeUnitUncheckedUpdateWithoutKnowledgeUnitInput>
  }

  export type TaskKnowledgeUnitUpdateManyWithWhereWithoutKnowledgeUnitInput = {
    where: TaskKnowledgeUnitScalarWhereInput
    data: XOR<TaskKnowledgeUnitUpdateManyMutationInput, TaskKnowledgeUnitUncheckedUpdateManyWithoutKnowledgeUnitInput>
  }

  export type TaskKnowledgeUnitScalarWhereInput = {
    AND?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
    OR?: TaskKnowledgeUnitScalarWhereInput[]
    NOT?: TaskKnowledgeUnitScalarWhereInput | TaskKnowledgeUnitScalarWhereInput[]
    id?: StringFilter<"TaskKnowledgeUnit"> | string
    taskId?: StringFilter<"TaskKnowledgeUnit"> | string
    knowledgeUnitId?: StringFilter<"TaskKnowledgeUnit"> | string
  }

  export type ProjectCreateWithoutStudyPlansInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStudyPlansInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStudyPlansInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudyPlansInput, ProjectUncheckedCreateWithoutStudyPlansInput>
  }

  export type TaskCreateWithoutStudyPlanInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStudyPlanInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStudyPlanInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput>
  }

  export type TaskCreateManyStudyPlanInputEnvelope = {
    data: TaskCreateManyStudyPlanInput | TaskCreateManyStudyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutStudyPlansInput = {
    update: XOR<ProjectUpdateWithoutStudyPlansInput, ProjectUncheckedUpdateWithoutStudyPlansInput>
    create: XOR<ProjectCreateWithoutStudyPlansInput, ProjectUncheckedCreateWithoutStudyPlansInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutStudyPlansInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutStudyPlansInput, ProjectUncheckedUpdateWithoutStudyPlansInput>
  }

  export type ProjectUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutStudyPlanInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutStudyPlanInput, TaskUncheckedUpdateWithoutStudyPlanInput>
    create: XOR<TaskCreateWithoutStudyPlanInput, TaskUncheckedCreateWithoutStudyPlanInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutStudyPlanInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutStudyPlanInput, TaskUncheckedUpdateWithoutStudyPlanInput>
  }

  export type TaskUpdateManyWithWhereWithoutStudyPlanInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutStudyPlanInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    studyPlanId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    taskType?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    scheduledDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    difficulty?: IntNullableFilter<"Task"> | number | null
    priority?: IntNullableFilter<"Task"> | number | null
    masteryScore?: FloatNullableFilter<"Task"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type StudyPlanCreateWithoutTasksInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutStudyPlansInput
  }

  export type StudyPlanUncheckedCreateWithoutTasksInput = {
    id?: string
    projectId: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyPlanCreateOrConnectWithoutTasksInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutTasksInput, StudyPlanUncheckedCreateWithoutTasksInput>
  }

  export type TaskKnowledgeUnitCreateWithoutTaskInput = {
    id?: string
    knowledgeUnit: KnowledgeUnitCreateNestedOneWithoutTaskLinksInput
  }

  export type TaskKnowledgeUnitUncheckedCreateWithoutTaskInput = {
    id?: string
    knowledgeUnitId: string
  }

  export type TaskKnowledgeUnitCreateOrConnectWithoutTaskInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    create: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput>
  }

  export type TaskKnowledgeUnitCreateManyTaskInputEnvelope = {
    data: TaskKnowledgeUnitCreateManyTaskInput | TaskKnowledgeUnitCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type LearningSessionCreateWithoutTaskInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type LearningSessionUncheckedCreateWithoutTaskInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type LearningSessionCreateOrConnectWithoutTaskInput = {
    where: LearningSessionWhereUniqueInput
    create: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput>
  }

  export type LearningSessionCreateManyTaskInputEnvelope = {
    data: LearningSessionCreateManyTaskInput | LearningSessionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutTaskInput = {
    id?: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutTaskInput = {
    id?: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutTaskInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput>
  }

  export type NoteCreateManyTaskInputEnvelope = {
    data: NoteCreateManyTaskInput | NoteCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutTaskInput = {
    id?: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    answers?: QuizAnswerCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutTaskInput = {
    id?: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    answers?: QuizAnswerUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutTaskInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput>
  }

  export type QuizCreateManyTaskInputEnvelope = {
    data: QuizCreateManyTaskInput | QuizCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ReviewRecordCreateWithoutTaskInput = {
    id?: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReviewRecordUncheckedCreateWithoutTaskInput = {
    id?: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReviewRecordCreateOrConnectWithoutTaskInput = {
    where: ReviewRecordWhereUniqueInput
    create: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput>
  }

  export type ReviewRecordCreateManyTaskInputEnvelope = {
    data: ReviewRecordCreateManyTaskInput | ReviewRecordCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanUpsertWithoutTasksInput = {
    update: XOR<StudyPlanUpdateWithoutTasksInput, StudyPlanUncheckedUpdateWithoutTasksInput>
    create: XOR<StudyPlanCreateWithoutTasksInput, StudyPlanUncheckedCreateWithoutTasksInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutTasksInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutTasksInput, StudyPlanUncheckedUpdateWithoutTasksInput>
  }

  export type StudyPlanUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutStudyPlansNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskKnowledgeUnitUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    update: XOR<TaskKnowledgeUnitUpdateWithoutTaskInput, TaskKnowledgeUnitUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskKnowledgeUnitCreateWithoutTaskInput, TaskKnowledgeUnitUncheckedCreateWithoutTaskInput>
  }

  export type TaskKnowledgeUnitUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskKnowledgeUnitWhereUniqueInput
    data: XOR<TaskKnowledgeUnitUpdateWithoutTaskInput, TaskKnowledgeUnitUncheckedUpdateWithoutTaskInput>
  }

  export type TaskKnowledgeUnitUpdateManyWithWhereWithoutTaskInput = {
    where: TaskKnowledgeUnitScalarWhereInput
    data: XOR<TaskKnowledgeUnitUpdateManyMutationInput, TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskInput>
  }

  export type LearningSessionUpsertWithWhereUniqueWithoutTaskInput = {
    where: LearningSessionWhereUniqueInput
    update: XOR<LearningSessionUpdateWithoutTaskInput, LearningSessionUncheckedUpdateWithoutTaskInput>
    create: XOR<LearningSessionCreateWithoutTaskInput, LearningSessionUncheckedCreateWithoutTaskInput>
  }

  export type LearningSessionUpdateWithWhereUniqueWithoutTaskInput = {
    where: LearningSessionWhereUniqueInput
    data: XOR<LearningSessionUpdateWithoutTaskInput, LearningSessionUncheckedUpdateWithoutTaskInput>
  }

  export type LearningSessionUpdateManyWithWhereWithoutTaskInput = {
    where: LearningSessionScalarWhereInput
    data: XOR<LearningSessionUpdateManyMutationInput, LearningSessionUncheckedUpdateManyWithoutTaskInput>
  }

  export type LearningSessionScalarWhereInput = {
    AND?: LearningSessionScalarWhereInput | LearningSessionScalarWhereInput[]
    OR?: LearningSessionScalarWhereInput[]
    NOT?: LearningSessionScalarWhereInput | LearningSessionScalarWhereInput[]
    id?: StringFilter<"LearningSession"> | string
    taskId?: StringFilter<"LearningSession"> | string
    startedAt?: DateTimeFilter<"LearningSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"LearningSession"> | number | null
    questionCount?: IntFilter<"LearningSession"> | number
    status?: EnumSessionStatusFilter<"LearningSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"LearningSession"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutTaskInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutTaskInput, NoteUncheckedUpdateWithoutTaskInput>
    create: XOR<NoteCreateWithoutTaskInput, NoteUncheckedCreateWithoutTaskInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutTaskInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutTaskInput, NoteUncheckedUpdateWithoutTaskInput>
  }

  export type NoteUpdateManyWithWhereWithoutTaskInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutTaskInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    taskId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isImportant?: BoolFilter<"Note"> | boolean
    isConfusing?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutTaskInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutTaskInput, QuizUncheckedUpdateWithoutTaskInput>
    create: XOR<QuizCreateWithoutTaskInput, QuizUncheckedCreateWithoutTaskInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutTaskInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutTaskInput, QuizUncheckedUpdateWithoutTaskInput>
  }

  export type QuizUpdateManyWithWhereWithoutTaskInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutTaskInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    taskId?: StringFilter<"Quiz"> | string
    title?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    score?: FloatNullableFilter<"Quiz"> | number | null
    feedback?: JsonNullableFilter<"Quiz">
    generatedAt?: DateTimeFilter<"Quiz"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Quiz"> | Date | string | null
  }

  export type ReviewRecordUpsertWithWhereUniqueWithoutTaskInput = {
    where: ReviewRecordWhereUniqueInput
    update: XOR<ReviewRecordUpdateWithoutTaskInput, ReviewRecordUncheckedUpdateWithoutTaskInput>
    create: XOR<ReviewRecordCreateWithoutTaskInput, ReviewRecordUncheckedCreateWithoutTaskInput>
  }

  export type ReviewRecordUpdateWithWhereUniqueWithoutTaskInput = {
    where: ReviewRecordWhereUniqueInput
    data: XOR<ReviewRecordUpdateWithoutTaskInput, ReviewRecordUncheckedUpdateWithoutTaskInput>
  }

  export type ReviewRecordUpdateManyWithWhereWithoutTaskInput = {
    where: ReviewRecordScalarWhereInput
    data: XOR<ReviewRecordUpdateManyMutationInput, ReviewRecordUncheckedUpdateManyWithoutTaskInput>
  }

  export type ReviewRecordScalarWhereInput = {
    AND?: ReviewRecordScalarWhereInput | ReviewRecordScalarWhereInput[]
    OR?: ReviewRecordScalarWhereInput[]
    NOT?: ReviewRecordScalarWhereInput | ReviewRecordScalarWhereInput[]
    id?: StringFilter<"ReviewRecord"> | string
    taskId?: StringFilter<"ReviewRecord"> | string
    reviewDate?: DateTimeFilter<"ReviewRecord"> | Date | string
    result?: EnumReviewResultFilter<"ReviewRecord"> | $Enums.ReviewResult
    score?: FloatNullableFilter<"ReviewRecord"> | number | null
    intervalDays?: IntNullableFilter<"ReviewRecord"> | number | null
    nextReviewDate?: DateTimeNullableFilter<"ReviewRecord"> | Date | string | null
    notes?: StringNullableFilter<"ReviewRecord"> | string | null
    createdAt?: DateTimeFilter<"ReviewRecord"> | Date | string
  }

  export type TaskCreateWithoutKnowledgeLinksInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutKnowledgeLinksInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutKnowledgeLinksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutKnowledgeLinksInput, TaskUncheckedCreateWithoutKnowledgeLinksInput>
  }

  export type KnowledgeUnitCreateWithoutTaskLinksInput = {
    id?: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    material: MaterialCreateNestedOneWithoutKnowledgeUnitsInput
  }

  export type KnowledgeUnitUncheckedCreateWithoutTaskLinksInput = {
    id?: string
    materialId: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeUnitCreateOrConnectWithoutTaskLinksInput = {
    where: KnowledgeUnitWhereUniqueInput
    create: XOR<KnowledgeUnitCreateWithoutTaskLinksInput, KnowledgeUnitUncheckedCreateWithoutTaskLinksInput>
  }

  export type TaskUpsertWithoutKnowledgeLinksInput = {
    update: XOR<TaskUpdateWithoutKnowledgeLinksInput, TaskUncheckedUpdateWithoutKnowledgeLinksInput>
    create: XOR<TaskCreateWithoutKnowledgeLinksInput, TaskUncheckedCreateWithoutKnowledgeLinksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutKnowledgeLinksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutKnowledgeLinksInput, TaskUncheckedUpdateWithoutKnowledgeLinksInput>
  }

  export type TaskUpdateWithoutKnowledgeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutKnowledgeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type KnowledgeUnitUpsertWithoutTaskLinksInput = {
    update: XOR<KnowledgeUnitUpdateWithoutTaskLinksInput, KnowledgeUnitUncheckedUpdateWithoutTaskLinksInput>
    create: XOR<KnowledgeUnitCreateWithoutTaskLinksInput, KnowledgeUnitUncheckedCreateWithoutTaskLinksInput>
    where?: KnowledgeUnitWhereInput
  }

  export type KnowledgeUnitUpdateToOneWithWhereWithoutTaskLinksInput = {
    where?: KnowledgeUnitWhereInput
    data: XOR<KnowledgeUnitUpdateWithoutTaskLinksInput, KnowledgeUnitUncheckedUpdateWithoutTaskLinksInput>
  }

  export type KnowledgeUnitUpdateWithoutTaskLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutKnowledgeUnitsNestedInput
  }

  export type KnowledgeUnitUncheckedUpdateWithoutTaskLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSessionsInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSessionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
  }

  export type TaskUpsertWithoutSessionsInput = {
    update: XOR<TaskUpdateWithoutSessionsInput, TaskUncheckedUpdateWithoutSessionsInput>
    create: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSessionsInput, TaskUncheckedUpdateWithoutSessionsInput>
  }

  export type TaskUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutNotesInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutNotesInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutNotesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutNotesInput, TaskUncheckedCreateWithoutNotesInput>
  }

  export type TaskUpsertWithoutNotesInput = {
    update: XOR<TaskUpdateWithoutNotesInput, TaskUncheckedUpdateWithoutNotesInput>
    create: XOR<TaskCreateWithoutNotesInput, TaskUncheckedCreateWithoutNotesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutNotesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutNotesInput, TaskUncheckedUpdateWithoutNotesInput>
  }

  export type TaskUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutQuizzesInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    reviewRecords?: ReviewRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutQuizzesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutQuizzesInput, TaskUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizAnswerCreateWithoutQuizInput = {
    id?: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
  }

  export type QuizAnswerUncheckedCreateWithoutQuizInput = {
    id?: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
  }

  export type QuizAnswerCreateOrConnectWithoutQuizInput = {
    where: QuizAnswerWhereUniqueInput
    create: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput>
  }

  export type QuizAnswerCreateManyQuizInputEnvelope = {
    data: QuizAnswerCreateManyQuizInput | QuizAnswerCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutQuizzesInput = {
    update: XOR<TaskUpdateWithoutQuizzesInput, TaskUncheckedUpdateWithoutQuizzesInput>
    create: XOR<TaskCreateWithoutQuizzesInput, TaskUncheckedCreateWithoutQuizzesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutQuizzesInput, TaskUncheckedUpdateWithoutQuizzesInput>
  }

  export type TaskUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type QuizAnswerUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizAnswerWhereUniqueInput
    update: XOR<QuizAnswerUpdateWithoutQuizInput, QuizAnswerUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizAnswerCreateWithoutQuizInput, QuizAnswerUncheckedCreateWithoutQuizInput>
  }

  export type QuizAnswerUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizAnswerWhereUniqueInput
    data: XOR<QuizAnswerUpdateWithoutQuizInput, QuizAnswerUncheckedUpdateWithoutQuizInput>
  }

  export type QuizAnswerUpdateManyWithWhereWithoutQuizInput = {
    where: QuizAnswerScalarWhereInput
    data: XOR<QuizAnswerUpdateManyMutationInput, QuizAnswerUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizAnswerScalarWhereInput = {
    AND?: QuizAnswerScalarWhereInput | QuizAnswerScalarWhereInput[]
    OR?: QuizAnswerScalarWhereInput[]
    NOT?: QuizAnswerScalarWhereInput | QuizAnswerScalarWhereInput[]
    id?: StringFilter<"QuizAnswer"> | string
    quizId?: StringFilter<"QuizAnswer"> | string
    questionIndex?: IntFilter<"QuizAnswer"> | number
    questionType?: StringFilter<"QuizAnswer"> | string
    questionText?: StringFilter<"QuizAnswer"> | string
    referenceAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    userAnswer?: StringNullableFilter<"QuizAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAnswer"> | boolean | null
    score?: FloatNullableFilter<"QuizAnswer"> | number | null
    analysis?: StringNullableFilter<"QuizAnswer"> | string | null
    errorType?: StringNullableFilter<"QuizAnswer"> | string | null
    createdAt?: DateTimeFilter<"QuizAnswer"> | Date | string
  }

  export type QuizCreateWithoutAnswersInput = {
    id?: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    task: TaskCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutAnswersInput = {
    id?: string
    taskId: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
  }

  export type QuizCreateOrConnectWithoutAnswersInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAnswersInput, QuizUncheckedCreateWithoutAnswersInput>
  }

  export type QuizUpsertWithoutAnswersInput = {
    update: XOR<QuizUpdateWithoutAnswersInput, QuizUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuizCreateWithoutAnswersInput, QuizUncheckedCreateWithoutAnswersInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutAnswersInput, QuizUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateWithoutReviewRecordsInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    studyPlan: StudyPlanCreateNestedOneWithoutTasksInput
    knowledgeLinks?: TaskKnowledgeUnitCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionCreateNestedManyWithoutTaskInput
    notes?: NoteCreateNestedManyWithoutTaskInput
    quizzes?: QuizCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutReviewRecordsInput = {
    id?: string
    studyPlanId: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedCreateNestedManyWithoutTaskInput
    sessions?: LearningSessionUncheckedCreateNestedManyWithoutTaskInput
    notes?: NoteUncheckedCreateNestedManyWithoutTaskInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutReviewRecordsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutReviewRecordsInput, TaskUncheckedCreateWithoutReviewRecordsInput>
  }

  export type TaskUpsertWithoutReviewRecordsInput = {
    update: XOR<TaskUpdateWithoutReviewRecordsInput, TaskUncheckedUpdateWithoutReviewRecordsInput>
    create: XOR<TaskCreateWithoutReviewRecordsInput, TaskUncheckedCreateWithoutReviewRecordsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutReviewRecordsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutReviewRecordsInput, TaskUncheckedUpdateWithoutReviewRecordsInput>
  }

  export type TaskUpdateWithoutReviewRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlan?: StudyPlanUpdateOneRequiredWithoutTasksNestedInput
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutReviewRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    examDate?: Date | string | null
    dailyTimeBudget?: number | null
    mode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyTimeBudget?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyProjectInput = {
    id?: string
    title: string
    type: $Enums.MaterialType
    sourcePath?: string | null
    rawText?: string | null
    status?: $Enums.MaterialStatus
    parseError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyPlanCreateManyProjectInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    totalDays: number
    status?: $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: MaterialChunkUpdateManyWithoutMaterialNestedInput
    knowledgeUnits?: KnowledgeUnitUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: MaterialChunkUncheckedUpdateManyWithoutMaterialNestedInput
    knowledgeUnits?: KnowledgeUnitUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    parseError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDays?: IntFieldUpdateOperationsInput | number
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkCreateManyMaterialInput = {
    id?: string
    chunkIndex: number
    title?: string | null
    content: string
    summary?: string | null
    sourcePage?: number | null
    sourceSection?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type KnowledgeUnitCreateManyMaterialInput = {
    id?: string
    title: string
    summary?: string | null
    topic?: string | null
    difficulty?: number | null
    importance?: number | null
    estimatedMinutes?: number | null
    prerequisiteIds?: KnowledgeUnitCreateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialChunkUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialChunkUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePage?: NullableIntFieldUpdateOperationsInput | number | null
    sourceSection?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeUnitUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskLinks?: TaskKnowledgeUnitUpdateManyWithoutKnowledgeUnitNestedInput
  }

  export type KnowledgeUnitUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutKnowledgeUnitNestedInput
  }

  export type KnowledgeUnitUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    importance?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    prerequisiteIds?: KnowledgeUnitUpdateprerequisiteIdsInput | string[]
    sourceRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskKnowledgeUnitCreateManyKnowledgeUnitInput = {
    id?: string
    taskId: string
  }

  export type TaskKnowledgeUnitUpdateWithoutKnowledgeUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutKnowledgeLinksNestedInput
  }

  export type TaskKnowledgeUnitUncheckedUpdateWithoutKnowledgeUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskKnowledgeUnitUncheckedUpdateManyWithoutKnowledgeUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyStudyPlanInput = {
    id?: string
    title: string
    description?: string | null
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    scheduledDate: Date | string
    estimatedMinutes?: number | null
    difficulty?: number | null
    priority?: number | null
    masteryScore?: number | null
    nextReviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TaskUpdateWithoutStudyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUpdateManyWithoutTaskNestedInput
    notes?: NoteUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStudyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeLinks?: TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: LearningSessionUncheckedUpdateManyWithoutTaskNestedInput
    notes?: NoteUncheckedUpdateManyWithoutTaskNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutTaskNestedInput
    reviewRecords?: ReviewRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutStudyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskKnowledgeUnitCreateManyTaskInput = {
    id?: string
    knowledgeUnitId: string
  }

  export type LearningSessionCreateManyTaskInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    questionCount?: number
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type NoteCreateManyTaskInput = {
    id?: string
    content: string
    isImportant?: boolean
    isConfusing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyTaskInput = {
    id?: string
    title?: string | null
    status?: $Enums.QuizStatus
    score?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
  }

  export type ReviewRecordCreateManyTaskInput = {
    id?: string
    reviewDate?: Date | string
    result: $Enums.ReviewResult
    score?: number | null
    intervalDays?: number | null
    nextReviewDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskKnowledgeUnitUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeUnit?: KnowledgeUnitUpdateOneRequiredWithoutTaskLinksNestedInput
  }

  export type TaskKnowledgeUnitUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskKnowledgeUnitUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type LearningSessionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSessionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSessionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    questionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    isConfusing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: QuizAnswerUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: QuizAnswerUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRecordUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRecordUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRecordUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumReviewResultFieldUpdateOperationsInput | $Enums.ReviewResult
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextReviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAnswerCreateManyQuizInput = {
    id?: string
    questionIndex: number
    questionType: string
    questionText: string
    referenceAnswer?: string | null
    userAnswer?: string | null
    isCorrect?: boolean | null
    score?: number | null
    analysis?: string | null
    errorType?: string | null
    createdAt?: Date | string
  }

  export type QuizAnswerUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAnswerUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAnswerUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    questionType?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    analysis?: NullableStringFieldUpdateOperationsInput | string | null
    errorType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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