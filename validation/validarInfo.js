const validarInfo = values => {

     let errores = {};
     if (!values.nombre) {
       errores.nombre = 'El nombre es obligatorio'
     };
     if (!values.email) {
       errores.email = 'El correo es obligatorio'
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errores.email = 'Correo Inválido'
     };

     return errores;
};

export default validarInfo;