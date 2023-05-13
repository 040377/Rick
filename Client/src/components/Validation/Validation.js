const validation = (userData) => {
    const errors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        errors.email = 'El Email es invalido';
    }

    if (!userData.email) {
        errors.email = 'Este campo no puede estar vacio';
    }
    
    if (userData.email.length > 35) {
        errors.email = 'El email debe contener como maximo 35 caracteres';
    }
    
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número';
    }
    
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La password debe contener entre 6 y 10 caracteres';
    }
    
    return errors;
}

export default validation;