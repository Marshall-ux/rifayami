9/* ==========================================================================
   CONFIGURACIÓN DE LA RIFA
   Este es el ÚNICO archivo que necesitás tocar.
   Editá los valores, guardá, y subí el archivo a GitHub.
   ========================================================================== */

const CONFIG = {

  /* --- Datos de la rifa ------------------------------------------------ */

  titulo: "RIFA DE JOYAS BRILLÁ Y GANÁ",

  // Los premios van en orden: el primero de la lista es el 1° premio.
  premios: [
    "Cadena con dije, Pulsera de plata y Birome Parker",
    "Anillo de plata",
    "Aros de plata a elección"
  ],

  fechaSorteo: "14 de agosto",

  totalNumeros: 350,      // del 1 al 350

  /* ⚠️ REVISAR: cuánto sale cada número. Cambialo por el precio real. */
  precio: 5000,
  moneda: "$",

  /* --- Tu WhatsApp ------------------------------------------------------
     Formato: 54 + 9 + código de área (sin 0) + número (sin 15)
     Tu número:  54 + 9 + 341 + 6914338
     --------------------------------------------------------------------- */

  whatsapp: "5493416914338",

  /* --- Datos para el pago ---------------------------------------------- */

  alias: "Joyas.Rifa",
  titularCuenta: "",      // opcional: a nombre de quién está la cuenta

  /* --- Instrucciones que ve el comprador ------------------------------- */

  instrucciones: [
    "Elegí los números que quieras tocándolos.",
    "Completá tu nombre y tu WhatsApp.",
    "Tocá «Reservar» y se abre WhatsApp con tu pedido ya escrito.",
    "Transferí al alias y mandá el comprobante para confirmar."
  ],

  /* ======================================================================
     NÚMEROS OCUPADOS
     Acá es donde marcás lo que se va vendiendo.
     Separá con comas. Podés usar rangos con la forma [inicio, fin].

     ⚠️ MUY IMPORTANTE: las dos líneas tienen que terminar con COMA.
        Si borrás la coma, la página se queda en "Cargando..." y no anda.

            vendidos: [12, 17],
                            ↑ esta coma NO se toca

     Ejemplos válidos:
       vendidos: [5, 12, 40],                → sueltos
       vendidos: [5, 12, [100, 110], 250],   → sueltos + del 100 al 110
       vendidos: [],                         → ninguno todavía
     ====================================================================== */

  // PAGADOS (se ven en gris y no se pueden elegir)
  vendidos: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 36, 37, 39, 42, 40, 47, 48, 49, 54, 55, 58, 61,  63, 64, 67, 70, 77, 81, 88, 99, 100, 107, 109, 111, 129, 132, 148, 151, 155, 188, 211, 212, 222, 232, 274, 318, 340, 346, 350 ],

  // RESERVADOS, esperando el pago (se ven en amarillo y no se pueden elegir)
  reservados: [ 224, 304],

};
