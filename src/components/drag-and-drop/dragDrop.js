import { useDrag } from "react-dnd"

export const DragAndDrop = ({ id, name, className, type }) => {
    const [{ isDragging }, drag] = useDrag(() => (
        {
            type: type,
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