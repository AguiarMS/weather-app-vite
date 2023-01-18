
export function RandomLocation(data: string[]) {
  return (
    <div className="flex justify-center max-w-6xl mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20 px-20">
      <div className="flex justify-center flex-col mr-10">
        <div className="flex space-x-4">
          {data.map((item) => (
            <div key={item.id} className="text-white">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
