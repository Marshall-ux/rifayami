/* ==========================================================================
   CONFIGURACIÓN DE LA RIFA
   Este es el ÚNICO archivo que necesitás tocar.
   Editá los valores, guardá, y subí el archivo a GitHub.
   ========================================================================== */

const CONFIG = {

  /* --- Datos de la rifa ------------------------------------------------ */

  titulo: "RIFA DE JOYAS",

  // Los premios van en orden: el primero de la lista es el 1° premio.
  premios: [
    "Colgante con dije, Pulsera y Birome Parker",
    "Anillo de plata",
    "Aros a elección"
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
  vendidos: [6, 7, 12, 15, 17, 24, 274, 346 ],

  // RESERVADOS, esperando el pago (se ven en amarillo y no se pueden elegir)
  reservados: [1, 224, 304],

};
