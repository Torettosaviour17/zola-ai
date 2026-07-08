import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config();

async function bootstrap() {
  const { default: app } = await import("./app");
  const { connectDB } = await import("./config/db");

  const PORT = process.env.PORT || 5000;

  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
