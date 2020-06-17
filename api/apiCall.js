
const apiCall = (method, url) => (
     fetch(url, {
          method
     }).then(response => response.json())
)

export const subscribeApi = (method, url, data) => (
     fetch(url, {
          method,
          body: JSON.stringify(data),
          headers: {
               "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res => res.json())
        .then(json => console.log(json))
)

export default apiCall;

