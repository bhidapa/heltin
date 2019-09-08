import { RelayProp, RelayRefetchProp, RelayPaginationProp } from 'react-relay';

declare module 'react-relay' {
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
