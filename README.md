
# in/course
Se trata de una plataforma de ventas de cursos online dictados por dintintos profesionales.

## Authors

- [@ldaltamirano](https://github.com/ldaltamirano)

# Proyecto final
- El sitio es responsive.
- Contiene Navbar donde se puede elegir las categorias y se puede acceder al carrito, y un listados de unos de productos. 
- La lista de productos mostrados es limitada a cursos de programacion
- Por cada curso se puede acceder al detalle. Ahi se puede agregar el producto al carrito con una cantidad seleccionada.
- El carrito cuenta con un resumen de la venta, los items agregados y un formulario que se habilita cuando se completan los campos. Los items se pueden remover y ademas se puede vaciar el carrito. El carrito es persistente. Se mantiene por mas que se recargue la pagina. Al final la compra se e una pagina de gracias por tu compra con el nro de orden generado.


(./desktop-preview.png)

# Decisiones tomadas

 - Para obtener tanto las categorias como los productos use un custom hook para aislar ese codigo y no este en el componente.
 - Para obtener un producto en particular en vez de hacer una consulta a firebase con un where, preferi usa el hook creado y filtrar el resultado.
 - Para las ordenes utilice un metodo del firestore para obtener la cantidad de ordenes y asignar ese valor como id a la orden. Tome esta decision ya que las ordenes no se van a eliminar y no tendria repeticion de ordenes.

# Librerias utilizadas

## Swiper
### Link
  Swiper -  https://swiperjs.com/
### Decision de uso
  La desicion de usarlo fue mas decorativo. No afecta al funcionamiento. Ani vel diseño me parecio que le faltaban cosas a la home. En un principio lo pense para hacer un carrouse de productos perro no pude hacer que funcione.

## Run Locally

Clone the project

```bash
  git clone https://github.com/ldaltamirano/Coderhouse.git
```

Go to the project directory

```bash
  cd /React/ProyectoFinal-Altamirano/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
