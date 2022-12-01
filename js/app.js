
const input = document.querySelector('#url')
const response = document.querySelector('#response')

const makeRequest = async () => {
    response.innerHTML = ''
    url = input.value
    const options = {
        mode: 'no-cors',
    }
    const result = await fetch(url, options).then(response => {
        const r = response.text()
        console.log(r)
        response.innerHTML = result
        return r
    })
    // response.innerHTML = result
}

