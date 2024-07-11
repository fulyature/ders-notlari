//********STRİNGS *//
//
//
//sTRİNGS TANIMLAMA
const str1 = "Clarusway-CH17";
const str2 = `HELLO`;
const str3 = new String("world");
console.log(typeof str1);
console.log(typeof str3);
const str4 = "";
//
////! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//
//
let kelime = "Fulya";

console.log(kelime[0]);

console.log(kelime[1]);

console.log(kelime[4]);
//

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object
//
//
//**length-Property */
//
//

// *=========================================================
// *               lenght - Property
// *=========================================================
//? Lenght => Bir stringin boşluklarda dahil kaç karakterden oluştuğunu verir.

const metin = "Clarusway 👩";

// Emojiler 2 karakterliktir
console.log(metin.length);

for (let i = 0; i <= metin.length - 1; i++) {
  console.log(metin[i]);
}

let emoji = "🧓";

console.log(emoji.length);

console.clear();
//! ************STRING METHODS ************
// String metodları () kullanılır. (Arkaplanda fonksiyonlardır)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================
//? Karakterleri büyük harfe dönüştürme => .toUpperCase()

console.log(metin.toUpperCase());
console.log(metin);
// Değişim geçicidir.Tamamen değiştirmiyor değiştirp kaydetmek istiyorsak yeni bir değere atamalıyız
let yeniMetin = metin.toUpperCase();
console.log(yeniMetin);

//? Karakterleri küçük harfe dönüştürme => .toLowerCase()

console.log(metin.toLowerCase());
let yeniMetin1 = metin.toLowerCase();
console.log(yeniMetin1);

/* -------------------------------------------------------------------------- */
/*                      //! String Bİrleştirme yöntemleri                     */
/* -------------------------------------------------------------------------- */
//* + ile birleştirme
//* concat ile birleştirme
//* Template literal (``) ile birleştirme

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + " " + text2);

let text = "Merhaba";
text += "Clarusway";

console.log(text);

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
//concatanation
const s1 = "Mola saati";
const s2 = " yaklaşıyor";
console.log(s1.concat(s2));

const s3 = s1.concat(s2);
console.log(s3);

// *=========================================================
// *               Template Literals
// *=========================================================

//ES6 İLE tanitilan

let str5 = "Merhaba";
let str6 = "dünya";

console.log(`${str5} Clarusway, ${str6}`);

//! String Parçalama Metodları
// split();
// substring();
// substr();
// slice();

let data = "10.07.2024";
veri = data.split(".");
console.log(veri);

let gun = veri[0];
console.log(gun);

let sent = "oku da adam ol";
console.log(sent.split("").reverse().join(""));

console.log(sent.split(" ").reverse().join(""));

//POLİDROM

let kel = "madam";
const mesaj =
  kel === kel.split("").reverse().join("") ? "Polindrom" : "POlindrom değildir";
console.log(mesaj);
