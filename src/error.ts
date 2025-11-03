let error = false;

export function logError(line: number, message: string) {
  report(line, '', message);
}

export function hadError(): boolean {
  return error;
}

export function clearError() {
  error = false;
}

function report(line: number, where: string, message: string): void {
  console.log(`[line ${line}] Error${where}: ${message}`);
  error = true;
}
