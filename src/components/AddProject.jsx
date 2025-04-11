import { useState } from "react";

export default function AddProject({ setPage, setProjects }) {
  const [todo, setTodo] = useState({ title: "", body: "", date: "" });

  const handleTodo = (e) => {
    setTodo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const clickSave = () => {
    // 셋 중 하나라도 공백이면 실행 X
    if (todo.title.trim() === "" || todo.body.trim() === "" || todo.date === "") return alert("모든 칸을 채워주세요");

    const newTodo = {
      id: Date.now(),
      title: todo.title,
      body: todo.body,
      date: todo.date, // 날짜 형식 그대로 저장
    };

    setProjects((todos) => {
      return [...todos, newTodo];
    });

    setTodo({ title: "", body: "", date: "" }); // body로 수정
    setPage("first");
  };

  const clickCancle = () => {
    setTodo({ title: "", body: "", date: "" }); // body로 수정
    setPage("first");
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white" onClick={clickCancle}>
            하지마
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-pink-700 text-stone-50 hover:bg-pink-600" onClick={clickSave}>
            저★장
          </button>
        </li>
      </menu>
      <div>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">Title</label>
          <input className="w-full p-1 border-b-2 rounded-sm border-pink-100 bg-pink-50 text-stone-600 focus:outline-none focus:border-pink-500" type="text" name="title" onChange={handleTodo} value={todo.title}></input>
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">Description</label>
          <textarea className="w-full p-1 border-b-2 rounded-sm border-pink-100 bg-pink-50 text-stone-600 focus:outline-none focus:border-pink-500" name="body" onChange={handleTodo} value={todo.body}></textarea>
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">Due Date</label>
          <input className="w-full p-1 border-b-2 rounded-sm border-pink-100 bg-pink-50 text-stone-600 focus:outline-none focus:border-pink-500" type="date" name="date" onChange={handleTodo} value={todo.date}></input>
        </p>
      </div>
    </div>
  );
}
