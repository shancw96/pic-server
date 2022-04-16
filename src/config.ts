import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface Config {
  port: number;
  jwtSecret: string;
}

const config: Config = {
  port: +(process.env.PORT || 3000),
  jwtSecret: process.env.JWT_SECRET || "your-secret-whatever",
};

export {config}