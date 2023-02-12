export function Loading() {
  return (
    <div className="max-w-full mx-auto mt-10 bg-slate-900 bg-opacity-60 rounded-xl">
      <p
        className="flex justify-center text-3xl text-white p-10 iPhoneSE:mt-5
                      iPhoneSE:text-xl"
      >
        Previsão do tempo ao redor do mundo
      </p>
      <div className="flex justify-around items-center text-white px-8 py-8 rounded-xl opacity-85 opacity-85  opacity-85
                      max-lg:grid grid-cols-2 max-md880:grid-cols-1">

        <div className="mx-auto w-full h-96 max-w-sm rounded-md border border-slate-700 bg-slate-500 p-4 shadow lg: mt-10">
          <div className="animate-pulse space-x-4">
            <div className="ml-[34%] h-32 w-32 rounded-full mt-6 mb-14 bg-slate-400"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-2 rounded bg-slate-400"></div>
                  <div className="col-span-5 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-6 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full h-96 max-w-sm rounded-md border border-slate-700 bg-slate-500 p-4 shadow lg: mt-10 max-md:hidden">
          <div className="animate-pulse space-x-4">
            <div className="ml-[34%] h-32 w-32 rounded-full mt-6 mb-14 bg-slate-400"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-2 rounded bg-slate-400"></div>
                  <div className="col-span-5 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-6 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full h-96 max-w-sm rounded-md border border-slate-700 bg-slate-500 p-4 shadow lg: mt-10 max-lg:hidden">
          <div className="animate-pulse space-x-4">
            <div className="ml-[34%] h-32 w-32 rounded-full mt-6 mb-14 bg-slate-400"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-2 rounded bg-slate-400"></div>
                  <div className="col-span-5 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-6 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full h-96 max-w-sm rounded-md border border-slate-700 bg-slate-500 p-4 shadow lg: mt-10 max-lg:hidden">
          <div className="animate-pulse space-x-4">
            <div className="ml-[34%] h-32 w-32 rounded-full mt-6 mb-14 bg-slate-400"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-2 rounded bg-slate-400"></div>
                  <div className="col-span-5 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-6 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
