"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = getCurrentUser;
const User_1 = require("../models/User");
async function getCurrentUser(req, res) {
    try {
        const user = await User_1.User.findById(req.user?.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.json({
            success: true,
            user,
        });
    }
    catch {
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
