export default function AsideTitle({ title, clickTitle, project }) {
  return (
    <li>
      <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-600 hover:bg-pink-200 text-stone-700" onClick={() => clickTitle(project.id)}>
        {title}
      </button>
    </li>
  );
}
