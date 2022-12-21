import {  useState } from "react"
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
        const label = labelListData.filter((label) => label.id === id);
        label[0].status = 'drop';
        setLabelListData(labelListData.filter((label) => label.id !== id).concat(label[0]))
        // const newLabelList = labelListData.filter((label) => id === label.id);
        // console.log('newLabelList', newLabelList)
        // setBoard((board) => [...board, newLabelList[0]])

    }

    return (
        <div>


            <div className="grid grid-rows-2 grid-flow-col gap-4 justify-items-center">
                <div className="grid grid-cols-5 gap-4">
                    <div style={{ height: '500px' }} className="bg-slate-200 m-2 p-2 border-2 rounded col-span-1">
                        <p className="text-neutral-900">Label List</p>
                        {
                            labelListData.filter((label) => label.status === 'draggable').map((label) => {
                                return (
                                    <DragAndDrop
                                        key={label.id.toString()}
                                        id={label.id}
                                        className={"w-32 bg-red-500 mr-2 mb-2 p-2 rounded flex justify-center"}
                                        name={label.name} />
                                )
                            })
                        }
                    </div>
                    <div className="col-span-4">

                        <div style={{ width: '800px', height: '80px' }} className="m-2 p-2 border-2 rounded bg-slate-200" ref={drop}>
                            {
                                labelListData.filter((label) => label.status === 'drop').map((label) => {
                                    return (
                                        <DragAndDrop
                                            key={label.id.toString()}
                                            id={label.id}
                                            className={"w-32 bg-red-500 inline-flex mr-2 p-2 rounded flex justify-center"}
                                            name={label.name} />
                                    )
                                })
                            }
                        </div>

                        <div style={{ width: '800px', height: '400px' }} className="m-2 p-2 border-2 rounded bg-slate-200">
                            {/* {
                                labelListData.filter((label) => label.status === 'draggable').map((label) => {
                                    return (
                                        <DragAndDrop 
                                        key={label.id.toString()} 
                                        id={label.id} 
                                        className={"w-32 bg-red-500 inline-flex mr-2 p-2 rounded flex justify-center"}
                                        name={label.name} />
                                    )
                                })
                            } */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}