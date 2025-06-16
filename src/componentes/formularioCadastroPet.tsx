import { useState } from "react";
import { Pet } from "../types/pet";
import { Cliente } from "../types/cliente";

type Props = {
    tema: string;
    pet?: Pet;
    onSubmit: (pet: Pet) => void;
}

// Dados de exemplo - serão substituídos por dados reais posteriormente
const clientesExemplo: Cliente[] = [
    {
        id: 1,
        nome: "João Silva",
        cpf: "123.456.789-00",
        rg: "12.345.678-9",
        dataCadastro: new Date("2024-01-01"),
        telefone: "(11) 99999-9999"
    },
    {
        id: 2,
        nome: "Maria Santos",
        cpf: "987.654.321-00",
        rg: "98.765.432-1",
        dataCadastro: new Date("2024-01-02"),
        telefone: "(11) 98888-8888"
    }
];

export default function FormularioCadastroPet({ tema, pet: petInicial, onSubmit }: Props) {
    const [pet, setPet] = useState<Pet>(petInicial || {
        nome: "",
        tipo: "",
        raca: "",
        genero: "",
        dono: clientesExemplo[0] // Seleciona o primeiro cliente como padrão
    });
    const [clientes] = useState<Cliente[]>(clientesExemplo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        if (name === 'dono') {
            const donoSelecionado = clientes.find(cliente => cliente.id === Number(value));
            if (donoSelecionado) {
                setPet(prevPet => ({
                    ...prevPet,
                    dono: donoSelecionado
                }));
            }
        } else {
            setPet(prevPet => ({
                ...prevPet,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(pet);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">
                {petInicial ? 'Editar Pet' : 'Cadastrar Pet'}
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={pet.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo</label>
                    <select
                        name="tipo"
                        value={pet.tipo}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    >
                        <option value="">Selecione um tipo</option>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Ave">Ave</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Raça</label>
                    <input
                        type="text"
                        name="raca"
                        value={pet.raca}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Gênero</label>
                    <select
                        name="genero"
                        value={pet.genero}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    >
                        <option value="">Selecione um gênero</option>
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Dono</label>
                    <select
                        name="dono"
                        value={pet.dono.id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    >
                        {clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>
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
                        {petInicial ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </div>
            </form>
        </div>
    );
} 