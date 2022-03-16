export default class HTTPClientWrapper {
    handleErrors(response) {
      if (!response.ok) {
        if (response.status == 404)
          throw Error(`Error: No se pudo acceder a la url ${response.url}`)
        else if (response.status == 500)
          throw Error(`Error: la petición falló en el servidor de destino al tratar de acceder a la url ${response.url}`)
        else
          throw Error(`Error: se obtuvo un error inesperado al tratar de acceder a la url ${response.url}`)
      }
      return response
    }
  
    makeJsonRequest(url) {
      return fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
    }
  }