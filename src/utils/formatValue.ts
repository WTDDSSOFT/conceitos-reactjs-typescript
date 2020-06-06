const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
/** Formatação da moeda , muito importante essa parte will */
