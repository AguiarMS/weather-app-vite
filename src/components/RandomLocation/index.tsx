
export function RandomLocation(data: string[]) {
  return (
    <div className="flex justify-center max-w-6xl mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20 px-20">
      <div className="flex justify-center flex-col">
        <div className="flex space-x-4">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="text-white px-36 py-40 border-4 border-white rounded-lg"
            >
              <p className="text-2xl">{item.name}</p>
              <div className="text-2xl">{item?.main?.temp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
