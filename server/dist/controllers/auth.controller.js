"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = require("../models/User");
const auth_validator_1 = require("../validators/auth.validator");
const jwt_1 = require("../utils/jwt");
const cookie_1 = require("../utils/cookie");
const register = async (req, res) => {
    try {
        const validatedData = auth_validator_1.registerSchema.parse(req.body);
        const existingUser = await User_1.User.findOne({
            email: validatedData.email,
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(validatedData.password, 10);
        const user = await User_1.User.create({
            ...validatedData,
            password: hashedPassword,
        });
        const token = (0, jwt_1.generateToken)(user._id.toString());
        (0, cookie_1.setAuthCookie)(res, token);
        const { password, __v, ...safeUser } = user.toObject();
        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            token,
            user: safeUser,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const validatedData = auth_validator_1.loginSchema.parse(req.body);
        const user = await User_1.User.findOne({
            email: validatedData.email,
        });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const isPasswordCorrect = await bcryptjs_1.default.compare(validatedData.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const token = (0, jwt_1.generateToken)(user._id.toString());
        (0, cookie_1.setAuthCookie)(res, token);
        const { password, __v, ...safeUser } = user.toObject();
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: safeUser,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.login = login;
const logout = async (_req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};
exports.logout = logout;
