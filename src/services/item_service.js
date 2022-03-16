const apiUrl = process.env.REACT_APP_API;

class ItemService {
  client;

  constructor(client) {
    this.client = client;
  }

  async searchItem(query) {
    const url = `${apiUrl}/api/items?q=${query}`;
    const data = await this.client.makeRequest(url);
    return data;
  }

  async getItem(id) {
    const url = `${apiUrl}/api/items/${id}`;
    const data = await this.client.makeRequest(url);
    return data;
  }
}

export default ItemService