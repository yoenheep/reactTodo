import AsideTitle from "./AsideTitle";
import DarkButton from "./DarkButton";

export default function Aside({ setPage, projects, clickTitle, projectId, page }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-pink-100 rounded-r-xl text-stone-900 md:w-72  dark:bg-pink-900 transition-colors duration-200">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-900  dark:text-white">니 프로젝트</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-pink-200 text-stone-700 hover:bg-pink-300 hover:text-stone-100  dark:text-white  dark:bg-pink-700 dark:hover:bg-pink-600" onClick={() => setPage("add")}>
          더하기 프로젝트
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return <AsideTitle key={project.id} title={project.title} clickTitle={clickTitle} project={project} projectId={projectId} page={page} />;
        })}
      </ul>

      {/* 다크모드 버튼 추가 */}
      <div className="mt-8 pt-4 border-t border-pink-200">
        <DarkButton />
      </div>
    </aside>
  );
}
