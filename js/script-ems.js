
// GET ELEMENT BY ID
const $ = (id) => document.getElementById(id)

// CREATE AN ARRAY OF EMPLOYEES
emplArray = [["12345678", "Clara Bolton", "0121", "c@last.com", "Administrative"],
             ["23456789", "Ida May", "0122", "i@last.com", "Engineering"],
             ["01234567", "Bertha Tanner", "0123", "b@last.com", "Executive"],
             ["90123456", "Minnie Gonzalez", "0124", "m@last.com", "Marketing"],
             ["89012345", "Anna Wong", "0125", "a@last.com", "Quality Assurance"]]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
console.log(`session`)
console.log(JSON.parse(sessionStorage.getItem('employees')))
if (localStorage.employees) {
    emplArray = JSON.parse(localStorage.getItem('employees'))
} 

// GET DOM ELEMENTS
let form = $('addForm')
let tabl= $('empTable')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = $('empCount')
count.innerHTML = 0;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    //id, name, extension, email, department
    let idVal = $('id').value
    let nameVal = $('name').value
    let extVal = $('extension').value
    let emailVal = $('email').value
    let deptVal = $('department').value


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    singleEmp = [idVal, nameVal, extVal, emailVal, deptVal]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    emplArray.push(singleEmp)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()


      
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    console.log(e.target)
    if(e.target.id == "delete-btn") {
        if (confirm("Do you really want to remove the employee?") == true) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowToRemove = e.target.parentNode.parentNode.rowIndex 
            console.log(rowToRemove)

            // REMOVE EMPLOYEE FROM ARRAY
            emplArray.splice(rowToRemove - 1, 1)
            
            //DECREMENT EMPLOYEE COUNT
            count.innerHTML = parseInt(count.innerHTML) - 1;

        }    
        console.log(emplArray)

        // BUILD THE GRID
        buildGrid()

    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let tbodyEl = tabl.lastElementChild
    tbodyEl.remove()

    // REBUILD THE TBODY FROM SCRATCH
    let tbodyNew = document.createElement('tbody');


    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (emp of emplArray ) {
        var tr = document.createElement('tr');


        // REBUILDING THE ROW STRUCTURE
        for (let i = 0; i < emp.length; i++) {
            let cellVal = emp[i]
            var td = document.createElement('td');
            td.innerHTML = cellVal
            tr.appendChild(td)
        }

        // add delete button
        var buttonCell = document.createElement('td');
        let delBtn = document.createElement('button')
        delBtn.setAttribute('id', 'delete-btn')
        delBtn.setAttribute('class', 'btn btn-dark')
        delBtn.innerText = "X"
        buttonCell.appendChild(delBtn)
        tr.appendChild(buttonCell)

        tbodyNew.appendChild(tr)
    }
    
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbodyNew);

    // UPDATE EMPLOYEE COUNT
    count.innerHTML = emplArray.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(emplArray))


};

