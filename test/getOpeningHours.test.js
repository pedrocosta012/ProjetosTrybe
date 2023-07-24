const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se ao não inserir parâmetros a função getOpeningHours retorna as horas', () => {
    const wishedResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(wishedResult);
  });

  it('Testa se o Zoo está aberto em todos os dias da semana ás 08:00AM', () => {
    const opened = 'The zoo is open';
    const closed = 'The zoo is closed';
    expect(getOpeningHours('sunday', '08:00-AM')).toBe(opened);
    expect(getOpeningHours('monday', '08:00-AM')).toBe(closed);
    expect(getOpeningHours('tuesday', '08:00-AM')).toBe(opened);
    expect(getOpeningHours('wednesday', '08:00-AM')).toBe(opened);
    expect(getOpeningHours('thursday', '08:00-AM')).toBe(closed);
    expect(getOpeningHours('friday', '08:00-AM')).toBe(closed);
    expect(getOpeningHours('saturday', '08:00-AM')).toBe(opened);
  });
  it('Testa se o parâmetro ""Hora"" maior que 12 ou menor que ""0"" retorna ""ERRO""', () => {
    expect(() => getOpeningHours('saturday', '-08:00-AM')).toThrow();
    expect(() => getOpeningHours('monday', '30:00-AM')).toThrow();
  });
  it('Verifica se minutos maiores que 59 ou menor que 0 retorna ""ERRO""', () => {
    expect(() => getOpeningHours('tuesday', '11:-06-AM')).toThrow();
    expect(() => getOpeningHours('thursday', '10:70-AM')).toThrow();
  });
  it('Verifica se abreviação diferente de "AM ou PM" retorna "ERRO"', () => {
    expect(() => getOpeningHours('wednesday', '10:00-AP')).toThrow();
    expect(() => getOpeningHours('sunday', '10:00-VM')).toThrow();
  });
  it('Verifica se parâmetro "Dia da Semana" não for um dia da semana retorna ""ERRO""', () => {
    expect(() => getOpeningHours('sundey', '10:00-PM')).toThrow();
  });
});
