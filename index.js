let num1 = document.getElementById("input1");
console.log(typeof num1);
let num2 = document.getElementById("input2");

let result = document.getElementById("resul");
let calBtn = document.getElementById("sub");

calBtn.addEventListener("click" ,function(){
	console.log(typeof num1)
	return add(num1,num2);
});


function add (num1, num2) {
	console.log('yes')
return result.innerHTML =  parseInt(num1.value) + parseInt(num2.value);

};


