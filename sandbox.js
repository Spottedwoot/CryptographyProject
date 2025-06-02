/*function RSAencrypt(m, N){
    let k = m;
    for(let i = 0; i<16; i++){
        k = k*k%N;
    }
    k = k*m%N
    return k;
}

function decrypt(c, p, q){
    let d = EEA((p-1)*(q-1),65537, 1,0,0,1);
    if(d < 0){
        d += (p-1)*(q-1);
    }
    return (c**d)%(p*q)
    
}

function EEA(r0,r1,s0,s1,t0,t1){
    if(r1==0){
        return t0;
    }
    else{
        let q = (r0 -r0%r1)/r1;
        let r2 = r0%r1;
        let s2 = s0 - q*s1;
        let t2 = t0 - q*t1;
        return EEA(r1,r2,s1,s2,t1,t2);
    }
}


const intToChar = {"10": "a", "11": "b", "12":"c", "13":"d", "14": "e", "15": "f", "16":"g", "17":"h", "18":"i", "19": "j",
                    "20": "k", "21": "l", "22":"m", "23":"n", "24": "o", "25": "p", "26":"q", "27":"r", "28":"s", "29": "t",
                    "30": "u", "31": "v", "32":"w", "33":"x", "34": "y", "35": "z", "36":"A", "37":"B", "38":"C", "39": "D",
                    "40": "E", "41": "F", "42":"G", "43":"H", "44": "I", "45": "J", "46":"K", "47":"L", "48":"M", "49": "N",
                    "50": "O", "51": "P", "52":"Q", "53":"R", "54": "S", "55": "T", "56":"U", "57":"V", "58":"W", "59": "X",
                    "60": "Y", "61": "Z", "62":".", "63":"?", "64": ",", "65": "'", "66":"1", "67":"2", "68":"3", "69": "4",
                    "70": "5", "71": "6", "72":"7", "73":"8", "74": "9", "75": "0", "76":" "}
const charToInt = {"a": "10", "b": "11", "c":"12", "d":"13", "e":"14", "f":"15", "g":"16", "h":"17", "i":"18", "j":"19",
                    "k": "20", "l": "21", "m":"22", "n":"23", "o":"24", "p":"25", "q":"26", "r":"27", "s":"28", "t":"29",
                    "u": "30", "v": "31", "w":"32", "x":"33", "y":"34", "z":"35", "A":"36", "B":"37", "C":"38", "D":"39",
                    "E": "40", "F": "41", "G":"42", "H":"43", "I":"44", "J":"45", "K":"46", "L":"47", "M":"48", "N":"49",
                    "O": "50", "P": "51", "Q":"52", "R":"53", "S":"54", "T":"55", "U":"56", "V":"57", "W":"58", "X":"59",
                    "Y": "60", "Z": "61", ".":"62", "?":"63", ",":"64", "'":"65", "1":"66", "2":"67", "3":"68", "4":"69",
                    "5": "70", "6": "71", "7":"72", "8":"73", "9":"74", "0":"75", " ":"76"}
function bigIntToMessage(m){
    let message = "";
    let mstring = m.toString();
    for(let i =0; i < mstring.length; i+=2){
        message += intToChar[mstring.substring(i, i+2)];
    }
    return message;
}

function messageToBigInt(message){
    let mstring = "";
    for(let i =0; i < message.length; i++){
        mstring += charToInt[message.substring(i,i+1)];
    }
    return parseInt(mstring);
}*/
function RSAencrypt(m, N){
    let k = m;
    for(let i = 0; i<16; i++){
        k = k*k%N;
    }
    k = k*m%N
    return k;
}

function decrypt(c, p, q){
    let d = EEA((p-1n)*(q-1n),BigInt(65537), BigInt(1),BigInt(0),BigInt(0),1n);
    if(d < 0){
        d += (p-1n)*(q-1n);
    }
    return (c**d)%(p*q)
    
}

