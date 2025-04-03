 
// let Validator = require('validatorjs');
// import Validator from "./node_modules/validatorjs";




// const form = document.getElementById("form");

// const handleSubmit = (e) => {
//   e.preventDefault(e);
  
//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData);
// };

// form.addEventListener("submit", handleSubmit);





    // const handleSubmit = (e) => {
    //     e.preventDefault(e);
    //     const data = Object.fromEntries(new FormData(e.target));
  
    //  }
    


//   document.addEventListener("DOMContentLoaded", () => {

//     const form = document.getElementById("basic_form");


//     const validator = new JustValidate('#basic_form');

// validator
//   .addField('#basic_email', [
//     {
//       rule: "required",
//     },
//     {
//       rule: "email",
//     },
//   ]);

   
   

//         form.addEventListener("submit", async (e) => {
//             e.preventDefault(); // Prevent the default form submission
    
//             try {
//                 // Validate using Just-Validate and await the result
//                 const isValid = await validator.validate(); // Await the promise
//                 console.log(isValid)
    
//                 if (isValid) {
//                     // Only extract and log form data if validation passed
//                     const formData = Object.fromEntries(new FormData(form));
//                     console.log("Form Data:", formData);
//                 } 
//             } catch (error) {
//                 console.error("Validation failed:", error);
//             }
//     });
    

   
// });
   

  

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("basic_form");
    const email =document.getElementById("basic_email");
    const mainPage =document.getElementById("mainPage");
    const successPage = document.getElementById("successPage");
    const emailtag = document.getElementById("emailtag");
    const dismissBtn = document.getElementById("dismiss-btn");

    
    // Initialize JustValidate
    const validator = new JustValidate('#basic_form');
    
    // Add validation rules
    validator.addField('#basic_email', [
        {
            rule: "required",
            errorMessage: "Email is required",
        },
        {
            rule: "email",
            errorMessage: "Please enter a valid email address",
        },
    ])
    .onSuccess((event) => {
        // This runs only if validation passes
        const formData = Object.fromEntries(new FormData(form));
        console.log("Form Data:", formData);
        

        mainPage.classList.add("hidden");
        successPage.classList.remove("hidden");

        const emailData = formData.email;
        console.log(formData);
        console.log(emailData);

        emailtag.textContent = emailData + ".";

        dismissBtn.addEventListener("click", function(){
            mainPage.classList.remove("hidden");
            successPage.classList.add("hidden");
    

        });
    


        // Further processing like form submission can go here
    });
});