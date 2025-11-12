import { Expr } from './expr';

export interface Visitor<R> {
  visitExpressionStmt(stmt: ExpressionStmt): R;
  visitPrintStmt(stmt: PrintStmt): R;
}

export abstract class Stmt {
  abstract accept<R>(visitor: Visitor<R>): R;
}

export class ExpressionStmt extends Stmt {
  expr: Expr;

  constructor(expr: Expr) {
    super();
    this.expr = expr;
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitExpressionStmt(this);
  }
}

export class PrintStmt extends Stmt {
  expr: Expr;

  constructor(expr: Expr) {
    super();
    this.expr = expr;
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitPrintStmt(this);
  }
}
