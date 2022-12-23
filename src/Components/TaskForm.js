import React from "react";
import { useRef } from "react";





const TaskForm = () =>{
   const dateInputRef = useRef();
   const taskInputRef = useRef();

 

    /* const [isAvailable,setIsAvailabale] = useState(true)
    const bookedDates = [] */

    const addTaskHandler = (event) => {
        event.preventDefault();

        const enteredDate = dateInputRef.current.value;
        const enteredtask = taskInputRef.current.value;

        const taskData = {
            task:enteredtask,
            date:enteredDate
        }
        
        console.log(taskData);
    }



    return(
        <div className="formDiv">
            <form>
                <fieldset>
                    <label> Date
                        <input type="date" ref={dateInputRef}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label> Task
                        <textarea type="text" ref={taskInputRef}/>
                    </label>
                </fieldset>

                <button >Check Status</button>
                <button onClick={addTaskHandler}> ADD TASK</button>
            </form>
            
        </div>
    )
} 
export default TaskForm; 