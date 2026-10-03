export function add(a: number, b: number): number {
  return a + b;
}

// 故意留一个待修缺陷：未处理 NaN
export function divide(a: number, b: number): number {
  return a / b;
}
