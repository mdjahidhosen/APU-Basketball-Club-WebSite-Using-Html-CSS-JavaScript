document.querySelector('#joinus-form').addEventListener('submit',(e)=>{

    //prevent actual submit
    e.preventDefault();
    //get form values
    const name =document.querySelector('#name').value;
    const email =document.querySelector('#email').value;
    const subject =document.querySelector('#subject').value;
    const message =document.querySelector('#message').value;

    if (name == "" || email == "" ||  subject == "" || message == "") {
    alert("All Fields must be filled out");
    }
    else{
        alert("form Succesfully Submitted")
    }

    

});