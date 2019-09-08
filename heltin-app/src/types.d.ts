declare const __DEV__: boolean;

declare type UUID = string;

/** Full time in ISO-8601 format. */
declare type Time = string;

/** Just the date in ISO-8601 format. */
declare type Date = string;

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'store/storages/localStorage' {
  const content: any;
  export default content;
}

declare module 'store/storages/sessionStorage' {
  const content: any;
  export default content;
}
