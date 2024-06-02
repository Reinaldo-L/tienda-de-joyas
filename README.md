# Desafío - Tienda de Joyas

- Para realizar este desafío debes haber estudiado previamente todo el material disponible correspondiente a la unidad.
- Desarrollo desafío:
  - El desafío se debe desarrollar de manera grupal

## Descripción

La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una moderna y dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack Developer que desarrolle la API REST de una aplicación cliente para satisfacer las necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz.

Deberás crear una API REST que permita:

  1. Límite de recursos
  2. Filtro de recursos por campos
  3. Paginación
  4. Ordenamiento
  5. Estructura de datos HATEOAS

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal __psql__ para crear la base de datos y la tabla que utilizaremos:

```SQL
CREATE DATABASE joyas;
\c joyas;

CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);

INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);
```

A continuación te mostramos imágenes de consultas HTTP realizadas a las rutas __GET__ correspondientes a los requerimientos de este desafío:

- Consulta de joyas con cláusulas en estructura de datos HATEOAS: </br>
http://localhost:3000/joyas?limits=3&page=2&order_by=stock_ASC

<p align="center">
  <img src="https://github.com/Felipe-M-dev/nodejs-challenge05/blob/main/public/challenge_01.png?raw=true?raw=true" alt="challenge 01"><br>
Imagen 1. Joyas en HATEOAS con cláusulas</br>
Fuente: Desafío Latam
</p>

- Filtrando las joyas por precio máximo, mínimo, categoría y metal: </br>
http://localhost:3000/joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata

<p align="center">
  <img src="https://github.com/Felipe-M-dev/nodejs-challenge05/blob/main/public/challenge_02.png?raw=true?raw=true" alt="challenge 02"><br>
Imagen 2. Joyas filtradas por precios, categoría y metal</br>
Fuente: Desafío Latam
</p>

## Requerimientos

1. Crear una ruta __GET /joyas__ que:</br>
  a. Devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos __(1.5 puntos)__</br>
  b. Reciba en la query string los parámetros __(2 puntos):__</br>
    __i. limits:__ Limita la cantidad de joyas a devolver por página</br>
    __ii. page:__ Define la página</br>
    __iii. order_by:__ Ordena las joyas según el valor de este parámetro, ejemplo:</br>
      stock_ASC
      
2. Crear una ruta __GET /joyas/filtros__ que reciba los siguientes parámetros en la query string: __(3.5 puntos)__</br>
  __a. precio_max:__ Filtrar las joyas con un precio __mayor__ al valor recibido</br>
  __b. precio_min:__ Filtrar las joyas con un precio __menor__ al valor recibido.</br>
  __c. categoria:__ Filtrar las joyas por la categoría</br>
  __d. metal:__ Filtrar las joyas por la categoría

3. Hacer uso de los middlewares como capa de reporte en cada una de las rutas. __(1 puntos)__

4. Usar ___try catch___ para capturar los posibles errores durante una consulta y la lógica de cada ruta creada. __(1 puntos)__

5. Usar las consultas parametrizadas para evitar el SQL Injection en la consulta a la base de datos relacionada con la ruta __GET /joyas/filtros (1 puntos)__
