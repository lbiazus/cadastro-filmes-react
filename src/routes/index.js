import Filme from "../pages/Filme";
import PageCadastroFilme from "../pages/filme/PageCadastroFilme";
import PageListaFilme from "../pages/filme/PageListaFilme";

const routes = [
    {
        path: '/filmes',
        component: Filme,
        exact: true
    },
    {
        path: '/filmes/cadastro/:id?',
        component: PageCadastroFilme
    },
    {
        path: '/filmes/listagem',
        component: PageListaFilme
    }
]

export default routes;