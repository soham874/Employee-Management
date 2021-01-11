let id
let data

$(document).ready(function() {

    id = sessionStorage.getItem('idNumber')
    data = sessionStorage.getItem('data')

    if (id != 0)
        populate()
})

populate = () => {

}