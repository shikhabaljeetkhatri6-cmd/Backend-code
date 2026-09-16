const os=require('os');
const path=require('path');
const fs=require('fs');
const cypto=require('crypto');
const dns=require('dns');

// console.log(os.platform()) //win 32 || linux ||darwin
// console.log(os.arch())  //x64 || x86 ||arm64
// console.log(os.cpus().length)  //4|| 8||12
// console.log(os.homedir())
// console.log(os.totalmem()/(1024*1024*1024) + " GB");
// console.log(os.freemem()/(1024*1024) + " MB");

// const filePath=path.resolve(__dirname,"core_modules.js");
// console.log(__dirname);

// const filePath=path.join("BCA-D","lecture 5","core_modules.js");
// const filePath=path.join(os.homedir(),"Documents");
// console.log(filePath);

// const file="BCA-D/lecture 5/core_modules.js";
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));
// console.log("A")
// const data=fs.readFileSync("./sample.txt","utf-8");  //synchronous
// console.log(data);

// fs.readFile("./sample.txt","utf-8",(err,data)=>{  //asynchronous
//     if(err){
//         console.log(err);    
//     }else{
//             console.log(data);
//         }
// })
// console.log("B")


// fs.writeFileSync("./sample.txt","Hello World!"); 
// console.log("File updated") //synchronous
// fs.writeFile("./sample.txt","Hello World! again",(err)=>{  //asynchronous
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File updated");
//     }
// })

// fs.appendFileSync("./sample.txt","\nHello World! again");

// fs.unlinkSync("./sample1.txt");  //synchronous
// console.log("File deleted")

// const password="Alex@124"

// const hash=cypto.createHash("sha256").update(password).digest("hex");
// console.log(hash)

// const salt=cypto.randomBytes(16).toString("hex");
// console.log(salt)

// const hash=cypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash)

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })

dns.reverse("8.8.8.8",(err,hostnames)=>{
    if(err){
        console.log(err);
    }else{
        console.log(hostnames);
    }
})