export function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex-col items-center gap-sm self-stretch">
      <p className="display-lg gradient-text text-center">{title}</p>
      <p className="text-lg text-center text-gray-4">{subtitle}</p>
    </div>
  );
}
