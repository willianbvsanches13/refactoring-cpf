const example = require('./example-after');

describe('Validar função de CPF', () => {
  test('Não deve validar CPF com todos os números iguais', () => {
    const isValid = example.validate("111.111.111-11");
    expect(isValid).toBeFalsy();
  });

  test('Deve validar o cpf A', () => {
    const isValid = example.validate("935.411.347-80");
    expect(isValid).toBeTruthy();
  });
  test('Deve validar o cpf B', () => {
    const isValid = example.validate("357.188.378-05");
    expect(isValid).toBeTruthy();
  });
  test('Deve validar o cpf C', () => {
    const isValid = example.validate("987.654.321-00");
    expect(isValid).toBeTruthy();
  });
  test('Não deve validar CPF com número aleatório', () => {
    const isValid = example.validate("321.123.542-00");
    expect(isValid).toBeFalsy();
  });
  test('Não deve validar CPF maior que o limite', () => {
    const isValid = example.validate("321.123.542-0000000000");
    expect(isValid).toBeFalsy();
  });
  test('Não deve validar CPF menor que o limite', () => {
    const isValid = example.validate("321.123.54");
    expect(isValid).toBeFalsy();
  });
  test('Não deve validar CPF NULL', () => {
    const isValid = example.validate(null);
    expect(isValid).toBeFalsy();
  });

  test('Não deve validar objeto', () => {
    const obj = { replace: function ()  {return this }, length: '11' };
    const isValid = example.validate(obj);
    expect(isValid).toBeFalsy();
  });
})

// console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));
