import { RelayProp, RelayRefetchProp, RelayPaginationProp } from 'react-relay';

declare module 'relay-runtime' {
  export type WithoutRefType<T> = Omit<T, ' $refType'>;
}

declare module 'react-relay' {
  export type WithoutRefType<T> = Omit<T, ' $refType'>;
  export interface WithRelayProp {
    readonly relay: RelayProp;
  }
  export interface WithRelayRefetchProp {
    readonly relay: RelayRefetchProp;
  }
  export interface WithRelayPaginationProp {
    readonly relay: RelayPaginationProp;
  }
}
