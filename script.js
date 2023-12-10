 const form = document.getElementById('data');

        const tbody = document.getElementById('table');

        form.addEventListener('submit', function(e){
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
            const address = document.getElementById('address').value;
                    const code = document.getElementById('code').value;

            const gender= document.getElementById("gender");
            const foods = document.getElementById('foods').value;
                        const state = document.getElementById('state').value;
                        const country= document.getElementById('country').value;


        const newRow = tbody.insertRow();
    
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.textContent = firstName;
        cell2.textContent = lastName;
            cell3.textContent = address;
                    cell4.textContent = code;

        cell5.textContent = gender;
        cell6.textContent = foods;
        cell7.textContent = state;
        cell8.textContent = country;

        form.reset();
        });
      