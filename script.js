window.addEventListener("load", function() {
    document.getElementById("boton").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let objetoXML = xhr.responseXML.documentElement;
                let elementos = objetoXML.childNodes;
                var tabla = document.createElement('table');
                tabla.innerHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Nota</th><th>Convocatoria</th></tr></thead>";
                for (var i = 0; i < elementos.length; i++) {
                    if (elementos[i].nodeType == Node.ELEMENT_NODE) {
                        var elemento = elementos[i].childNodes;
                        var fila = tabla.insertRow();
                        for (var j = 0; j < elemento.length; j++) {
                            if (elemento[j].nodeType !== Node.TEXT_NODE) {
                                fila.insertCell().innerText = elemento[j].textContent;
                                if (elemento[j].nodeName == 'nota') {
                                    fila.insertCell().innerText = elemento[j].getAttribute('convocatoria');
                                }
                            }
                        }
                    }
                }
                document.getElementById("contenedor").innerHTML = tabla.outerHTML;
            }
        }
        xhr.open("GET", "./tabla.xml", true)
        xhr.send()
    })
})