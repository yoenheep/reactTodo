import mimi from "../assets/mimi.png";

export default function First({ setPage }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-30 h-30 object-contain mx-auto" src={mimi} />
      <h2 className="text-xl font-bold text-stone-500  dark:text-white my-4">
        프로젝트가 없습니다
      </h2>
      <p className="text-stone-400  dark:text-stone-50 mb-4">
        프로젝트를 추가해주세요
      </p>
      <p className="mt-8">
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-pink-700 text-stone-200 hover:bg-pink-600 hover:text-stone-100"
          onClick={() => setPage("add")}
        >
          프로젝트 추가
        </button>
      </p>
    </div>
  );
}
