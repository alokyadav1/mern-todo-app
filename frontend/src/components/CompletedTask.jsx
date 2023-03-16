function CompletedTask({task}) {
    return ( 
        <div className='bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3'>
            <div className="task-info text-slate-900 text-sm w-10/12">
                <h4 className="task-title text-lg">{task.title}</h4>
                <p className="task-description">{task.description}</p>
            </div>
        </div>
     );
}

export default CompletedTask;