function firstChar(text) {
  // your code here=
	if(text.length>=1) return text.trim().charAt(0);
	return text.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
