/*es un método que permite crear un Observable que recibe eventos determinados de un elemento del DOM.
Por ejemplo a través de fromEvent podemos interactuar con las coordenadas del cursor a
 través de toda la pantalla. Esto a través del evento mousemove y el elemento document.  */

import { fromEvent } from "rxjs";

//Observable
const onMouseMove$ = fromEvent(document, "keydown"); //observable

//Observer
const observadorMouse = {
  next: (event) => {
    console.log(event);
  },
};

onMouseMove$.subscribe(observadorMouse);
/* same */
/* onMouseMove$.subscribe((item) => console.log(item));*/
