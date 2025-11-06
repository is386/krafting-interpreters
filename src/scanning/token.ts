import { TokenType } from './token-type';

export class Token {
  type: TokenType;
  lexeme: string;
  literal: unknown;
  line: number;

  constructor(type: TokenType, lexeme: string, literal: unknown, line: number) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  public toString(): string {
    return `${this.type} ${this.lexeme} ${this.literal}`;
  }
}
