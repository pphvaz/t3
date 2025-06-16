import { useState } from "react";
import { Produto } from "../types/produto";

type Props = {
    tema: string;
    produto?: Produto;
    onSubmit: (produto: Produto) => void;
}

export default function FormularioCadastroProduto({ tema, produto: produtoInicial, onSubmit }: Props) {
    const [produto, setProduto] = useState<Produto>(produtoInicial || {
        nome: "",
        preco: 0,
        quantidade: 0
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setProduto(prevProduto => ({
            ...prevProduto,
            [name]: name === 'preco' || name === 'quantidade' ? Number(value) : value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(produto);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">
                {produtoInicial ? 'Editar Produto' : 'Cadastrar Produto'}
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Preço</label>
                    <input
                        type="number"
                        name="preco"
                        step="0.01"
                        min="0"
                        value={produto.preco}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantidade</label>
                    <input
                        type="number"
                        name="quantidade"
                        min="0"
                        value={produto.quantidade}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        {produtoInicial ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </div>
            </form>
        </div>
    );
} 