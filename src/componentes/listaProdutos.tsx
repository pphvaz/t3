import { Produto } from "../types/produto";

type Props = {
    tema: string;
    onEditarProduto: (produto: Produto) => void;
}

export default function ListaProdutos({ tema, onEditarProduto }: Props) {
    // Dados de exemplo - serão substituídos por dados reais posteriormente
    const produtos: Produto[] = [
        {
            id: 1,
            nome: "Ração Premium",
            preco: 89.90,
            quantidade: 50
        },
        {
            id: 2,
            nome: "Shampoo para Cães",
            preco: 45.50,
            quantidade: 30
        }
    ];

    return (
        <div className="w-full px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Lista de Produtos</h2>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {produtos.map((produto) => (
                            <tr key={produto.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{produto.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    R$ {produto.preco.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produto.quantidade}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => onEditarProduto(produto)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => {/* Implementar exclusão */}}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
} 