import axios from 'axios'

const sendDataToAPi = (username, password) => {

    const apiUrl = 'HTTP/POST/...blabla'
    const requestedData = {
        username: username,
        password: password
    }
}

axios.post(apiUrl, requestedData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })