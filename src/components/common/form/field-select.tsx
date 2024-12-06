import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/shadcn/ui/select"

export const FieldSelect = ({ field, options } : { field: any, options: any[] }) => {
    return(
        <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
                <SelectValue placeholder={`Select ${field?.label?.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
            {options?.map((option : any, index : number) => (
                <SelectItem key={index} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>
    )
}