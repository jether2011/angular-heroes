import { Injectable } from '@angular/core';

@Injectable()
export class MessageProviderService {
  private messages: string[] = [];

  constructor() { }

  clear(): void {
    this.messages = [];
  }

  add(message:string): void {
    this.messages.push(message);
  }

}
