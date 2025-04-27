import { useEffect, useRef, useState } from "react";
import AddTask from "./AddTask";

export default function ClickProject({
  projects,
  projectId,
  setPage,
  setProjects,
}) {
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!projectId) return;

    setProject(null);
    const data = projects.find((projects) => projects.id === projectId);

    if (data) {
      setProject(data);
      setTasks(data.task || []);
    }
  }, [projectId, projects]);

  const clickDelete = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    setPage("first");
  };

  const addTask = () => {
    const newValue = inputRef.current.value.trim();
    if (!newValue) return;

    const newTask = { id: Date.now(), value: newValue };

    // 1. tasks 상태 업데이트
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // 2. projects 상태에서 해당 project 업데이트
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, task: updatedTasks } : project
      )
    );

    // 3. input 초기화
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    // 1. tasks에서 해당 task 제거
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    // 2. projects 상태 업데이트
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, task: updatedTasks } : project
      )
    );
  };

  if (!project) {
    return (
      <p className="text-center mt-16 dark:text-white">
        프로젝트를 로드 중입니다...
      </p>
    );
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 dark:text-white">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950  dark:text-stone-200 dark:hover:text-white"
            onClick={() => clickDelete(project.id)}
          >
            삭제
          </button>
        </div>
        <p className="mb-4 text-stone-400 dark:text-stone-50">{project.date}</p>
        <p className="text-stone-600 whitespace-pre-wrap dark:text-white">
          {project.body}
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4 dark:text-white">
          Task
        </h2>
        <div className="flex items-center gap-4">
          <input
            className="w-64 px-2 py-1 rounded-sm bg-pink-100"
            type="text"
            ref={inputRef}
          />
          <button
            className="text-stone-700 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white"
            onClick={addTask}
          >
            더하기
          </button>
        </div>
        {tasks.length === 0 ? (
          <p className="text-stone-800 my-4 dark:text-white">
            코멘트가 없습니다.
          </p>
        ) : (
          tasks.map((task) => {
            return (
              <AddTask
                key={task.id}
                id={task.id}
                task={task.value}
                deleteTask={deleteTask}
              />
            );
          })
        )}
      </section>
    </div>
  );
}
