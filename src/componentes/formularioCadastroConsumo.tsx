import { useState } from "react";
import { Consumo, TipoConsumo } from "../types/consumo";
import { Cliente } from "../types/cliente";
import { Pet } from "../types/pet";
import { Produto } from "../types/produto";
import { Servico } from "../types/servico";

type Props = {
    tema: string;
    onSubmit: (consumo: Consumo) => void;
}

export default function FormularioCadastroConsumo({ tema, onSubmit }: Props) {
    const [consumo, setConsumo] = useState<Consumo>({
        cliente: {} as Cliente,
        pet: {} as Pet,
        tipo: "produto",
        quantidade: 1,
        data: new Date(),
        valor: 0
    });

    const [clientes] = useState<Cliente[]>([
        { id: 1, nome: "João Silva", cpf: "123.456.789-00", rg: "12.345.678-9", dataCadastro: new Date(), telefone: "(11) 99999-9999" },
        { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", rg: "98.765.432-1", dataCadastro: new Date(), telefone: "(11) 98888-8888" }
    ]);

    const [pets] = useState<Pet[]>([
        { id: 1, nome: "Rex", tipo: "Cachorro", raca: "Labrador", genero: "Macho", dono: { id: 1, nome: "João Silva", cpf: "123.456.789-00", rg: "12.345.678-9", dataCadastro: new Date(), telefone: "(11) 99999-9999" } },
        { id: 2, nome: "Luna", tipo: "Gato", raca: "Siamês", genero: "Fêmea", dono: { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", rg: "98.765.432-1", dataCadastro: new Date(), telefone: "(11) 98888-8888" } }
    ]);

    const [produtos] = useState<Produto[]>([
        { id: 1, nome: "Ração Premium", preco: 89.90, quantidade: 50 },
        { id: 2, nome: "Shampoo para Cães", preco: 45.00, quantidade: 30 }
    ]);

    const [servicos] = useState<Servico[]>([
        { id: 1, nome: "Banho e Tosa", preco: 80.00, tipo: "Higiene" },
        { id: 2, nome: "Consulta Veterinária", preco: 150.00, tipo: "Saúde" }
    ]);

    const [petsDoCliente, setPetsDoCliente] = useState<Pet[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === "cliente") {
            const clienteId = parseInt(value);
            const cliente = clientes.find(c => c.id === clienteId);
            const petsDoCliente = pets.filter(p => p.dono.id === clienteId);
            
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                cliente: cliente || {} as Cliente,
                pet: {} as Pet
            }));
            setPetsDoCliente(petsDoCliente);
        } else if (name === "pet") {
            const petId = parseInt(value);
            const pet = petsDoCliente.find(p => p.id === petId);
            
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                pet: pet || {} as Pet
            }));
        } else if (name === "tipo") {
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                tipo: value as TipoConsumo,
                produto: undefined,
                servico: undefined,
                valor: 0
            }));
        } else if (name === "produto") {
            const produtoId = parseInt(value);
            const produto = produtos.find(p => p.id === produtoId);
            
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                produto,
                servico: undefined,
                valor: produto ? produto.preco * prevConsumo.quantidade : 0
            }));
        } else if (name === "servico") {
            const servicoId = parseInt(value);
            const servico = servicos.find(s => s.id === servicoId);
            
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                servico,
                produto: undefined,
                valor: servico ? servico.preco * prevConsumo.quantidade : 0
            }));
        } else if (name === "quantidade") {
            const quantidade = parseInt(value);
            const valor = consumo.tipo === "produto" && consumo.produto
                ? consumo.produto.preco * quantidade
                : consumo.tipo === "servico" && consumo.servico
                    ? consumo.servico.preco * quantidade
                    : 0;
            
            setConsumo(prevConsumo => ({
                ...prevConsumo,
                quantidade,
                valor
            }));
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(consumo);
    }

    return (
        <div className="w-full px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Registrar Consumo</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="cliente" className="block text-sm font-medium text-gray-700 mb-1">
                        Cliente
                    </label>
                    <select
                        id="cliente"
                        name="cliente"
                        value={consumo.cliente.id || ""}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecione um cliente</option>
                        {clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="pet" className="block text-sm font-medium text-gray-700 mb-1">
                        Pet
                    </label>
                    <select
                        id="pet"
                        name="pet"
                        value={consumo.pet.id || ""}
                        onChange={handleChange}
                        required
                        disabled={!consumo.cliente.id}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecione um pet</option>
                        {petsDoCliente.map(pet => (
                            <option key={pet.id} value={pet.id}>
                                {pet.nome} ({pet.tipo})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Consumo
                    </label>
                    <select
                        id="tipo"
                        name="tipo"
                        value={consumo.tipo}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="produto">Produto</option>
                        <option value="servico">Serviço</option>
                    </select>
                </div>

                {consumo.tipo === "produto" ? (
                    <div className="mb-4">
                        <label htmlFor="produto" className="block text-sm font-medium text-gray-700 mb-1">
                            Produto
                        </label>
                        <select
                            id="produto"
                            name="produto"
                            value={consumo.produto?.id || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Selecione um produto</option>
                            {produtos.map(produto => (
                                <option key={produto.id} value={produto.id}>
                                    {produto.nome} - R$ {produto.preco.toFixed(2)}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="mb-4">
                        <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
                            Serviço
                        </label>
                        <select
                            id="servico"
                            name="servico"
                            value={consumo.servico?.id || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Selecione um serviço</option>
                            {servicos.map(servico => (
                                <option key={servico.id} value={servico.id}>
                                    {servico.nome} - R$ {servico.preco.toFixed(2)}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="mb-6">
                    <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-1">
                        Quantidade
                    </label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        value={consumo.quantidade}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valor Total
                    </label>
                    <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                        R$ {consumo.valor.toFixed(2)}
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
} 