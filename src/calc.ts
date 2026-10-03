export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 修复：除零与 NaN 输入现在给出明确错误，而不是静默返回 Infinity / NaN。
 */
export function divide(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError(`divide expects finite numbers, got (${a}, ${b})`);
  }
  if (b === 0) {
    throw new RangeError("divide by zero");
  }
  return a / b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
