export const getUser = (id, callback) => {
    fetch("https://reqres.in/api/users/"+id)
        .then(res => res.json())
        .then(json => callback(json.data.email));
}
