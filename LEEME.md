# Rifa — instrucciones

Dos archivos, nada más:

- **`index.html`** → la página. No hace falta tocarla.
- **`config.js`** → acá configurás todo.

---

## 1. Configurar antes de publicar

Abrí `config.js` con el Bloc de notas (o cualquier editor) y cambiá:

| Campo | Qué poner | Estado |
|---|---|---|
| `titulo` | El nombre de la rifa | ✅ RIFA DE JOYAS |
| `premios` | Lista de premios, en orden | ✅ los 3 cargados |
| `fechaSorteo` | Cuándo se sortea | ✅ 14 de agosto |
| **`precio`** | **Cuánto sale cada número** | ⚠️ **falta confirmar** |
| `whatsapp` | Tu número, sin `+`, sin espacios | ✅ 5493416914338 |
| `alias` | Tu alias de Mercado Pago / banco | ✅ Joyas.Rifa |
| `titularCuenta` | A nombre de quién está la cuenta | opcional, vacío |

### Los premios

Van en una lista, **en orden**: el primero de la lista se muestra como 1° premio.

```js
premios: [
  "Colgante con dije, pulsera y birome Parker",   // 1° premio
  "Anillo",                                        // 2° premio
  "Aros a elección"                                // 3° premio
],
```

Si querés agregar un 4°, sumás otra línea con su coma. Si querés sacar uno,
borrás la línea entera.

### El número de WhatsApp

Es lo único que se puede escribir mal fácil. El formato es:

```
54  +  9  +  código de área SIN el 0  +  número SIN el 15
```

Si tu celular es **(0351) 15-234-5678**, va así:

```js
whatsapp: "5493512345678",
```

> Si el botón "Enviar por WhatsApp" abre un chat vacío o dice que el número
> no existe, casi seguro es porque le sobra un 0 o un 15.

---

## 2. Marcar los números que se van vendiendo

Todo pasa en las dos últimas líneas de `config.js`:

```js
// Ya pagaron → gris, tachado, no se puede elegir
vendidos: [5, 12, 40, 187],

// Reservaron pero no pagaron todavía → amarillo, no se puede elegir
reservados: [22, 99],
```

Podés usar rangos con corchetes cuando alguien te compra muchos seguidos:

```js
vendidos: [5, 12, [100, 110], 250],
//              └─ del 100 al 110, los 11 números
```

Si no hay ninguno todavía, dejalo vacío: `vendidos: []`

**El flujo normal es:** te llega el WhatsApp → pasás esos números a `reservados`
→ cuando te transfieren, los movés a `vendidos`.

La barra de progreso y el contador de "números disponibles" se actualizan solos.

---

## 3. Probarla en tu compu

Hacé doble clic en `index.html`. Se abre en el navegador y funciona todo,
incluido el botón de WhatsApp. Probala antes de publicar.

---

## 4. Publicarla en GitHub Pages

1. Entrá a [github.com](https://github.com) y creá un repositorio nuevo,
   por ejemplo `rifa`. Marcalo como **Public**.
2. En la página del repo tocá **Add file → Upload files** y arrastrá
   `index.html` y `config.js`. Abajo, **Commit changes**.
3. Andá a **Settings → Pages** (menú de la izquierda).
4. En *Branch* elegí **main** y carpeta **/ (root)**. Tocá **Save**.
5. Esperá un par de minutos y tu página queda en:
   `https://TU-USUARIO.github.io/rifa/`

Ese link es el que compartís.

### Para actualizar los números vendidos

Entrá al repo → clic en `config.js` → el ícono del **lápiz** ✏️ → editás la
lista → **Commit changes**. En 1 o 2 minutos se ve actualizado en la web.

> Si no ves el cambio, refrescá con `Ctrl + F5` (fuerza a recargar sin caché).

---

## Cosas a tener en cuenta

- **La lista de vendidos es manual.** La página no reserva sola: si dos
  personas eligen el 45 en el mismo momento, las dos te van a escribir. Vos
  decidís (normalmente, el que transfirió primero) y marcás el número.
- **Cambiar la cantidad de números:** en `config.js`, `totalNumeros: 600`.
- **Cambiar el color:** en `index.html`, buscá `--accent: #22c55e` cerca del
  principio y poné el color que quieras (`#e11d48` rojo, `#3b82f6` azul,
  `#a855f7` violeta).
