const bcrypt=require('bcrypt');

const password="Shikha@123";
const passwordnew="Shikha@123";

const hashedPassword= async (password) => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare("Shikha@123", hashedPassword);
    console.log(isMatch)
};
 
hashedPassword(password);
hashedPassword(passwordnew);