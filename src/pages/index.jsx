import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

export const loader = () => {
  const clients = [
    {
      id: 1,
      name: 'Juan',
      tel: 102013313,
      email: 'juan@juan.com',
      company: 'IBM'
    },
    {
      id: 2,
      name: 'Karen',
      tel: 138198313,
      email: 'karen@juan.com',
      company: 'IBM'
    },
    {
      id: 3,
      name: 'Carlos',
      tel: 31983913,
      email: 'carlos@juan.com',
      company: 'IBM'
    },
    {
      id: 4,
      name: 'Miguel',
      tel: 319381983,
      email: 'miguel@juan.com',
      company: 'IBM'
    },
    {
      id: 5,
      name: 'Pedro',
      tel: 1398198938,
      email: 'pedro@juan.com',
      company: 'IBM'
    }
  ];

  return clients;
};

const Index = () => {
  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administrar seus Clientes</p>
      <div className='overflow-x-auto'>
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
