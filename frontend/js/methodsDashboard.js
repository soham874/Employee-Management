let data = [{
    "firstName": "Soham",
    "lastName": "Choudhury",
    "email": "soham874@gmail.com",
    "mobile": 9002832439,
    "companyName": "Bridgelabz",
    "salary": 1000,
    "designation": "Student",
}, {
    "firstName": "Rakesh",
    "lastName": "Sharma",
    "email": "sharmarakesh@gmail.com",
    "mobile": 9932629575,
    "companyName": "Nasa",
    "designation": "Engineer",
}, {
    "firstName": "Ravi",
    "lastName": "Sashtri",
    "email": "something@gmail.com",
    "mobile": 9873764563,
    "companyName": "Bcci",
    "salary": 100000,
    "designation": "Coach"
}, {
    "firstName": "Virat",
    "lastName": "Kohli",
    "email": "captain@gmail.com",
    "mobile": 8523697412,
    "companyName": "Bcci",
    "salary": 34567,
    "designation": "Batsman"
}, {
    "firstName": "Bappi",
    "lastName": "Lahiri",
    "email": "bappilahirirockz@gmail.com",
    "mobile": 9878909876,
    "companyName": "Bollywood",
    "salary": 50000,
    "designation": "Singer"
}]

let id = 0
let flag = 0

let heading = ["S. No.", "First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation", "Edit", "Delete"]
let keyNames = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

let output = '<table>'

$(document).ready(function() {
    loadTable(data)
})

function loadTable(json) {

    let rows = json.length
    let columns = Object.keys(json[0]).length //7 columns

    //adding table headings
    output += '<tr>'
    for (let i = 0; i < columns + 3; i++) {
        output += `<th>${heading[i]}</th>`
    }
    output += '</tr>'

    //adding table rows
    for (let i = 0; i < rows; i++) {
        flag = 1
        output += `<tr><td>${i+1}</td>`

        for (let j = 0; j < columns; j++) {
            let input = json[i][keyNames[j]]
            if (input == null)
                input = 'N/A'
            output += `<td>${input}</td>`
        }

        //adding edit icon
        output += `<td><button class="icon" id="edit${i+1}" onclick="clicked(id)"><img src="../assets/ButtonAsset1.png"></button></td>`

        //adding delete icon
        output += `<td><button class="icon" id="delete${i+1}"><img src="../assets/ButtonAsset2.png"></button></td>`

        output += '</tr>'
    }

    output += '</table>'


    document.getElementById('dvTable').innerHTML = output

}

clicked = (elemId) => {

    sessionStorage.setItem('idNumber', elemId.split('edit')[1] * 1)
    sessionStorage.setItem('data', JSON.stringify(data))
    sessionStorage.setItem('keys', keyNames)
    window.open("../html/AddEdit.html", "_self")
}