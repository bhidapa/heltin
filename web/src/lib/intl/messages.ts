/**
 *
 * messages
 *
 */

export interface Message {
  en: string;
  hr?: string;
}

export interface Messages {
  [id: string]: Message;
}
