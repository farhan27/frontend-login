import { useDrag } from "react-dnd"

export const DragAndDropImage = ({ id, src, className, width }) => {
    const [{ isDragging }, drag] = useDrag(() => (
        {
            type: "image",
            item: {
                id: id
            },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }
    ))
    return (

        <div>
            <img
                ref={drag}
                alt={id}
                src={src}
                id={id}
                width={width ? width : ''}
                className={className ? className : ''}
                style={{ border: isDragging ? "5px solid" : "0px" }} />
        </div>
    )
}