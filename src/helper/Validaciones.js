
//validar formato de sitio web
export const validateSitioWeb = (value) =>{
    let error = '';
    let regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if(!regex.test(value)){
        error = 'la direccion de su sitio web es incorrecto'
    }

    return error;
}