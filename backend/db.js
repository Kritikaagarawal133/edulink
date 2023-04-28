const mongoose = require('mongoose')

const url = "mongodb+srv://Kritika:S8sbJ5BZ3vkvIRem@cluster0.zc6zoo0.mongodb.net/?retryWrites=true&w=majority"
module.exports.connect = () => {
    // const connectionParams = {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// };
	// try {
	// 	mongoose.connect(process.env.DB, connectionParams);
	// 	console.log("Connected to database successfully");
	// } catch (error) {
	// 	console.log(error);
	// 	console.log("Could not connect database!");
	// }

    mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ",error));
};