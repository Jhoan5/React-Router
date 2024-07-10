# React-router-01

## acerca
_He aquí un ejemplo del elemento Browser router_

## componentes
**BrowserRouter**: _Agrupa otros dos elementos **Routes** y **route** con los cuales se le dice a React que componente se debe mostrar según la URL._

**useNavigate**: _Con este elemento se obtiene una función que va a la url que se le pase cómo parámetro. Útil si se desea usar en botones. Pero no recomendado por no tener interactividad._

**Link**: _Es un componente que reemplaza los elementos `<a>` y que tiene interactividad._

**useParams**: _Obtiene los parámetros que tenga la url, deben estar de la forma `/:parámetro`_