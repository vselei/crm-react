export const getClients = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();

  return result;
};

export const getClientById = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();

  return result;
};

export const postClient = async data => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateClient = async (id, data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const destroyClient = async id => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};
