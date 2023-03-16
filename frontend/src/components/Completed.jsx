import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import CompletedTask from "./CompletedTask";
function Completed() {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {
                (tasks.length !== 0) ? (
                    tasks.map((task, index) => {
                        return (
                            task.completed && <CompletedTask
                                key={index}
                                task={task}
                                id={index}
                            />
                        )
                    })
                ) : (
                    <h1>No Task Found</h1>
                )
            }
        </div>
    );
}

export default Completed;