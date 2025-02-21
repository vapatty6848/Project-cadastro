import { z } from "zod";



export const bandForm = z.object({
  registrationDate: z.coerce.date().refine((value) => value <= new Date(), {
    message: "A data não pode ser maior que a data atual(hoje)",
  }),
  memberName: z.coerce.string().toUpperCase().min(4).max(50),
  birthdayDate: z.coerce.date().refine((value) => value < new Date(), {
    message: "seu aniversário  deve  ser  anterior a data de hoje"
  }),
  address: z.string().min(2).max(50) ,
  addressNumber: z.coerce.number().min(1),
  addressComplement: z.string().optional(),
  addressCity: z.string().optional(),
  addressCep: z.string().optional(),
  email: z.coerce.string().email().min(8).max(50),
  clothes: z.string().min(1).max(12),
  shoes: z.coerce.number().min(2),
  no_apply: z.boolean(),
  instrumentId: z.string(),
  instrumentDateIn: z.coerce.date().refine((value) => value <= new Date(), {
    message: "A data não pode ser maior que a data atual(hoje)",
  }),
  nameAccountable: z.string().min(4).max(50),
  emailAccountable: z.coerce.string().min(8),
  phoneAccountable: z.string(),
  accountableAddress: z.string(),
  cpfAccountable: z.string(),
  areaText: z.coerce.string(),
  areaFile: z.coerce.string(),
  nameSchool: z.string().min(4).max(50),
  addressSchool: z.string().min(4).max(50),
  citySchool: z.string().min(4).max(20),
  phoneSchool: z.string(),
  contactSchool: z.string().min(4).max(20),
  emailSchool: z.string().min(8),
})
