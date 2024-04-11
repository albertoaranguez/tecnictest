export class Integrante {
    constructor(
        public DNI: string = "",
        public Nombre: string = "",
        public Apellido: string = "",
        public Edad?: number,
        public Email: string = "",
        public Telefono: string = ""
    ) {}
}