function EEA(r0,r1,s0,s1,t0,t1){
    if(r1==0){
        return t0;
    }
    else{
        let q = (r0 -r0%r1)/r1;
        let r2 = r0%r1;
        let s2 = s0 - q*s1;
        let t2 = t0 - q*t1;
        return EEA(r1,r2,s1,s2,t1,t2);
    }
}
/*
function modExponent(m,c,N, e){
    let count = 1;
    let k = c;
    if(e== BigInt(1)){
        return m*c%N;
    }
    if(e==BigInt(0)){
        return m;
    }
    while(e>=BigInt(2**(count+1))){
        k = k*k%N;
        count++;
    }
    e = e-BigInt(2**count);
    return modExponent(m*k%N, c, N, e);
}*/

const intToChar = {"10": "a", "11": "b", "12":"c", "13":"d", "14": "e", "15": "f", "16":"g", "17":"h", "18":"i", "19": "j",
                    "20": "k", "21": "l", "22":"m", "23":"n", "24": "o", "25": "p", "26":"q", "27":"r", "28":"s", "29": "t",
                    "30": "u", "31": "v", "32":"w", "33":"x", "34": "y", "35": "z", "36":"A", "37":"B", "38":"C", "39": "D",
                    "40": "E", "41": "F", "42":"G", "43":"H", "44": "I", "45": "J", "46":"K", "47":"L", "48":"M", "49": "N",
                    "50": "O", "51": "P", "52":"Q", "53":"R", "54": "S", "55": "T", "56":"U", "57":"V", "58":"W", "59": "X",
                    "60": "Y", "61": "Z", "62":".", "63":"?", "64": ",", "65": "'", "66":"1", "67":"2", "68":"3", "69": "4",
                    "70": "5", "71": "6", "72":"7", "73":"8", "74": "9", "75": "0", "76":" "}
const charToInt = {"a": "10", "b": "11", "c":"12", "d":"13", "e":"14", "f":"15", "g":"16", "h":"17", "i":"18", "j":"19",
                    "k": "20", "l": "21", "m":"22", "n":"23", "o":"24", "p":"25", "q":"26", "r":"27", "s":"28", "t":"29",
                    "u": "30", "v": "31", "w":"32", "x":"33", "y":"34", "z":"35", "A":"36", "B":"37", "C":"38", "D":"39",
                    "E": "40", "F": "41", "G":"42", "H":"43", "I":"44", "J":"45", "K":"46", "L":"47", "M":"48", "N":"49",
                    "O": "50", "P": "51", "Q":"52", "R":"53", "S":"54", "T":"55", "U":"56", "V":"57", "W":"58", "X":"59",
                    "Y": "60", "Z": "61", ".":"62", "?":"63", ",":"64", "'":"65", "1":"66", "2":"67", "3":"68", "4":"69",
                    "5": "70", "6": "71", "7":"72", "8":"73", "9":"74", "0":"75", " ":"76"}
function bigIntToMessage(m){
    let message = "";
    let mstring = m.toString();
    for(let i =0; i < mstring.length; i+=2){
        message += intToChar[mstring.substring(i, i+2)];
    }
    return message;
}

function messageToBigInt(message){
    let mstring = "";
    for(let i =0; i < message.length; i++){
        mstring += charToInt[message.substring(i,i+1)];
    }
    return BigInt(mstring);
}




function encrypt() {
  event.preventDefault()
    let prodofprimes = document.getElementById("prodofprimes").value;
    let message = document.getElementById("message").value;
    let newMessage = messageToBigInt(message);
    let encrypted = RSAencrypt(newMessage, prodofprimes);
    let output = bigIntToMessage(encrypted);
    document.getElementById("encrypted").innerHTML=output;
}

function decryption() {
    event.preventDefault()
    let p1 = BigInt(document.getElementById("p1").value);
    let p2 = BigInt(document.getElementById("p2").value);
    let encryptedmessage = document.getElementById("encryptedmessage").value;
    let newMessage = messageToBigInt(encryptedmessage);
    let decrypted = decrypt(newMessage, p1, p2);
    let output = bigIntToMessage(decrypted);
    document.getElementById("decrpyted").innerHTML=output;
}
