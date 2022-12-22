import axios from 'axios'

const api = axios.create({
    headers: {
      common: {
        "Accept-Encoding": "gzip,deflate,compress"
      }
    }
  })
  

  async function start(){
    let response=await api.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    console.log('burasi sonra calisacak')
  }
  start()