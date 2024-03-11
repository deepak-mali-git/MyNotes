const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Message = require("./models/Messages");
const Doc = require("./models/doc");
const cookieParser = require("cookie-parser");
const validator = require("validator");





function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/;
  return emailRegex.test(email);
}
// Custom name validation
function isValidName(name) {
  // Check if name is at least 3 characters long
  return name.length >= 3;
}

// Custom password validation
function isValidPassword(password) {
  // Check if password is at least 6 characters long, contains uppercase and lowercase letters, at least one number, and one special symbol
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(password);
}




const developmentOrigin = "http://localhost:5173";
const productionOrigin = "https://your-production-domain.com";



  
require("dotenv").config();
const app = express();



const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "aksdjdfjk3843jhjgaef8aj3k4had8jhdskjl";




app.use(express.json());
app.use(cookieParser());





app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
      // process.env.NODE_ENV === "production"
      //   ? productionOrigin
      //   : developmentOrigin,
  })
);




mongoose.connect(process.env.MONGO_URL);





const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});







// app.get("/test", async (req, res) => {
//   // let data = await User.find({ email: "dk@gmail.com" });
//   // res.json(data);
//   res.send("test called");
// });






app.get("/data", async (req, res) => {
  try {
    const data = await Doc.find();
    res.json(data); // Send the data as JSON response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});






app.post("/register", async (req, res) => {

    try {

      mongoose.connect(process.env.MONGO_URL);
      const { name, email, password } = req.body;

      const availEmail = await User.findOne({ email });

      if(availEmail) {
        return res.status(400).json({ error: 'email already in use' });
      }
      
      if (!isValidName(name)) {
        return res.status(400).json({ error: 'Name should be at least three words' });
      }
      if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
      }
      if (!isValidPassword(password)) {
        return res.status(400).json({ error: 'password should be at least 6 characters long, contains uppercase and lowercase letters, at least one number, and one special symbol' });
      }
    
      const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);


    } catch (e) {
    console.error("Error during registration:", e);
    res.status(422).json(e);
  } 
});







app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(401).json("password not ok"); // Use status 401 for unauthorized access
    }
  } else {
    res.status(422).json("email not found");
  }
});






app.get("/profile",async (req, res) => {

  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  }

});







app.post("/search", async (req, res) => {
  try {
    
    const query = req.body.keyword;
    
    if(query === "") {
      return
    }

    const data = await Doc.find({
      $or: [{ name: { $regex: query } }, { tags: { $regex: query } }],
    }).lean();

    if (data.length === 0) {
      // console.log("Data not found for query:", query);
      return res.status(404).json({ message: "Data not found" });
    }

    // console.log("Search results:", data);
    res.json(data);
  } catch (error) {
    console.error("Error searching data:", error);

    if (error.name === 'MongoNetworkError') {
      return res.status(500).json({ message: "Database connection error" });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/about",(req,res)=>{
  
})
app.get("/contact",(req,res)=>{

})



app.post("/message" , async (req, res) => {
  const {name,email,message} = req.body;
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    if (!isValidEmail(email)) {
      return res.status(422).json({ error: "Please enter a valid email" });
    }
    if(name.length > 15 || name.length < 3) {
      return res.status(422).json({ error: "Please enter a valid name" });
    }
    if (message.length > 100 || message.length < 3) {
      return res.status(422).json({ error: "Please enter a valid message" });
    }
    if (message.length > 100 || message.length < 3) {
      return res.status(422).json({ error: "Please enter a valid message" });
    }


    const messageDoc = await Message.create({
      name : name,
      email : email,
      message : message
    });
    res.json(messageDoc);

  }
  catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }


});





app.post("/logout", (req, res) => {
  res.cookie("token", ""), json(true);
});


app.listen(4000);
