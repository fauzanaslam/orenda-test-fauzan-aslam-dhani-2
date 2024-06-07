import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import "dotenv/config";

const prisma = new PrismaClient();

const Register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;

    let user = await prisma.user.findUnique({
      where: { name },
    });

    if (user) {
      return res.status(400).send({
        status: 400,
        message: "User already exists",
      });
    }

    user = await prisma.user.create({
      data: {
        name,
      },
    });

    return res.status(201).send({
      status: 201,
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(500).send({
      status: 500,
      message: error.message,
      error: error,
    });
  }
};

const UserLogin = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { name },
    });

    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000,
      sameSite: "none",
    });

    res.status(200).json({ userId: user.id, name: user.name });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const userLogout = async (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  res.send("Logout successful");
};

export default { Register, UserLogin, userLogout };
