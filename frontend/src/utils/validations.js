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

export function validationRegisterForm(values) {
  const errors = {};

  //Validar el nombre
  if (!values.firstname) {
    errors.firstname = "El nombre es requerido";
  }

  //Validar apellido
  if (!values.lastname) {
    errors.lastname = "El apellido es requerido";
  }

  //Validar correo y contraseña
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

export function validationEventForm(values) {
  const errors = {};

  //Validar el title
  if (!values.title) {
    errors.title = "El titulo es requerido";
  }

  //Validar description
  if (!values.description) {
    errors.description = "La descripción es requerida";
  } else if (values.description.length <= 60) {
    errors.description = "La descripción debe ser max 60 caracteres";
  }

  if (!values.date) {
    errors.date = "La fecha es requerida";
  }

  if (!values.speakers) {
    errors.speakers = "El speaker es requerido";
  }

  return errors;
}

export function validationSpeakerForm(values) {
  const errors = {};

  //Validar el nombre
  if (!values.firstname) {
    errors.firstname = "El nombre es requerido";
  }

  //Validar apellido
  if (!values.lastname) {
    errors.lastname = "El apellido es requerido";
  }

  //Validar Biografia
  if (!values.bio) {
    errors.bio = "La Biografia es requerida";
  } else if (values.bio.length <= 50) {
    errors.bio = "La descripción debe ser max 50 caracteres";
  }

  //Validar conocimientos
  if (!values.expertise) {
    errors.expertise = "Los conocimientos son requeridos";
  } else if (values.expertise.length <= 50) {
    errors.expertise = "Los conocimientos deben ser max 50 caracteres";
  }

  return errors;
}
