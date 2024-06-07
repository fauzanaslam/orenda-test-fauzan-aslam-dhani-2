import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, items, discount } = req.body;
    const order = await prisma.order.create({
      data: {
        customerId,
        discount,
        total: 0,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    const total =
      order.items.reduce(
        (sum, item) => sum + item.quantity * item.unitPrice,
        0
      ) - discount;

    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: { total },
    });

    res.status(201).json(updatedOrder);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
