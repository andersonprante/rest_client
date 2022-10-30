
const input = document.querySelector('#url')
const response = document.querySelector('#response')

const makeRequest = async () => {
    response.innerHTML = ''
    url = input.value
    const options = {
        mode: 'cors',
    }
    const result = await fetch(url, options).then(response => response.text())
    response.innerHTML = result
}

