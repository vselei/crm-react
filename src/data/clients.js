export const getClients = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();

  return result;
};

export const editClient = async id => {
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
