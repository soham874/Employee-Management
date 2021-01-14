let data
let id = 0

let heading = ["S. No.", "First Name", "Last Name", "Email ID", "Phone number", "Company", "Salary", "Designation", "Edit", "Delete"]
let keyNames = ["firstName", "lastName", "email", "mobile", "companyName", "salary", "designation"]

let output = '<table>'

$(document).ready(function() {
    connectAndLoad()
})

connectAndLoad = () => {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/employee/read",
        success: (retrivedInfo) => {
            try {
                if (retrivedInfo.data.length != 0)
                    loadTable(retrivedInfo.data)
                else
                    document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">No data found in record!</h1>'

                sessionStorage.setItem('data', JSON.stringify(retrivedInfo.data))
                sessionStorage.setItem('keys', keyNames)
            } catch {
                document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">Error in loading database!</h1>'
            }
        },
        error: () => {
            document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">Fatal internal server error!</h1>'
        }
    })
}

loadTable = (json) => {

    let rows = json.length
    let columns = keyNames.length

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
        output += `<td><button class="icon" id="delete${i+1}" onclick="deleteDoc(id)"><img src="../assets/ButtonAsset2.svg"></button></td>`

        output += '</tr>'
    }

    output += '</table>'


    document.getElementById('dvTable').innerHTML = output

}

clicked = (elemId) => {

    sessionStorage.setItem('idNumber', elemId.split('edit')[1] * 1)

    window.open("../html/AddEdit.html", "_self")
}

deleteDoc = (elemNo) => {

}