function Validator (options)  {
    var formEmlement = document.querySelector(options.form);

    if(formEmlement) {
        options.rules.forEach(function (rule) {
            var inputElement = formEmlement.querySelector(rule.selector);
            
            if(inputElement) {
                inputElement.onblur = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    var errorMessage = rule(inputElement.value);

                    if(errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    }
                }
            }
        })  
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: 'selector',
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined:'Vui long nhap email'
        }
    };
}

Validator.minLength = function (selector) {
    return {
        selector: 'selector',
        test: function() {
            
        }
    };
}