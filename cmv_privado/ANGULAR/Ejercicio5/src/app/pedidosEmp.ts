export class PedidosEmp {
    id: number;
    fecha: string;
    importe: number;

    constructor(id: number, fc: string, ip: number) {
        this.id = id;
        this.fecha = fc
        this.importe = ip;
    }

    getImporte() { return this.importe; }

}