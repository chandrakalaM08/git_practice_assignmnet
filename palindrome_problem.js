let str = "naman";

let new_str = "";

for(let i = str.length-1; i >= 0; i--){
	new_str += str[i];
}

if (new_str == str){
	console.log(str, "is a palindrome.");
}
else{
	console.log(str, "is not a palindrome.");
}

