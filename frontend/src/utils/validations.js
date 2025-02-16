export function validationLoginForm(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "El correo es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo no es valido";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (values.password.length < 5) {
    errors.password = "La contraseña debe tener más de 5 caracteres.";
  }

  return errors;
}
