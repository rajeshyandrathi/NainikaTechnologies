import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address." }).max(200),
  phone: z.string().trim().max(50).optional(),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }).max(5000),
  website: z.string().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
