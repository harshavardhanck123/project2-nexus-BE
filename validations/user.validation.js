const {body,validationResult,query}=require('express-validator')

const register=()=>{
    return [
        body("name").not().isEmpty().trim().exists(),
        body("email").not().isEmail().isEmpty().trim().exists(),
        body("password")
        .isLength({ min: 6 })
        .not()
        .isEmpty()
        .trim()
        .exists()
        .custom((value) => {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
              throw new Error("Password must contain at least one letter and one number");
            }
            return true;
          }),
    ]
}

const login=()=>{
    return[
        body("email").not().isEmpty().trim().exists(), 
        body("password").isLength({ min: 6 }).not().isEmpty().trim().exists()
    ]
}

module.exports={
    register,
    login
}