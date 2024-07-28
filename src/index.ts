import { BASE_URL } from "./constants";

async function getData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Exemplo de uso
getData(BASE_URL)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });