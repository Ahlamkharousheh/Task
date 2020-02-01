

export async function getData(url) {
    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }
    let response = await fetch(url, options);
    return await response.json();
}

export async function postData(url, data) {
    let options = {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let response = await fetch(url, options);
    return await response.json();
}