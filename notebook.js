//Submit button
const addClient = document.getElementById("add_client");
const newToDo = document.getElementById("add_Todo");

//To clear form after submitting
const form = document.querySelector("form")

//create an array to store the values
//for client form
let clientArray = JSON.parse(localStorage.getItem("clients")) || [];

//for To-do list form
let todoArray = JSON.parse(localStorage.getItem("todos")) || [];;


//The Submit Button

//for client form
if(addClient) {
    addClient.addEventListener("click", function(e) {
    console.log("This button was clicked")
    e.preventDefault();
const clientName = document.getElementById("potential_client").value;
const clientNumber = document.getElementById("client_number").value;
const aboutClient = document.getElementById("comment_about_client").value;
const clientResponse = document.getElementById("client_response").value;
const platform = document.querySelector('input[name="social_media"]:checked').value;
const status = document.querySelector('input[name="rejected_hired"]:checked').value;

    const client = {
           Name: clientName,
           Number: clientNumber,
           Comment: aboutClient,
           Response: clientResponse,
           socialMedia: platform,
           ResponseStatus: status,
           Date: new Date().toLocaleDateString("en-GB")
   };
   clientArray.push(client);
   
   localStorage.setItem("clients", JSON.stringify(clientArray));
   
   alert("Submitted Successfully");
   form.reset();
   
});
};

//for to-do list button
if(newToDo) {
    newToDo.addEventListener("click", function(e) {
    console.log("This button was clicked");
    e.preventDefault();
    //for to-do list form
 const numOfClient = document.getElementById("number_of_clients").value;
 const platform = document.querySelector('input[name="social_media"]:checked').value;
const platformUsername = document.getElementById("social_media_username").value;
const phoneNumber = document.getElementById("client_phone").value;
     const to_do = {
         NumberofClient: numOfClient,
         socialMedia: platform,
         socialMediaUsername: platformUsername,
         phone: phoneNumber,
         Date: new Date().toLocaleDateString("en-GB")
     };
     todoArray.push(to_do);
     localStorage.setItem("todos", JSON.stringify(todoArray));
     alert("Submitted Successfully");
     form.reset();
});
};


//For Home page
//Total Clients 
const  totalClients = document.querySelector(".total_clients_info");
//Hired Clients
const hiredClients = clientArray.filter(function(client) {
        return client.ResponseStatus === "hired";
    });
//Rejected Client 
const rejectedClients = clientArray.filter(function(client) {
        return client.ResponseStatus === "rejected";
    });

if(totalClients) {
    totalClients.innerHTML = `<h3>Total Clients Reached: ${todoArray.length}</h3> <p>Total Clients Hired: ${hiredClients.length}</p> <p>Total Clients Rejected: ${rejectedClients.length}</p>`;
};

//Others
const orderedClients = document.querySelector(".client_order");
const totalToDo = document.querySelector(".to_do");

if(orderedClients) {
    //Current hired client
    if(hiredClients.length > 0) {
        const latestHiredClient = hiredClients[hiredClients.length - 1];
    //Displaying the data
    orderedClients.innerHTML = `<h3>Client Name: ${latestHiredClient.Name}</h3> <p>Client Number: ${latestHiredClient.Number}</p> <p>Status: ${latestHiredClient.ResponseStatus}</p> <p>Date Contacted: ${latestHiredClient.Date}</p> <p><a href="hired_clients.html" class="see-all">See All</a></p>`
    }else {
        orderedClients.innerHTML = `<p>No Hired clients yet</p>`
    }
}

//To-Do list
if (totalToDo) {
    if(todoArray.length > 0) {
        const latestToDo = todoArray[todoArray.length - 1];
        //Display the Data
        totalToDo.innerHTML = `<h3>Client Number: ${latestToDo.NumberofClient}</h3> <p>Client Platform: ${latestToDo.socialMedia}</p> <p>Username: ${latestToDo.socialMediaUsername}</p> <p>Client Phone: ${latestToDo.phone}</p> <p>Date Contacted: ${latestToDo.Date}</p> <p><a href="to_do_clients.html" class="see-all">See All</a></p>`
    }else {
        totalToDo.innerHTML = `<p>No Current To-do</p>`
    }
}

//For the DOM pages that displays hired clients and to-do
//For the Client hired page
const DOM_clientOrders = document.querySelector(".hired_clients");

//For the To-do Page
const DOM_toDo_List = document.querySelector(".to_do_list");

//For the hired page
if(DOM_clientOrders) {
    if(hiredClients.length > 0) {
        hiredClients.forEach(function(clients) {
            DOM_clientOrders.innerHTML += `<h3>Client Name: ${hiredClients.Name}</h3> <p>Client Number: ${hiredClients.Number}</p> <p>Status: ${hiredClients.ResponseStatus}</p> <p>Date: ${hiredClients.Date}</p>`
        })
    }else {
        DOM_clientOrders.innerHTML = `<p>No Hired Clients Yet</p>`
    }
}

//For the todo list page 
if(DOM_toDo_List) {
    if(todoArray.length > 0) {
        todoArray.forEach(function(todo) {
            DOM_toDo_List.innerHTML += `<h3>Client Number: ${todo.NumberofClient}</h3> <p>Client Platform: ${todo.socialMedia}</p> <p>Username: ${todo.socialMediaUsername}</p> <p>Client Phone: ${todo.phone}</p> <p>Date Contacted: ${todo.Date}</p>`
        });
    }else {
        DOM_toDo_List.innerHTML = `<p>No To-Dos Yet</p>`
    }
}