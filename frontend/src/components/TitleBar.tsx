interface ITitleBarProps {
  title: string;
}

export function TitleBar({ title }: ITitleBarProps) {
  return (
    <div id='title-container'>
      <h2>{title}</h2>
    </div>
  );
}
