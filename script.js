const fs = require("fs");

const folders = [
  "UF01_Tema_01_Implementacion_de_AW",
  "UF01_Tema_02_Administracion_de_SW",
  "UF01_Tema_03_Instalacion_y_administracion_de_STA",
  "UF02_Tema_04_Administracion_de_SA",
  "UF03_Tema_05_Servicios_de_red_implicados_en_el_desarrollo_de_AW",
  "UF04_Tema_06_Documentacion_y_sistemas_de_CV"
];

folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log(`Created folder: ${folder}`);
  } else {
    console.log(`Folder already exists: ${folder}`);
  }
});
