import {
  useNavigate,
  Form as Formulary,
  useActionData
} from 'react-router-dom';

import Form from '../components/Form';
import Error from '../components/Error';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  // Validação
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('Todos os campos são obrigatórios');
  }

  // Retornar dados e erros
  if (Object.keys(errors).length) {
    return errors;
  }

  return null;
};

const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Novo Cliente</h1>
      <p className="mt-3">
        Preencha todos os campos para registrar um novo cliente
      </p>

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
        <Formulary method="post" action="">
          <Form />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer hover:bg-blue-900 transition-colors rounded-md"
            value="Registrar Cliente"
          />
        </Formulary>
      </div>
    </>
  );
};

export default NewClient;
