import { Binary, Expr, Grouping, Literal, Unary, Visitor } from './expr';

export class AstPrinter implements Visitor<string> {
  print(expr: Expr) {
    return expr.accept(this);
  }

  visitBinaryExpr(expr: Binary): string {
    return this.parenthesize(expr.operator.lexeme, expr.left, expr.right);
  }

  visitGroupingExpr(expr: Grouping): string {
    return this.parenthesize('group', expr.expression);
  }

  visitLiteralExpr(expr: Literal): string {
    if (!expr.value) {
      return 'nil';
    }
    return expr.value as string;
  }

  visitUnaryExpr(expr: Unary): string {
    return this.parenthesize(expr.operator.lexeme, expr.right);
  }

  private parenthesize(name: string, ...exprs: Expr[]): string {
    return `(${[name, ...exprs.map((e) => e.accept(this))].join(' ')})`;
  }
}
