export default function Section({ title, children }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {title}
          </h2>
        )}
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}