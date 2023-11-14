document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const contenedorQR = document.getElementById('qrC');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();


        let nombre = formulario.nombre.value;
        let apellido = formulario.apellido.value;
        let telefono = formulario.telefono.value;
        let email = formulario.email.value;
        let notas = formulario.notas.value;


        let contacto = {
            "Nombre": nombre,
            "Apellido": apellido,
            "Telefono": telefono,
            "Email": email,
            "Notas": notas
        };


        let contactoJSON = JSON.stringify(contacto);


        contenedorQR.innerHTML = ''; // con esto limpio mi contenedor del qr


        const QR = new QRCode(contenedorQR, {
            text: contactoJSON,
            width: 200,
            height: 200
        });
    });
});
