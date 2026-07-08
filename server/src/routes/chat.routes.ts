import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  res.json({
    success: true,
    reply: `Zola received: "${message}"`,
  });
});

export default router;
