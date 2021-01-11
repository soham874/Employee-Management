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

let heading = ["First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation"]
let keyNames = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

let output = '<table>'

$(document).ready(function() {
    loadTable(data)
})

function loadTable(json) {

    let rows = json.length
    let columns = Object.keys(json[0]).length //7 columns

    document.getElementById("info").innerHTML = `${rows} entries found!`

    //adding table headings
    output += '<tr>'
    for (let i = 0; i < columns; i++) {
        output += `<th>${heading[i]}</th>`
    }
    output += '</tr>'

    //adding table rows
    for (let i = 0; i < rows; i++) {
        output += '<tr>'

        for (let j = 0; j < columns; j++) {
            output += `<td>${json[i][keyNames[j]]}</td>`
        }

        //adding edit icon
        output += `<td><img class="icon" id="edit${i+1}" src="../assets/ButtonAsset1.png" onclick="clicked(id)"></button></td>`

        //adding delete icon
        output += `<td><img class="icon" id="delete${i+1}" src="../assets/ButtonAsset2.png" onclick="clicked(id)"></button></td>`

        output += '</tr>'
    }

    output += '</table>'
    document.getElementById('dvTable').innerHTML = output
}

clicked = (elemId) => {
    sessionStorage.setItem('idNumber', elemId.split('edit')[1] * 1)
    sessionStorage.setItem('data', data)
    window.open("../html/AddEdit.html", "_self")
}