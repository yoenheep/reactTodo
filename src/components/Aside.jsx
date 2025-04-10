import AsideTitle from "./AsideTitle";

export default function Aside({ setPage, projects, clickTitle }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-pink-100 rounded-r-xl text-stone-900 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-900">니 프로젝트</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-pink-200 text-stone-700 hover:bg-pink-300 hover:text-stone-100" onClick={() => setPage("add")}>
          더하기 프로젝트
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return <AsideTitle key={project.id} title={project.title} clickTitle={clickTitle} project={project} />;
        })}
      </ul>
    </aside>
  );
}
