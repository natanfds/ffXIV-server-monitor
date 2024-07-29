import cheerioModule from "cheerio";
import { BASE_URL, SELECTOR } from "./constants";


async function getData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
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
    const $ = cheerioModule.load(data);
    const serversElements = $(SELECTOR);
    for(const el of serversElements){
      const element = cheerioModule(($(el)));
      const [server, status] = element.find('p').text().split(/(?=[A-Z])/);;
      const characterCreation = element.find('div.world-list__create_character > i').attr("data-tooltip");
      console.log({server, status, characterCreation});
    }
  })
  .catch((error) => {
    console.error(error);
  });
