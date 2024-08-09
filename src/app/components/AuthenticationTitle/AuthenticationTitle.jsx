export function AuthenticationTitle({ title, subtitle }) {
  return (
    <div className="flex-col items-start gap-xxs self-stretch">
      <p className="display-xs">{title}</p>
      <p className="text-md-regular text-gray-4">{subtitle}</p>
    </div>
  );
}
