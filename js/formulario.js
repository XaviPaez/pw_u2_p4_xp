const arreglo = [




]


const app = Vue.createApp({

    data() {
        return {
            miarregloFutbolista: arreglo,
            nombre: '',
            apellido: '',
            club: '',
            nacionalidad: ''
        }
    },
    methods: {
        agregarFutbolista() {
            const nuevoFutbolista = {
                nombre: this.nombre,
                apellido: this.apellido,
                club: this.club,
                nacionalidad: this.nacionalidad

            }
            this.miarregloFutbolista.unshift(nuevoFutbolista)
            this.nombre = ''
            this.apellido = ''
            this.club = ''
            this.nacionalidad = ''
        }
    }
})

app.mount('#appForm')




