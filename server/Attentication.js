const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    user:'root',
    database:'drop_quick',
    password:'password',
    host:'localhost'
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('connected successfly  to register database')
    }
})

router.post('/register',(req,res)=>{
      const {formData} =req.body
      const {firstName,lastName,email,  phone,  password,street,city,state,zip}=formData

      db.query('select * from register where phone =? or email=?',[phone,email],(err,results)=>{
        if(err){
            res.status(500).send('server is not working try after some time')
            console.log(err)
        }else if(!(results.length===0)){
            res.status(400).send('This number or email ID is already registered')
            console.log(results.length)
        }
        else{
            db.query('insert into register (firstName,lastName,email, phone,  userpassword,street,city,state,zip) values(?,?,?,?,?,?,?,?,?)',[firstName,lastName,email,  phone,  password,street,city,state,zip],(error,result)=>{
                if (error) {
                    res.status(500).json('Server not working')
                    console.log(error)
                } 
                else {
                    res.status(200).send('Registred Successfully')     
                }
            })
            
        }
    })
})


const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
 

router.post('/forgetpassword', (req, res) => {
    const { email } = req.body;

    db.query('SELECT * FROM register WHERE email = ?', [email], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Server error, try again later');
        }

        if (result.length === 0) {
            return res.status(404).send('This email is not registered');
        }

        const otp = generateOTP();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes

        // Store OTP in database
        db.query(
            'INSERT INTO otp_store (email, otp, expires_at) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE otp = ?, expires_at = ?',
            [email, otp, expiresAt, otp, expiresAt],
            (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error storing OTP');
                }
                
                // Send OTP for development purposes
                return res.status(200).json({ message: 'OTP sent successfully', otp,email });
            }
        );
    });
});

router.post('/validateotp', (req, res) => {
    const { email, otp } = req.body;

    db.query(
        'SELECT otp, expires_at FROM otp_store WHERE email = ?',
        [email],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error validating OTP');
            }

            if (results.length === 0 || new Date(results[0].expires_at) < new Date()) {
                return res.status(400).send('OTP has expired or is invalid');
            }

            if (results[0].otp === otp) {
                // OTP is valid, delete it from the database
                db.query('DELETE FROM otp_store WHERE email = ?', [email], (deleteErr) => {
                    if (deleteErr) {
                        console.error(deleteErr);
                        return res.status(500).send('Error deleting OTP');
                    }
                    return res.status(200).send('OTP is valid');
                });
            } else {
                return res.status(400).send('Invalid OTP');
            }
        }
    );
});


router.post('/login',(req,res)=>{
    const {formData} = req.body
    db.query('select * from register where (phone=? or email=?) and userpassword=?',[formData.phone,formData.phone,formData.password],(error,result)=>{
        if(error){
            console.log(error)
            res.status(500).send('server is not working try aftersome time')
        }else if(result.length===0){
            res.status(404).send('Incorrect phonenumber or password')
            console.log(result.length)
        }else{
            const user = result[0];

            // Generate JWT token
            const payload = { id: user.id, phone: user.phone }; // Include necessary fields in payload
            const secretKey = 'yourSecretKeyisdropquick'; // Use a secure, environment-based key
    
            // Token expiration set to 24 hours
            const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });
    
            return res.status(200).send({ message: 'Authentication successful', token,user });
        }
    })    
})

module.exports =router;