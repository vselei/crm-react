import { editClient } from '../data/clients';

export const loader = async ({ params }) => {
  const client = await editClient(params.clientId);

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Usuário não encontrado'
    });
  }

  return client;
};

const EditClient = () => {
  return <h1>Hello</h1>;
};

export default EditClient;
