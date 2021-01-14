import { createServer, Model } from "miragejs";
import * as baseendpoints from './baseendpoints';
import { filmes } from '../util/constantes';

export function criarServidor({ environment = "test" } = {}) {
  const server = createServer({
    environment,

    models: {
      filme: Model,
    },

    seeds(server) {
        filmes.forEach(filme => server.create("filme", filme));
    },

    routes() {
      this.namespace = baseendpoints.CADFILMES_API;

      this.get("/filmes", schema => schema.filmes.all().models);

      this.get("/filmes/:id", (schema, request) => {
        const id = request.params.id;

        return schema.filmes.find(id).attrs;
      });

      //let newId = 3
      this.post("/filmes", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        //attrs.id = newId++
        
        return schema.filmes.create(attrs);
      });

      this.put("/filmes", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        
        return schema.filmes.create(attrs);
      });

      this.delete("/filmes/:id", (schema, request) => {
        const id = request.params.id;

        return schema.filmes.find(id).destroy();
      });
    },
  });

  return server;
}


// To increment the id for each user inserted,
// Mirage auto creates an id as string if you don't pass one
/* let newId = 3
this.post("/users", (schema, request) => {
  const attrs = JSON.parse(request.requestBody);
  attrs.id = newId++
  
  return schema.users.create(attrs);
}); */