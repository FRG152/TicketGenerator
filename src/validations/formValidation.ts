import { z } from "zod";

export const schemaTicket = z.object({
  avatar: z.string().nonempty({ message: "Please select your avatar image" }),
  full_name: z.string().nonempty({ message: "Full name is required" }),
  email_address: z
    .string()
    .email({ message: "Plesae enter a valid email address" })
    .nonempty({ message: "Plesae enter a valid email address" }),
  username: z.string().nonempty({ message: "Please enter your username" }),
});
