export const weekdays = [
  {
    id: 1,
    title: "Segunda",
  },
  {
    id: 2,
    title: "Terça",
  },
  {
    id: 3,
    title: "Quarta",
  },
  {
    id: 4,
    title: "Quinta",
  },
  {
    id: 5,
    title: "Sexta",
  },
]



export const NextDays = () => {
  return (
    <div className="flex justify-center max-w-6xl mx-auto mt-12 bg-slate-900 bg-opacity-60 text-white rounded-xl py-10">
      <div className="grid grid-cols-5 space-x-8">
        {weekdays.map((weekday) => (
          <div key={weekday.id}>
            <p>{weekday.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
