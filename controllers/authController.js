const User = require("../models").User;
const Course = require("../models").Course;
const CourseStudent = require("../models").CourseStudent;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password!",
        });
      }

      const token = jwt.sign({ 
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        level: user.level
       }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      req.session.token = token;
      req.session.user = user;

      return res.status(200).send({
        status: "success",
        message: "User retrieved",
        data: {
          accessToken: token,
        },
      });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },

  register: async (req, res) => {
    try {
      const { name, email, password, level } = req.body;

      const user = await User.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password),
        role: "student",
        level: level,
      });

      const courses = await Course.findAll({
        where: {
          level: level
        }
      });

      if(courses.length == 0){
        return res.status(404).send({ message: "Course Not found." });
      }

      courses.forEach(async (course) => {
        await CourseStudent.create({
            userId: user.id,
            courseId: course.id
          })
      });

      return res.send({
        status: "success",
        message: "User registered successfully!",
      });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },

  me: async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Missing or invalid token" });
        }

        const token = authHeader.split(" ")[1];

       // Verify the token
       jwt.verify(token, config.secret, (err, decoded) => {
         if (err) {
           return res
             .status(401)
             .json({ message: "Unauthorized: Invalid token" });
         }

         // Attach decoded user information to the request object
         return res.send({
           status: "success",
           message: "User retrieved successfully!",
           token: token,
           data: decoded
         });
       });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },

  logout: (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({
        message: "You've been signed out!",
      });
    } catch (err) {
      this.next(err);
    }
  },
};
