import { Servico } from "../types/servico";

type Props = {
    tema: string;
    onEditarServico: (servico: Servico) => void;
}

export default function ListaServicos({ tema, onEditarServico }: Props) {
    // Dados de exemplo - serão substituídos por dados reais posteriormente
    const servicos: Servico[] = [
        {
            id: 1,
            nome: "Banho e Tosa",
            preco: 80.00,
            tipo: "Higiene"
        },
        {
            id: 2,
            nome: "Consulta Veterinária",
            preco: 150.00,
            tipo: "Saúde"
        }
    ];

    return (
        <div className="w-full px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Lista de Serviços</h2>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {servicos.map((servico) => (
                            <tr key={servico.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{servico.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{servico.tipo}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    R$ {servico.preco.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => onEditarServico(servico)}
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