import * as z from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }).max(200),
  consent: z.literal(true, { message: "Please tick the box to agree to receive Insights emails." }),
  website: z.string().optional(),
});

export const tokenSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(200),
  token: z.string().min(10).max(200),
});

export type SubscribeValues = z.infer<typeof subscribeSchema>;
