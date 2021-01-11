let id
let data
let keys = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

$(document).ready(function() {
    populate()
})

populate = () => {
    id = sessionStorage.getItem('idNumber')
    data = JSON.parse(sessionStorage.getItem('data'))

    if (id != 0)
        for (let i = 0; i < 7; i++)
            if (data[id - 1][keys[i]] != null)
                document.getElementById(`field${i+1}`).value = data[id - 1][keys[i]]

}