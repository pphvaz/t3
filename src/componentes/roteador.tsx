import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroConsumo from "./formularioCadastroConsumo";
import ListaConsumos from "./listaConsumos";
import Relatorios from "./relatorios";
import { Cliente } from "../types/cliente";
import { Pet } from "../types/pet";
import { Produto } from "../types/produto";
import { Servico } from "../types/servico";
import { Consumo } from "../types/consumo";

export default function Roteador() {
    const [tela, setTela] = useState("Clientes-Listar");
    const [cliente, setCliente] = useState<Cliente | undefined>(undefined);
    const [pet, setPet] = useState<Pet | undefined>(undefined);
    const [produto, setProduto] = useState<Produto | undefined>(undefined);
    const [servico, setServico] = useState<Servico | undefined>(undefined);

    const selecionarView = (novaTela: string, evento?: React.MouseEvent) => {
        if (evento) {
            evento.preventDefault();
        }
        setTela(novaTela);
        setCliente(undefined);
        setPet(undefined);
        setProduto(undefined);
        setServico(undefined);
    }

    const handleClienteSubmit = (cliente: Cliente) => {
        // Aqui você implementará a lógica para salvar o cliente
        console.log("Cliente salvo:", cliente);
        selecionarView("Clientes-Listar");
    }

    const handlePetSubmit = (pet: Pet) => {
        // Aqui você implementará a lógica para salvar o pet
        console.log("Pet salvo:", pet);
        selecionarView("Pets-Listar");
    }

    const handleProdutoSubmit = (produto: Produto) => {
        // Aqui você implementará a lógica para salvar o produto
        console.log("Produto salvo:", produto);
        selecionarView("Produtos-Listar");
    }

    const handleServicoSubmit = (servico: Servico) => {
        console.log("Serviço salvo:", servico);
        selecionarView("Servicos-Listar");
    }

    const handleConsumoSubmit = (consumo: Consumo) => {
        console.log("Consumo registrado:", consumo);
        selecionarView("Consumos-Listar");
    }

    const handleEditarCliente = (cliente: Cliente) => {
        setTela("Clientes-Cadastrar");
        setCliente(cliente);
    }

    const handleEditarPet = (pet: Pet) => {
        setTela("Pets-Cadastrar");
        setPet(pet);
    }

    const handleEditarProduto = (produto: Produto) => {
        setTela("Produtos-Cadastrar");
        setProduto(produto);
    }

    const handleEditarServico = (servico: Servico) => {
        setTela("Servicos-Cadastrar");
        setServico(servico);
    }

    const barraNavegacao = <BarraNavegacao tema="purple" seletorView={selecionarView} />;

    if (tela === "Clientes-Listar") {
        return (
            <>
                {barraNavegacao}
                <ListaCliente tema="purple" onEditarCliente={handleEditarCliente} />
            </>
        );
    } else if (tela === "Clientes-Cadastrar") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroCliente tema="purple" cliente={cliente} onSubmit={handleClienteSubmit} />
            </>
        );
    } else if (tela === "Pets-Listar") {
        return (
            <>
                {barraNavegacao}
                <ListaPets tema="purple" onEditarPet={handleEditarPet} />
            </>
        );
    } else if (tela === "Pets-Cadastrar") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroPet tema="purple" pet={pet} onSubmit={handlePetSubmit} />
            </>
        );
    } else if (tela === "Produtos-Listar") {
        return (
            <>
                {barraNavegacao}
                <ListaProdutos tema="purple" onEditarProduto={handleEditarProduto} />
            </>
        );
    } else if (tela === "Produtos-Cadastrar") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroProduto tema="purple" produto={produto} onSubmit={handleProdutoSubmit} />
            </>
        );
    } else if (tela === "Servicos-Listar") {
        return (
            <>
                {barraNavegacao}
                <ListaServicos tema="purple" onEditarServico={handleEditarServico} />
            </>
        );
    } else if (tela === "Servicos-Cadastrar") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroServico tema="purple" servico={servico} onSubmit={handleServicoSubmit} />
            </>
        );
    } else if (tela === "Consumos-Listar") {
        return (
            <>
                {barraNavegacao}
                <ListaConsumos tema="purple" />
            </>
        );
    } else if (tela === "Consumos-Registrar") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroConsumo tema="purple" onSubmit={handleConsumoSubmit} />
            </>
        );
    } else if (tela === "Relatorios-Relatorios") {
        return (
            <>
                {barraNavegacao}
                <Relatorios tema="purple" />
            </>
        );
    } else {
        return (
            <>
                {barraNavegacao}
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Página em desenvolvimento</h2>
                    <p>Esta funcionalidade está sendo implementada.</p>
                </div>
            </>
        );
    }
}