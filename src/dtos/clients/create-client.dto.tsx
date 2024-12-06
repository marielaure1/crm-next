import { z } from "zod";

export const createClientDto = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
  notes: z.string().optional(),
  source: z.string().optional(),
  lastContactDate: z.date().optional(),
  mainContactId: z.string().optional(),
  managerContactId: z.string().optional(),
  contractStartDate: z.date().optional(),
  contractEndDate: z.date().optional(),
  lastPurchaseDate: z.date().optional(),
  clientType: z.string().optional(),
  totalRevenue: z.number().optional(),
});

export type ClientProps = z.infer<typeof createClientDto>;
