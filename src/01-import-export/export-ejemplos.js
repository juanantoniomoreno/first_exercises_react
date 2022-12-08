/* 1- Exportaciones con nombre antes de la sentencia */

export const FECHA = 2022;

/* 2- Exportaciones con nombre después de la sentencia */

const MES = 'Enero';

export { MES };

/* 3- Exportaciones por defecto después de la sentencia */
/* SÓLO UNA EXPORT DEFAULT POR ARCHIVO !!! */

const texto = 'Texto exportado por defecto';

//export default texto;

/* 4- Exportación por defecto antes de la sentencia */
//export default () => 'Hello';

/* a . Export con nombre antes de la sentencia un array con 3 nombres femeninos y pintarlos
en la pantall */

export const names = ['Nela', 'Amparo', 'Ana'];

/* b- export con nombre después de la sentencia de un array con 3 nombres masculinos y pintarlo */

const menNames = ['Juan', 'Santi', 'Antonio'];
export {menNames};

/* c) Exportar por defecto, antes de la sentencia, una función que pasados dos parámetros nos devuelva el resultado de su división */

const division = (a, b) => a / b;

/* d) Exportar antes de la sentencia un objeto user con 3 propiedades (name, email, password) */
export const user = {
    name: 'Juan',
    email: 'juan@juan.com',
    password: '1234'
};

export default division;