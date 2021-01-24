const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports.register = (req,res,next) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err,doc) => {
       if(!err)
           res.send(doc);
        else
       {
           if(err.code == 11000)
               res.status(422).send(['Email address already exists']);
           else
               return next(err)
       }
    });
}

module.exports.login = (req,res,next) => {
    let fetchedUser;
    console.log(req.body.email);
    User.findOne({ email: req.body.email })
        .then( user => {
            if ( !user ) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser= user;
            console.log(fetchedUser);
            return bcrypt.compareSync(req.body.password, user.password);
        })
        .then(result => {
            if(!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id},
                process.env.JWT_SECRET,
                {expiresIn: '1h'}
            ); //signing token and generating it using JWT, this token will be used for further functions of user and will be used to authenticate user session
            res.status(200).json({
                token: token,
                expiresIn: 36000000,
                userId: fetchedUser._id,
                userName: fetchedUser.fullName
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Auth Failed"
            });
        });
}