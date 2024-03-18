import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import authenticateToken from './middleware.js';
import path from 'path';
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('connected to MongoDB')})
.catch((err)=>{console.log(err)});
const app= express();
app.listen(3000,()=>{ console.log('server running on 3000!');
});

//middlewares
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // Configure multer

// app.post('/profile', upload.single('profilePic'), (req, res) => {
//   // Here, 'profilePic' is the name of your file input field
//   const file = req.file;
  
//   // Process the file, save the path or URL to your database, etc.
  
//   res.send('File uploaded successfully.');
// });
const __dirname = path.resolve();
app.use (express.static(path.join(__dirname, '/client/dist')));
app.get('*',(req,res) => { res.sendFile(path.join(__dirname, 'client','dist','index.html'))});
app.use(cookieParser());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/server/user", authenticateToken, userRoutes);
// app.use("/server/user",userRoutes);
app.use("/server/auth",authRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });
