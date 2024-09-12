$(document).ready(function() {
    $('#button').on('click', function() {
        const leftNumber = parseFloat($('#leftNumber').val()); 
        const rightNumber = parseFloat($('#rightNumber').val()); 
        const operator = $('#operator').val();
        let result;

        if (isNaN(leftNumber) || isNaN(rightNumber) || leftNumber < 0 || rightNumber < 0) {
            alert("Error :( ");
            return;
        }
        switch (operator) {
            case "+":
                result = leftNumber + rightNumber;
                alert("The answer is: " + result);
                console.log(result);
                break;
            case "-":
                result = leftNumber - rightNumber;
                alert("The answer is: " + result);
                console.log(result);
                break;
            case "*":
                result = leftNumber * rightNumber;
                alert("The answer is: " + result);
                console.log(result);
                break;
            case "/":
                if (rightNumber == 0) {
                    alert("It's over 9000!");
                    console.log('It s over 9000');
                } else {
                    result = leftNumber / rightNumber;
                    alert("The answer is: " + result);
                    console.log(result);
                }
                break;
            case "%":
                if (rightNumber == 0) {
                    alert("It's over 9000!");
                    console.log('Its over 9000');
                } else {
                    result = leftNumber % rightNumber;
                    alert("The answer is: " + result);
                    console.log(result);
                }
                break;
            default:
                alert("Invalid operator");
                break;
        }
    });
    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});
