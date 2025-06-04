function fibonacci(n) {
  const serie = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    serie.push(a);
    [a, b] = [b, a + b];
  }
  return serie;
}
