import { useState } from "react"
import { useDrop } from "react-dnd"

import { DragAndDrop } from "../components/drag-and-drop/dragDrop"
import { DragAndDropImage } from "../components/drag-and-drop/dragDropImage"
import { DraggableTable } from "../components/table/table"
import { DialogBox } from "../components/dialog-box/dialog-box"

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

const imageAndTableList = [
    {
        id: 1,
        src: "/table.PNG",
        column: 'column1',
        type: 'image',
        name: 'Table Image'
    },
    {
        id: 2,
        component: <DraggableTable />,
        column: 'column1',
        type: 'table',
        name: 'Table'
    },
]

export const Dashboard = () => {

    const [open, setOpen] = useState(false);


    const [labelListData, setLabelListData] = useState(labelList)
    const [imageAndTableListData, setimageAndTableListData] = useState(imageAndTableList)

    const [currLabel, setCurrLabel] = useState('');

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addLabelToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [{ isOverImage }, dropImage] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const addLabelToBoard = (id) => {
        const label = labelListData.filter((label) => label.id === id);
        label[0].status = 'drop';
        setLabelListData(labelListData.filter((label) => label.id !== id).concat(label[0]))
        setCurrLabel(label[0].name)
        handleClickOpen()

    }

    const addImageToBoard = (id) => {
        const image = imageAndTableList.filter((image) => image.id === id);
        image[0].column = 'column2';
        setimageAndTableListData(imageAndTableList.filter((image) => image.id !== id).concat(image[0]))
    }

    return (
        <div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 justify-items-center">
                <div className="grid grid-cols-6 gap-4">
                    <div style={{ height: '500px' }} className="bg-slate-200 m-2 p-2 border-2 rounded col-span-1">
                        <p className="text-neutral-900">Label List</p>
                        {
                            labelListData.filter((label) => label.status === 'draggable').map((label) => {
                                return (
                                    <DragAndDrop
                                        key={label.id.toString()}
                                        id={label.id}
                                        className={"w-32 bg-red-500 mr-2 mb-2 p-2 rounded flex justify-center cursor-pointer"}
                                        name={label.name}
                                        type={'div'}
                                    />
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
                                            className={"w-32 bg-red-500 inline-flex mr-2 p-2 rounded justify-center"}
                                            name={label.name}
                                            type={'div'}
                                        />
                                    )
                                })
                            }
                        </div>

                        <div style={{ width: '800px', height: '420px' }} className="m-2 p-2 border-2 rounded bg-slate-200" ref={dropImage}>
                            {
                                imageAndTableListData.filter((label) => label.column === 'column2').map((picture) => {
                                    return (
                                        picture.type === 'image' ?
                                            <DragAndDropImage key={picture.id.toString()} src={picture.src} id={picture.id} className={'w-full'} /> :
                                            picture.component
                                    )

                                })
                            }

                        </div>
                    </div>
                    <div style={{ height: '500px' }} className="bg-slate-200 m-2 p-2 border-2 rounded col-span-1">
                        <p className="text-neutral-900">Image and Table List</p>
                        {
                            imageAndTableListData.filter((label) => label.column === 'column1').map((picture) => {
                                return (
                                    picture.type === 'image' ?

                                        <DragAndDropImage key={picture.id.toString()} src={picture.src} id={picture.id} width={'150px'} /> :
                                        <DragAndDrop
                                            key={picture.id.toString()}
                                            id={picture.id}
                                            className={"w-32 bg-red-500 mr-2 mb-2 p-2 rounded flex justify-center cursor-pointer"}
                                            name={picture.name}
                                            type={'image'}
                                        />

                                )
                            })
                        }

                    </div>
                </div>
                <DialogBox open={open} handleClose={handleClose} label={currLabel} />
            </div>
        </div>
    )

}