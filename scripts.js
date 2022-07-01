const alphabet = [
      'A','B','C','D','E','F',
      'G','H','I','J','K','L',
      'M','N','O','P','Q','R',
      'S','T','U','V','W','X',
      'Y','Z' 
  ];
    
function encryptText() {
  
    const form = document.getElementById("cipherform");
    
    let title = document.getElementById("title");  
        
    title.innerHTML = "Encrypted text";
    
    let shift= Number(form.shift.value); 
        
    let data =  form.data.value;       
        
    form.data.value = [... data ].map(char =>
        encrypt(char, shift)).join('');
}
    
function decryptText() {
    const form = document.getElementById("cipherform");
    
    let title = document.getElementById("title");    
    
    title.innerHTML = "Plain text";
        
    let shift = Number(form.shift.value);
    let data = form.data.value;    
        
    shift = (alphabet.length - shift) %  alphabet.length;
        
    form.data.value = [... data ].map(char => 
        encrypt(char, shift)
    ).join('');
 }
    
function encrypt(char, shift) {
    let include = alphabet.includes(char.toUpperCase()); 
     
    if (include){      
        let position =alphabet.indexOf(char.toUpperCase());
        
        let newPosition = (position+shift) % alphabet.length;
    
        return alphabet[newPosition];
     } else {
         return char
     };
}        