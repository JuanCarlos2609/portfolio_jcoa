export interface Route {
  path?: string;
  layout: (props?: any) => JSX.Element;
  component: (props?: any) => JSX.Element;
}

export type RouteGroup<T extends string> = Record<T, Route>;
