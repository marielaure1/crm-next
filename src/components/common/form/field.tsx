import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/shadcn/ui/form"
import { FieldInput } from "@ui/common/form/field-input";
import { FieldSelect } from "@ui/common/form/field-select";
import { FieldQuill } from "@ui/common/form/field-quill";
import { FieldDate } from "@ui/common/form/field-date";
import { FieldCombobox } from "@ui/common/form/field-combobox";

interface FieldProps {
    type: string;
    fieldData: any;
    form: any;
}



export const Field = ({ type, fieldData, form } : FieldProps) => {
    return(
        <FormField
        key={fieldData.name}
        control={form.control}
        name={fieldData.name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{fieldData.label}</FormLabel>
                <FormControl>
                    <>
                        {type === "input" && <FieldInput field={field}/>}
                        {type === "select" && <FieldSelect field={field} options={fieldData.options}/>}
                        {type === "wysiwyg" && <FieldQuill field={field}/>}
                        {type === "date" && <FieldDate field={field}/>}
                        {type === "combobox" && <FieldCombobox field={field} options={fieldData.options} placeholder={fieldData.placeholder}/>}
                    </>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}/>
    )
}