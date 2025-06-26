export default function Header({ title, onBack }) {
  return (
    <div className="bg-blue-800 text-white px-4 py-3 flex items-center gap-2">
      {onBack && (
        <button onClick={onBack} className="text-white text-xl mr-2">
          ←
        </button>
      )}
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
