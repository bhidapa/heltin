/**
 *
 * messages
 *
 */

export interface Message {
  en: string;
  ba?: string;
}

export interface Messages {
  [id: string]: Message;
}
