let id
let data
let keys = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]
let heading = ["First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation"]

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

        $(`#field${i+1}`).css({ "background-color": "#ffffff", "transition": "all 0.4s" })
        document.getElementById(`fieldres${i+1}`).innerHTML = ""

        let pattern = document.getElementById(`field${i+1}`).value

        if (pattern.length == 0 && i != 5) {
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:red;transition:0.5s">${heading[i]} cannot be left empty!</div>`
        } else if ((!regexArray[i].test(pattern) && i != 5) || (i == 5 && pattern.length != 0 && !regexArray[i].test(pattern))) {
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:red;transition:0.5s">${heading[i]} information does not match!</div>`
        } else if ((i != 5) || (i == 5 && pattern.length != 0)) {
            $(`#field${i+1}`).css({ "background-color": "#EDFDF9", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:green;transition:0.5s">${heading[i]} is acceptable!</div>`
        }

    }
}