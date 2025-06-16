import { useState } from "react";
import { Cliente } from "../types/cliente";

type Props = {
    tema: string;
    cliente?: Cliente;
    onSubmit: (cliente: Cliente) => void;
}

export default function FormularioCadastroCliente({ tema, cliente: clienteInicial, onSubmit }: Props) {
    const [cliente, setCliente] = useState<Cliente>(
        clienteInicial || {
            nome: "",
            cpf: "",
            rg: "",
            dataCadastro: new Date(),
            telefone: ""
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCliente(prevCliente => ({
            ...prevCliente,
            [name]: value
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(cliente);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">
                {clienteInicial ? 'Editar Cliente' : 'Cadastrar Cliente'}
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={cliente.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">RG</label>
                    <input
                        type="text"
                        name="rg"
                        value={cliente.rg}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                        type="tel"
                        name="telefone"
                        value={cliente.telefone}
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
                        {clienteInicial ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </div>
            </form>
        </div>
    );
}