export default function AsideTitle({
  title,
  clickTitle,
  project,
  projectId,
  page,
}) {
  const isSelected = project.id === projectId && page === "click";
  return (
    <li>
      <button
        className={`w-full text-left px-2 py-1 rounded-sm my-1
          text-stone-700 dark:text-white
          hover:text-stone-600 hover:bg-pink-200 dark:hover:text-white dark:hover:bg-pink-700
          focus:bg-pink-200 dark:focus:bg-pink-800
          ${isSelected ? "bg-pink-200 dark:bg-pink-800" : ""}`}
        onClick={() => clickTitle(project.id)}
      >
        {title}
      </button>
    </li>
  );
}
