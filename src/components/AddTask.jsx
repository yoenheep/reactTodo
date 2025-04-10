export default function AddTask({ id, task, deleteTask }) {
  return (
    <ul className="p-4 mt-8 rounded-md bg-pink-50">
      <li className="flex justify-between my-4">
        <span>{task}</span>
        <button className="text-stone-700 hover:text-pink-700" onClick={() => deleteTask(id)}>
          Clear
        </button>
      </li>
    </ul>
  );
}
