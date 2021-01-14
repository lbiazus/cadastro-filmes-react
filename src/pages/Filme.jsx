import React, { useState, useEffect } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Secao from '../components/Section';
import Cadastro from '../filme/Cadastro';
import Listagem from '../filme/Listagem';
//import { filmes } from '../util/constantes';
import FilmeAPI from '../services/filmes';

const Filme = props => {

    const [filmes, setFilmes] = useState([]);
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();

    useEffect(() => {
        console.log("Passou pelo useEffect")
        carregarFilmes();
    }, []);

    useEffect(() => {
        console.log("FilmeEmEdicao no Update", filmeEmEdicao);

        return () => console.log("Encerrou o componente");
    }, [filmeEmEdicao])

    /* componentDidMount() {
        this.carregarFilmes();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filmeEmEdicao === this.state.filmeEmEdicao && 
            prevState.filmes === this.state.filmes) {
            return;
        }

        console.log("this.state.filmeEmEdicao no Update", this.state.filmeEmEdicao);
    } */

    const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        setFilmes(filmes);
    }

    function editarFilme(filme) {
        setFilmeEmEdicao(filme);
    }

    const excluirFilme = (filme) => {
        FilmeAPI.excluirFilme(filme.id).then(() => carregarFilmes());
    }

    const salvarFilme = filme => {
        if (filme.id) {
            FilmeAPI.atualizarFilme(filme).then(() => {
                carregarFilmes();
                setFilmeEmEdicao(null);
            });
            return;
        }

        FilmeAPI.inserirFilme(filme).then(() => {
            carregarFilmes();
            setFilmeEmEdicao(null);
        });
    }

    const limparFilmeEmEdicao = () => {
        console.log("filmeEmEdicao ", filmeEmEdicao);
        setFilmeEmEdicao(null);
    }

    return (
        <>
            <EstruturaDaPagina title="Filmes" subtitulo="Teste">
                <Secao titulo="Cadastro de Filmes">
                    <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmeEmEdicao} />
                </Secao>
                <Secao titulo="Listagem de Filmes">
                    <Listagem filmes={filmes} editar={editarFilme} excluirFilme={excluirFilme}/>
                </Secao>
            </EstruturaDaPagina>
        </>
    )
}

export default Filme;