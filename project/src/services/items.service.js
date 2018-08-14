export const getAll = () => {
    return fetch('http://localhost:1337/list/').then((response) => {
        if(response.statusText === 'OK') {
            console.log(response.message);
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .catch(function(e) {
        console.log("handled the error");
    });
}

export const get = (id) => {
    return fetch(`http://localhost:1337/list/${id}`).then((response) => {
        if(response.statusText === 'OK') {
        return response.json();
    }
    throw new Error('Network response was not ok.');
    });
}

export const update = (id, details) => {
    return fetch(`http://localhost:1337/list/${id}`, { 
        method: 'PUT', 
        body: JSON.stringify(details),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (id) => {
    return fetch(`http://localhost:1337/list/${id}`, { 
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const add = (details) => {
    return fetch('http://localhost:1337/add', { 
        method: 'POST',
        body: JSON.stringify(details),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}