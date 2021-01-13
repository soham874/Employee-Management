let data
let id = 0

let heading = ["S. No.", "First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation", "Edit", "Delete"]
let keyNames = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

let output = '<table>'

$(document).ready(function() {
    $.getJSON('../JSON/data.json', function(data) {
        try {
            if (data.length != 0)
                loadTable(data)
            else
                document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">No data found in record!</h1>'

            sessionStorage.setItem('data', JSON.stringify(data))
            sessionStorage.setItem('keys', keyNames)
        } catch {
            document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">Error in loading database!</h1>'
        }
    });
})

function loadTable(json) {

    let rows = json.length
    let columns = Object.keys(json[0]).length //7 columns

    //adding table headings
    output += '<tr>'
    for (let i = 0; i < heading.length; i++) {
        output += `<th>${heading[i]}</th>`
    }
    output += '</tr>'

    //adding table rows
    for (let i = 0; i < rows; i++) {

        //adding serial number
        output += `<tr><td>${i+1}</td>`

        //adding column data for a particular row
        for (let j = 0; j < columns; j++) {
            let input = json[i][keyNames[j]]
            if (input == null)
                input = 'N/A'
            output += `<td>${input}</td>`
        }

        //adding edit icon
        output += `<td><button class="icon" id="edit${i+1}" onclick="clicked(id)"><img src="../assets/ButtonAsset1.svg"></button></td>`

        //adding delete icon
        output += `<td><button class="icon" id="delete${i+1}"><img src="../assets/ButtonAsset2.svg"></button></td>`

        output += '</tr>'
    }

    output += '</table>'


    document.getElementById('dvTable').innerHTML = output

}

clicked = (elemId) => {

    sessionStorage.setItem('idNumber', elemId.split('edit')[1] * 1)

    window.open("../html/AddEdit.html", "_self")
}