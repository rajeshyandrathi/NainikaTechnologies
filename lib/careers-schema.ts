import * as z from "zod";

export const MAX_FILE_BYTES = 2 * 1024 * 1024; // 2 MB per file keeps the upload under the hosting limit
export const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export const careersSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address." }).max(200),
  phone: z.string().trim().max(50).optional(),
  role: z.string().trim().min(1, { message: "Please choose a role or area." }).max(200),
  link: z
    .string()
    .trim()
    .max(300)
    .optional()
    .refine((v) => !v || /^https?:\/\/\S+$/i.test(v), { message: "Please enter a full link starting with https://" }),
  coverLetterText: z.string().trim().max(6000).optional(),
  consent: z.literal(true, { message: "Please confirm we may use your details for recruitment." }),
  subscribe: z.boolean().optional(),
  website: z.string().optional(),
});

export type CareersValues = z.infer<typeof careersSchema>;

export function fileProblem(file: File | null | undefined, label: string, required: boolean): string | null {
  if (!file || file.size === 0) return required ? `Please attach your ${label}.` : null;
  const name = file.name.toLowerCase();
  if (!ALLOWED_EXTENSIONS.some((ext) => name.endsWith(ext))) return `Your ${label} must be a PDF, DOC or DOCX file.`;
  if (file.size > MAX_FILE_BYTES) return `Your ${label} must be 2 MB or smaller.`;
  return null;
}
