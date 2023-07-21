import HistoryItem from "./card/historyItem";
const itemsList = [
  {
    event: "Reemplazo",
    date: "12/12/2020",
    functions: ["Gestion de transportes de contenedores"],
    location: "Buenos Aires",
  },
  {
    event: "Reemplazo",
    date: "12/12/2020",
    functions: ["Gestion de transportes de contenedores"],
    location: "Buenos Aires",
  },
  {
    event: "Reemplazo",
    date: "12/12/2020",
    functions: ["Gestion de transportes de contenedores"],
    location: "Buenos Aires",
  },
];
export default function HistorySection() {
  return (
    <section>
      <div className="flex flex-col items-center w-11/12 mx-auto relative">
        <div
          id="divider"
          className="absolute top-0 left-[50%] right-0 h-full w-[4px] shadow-lg shadow-sky-700"
          style={{
            boxShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00ff00, 0 0 70px #00ff00, 0 0 80px #00ff00, 0 0 100px #00ff00, 0 0 150px #00ff00",
            background: "linear-gradient(to bottom, #0af, #07a)",
          }}
        ></div>
        {itemsList.map((item) => {
          const direction =
            itemsList.indexOf(item) % 2 === 0
              ? "self-start pe-5 text-right"
              : "self-end ps-5 text-left";
          return (
            <HistoryItem key={item.event} {...item} className={direction} />
          );
        })}
      </div>
    </section>
  );
}
