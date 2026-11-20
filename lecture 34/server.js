const jwt=require('jsonwebtoken');

const data={
    _id: "6afd21e6877808c75af6a3f9"
}

const token=jwt.sign(data, "mysecretkey",{expiresIn: "1h"});
console.log("token:", token);

const decoded=jwt.verify(token, "mysecretkey");
console.log("decoded:", decoded);