export default function Card(props: { text: string }) {
  return (
    <div className="py-8 px-8 my-4 shadow-xl bg-white bg-opacity-50 rounded-2xl">
      {props.text}
    </div>
  );
}
