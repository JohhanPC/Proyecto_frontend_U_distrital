function saveContact(){
  
    var nameContact = document.getElementById("name")
    var lastNameContact = document.getElementById("last_name")
    var phoneContact = document.getElementById("phone_number")
    var emailContact= document.getElementById("email")
    var titleContact= document.getElementById("title")
    var commentsContact= document.getElementById("comments")


    let contact = {

        name: nameContact.value,
        last_name: lastNameContact.value,
        phone_number: phoneContact.value,
        email: emailContact.value,
        title: titleContact.value,
        comments: commentsContact.value

    }

    console.log(contact)

    let url = "http://localhost:8000/api/contact"
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    }


    fetch(url, params).then( response => {

      console.log(response)
      
      if(response.status == 200 ){
        alert("Creación contacto")
      }else{
        alert("Error al crear el contacto")
      }

    }).then(result =>{
        console.log(result)
    })

    return true
}