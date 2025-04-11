export default function AddTask({ id, task, deleteTask }) {
  return (
    <ul className="p-4 mt-8 rounded-md bg-pink-50 dark:bg-pink-900 dark:text-white">
      <li className="flex justify-between my-4">
        <span>{task}</span>
        <button className="text-stone-700 hover:text-pink-700 dark:text-stone-200 dark:hover:text-white" onClick={() => deleteTask(id)}>
          Clear
        </button>
      </li>
    </ul>
  );
}
