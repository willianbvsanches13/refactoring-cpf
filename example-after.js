function validate(rawCpf) {
  if (typeof rawCpf !== 'string') return false;
  if (!rawCpf) return false;
  rawCpf = clean(rawCpf);
  if (!isValidCpfLength(rawCpf)) return false;
  if (isBlocked(rawCpf)) return false;

  try {
    let d1, d2;
    let dg1, dg2, rest;
    let digito;
    let nDigResult;
    d1 = d2 = 0;
    dg1 = dg2 = rest = 0;

    for (let nCount = 1; nCount < rawCpf.length - 1; nCount++) {
      digito = parseInt(rawCpf.substring(nCount - 1, nCount));
      d1 = d1 + (11 - nCount) * digito;

      d2 = d2 + (12 - nCount) * digito;
    }

    rest = d1 % 11;

    dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
    d2 += 2 * dg1;
    rest = d2 % 11;
    if (rest < 2) dg2 = 0;
    else dg2 = 11 - rest;

    let nDigVerific = rawCpf.substring(rawCpf.length - 2, rawCpf.length);
    nDigResult = "" + dg1 + "" + dg2;
    return nDigVerific == nDigResult;
  } catch (e) {
    console.error("Erro !" + e);

    return false;
  }
}

function clean (cpf) {
  return cpf.replace(/[\.\-]*/g, "");
}

function isValidCpfLength (cpf) {
  return cpf.length === 11;
}

function isBlocked (cpf) {
  const [firstDigit] = cpf;
  return [...cpf].every((digit) => digit === firstDigit);
}

function calculateDigit (cpf, factor) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) {
      total += parseInt(digit) * factor--;
    }
  }

}

module.exports = {
  validate
};

// console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));
