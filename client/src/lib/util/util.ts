import { type DateArg, format   } from "date-fns";
import { z } from "zod";
export function formatDate(data: DateArg<Date>)

{
    return format(data, 'dd MMM yyyy h:mm a');
}

export const requiredString=(fieldName: string)=>
    z.string({error:`${fieldName} is required`}).min(1, {message: `${fieldName} cannot be empty`});