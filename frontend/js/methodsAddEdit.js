let id
let data
let keys = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]
let heading = ["First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation"]

let submitEditFlag = 0

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
    id = sessionStorage.getItem('id')
    if (id != "create") {
        document.getElementById("headertext").innerHTML = "Edit existing Employee Data"
        submitEditFlag = 1
        $.ajax({
            type: 'POST',
            url: `http://localhost:3000/employee/read/${id}`,
            success: (retrivedInfo) => {
                for (let i = 0; i < 7; i++)
                    if (retrivedInfo.data[0][keys[i]] != null)
                        document.getElementById(`field${i+1}`).value = retrivedInfo.data[0][keys[i]]
            },
            error: () => {
                alert("Failed to autofill form")
            }
        })
    } else
        document.getElementById("headertext").innerHTML = "Add new Employee Data"
}

checkInput = () => {

    let verificationFlag = 0

    for (let i = 0; i < 7; i++) {

        $(`#field${i+1}`).css({ "background-color": "#ffffff", "transition": "all 0.4s" })
        document.getElementById(`fieldres${i+1}`).innerHTML = ""

        let pattern = document.getElementById(`field${i+1}`).value

        if (pattern.length == 0 && i != 5) {
            verificationFlag = 1
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:red;transition:0.5s">${heading[i]} cannot be left empty!</div>`
        } else if ((!regexArray[i].test(pattern) && i != 5) || (i == 5 && pattern.length != 0 && !regexArray[i].test(pattern))) {
            verificationFlag = 1
            $(`#field${i+1}`).css({ "background-color": "#FFEEF0", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:red;transition:0.5s">${heading[i]} information does not match!</div>`
        } else if ((i != 5) || (i == 5 && pattern.length != 0)) {
            $(`#field${i+1}`).css({ "background-color": "#EDFDF9", "transition": "all 0.4s" })
            document.getElementById(`fieldres${i+1}`).innerHTML = `<div style="color:green;transition:0.5s">${heading[i]} is acceptable!</div>`
        }

    }

    if (verificationFlag == 0)
        if (submitEditFlag == 0)
            pushNewData()
        else
            updateData()
}

pushNewData = () => {
    let newData = {}
    for (let i = 0; i < keys.length; i++)
        newData[keys[i]] = document.getElementById(`field${i+1}`).value

    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/employee/create`,
        data: JSON.stringify(newData),
        dataType: "json",
        contentType: "application/json",
        success: (response) => {
            alert(response.message)
            setTimeout(() => { window.open("../html/dashboard.html", "_self") }, 2000)
        },
        error: (error) => { alert(error.message) }
    })


}

updateData = () => {
    let newData = {}
    for (let i = 0; i < keys.length; i++)
        newData[keys[i]] = document.getElementById(`field${i+1}`).value

    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/employee/update/${id}`,
        data: JSON.stringify(newData),
        dataType: "json",
        contentType: "application/json",
        success: (response) => {
            alert(response.message)
            setTimeout(() => { window.open("../html/dashboard.html", "_self") }, 2000)
        },
        error: (error) => { alert(response.message) }
    })
}