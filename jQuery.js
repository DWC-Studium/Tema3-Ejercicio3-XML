$(window).on("load", function() {
    $("#botonJQuery").on("click", function() {
        $.getJSON("./tabla.xml", function(datos) {
            $("#contenedor")
                .html($("<table>")
                    .append($("<tr>")
                        .append($("<th>").text("Nombre"),
                            $("<th>").text("Apellido"),
                            $("<th>").text("Nota"),
                            $("<th>").text("Convocatoria"))))
            $.each(datos, function(i, alumno) {
                $("<tr>")
                    .append($("<td>").text(alumno.nombre),
                        $("<td>").text(alumno.apellido),
                        $("<td>").text(alumno.nota),
                        $("<td>").text(alumno.convocatoria))
                    .appendTo($("table"))
            })
        })
    })
})