import taskModel from "../models/taskModel.js";

const addTask = (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id;
    console.log("userId", userId);
    const newTask = new taskModel({ title, description, userId })
    newTask.save()
        .then(() => res.status(200).json({ message: "Task added successfully" }))
        .catch((error) => {
            console.log("taskcontroller addTask");
            return (
                res.status(500).json({ message: error.message })
            )
        }
        )
}

const getTask = (req, res) => {
    taskModel.find({ userId: req.user.id })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error.message }))
}
export { addTask, getTask }