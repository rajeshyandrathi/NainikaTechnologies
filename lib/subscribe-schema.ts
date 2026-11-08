import * as z from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address." }).max(200),
  consent: z.literal(true, { message: "Please tick the box to agree to receive Insights emails." }),
  website: z.string().optional(),
});

export type SubscribeValues = z.infer<typeof subscribeSchema>;
