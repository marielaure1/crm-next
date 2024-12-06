import { DatePicker } from "@ui/common/date/date-picker"

export const FieldDate = ({ field } : { field: any }) => {
    return(
        <DatePicker field={field} placeholder="Select a date" />
    )
}