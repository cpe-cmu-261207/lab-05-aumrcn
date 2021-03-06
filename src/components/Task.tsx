import { useState } from "react";

type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function;
}

const Task = ({ id, name , doneFn , deleteFn}: TaskProps) => {
    const [Mouse, setIsMouseInside] = useState<boolean>(false);
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={() => setIsMouseInside(true)} onMouseLeave={() => setIsMouseInside(false)}>
                <span className="text-2xl">{name}</span>
                <div className="flex space-x-1 items-center" style={(Mouse) ? { visibility : "visible"} : { visibility : "hidden"}}>
                    <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>
                    <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>
                </div>
            </div>
    )
}

export default Task;

// {/* Please convert this into a task component */}
// <div
// className="flex justify-between h-8 items-center py-6 border-b"
// >
// <span className="text-2xl"> I am a task </span>
// <div className="flex space-x-1 items-center">
//   <button className="bg-green-400 w-24 text-2xl" >Done</button>
//   <button className="bg-red-400 w-24 text-2xl" >Delete</button>
// </div>
// </div>

// {/* another task example */}
// <div
// className="flex justify-between h-8 items-center py-6 border-b"
// >
// <span className="text-2xl"> I am another task </span>
// <div className="flex space-x-1 items-center">
//   <button className="bg-green-400 w-24 text-2xl" >Done</button>
//   <button className="bg-red-400 w-24 text-2xl" >Delete</button>
// </div>
// </div>