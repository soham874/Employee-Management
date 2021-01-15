let dataSet
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
                dataSet = retrivedInfo.data
                if (dataSet.length != 0)
                    loadTable(dataSet)
                else
                    document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">No data found in record!</h1>'
            } catch {
                document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">Error in loading database!</h1>'
            }
        },
        error: () => {
            document.getElementById('dvTable').innerHTML = '<h1 style="text-align:center;">Fatal server error!</h1>'
            $("#edit0").css("display", "none")
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
        output += `<td><button class="icon" id="${dataSet[i]._id}" onclick="clicked(id)"><img src="../assets/ButtonAsset1.svg"></button></td>`

        //adding delete icon
        output += `<td><button class="icon" id="${dataSet[i]._id}" onclick="deleteDoc(id)"><img src="../assets/ButtonAsset2.svg"></button></td>`

        output += '</tr>'
    }

    output += '</table>'

    document.getElementById('dvTable').innerHTML = output

}

clicked = (elemId) => {

    sessionStorage.setItem('id', elemId)
    window.open("../html/AddEdit.html", "_self")
}

deleteDoc = (elemNo) => {

    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/employee/delete/${elemNo}`,
    })

    window.open("../html/dashboard.html", "_self")
}