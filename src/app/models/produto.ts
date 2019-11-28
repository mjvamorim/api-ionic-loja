export class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria_id: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
