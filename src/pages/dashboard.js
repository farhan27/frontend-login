import { useEffect, useState } from "react"
import { useDrop } from "react-dnd"

import { DragAndDrop } from "../components/drag-and-drop/dragDrop"

const labelList = [
    {
        id: 1,
        name: 'Risk',
        status: 'draggable'
    },
    {
        id: 2,
        name: 'Reward',
        status: 'draggable',
    },
    {
        id: 3,
        name: 'Report',
        status: 'draggable'
    },
    {
        id: 4,
        name: 'Potential',
        status: 'draggable'
    },
    {
        id: 5,
        name: 'Opportunity',
        status: 'draggable'
    },

]

export const Dashboard = () => {
    const [board, setBoard] = useState([]);
    const [labelListData, setLabelListData] = useState(labelList)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id) => {
        console.log(id);
        const label = labelListData.filter((label)=>label.id===id);
        label[0].status = 'drop';
        setLabelListData(labelListData.filter((label)=>label.id!==id).concat(label[0]))
        // const newLabelList = labelListData.filter((label) => id === label.id);
        // console.log('newLabelList', newLabelList)
        // setBoard((board) => [...board, newLabelList[0]])

    }

    return <div className="grid grid-rows-2 grid-flow-col gap-4">

        <div className="w-1/2 m-2 p-2 border-2 border-indigo-600 ">
            {
                labelListData.filter((label) => label.status === 'draggable').map((label) => {
                    return (
                        <DragAndDrop key={label.id.toString()} id={label.id} name={label.name} />
                    )
                })
            }

        </div>
        <div className="w-1/2 m-2 p-2 border-2 border-indigo-600" ref={drop}>
            {
                labelListData.filter((label) => label.status === 'drop').map((label) => {
                    return (
                        <DragAndDrop key={label.id.toString()} id={label.id} name={label.name} />
                    )
                })
                // board.map((label) => {
                //     return (
                //         <DragAndDrop  key={label.id.toString()} id={label.id} name={label.name} />
                //     )
                // })
            }
        </div>
    </div>
}