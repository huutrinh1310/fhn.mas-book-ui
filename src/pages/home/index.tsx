import style from "./index.module.scss";

export default function HomePage() {
  const resizeTextarea = (e: HTMLElement) => {
    e.style.height = "auto";
    e.style.height = `${e.scrollHeight}px`;
  };
  return (
    <div>
      <textarea
        className={style.textarea}
        onInput={(e) => resizeTextarea(e.target as HTMLElement)}
      />
    </div>
  );
}
