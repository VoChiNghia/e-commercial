

const validator = (selector:any) => {
    const form = document.querySelector(selector.class)
   

    const isEmail = (inputElement:any,error:any) => {
        const errorElement = inputElement.parentElement.querySelector(selector.error)
        if(error) {
            inputElement.classList.add('invalid')
            errorElement.innerHTML = error
        }else {
            inputElement.classList.remove('invalid')
            errorElement.innerHTML = ''
        }
    }
   
    if(form) {
        selector.rule.forEach((rule:any) => {
            const inputElement = document.querySelector(rule.selector)
            
            if(inputElement) {
                inputElement.onblur = () => {
                    const error = rule.test(inputElement.value)
                    
                   isEmail(inputElement,error)
                }
            }
        })
    }
}

// validator.isRequired = (selector:any) => {
//     const isRequired = {
//         selector: selector,
//         test: (value:any) => {
//             return value.trim() ? undefined : "required"
//         }
//     }
// }

validator.isEmail = (selector:any) => {
   const email = {
       selector: selector,
       test: (value:any) => {
           const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
           return regex.test(value) ? undefined : 'email is required'
       }
   }

   return email

}
validator.isPassword = (selector:any) => {
    const password = {
        selector: selector,
        test: (value:any) => {
            return value.trim() ? undefined : "required"
        }
    }
 
    return password
    
}


export default validator