"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const { message } = req.body;
    res.json({
        success: true,
        reply: `Zola received: "${message}"`,
    });
});
exports.default = router;
