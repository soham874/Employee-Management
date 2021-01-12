let id
let data
let keys = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')
const patternLastName = RegExp('^[A-Z][a-z]{2,}$')
const patternEmail = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$')
const patternPhoneNumber = RegExp('^[0-9]{10}$')
const patternCompanyName = RegExp('^[A-Z][a-z]{2,}$')
const patternSalary = RegExp('^[0-9]+$')
const patternDesignation = RegExp('^[A-Z][a-z]{2,}$')

const regexArray = [patternFirstName, patternLastName, patternEmail, patternPhoneNumber, patternCompanyName, patternSalary, patternDesignation]

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

checkInput = () => {

    for (let i = 0; i < 7; i++) {
        let pattern = document.getElementById(`field${i+1}`).value

        if (pattern.length == 0 && i != 5) {
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = '<div style="color:red;transition:0.5s">This field cannot be left empty!!</div>'
        }

        if ((!regexArray[i].test(pattern) && i != 5) || (i == 5 && pattern.length != 0 && !regexArray[i].test(pattern))) {
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = '<div style="color:red;transition:0.5s">This field information does not match!!</div>'
        } else {
            $(`#field${i+1}`).css({ "background-color": "#EDFDF9", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = '<div style="color:green;transition:0.5s">This information is acceptable!!!!</div>'
        }

    }
}