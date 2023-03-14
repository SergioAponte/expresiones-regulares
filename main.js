const nombre=document.querySelector('.nombre')
const apellido=document.querySelector('.apellido')
const telefono=document.querySelector('.telefono')
const email=document.querySelector('.email')
const contraseña=document.querySelector('.contraseña')
const repetir=document.querySelector('.repetir')
const botones=document.querySelector('.botones')
const fecha=document.querySelector('.fecha')


botones.addEventListener('click', (event)=>{
    if (event.target.className=='registrar'){
        const letra=/^[A-Z]+$/i
        const cell=/3\d{9}$/gi
        const correo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        const fechas=/^[0-9]\d([0-30]{2})\(d[0-12]{2})\d{4}|/
        if (letra.test(nombre.value, apellido.value) && cell.test(telefono.value)
         && correo.test(email.value) && contraseña.value===repetir.value && fechas.test(fecha)){
            formulario.value=''
            alert('registro exitoso')
        }else if(letra.test(nombre.value)==false){
            nombre.value=''
            alert('error en el nombre')
        }else if(letra.test(apellido.value)==false){
            apellido.value=''
            alert('error en el apellido')
        }else if(cell.test(telefono.value)==false){
            telefono.value=''
            alert('error en el telefono')
        }else if(correo.test(correo.value)==false){
            cell.value=''
            alert('error en el correo')
        }else if(fechas.test(fecha.value)==false){
            fecha.value=''
            alert('error en la fecha')
        }else if(contraseña!=repetir){
            contraseña.value=''
            repetir.value=''
            alert('contraseñas no son las mismas')
        }
    }
    else if(event.target.className=='cancelar'){
        formulario.value=''
    }
})