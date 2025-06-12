import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { name, emailid, password } = req.body;
        const user = await User.findOne({ emailid });

        if (user) {
            return res.status(400).json({ message: "User already exist" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            name: name,
            emailid: emailid,
            password: hashPassword
        });

        await createdUser.save();
        res.status(201).json({
            message: "SignIn Successful",
            user: {
                _id: createdUser._id,
                name: createdUser.name,
                emailid: createdUser.emailid
            }
        });
    }
    catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { emailid, password } = req.body;
        const user = await User.findOne({ emailid });


        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }


        res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                name: user.name,
                emailid: user.emailid
            }
        });

    } catch (error) {
        console.error("Error", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};
