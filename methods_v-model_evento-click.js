const app = new Vue({
  //instanciar vue
  el: '#app', //detectar id desde index
  data: {
    titulo: 'este es un texto vue', //viajara al html para que sea dinámico

    productos: [
      {
        nombre: 'calefon',
        cantidad: 0,
      },
      {
        nombre: 'bisagra',
        cantidad: 10,
      },
      {
        nombre: 'clavos',
        cantidad: 800,
      },
    ],
    nuevoProducto: '', //viajara a index
    total: 0,
  },
  methods: {
    //funciones que necesaitamos en vue
    agregarProducto() {
      this.productos.push({
        //siempre agregar this para acceder a elemento de data
        nombre: this.nuevoProducto,
        cantidad: 0,
      })
      this.nuevoProducto = '' //para limpiar el input
    },
  },
  
  computed: { //debe ir separado de methods
      sumarProductos() {
        this.total = 0
        for (producto of this.productos) {
          this.total = this.total + producto.cantidad
        }
        return this.total
      },
    },
})
