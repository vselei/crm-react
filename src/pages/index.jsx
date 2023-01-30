import { useLoaderData } from 'react-router-dom';

import { getClients } from '../data/clients.jsx';

import Client from '../components/Client';

export const loader = () => {
  const clients = getClients();
  
  return clients;
};

const Index = () => {
  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administrar seus Clientes</p>
      <div className="overflow-x-auto">
        {clients.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Cliente</th>
                <th className="p-2">Contato</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <Client key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">Não possui clientes</p>
        )}
      </div>
    </>
  );
};

export default Index;
