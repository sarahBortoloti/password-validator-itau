export const passwordValidatorsMessages = [
  {
    validatorType: 'minlength',
    message: 'A senha deve ter pelo menos 9 caracteres.',
  },
  {
    validatorType: 'pwNotHaveNumber',
    message: 'A senha deve conter pelo menos 1 dígito.',
  },
  {
    validatorType: 'pwNotHaveUpperCase',
    message: 'A senha deve conter pelo menos 1 caractere em maiúscula.',
  },
  {
    validatorType: 'pwNotHaveLowerCase',
    message: 'A senha deve conter pelo menos 1 caractere em minúscula.',
  },
  {
    validatorType: 'pwNotHaveSpecialCharacters',
    message:
      'A senha deve conter pelo menos 1 caractere especial (!@#$%^&*()-+).',
  },
  {
    validatorType: 'pwHaveForbiddenCharacters',
    message:
      'A senha não pode conter caracteres inválidos, como espaços ou outros caracteres especiais.',
  },
  {
    validatorType: 'pwHaveRepeatedDigits',
    message: 'A senha não pode conter caracteres repetidos.',
  },
] as const;
