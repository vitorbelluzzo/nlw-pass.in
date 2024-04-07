import fastify from "fastify";

const app = fastify();

app.get('/', () => {
  return 'Hello World';
})

app.post('/events',(request, reply) => {
  console.log(request.body);
  
})

app.listen({ port: 3333 }).then(() => {
  console.log('http server running!');
})


