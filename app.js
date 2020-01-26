let inputField = document.getElementById("numberInput");
inputField.addEventListener("input",generateFact);
function generateFact(){
    let input = document.getElementById("numberInput").value;
    if(input != ''){       
        console.log('inside..');
        fetch(`http://numbersapi.com/${input}`)
        .then(result=>  result.text())
        .then(result=> {
            console.log(result);
            document.getElementById("outputResults").innerHTML = result;
        });
    }
}
 