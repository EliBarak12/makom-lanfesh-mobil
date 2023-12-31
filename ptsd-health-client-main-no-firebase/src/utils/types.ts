// Copied from https://www.npmjs.com/package/typedots

type TypeDotsParams = {
  expectedType?: any;
  strictMode?: boolean;
  preventDistribution?: boolean;
};

type DefaultTypeDotsParams = TypeDotsParams & {
  expectedType: any;
  strictMode: false;
  preventDistribution: false;
};

type Join<
  Strings extends string[],
  Separator extends string = '.',
  Start = true,
> = Strings extends [infer Current, ...infer Rest]
  ? Current extends string
    ? Rest extends string[]
      ? Start extends true
        ? `${Current}${Join<Rest, Separator, false>}`
        : `${Separator}${Current}${Join<Rest, Separator, Start>}`
      : never
    : never
  : '';

type Matcher<
  Type,
  ExpectedType,
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
  ReturnType = Type & ExpectedType,
> = PreventDistribution extends true
  ? [Type] extends [ExpectedType]
    ? ReturnType
    : never
  : Type extends ExpectedType
  ? ReturnType
  : never;

type FormatPath<Key> = Key extends `${string}.${string}`
  ? `(${Key})`
  : `${Key & string}`;

type ExtractObjectSubpaths<
  BaseObject,
  ParentKey extends string,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = ValueOf<{
  [Key in keyof BaseObject as Matcher<Key, string, PreventDistribution>]:
    | ObjectPaths<BaseObject, Key, ParentKey, ExpectedType, PreventDistribution>
    | SimplePath<BaseObject, Key, ParentKey, ExpectedType, PreventDistribution>;
}> &
  string;

type ObjectPaths<
  BaseObject,
  Property extends keyof BaseObject,
  ParentProperty extends string,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = Matcher<
  BaseObject[Property],
  AnyObject,
  PreventDistribution,
  Join<
    [
      Matcher<ParentProperty, string, PreventDistribution>,
      `${ExtractObjectSubpaths<
        BaseObject[Property],
        Matcher<Property, string, PreventDistribution>,
        ExpectedType,
        PreventDistribution
      >}`,
    ]
  >
>;

type SimplePath<
  BaseObject,
  Property extends keyof BaseObject,
  ParentProperty extends string,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = Matcher<
  BaseObject[Property],
  ExpectedType,
  PreventDistribution,
  Join<
    [
      `${FormatPath<ParentProperty>}`,
      `${FormatPath<Matcher<Property, string, PreventDistribution>>}`,
    ]
  >
>;

type PropertyPath<
  BaseObject,
  Property extends keyof BaseObject,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = Matcher<BaseObject[Property], ExpectedType, PreventDistribution, Property>;

type SubPropertyPaths<
  BaseObject,
  Property extends keyof BaseObject,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = Matcher<
  BaseObject[Property],
  AnyObject,
  PreventDistribution,
  ExtractObjectSubpaths<
    BaseObject[Property],
    Matcher<Property, string, PreventDistribution>,
    ExpectedType,
    PreventDistribution
  >
>;

export type ValueOf<T> = T[keyof T];

export type AnyObject = {
  [k: string]: unknown;
};

export type ExtractObjectPaths<
  BaseObject,
  ExpectedType = DefaultTypeDotsParams['expectedType'],
  PreventDistribution = DefaultTypeDotsParams['preventDistribution'],
> = ValueOf<{
  [Key in keyof BaseObject as Matcher<Key, string, PreventDistribution>]:
    | FormatPath<
        PropertyPath<BaseObject, Key, ExpectedType, PreventDistribution>
      >
    | SubPropertyPaths<BaseObject, Key, ExpectedType, PreventDistribution>;
}> &
  string;
