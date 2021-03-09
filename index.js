const express = require("express");
//la aplicacion es una funcion de la libreria
const app = express();
const port = 3000;

//Configurar EJS como motor de vistas templates
// Vista es "una pagina"
//Template es HTML con mas cosas
app.set("view engine", "ejs");

//Una ruta es para responder a peticion
 app.get("/" , (req, res) => {

    //TODO: logica para revisar fecha

    let message = "PENDIENTE DE CONFIRMAR";
    let currentDate = new Date();

    //se asume que se incluye views al inicio
    //views/pages/index.html
    //pages/index
    //omitir views al inicio
    //omitir la extension del archivo


    // - Rango de fechas (verano)
    // Summer 2021 in Northern Hemisphere will begin on
    // Sunday, June 20
    // and ends on
    // Wednesday, September 22
    // All dates are in Mexican Pacific Time.
    // enero febrero marzo abril mayo junio julio agosto sep oct
    // 0     1       2     3     4    5     6     7      8
     //let dateRangeStart = new Date(2021, 5, 20); //20 de junio de 2021

     let dateRangeStartByYear = {};
     dateRangeStartByYear[2021] = new Date(2021, 5, 20);
     dateRangeStartByYear[2022] = new Date(2021, 5, 21);
     dateRangeStartByYear[2023] = new Date(2021, 5, 21);
     dateRangeStartByYear[2024] = new Date(2021, 5, 20);
     dateRangeStartByYear[2025] = new Date(2021, 5, 21);

     let dateRangeEndByYear = {};
     dateRangeEndByYear[2021] = new Date(2021, 8, 21);
     dateRangeEndByYear[2022] = new Date(2021, 8, 22);
     dateRangeEndByYear[2023] = new Date(2021, 8, 22);
     dateRangeEndByYear[2024] = new Date(2021, 8, 21);
     dateRangeEndByYear[2025] = new Date(2021, 8, 21);

     //let currentDate = new Date();
     let currentYear = currentDate.getFullYear();
     let dateRangeStart = dateRangeStartByYear[currentYear];
     let dateRangeEnd = dateRangeEndByYear[currentYear];
      // (No consideramos horas y minutos)
     if (currentDate >= dateRangeStart && currentDate <= dateRangeEnd) {
         message = "Sí";
     } else {
         message = "No";
     }

    res.render("pages/index", {
        // message: message
        message
    });
});   
app.use(express.static("public"));

app.listen(port , () => {
    //con comitas izq de tecla 1
    console.log(`Listening at http>//localhost:${port}`);
});   

