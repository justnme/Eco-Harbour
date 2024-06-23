import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './Config/db.js';
import nodemailer from 'nodemailer'; // Импортируем nodemailer
import fishRoutes from './routes/fishRoutes.js';
import harbourRoutes from './routes/harbourRoutes.js';
import abundanceRoutes from './routes/abundanceRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/forumRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import recordRoutes from './routes/recordRoutes.js';
import rewardRoutes from './routes/rewardRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Request Body Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser Middleware
app.use(cookieParser());

// Multer Images Access
app.use(express.static('server/public'));

// Nodemailer setup
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user:'your2005@gmail.com', 
		pass: 'your pass word gogl', 
		// add here your google pass from app selection 
		//  it might be smth like this 
		// pass: abcd abcd abcd abcd
	},
});

app.get('/', (req, res) => {
	res.send('Server Running');
});

app.post('/sendEmail', (req, res) => {
	const email = req.body.email;

	const mailOptions = {
		from: 'your@gmail.com',
		to: email,
		subject: 'Subscription approved!',
		text: 'You have successfully subscribed to our site!',
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send('Error occurred, email not sent.');
		} else {
			console.log('Email sent: ' + info.response);
			res.status(200).send('Email sent successfully!');
		}
	});
});

app.use('/fish', fishRoutes);
app.use('/harbour', harbourRoutes);
app.use('/abundance', abundanceRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/record', recordRoutes);
app.use('/reward', rewardRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server Running on port ${port}`);
});
