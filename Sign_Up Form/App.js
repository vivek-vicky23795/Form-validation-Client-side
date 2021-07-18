// The JavaScript File //

class FormValidation {
  
// Inside a class we are declaring the properties of an object. 

    formValues = {
        username :"",
        email:"",
        phonenumber : "",
        password : ""
    };


    errorValues = {
        usernameErr: "",
        emailErr:"",
        phonenumberErr:"",
        passwordErr:""
    }; 

// Attributes of an Object are Defined. 

// Now declaring Methods of an Object inside the Class . 

    // To Show the Error Msg we create a Function :
    showErrorMsg(index,msg){ 

        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg  
    
    } 

    // To show the Success Msg we create a function : 

    showSuccessMsg(index , msg){ 

        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')

    } 

    // To get the inputs we creat a function : 

    getInputs(){ 
        
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()

    } 

    // To Validate username we create a function : 

    validateUsername(){ 

        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Username Cannot be Blank"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }

        
    } 
  
    // To Validate Email we create a function :
    validateEmail() { 

       const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Email Field Cannot Be Blank"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid Email check the Format and Spelling"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)
        }


    } 

    // To Validate phonenumber we create a function :

    validatePhonenumber(){ 
        const phone_digits = /^\d{10}$/ 

        if(this.formValues.phonenumber === ""){
            this.errorValues.phonenumberErr = "* Phone Number Cannot Be Empty"
            this.showErrorMsg(2,this.errorValues.phonenumberErr)
        } else if(phone_digits.test(this.formValues.phonenumber)){
            this.errorValues.phonenumberErr = ""
            this.showSuccessMsg(2)
        } else {
            this.errorValues.phonenumberErr = "* Invalid Phone Number it should contain 10 digits"
            this.showErrorMsg(2,this.errorValues.phonenumberErr)
        }

    } 

    // To Validate Password we create a function :

    validatePassword() { 

        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Password Cannot Be Empty"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 12){
            this.errorValues.passwordErr = "* Password should not exceeds 12 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(3)
        }

    } 

    alertMessage(){ 

        const {usernameErr , emailErr , phonenumberErr , passwordErr }= this.errorValues
        if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === ""){
            swal("Registration Successful","ThankYou , "+this.formValues.username,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }
    }

    removeInputs(){ 

        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })


    }


} 


// creating an object for the class FormValidation. 
 
  const ValidateUserInputs = new FormValidation()   


document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatePassword() 
    ValidateUserInputs.alertMessage()
})























if (this.formValues.username === "") {

    this.errorValues.usernameError = "* UserName Cannot be Blank"
    showErrorMsg(0,this.errorValues.usernameError)
} 
else if (this.formValues.username.length <= 4) {

    this.errorValues.usernameError = "* Username Must be Minimum of 5 Charsters"
    showErrorMsg(0,this.errorValues.usernameError) 
}

else if (this.formValues.username > 14) {

    this.errorValues.usernameError = "* Username chars cannot exceed above 14 chars"
    showErrorMsg(0,this.errorValues.usernameError)

} 
else {

    this.errorValues.usernameError = ""
    this.showSuccessMsg(0) 
}