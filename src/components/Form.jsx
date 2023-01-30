const Form = ({ client }) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="name" className="text-gray-800">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nome da empresa"
          name="name"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="company" className="text-gray-800">
          Empresa:
        </label>
        <input
          type="text"
          id="company"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nome da empresa"
          name="company"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email do cliente"
          name="email"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="tel" className="text-gray-800">
          Telefone:
        </label>
        <input
          type="tel"
          id="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nome do cliente"
          name="tel"
        />
      </div>
      <div>
        <label htmlFor="notes" className="text-gray-800">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notes"
          placeholder="Notas do cliente"
          name="notes"
          className="mt-2 block w-full p-3 bg-gray-50 h-40"
        />
      </div>
    </>
  );
};

export default Form;
