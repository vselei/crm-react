import {
  Form as Formulary,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect
} from 'react-router-dom';

import { getClientById, updateClient } from '../data/clients';

import Form from '../components/Form';
import Error from '../components/Error';

export const loader = async ({ params }) => {
  const client = await getClientById(params.clientId);

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Usuário não encontrado'
    });
  }

  return client;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const { email } = data;

  // Validação
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('Todos os campos são obrigatórios');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push('Email inválido');
  }

  // Retornar dados e erros
  if (Object.keys(errors).length) {
    return errors;
  }

  // Atualizar cliente
  await updateClient(params.clientId, data);

  return redirect('/');
};

const EditClient = () => {
  const navigate = useNavigate();
  const client = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Modificar os dados de um cliente</p>

      <div className="flex justify-end mt-12">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Formulary method="post" noValidate>
          <Form client={client} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer hover:bg-blue-900 transition-colors rounded-md"
            value="Salvar Alterações"
          />
        </Formulary>
      </div>
    </>
  );
};

export default EditClient;
