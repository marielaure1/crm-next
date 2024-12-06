import ReactQuill from "react-quill"

export const FieldQuill = ({ field } : { field: any }) => {
    return(
        <ReactQuill value={field.value} onChange={field.onChange} />
    )
}