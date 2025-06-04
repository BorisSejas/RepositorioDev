// Mock de la API del BCB
async function obtenerTipoCambioBCB() {
  return { origen: 'BCB', valor: 6.96 }; // simulado
}

// Mock de fuente paralela
async function obtenerTipoCambioParalelo() {
  return { origen: 'Paralelo', valor: 7.10 }; // simulado
}

async function conversorUSDaBOB(montoUSD) {
  const oficial = await obtenerTipoCambioBCB();
  const paralelo = await obtenerTipoCambioParalelo();

  return {
    montoUSD,
    conversionOficial: montoUSD * oficial.valor,
    conversionParalelo: montoUSD * paralelo.valor
  };
}

// Ejemplo:
conversorUSDaBOB(10).then(console.log);
