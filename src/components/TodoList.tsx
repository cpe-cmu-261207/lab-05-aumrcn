import { useState } from "react";
import React from "react";
import Task from "./Task";

type TaskData = {
    id: number; //ใช้ตอนลบ
    name: string;
    doneFn: Function;
    deleteFn: Function;
}

const TodoList = () => {

    const [curTask, setCurTask] = useState<string>('');
    const [tasksCount, setTasks] = useState<TaskData[]>([]);

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }// ตัวอักษรในช่องค้นหา

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
            console.log("enter pressedd")
            const input = document.querySelector("input");
            if (input != null) {
                if (input.value !== "") {
                    console.log("task added")
                    addTask(input.value);
                    console.log(tasksCount);
                } else {
                    alert("Task cannot be empty")
                }
            } else {
                alert("Task cannot be empty");
            }
        }
    }


    const addTask = (taskName: string) => {
        const newId = (new Date()).getTime();
        const newTask: TaskData = { id: newId, name: taskName }
        let taskArr = tasksCount;
        taskArr.push(newTask);
        setTasks(taskArr);
        resetInputField();
    }

    const deleteTask = (id: number) => {
        const taskArr = tasksCount.filter(x => x.id !== id);
        setTasks(taskArr);
    }

    const doneTask = (id: number) => {
        const doneTemp = tasksCount.filter(x => x.id === id)
        deleteTask(doneTemp[0].id);

    }

    const resetInputField = () => {
        var temp = curTask;
        var inputField = document.querySelector('input');
        if(inputField!=null){
            inputField.value = "";
        }
        setCurTask("");
    }

    return (
        <div>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold'>+</button>
            </div >
            <div>
                {tasksCount.map(x => <Task id={x.id} name={x.name} doneFn={x.doneFn()}/>)}
            </div>


        </div>
    )
}




export default TodoList;

// {/* todo section */ }
// < div className = 'mx-auto max-w-4xl' >

// {/* task input and add button */ }
// < div className = 'flex space-x-1' >
// <input className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback}></input>
// <button className='border border-gray-400 w-8 font-bold'>+</button>
// </div >

// {/* tasks section */ }
// < div >
// {/* task example */ }
// {/* Please convert this into a task component */ }
// <div
// className="flex justify-between h-8 items-center py-6 border-b"
// >
// <span className="text-2xl"> I am a task </span>
// <div className="flex space-x-1 items-center">
// <button className="bg-green-400 w-24 text-2xl" >Done</button>
// <button className="bg-red-400 w-24 text-2xl" >Delete</button>
// </div>
// </div>

// {/* another task example */ }
// <div
// className="flex justify-between h-8 items-center py-6 border-b"
// >
// <span className="text-2xl"> I am another task </span>
// <div className="flex space-x-1 items-center">
// <button className="bg-green-400 w-24 text-2xl" >Done</button>
// <button className="bg-red-400 w-24 text-2xl" >Delete</button>
// </div>
// </div>

// </div >
// </div >