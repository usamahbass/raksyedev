---
title: "Deklarasi Variabel pada JavaScript"
date: "2020-04-28"
author: "Usamah Basalamah"
thumbnails: "./variabel.png"
tags: ["javascript", "variabel"]
avatar: "../../assets/me.jpg"
---

![Variabel](./variabel.png)

### Deklarasi Variabel

Apa itu variabel? Variabel dalam bahasa inggris _variable_ dari kata _vary_ berarti beragam atau berbeda dan _able_ akhiran yang bermakna dapat. Variabel dalam arti bebas adalah sesuatu dapat berbeda. Apanya yang berbeda? Adalah nilai dari isi variabel tersebut.

Variabel JavaScript dideklarasikan menggunakan `var`, `let`, `const` lalu diikuti dengan nama variabel.


### Macam Macam Variabel dalam Javascript

1. Var 

Sebelum fitur-fitur ES6 diperkenalkan dalam javascript , untuk mendeklarasikan variabel
yakni menggunakan keyword _var_
```javascript
var nama = Usamah Basalamah
```
jika dalam satu statement (tidak disarankan)
```javascript
var nama = "Usamah Basalamah" , umur = "18"
console.log(nama) // output => Usamah Basalamah
console.log(umur) // output => 18
```

2. Let 
   
Let adalah fitur baru dalam javascript untuk mendeklarasikan suatu variabel yang diperkenalkan oleh
ES6 (pengembagan dari var)

perbedaan _let_ dengan _var_ yaitu pada cakupannya , jika _var_ cakupannya ialah cakupan fungsi . 
Jika _var_ berada diluar fungsi maka cakupannya berubah dan dinyatakan sebagai global objek ,
sedangakan _let_ cakupannya ialah terbatas hanya pada tempat variabel dideklarasikan /didefinisikan.

```javascript
let nama = "Usamah" 

let nama = "Basalamah"

console.log(nama) // output => SyntaxError: Identifier 'nama' has already been declared
```

apabila menggunakan var 

```javascript
var nama = "Usamah" 

var nama = "Basalamah"

console.log(nama) // output => Basalamah
```

akan menampilkan variabel terakhir yang dideklarasikan , itu baru dua variabel yang sama ..kebayang deh kalo sudah mendeklarasikan banyak variabel .. bila ada yang sama dan tidak memunculkanerror .. 

bayangin aja sendiri wkwk ..

eits tetapi _let_ bisa menamakan sebuah variabel tanpa dideklarasikan terlebih dahulu .. maksudnya nih liat contohnye ..

```javascript
let nama;

nama = "Usamah Basalamah"

console.log(nama) // output => Usamah Basalamah
```

nah , jadi lebih milih _var_ atau _let_ nih ? .. lebih baik ke _let_ ya 

3. Const 
   
Nah kalau _const_ ini anda tidak bisa merubah isi dari varibelnya. Ga percaya ? oke lakuin dah 
   
```javascript
const nama = "Usamah"

nama = "Basalamah"

console.log(nama) // output => Assigment to constant variable
```

tapi , terdapat pengecualian terhadap tipe data object (array dan object) , perubahan dapatdilakukan dengan method yang disediakan oleh array maupun object yang disebut dengan **mutable**(yang mungkin dapat berubah).

**mutable array**

```javascript
const javascript = ["javascript", "Brendan Eich"]

javascript.push = (1995) // output => ["javascript", "Brendan Eich" , 1995]
```

**mutable object**

```javascript
const javascript = {
    bahasa: "javascript",
    diciptakan: "Brendan Eich"
}

javascript.tahun = 1995

console.log(javascript) // output => { bahasa: "javascript", diciptakan: "Brendan Eich", tahun:1995 }
```

### Jadi pakai var , let , atau const ?

Simpel aja sih jawabnya pakailah _const_ jika anda akan mendeklarasikan variabel yang nilainya tetap atau tidak dirubah , pakailah _let_ jika anda akan mendeklarasikan variabel yang nilainya nanti akan dirubah.

eits , dan satu lagi hindari _var_ atau jangan menggunakannya lagi.