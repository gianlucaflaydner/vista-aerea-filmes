export default function Header() {
  function onHeaderClick() {
    console.log("TESTE");
  }
  return (
    <div className="flex items-center justify-center w-screen h-12 bg-blue-100">
      <button
        onClick={onHeaderClick}
        className="border-solid border-2 border-indigo-600 rounded-full ms-2 px-5"
      >
        {" "}
        Teste
      </button>
    </div>
  );
}
