import { useDrag } from "react-dnd"

export const DragAndDrop = ({ id, name }) => {
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

    //console.log(isDragging ? 'drag id' + String(id) : null)

    return (
        <div
            ref={drag}
            id={id}
            className="w-32 bg-red-500 inline-flex mr-2 p-2 rounded flex justify-center">
            <p className="text-white">{name}</p>
        </div>
    )
}