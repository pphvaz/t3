import { Component } from "react";
import { Pet } from "../types/pet";

type Props = {
    tema: string;
    onEditarPet: (pet: Pet) => void;
}

export default class ListaPets extends Component<Props>{
    render() {
        // Dados de exemplo - serão substituídos por dados reais posteriormente
        const pets: Pet[] = [
            {
                id: 1,
                nome: "Rex",
                tipo: "Cachorro",
                raca: "Labrador",
                genero: "Macho",
                dono: {
                    id: 1,
                    nome: "João Silva",
                    cpf: "123.456.789-00",
                    rg: "12.345.678-9",
                    dataCadastro: new Date("2024-01-01"),
                    telefone: "(11) 99999-9999"
                }
            },
            {
                id: 2,
                nome: "Luna",
                tipo: "Gato",
                raca: "Siamês",
                genero: "Fêmea",
                dono: {
                    id: 2,
                    nome: "Maria Santos",
                    cpf: "987.654.321-00",
                    rg: "98.765.432-1",
                    dataCadastro: new Date("2024-01-02"),
                    telefone: "(11) 98888-8888"
                }
            }
        ];

        return (
            <div className="w-full px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Lista de Pets</h2>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raça</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gênero</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dono</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pets.map((pet) => (
                                <tr key={pet.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pet.nome}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pet.tipo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pet.raca}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pet.genero}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pet.dono.nome}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => this.props.onEditarPet(pet)}
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
} 