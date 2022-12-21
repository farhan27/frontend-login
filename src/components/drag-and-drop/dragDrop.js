import { useDrag } from "react-dnd"

export const DragAndDrop = ({ id, name ,className}) => {
    const [{ isDragging }, drag] = useDrag(() => (
        {
            type: "div",
            item: {
                id: id
            },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }
    ));

    return (
        <div
            ref={drag}
            id={id}
            className={className}>
            <p className="text-white">{name}</p>
        </div>
    )
}