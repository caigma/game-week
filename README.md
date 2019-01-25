# game-week

El juego consiste en avanzar  por los distintos laberintos antes de que se te acabe la vida (por tiempo, o por colisión con otras bolas).
La bola cae por gravedad, y solo puede dar un pequeño salto que hace que se pegue a los techos.
Se controla con las teclas k (izq)  ñ (derecha) o (up) l (down)
La mayor dificultad fue encontrar la manera de que la bola supiera en cada momento cuando colisionaba con cualquier pared del laberinto, 
y que supiera si era un impacto lateral.
Comencé a hacerlo preguntando continuamente donde está la bola, con condicionales muy largos, y que no daban escalabilidad.
Tuve que comenzar de cero, buscando otro camino, y comencé a usar una función que te detecta una colisión de círculo con recta. 
A partir de ahí, y usando un forEach que me chequeaba en todo momento si exsitía una colisón de la bola con cualquier pared, puede desarrollar el proyecto.

Hay muchos aspectos a mejorar:
Estética. Un buen estudio previo hubiera permitido dimnesionar mejor el laberinto, las distintas alturas, anchos, etc para encajarlo mejor en la pantalla
Nuevas fases: mayor velocidad de la bola, nuevos enemigos, bombas, trampas, etc.

Estoy contecto, porque creo que el proyecto permitiría poder hacer muchos niveles mejorando la escaliidad de algunas instancias (enemigos, vidas, etc)
porque se adapta a cualquier laberinto.


