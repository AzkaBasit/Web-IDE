let dragData = null;

		const output = document.getElementById("output-area");
		const runBtn = document.getElementById("run-btn");

        // Prevent the default behavior for DRAGOVER event
		document.addEventListener("dragover", function(event) {
			event.preventDefault();
		});

        //------------------------------------The drag function sets the drag data to the element being dragged.
        function drag(event) 
        {
		// Set the drag data to the element being dragged
		event.dataTransfer.setData("text", event.target.id);
		dragData = event.target;
	    }

        //------------------------------------------The drop event listener checks if there is drag data and adds it to the code area.
		document.addEventListener("drop", function(event) {
    event.preventDefault();

    if (dragData !== null) {
    const data = dragData.textContent;
    const codeArea = document.getElementById("code-area");
    let skeletonCode = "";

    switch (data) {
        case "variables":
            const vari_name = prompt("Enter variable name:");
            const vari_value = prompt("Enter variable value:");
            skeletonCode = `$${vari_name} = ${vari_value};`;
            break;

        case "loops(FOR)":
            const initial = prompt("Enter initial value:");
            const final = prompt("Enter final value:");
			const inc = prompt("Enter increment value:");
            skeletonCode = `for ($i = ${initial}; $i < ${final}; $i = $i + ${inc}) {<br>// code goes here<br>}`;
            break;
			
		case "loops(WHILE)":
            const last = prompt("Enter final value:");
            skeletonCode = ` {<br>// code goes here<br>} while($i<${last});`;
            break;

        case "functions":
            const functionName = prompt("Enter function name:");
            skeletonCode = `function ${functionName}() {<br>// code goes here<br>}`;
            break;

        case "Conditionals(IF-ELSE)":
			const if_cond = prompt("Enter condition for if:");
            skeletonCode = `if (${if_cond}) {<br>// code goes here<br>} else {<br>// code goes here<br>}`;
            break;

        case "read file":
            const frName = prompt("Enter file name:");
            skeletonCode = `$filename = "${frName}";<br>// Reading from a file<br>$file = fopen($filename, "r");<br>while(!feof($file)) {<br>$line = fgets($file);<br>// Do something with the line<br>}<br>fclose($file);`;
            break;

        case "write file":
            const fwName = prompt("Enter file name:");
            skeletonCode = `$filename = "${fwName}";<br>// Writing to a file<br>$file = fopen($filename, "w");<br>fwrite($file, "Content to write to file");<br>fclose($file);`;
            break;

        case "arithmetic":
            const val1 = prompt("Enter first value:");
            const val2 = prompt("Enter second value:");
			const operator = prompt("Enter the operator:");
			//addition
			if (operator=='+')
			skeletonCode = `$operand1 =${val1} ;<br>$operand2 =${val2} ;<br>// Addition<br>$sum = $operand1 + $operand2;`
			else if (operator=='-')
			//subtraction
			skeletonCode = `$operand1 =${val1} ;<br>$operand2 =${val2} ;<br>// Subtraction<br>$difference = $operand1 - $operand2;`
			//multiplication
			else if (operator=='*')
			skeletonCode = `$operand1 =${val1} ;<br>$operand2 =${val2} ;<br>// Multiplication<br>$product = $operand1 * $operand2;`
			//division
			else if (operator=='/')
			skeletonCode = `$operand1 =${val1} ;<br>$operand2 =${val2} ;<br>// Division<br>$quot = $operand1 / $operand2;`
			//modulus
			else if (operator=='%')
            skeletonCode = `$operand1 =${val1} ;<br>$operand2 =${val2} ;<br>// Modulus<br>$remainder = $operand1 % $operand2;`;
            break;

        case "Echo":
            const outputValue = prompt("Enter output value:");
            skeletonCode = `echo ${outputValue};`;
            break;
        default:
            skeletonCode = "// code goes here";
    }

    codeArea.innerHTML += skeletonCode + "<br>";
}

});

        
        //---------------The click event listener on the run button gets the code from the code area and executes it. 
        //If there is an error, the error message is displayed in the output area.
        
            runBtn.addEventListener("click", function() {
            const phpcode = document.getElementById("code-area").textContent;

            // Sending the PHP code to the server
            fetch('evaluation.php', {
                method: 'POST',
                body: JSON.stringify({ phpcode: phpcode }),
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(response => response.text())
            .then(output => {
                // Displaying the output to the user
                console.log(output);
                document.getElementById('output-area').innerHTML = output;
            })
            .catch(error => alert(error));
});
	