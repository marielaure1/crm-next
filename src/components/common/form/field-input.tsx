import { Input } from "@ui/shadcn/ui/input"

export const FieldInput = ({ field, ...props } : { field: any }) => {
    return(
        <Input 
        placeholder={field.placeholder}
        type={field.inputType || "text"}
        className="w-full outline-inherit "
        {...field}
        />
    )
}