export const handleTime = (timestamp: number, typeWeek?:"long" | "short" ) => {
    const timeStamp = (timestamp  * 1000) || 0;
    const convertDateWithHour = new Date(timeStamp ).toLocaleString("pt-BR");
    const convertDate = new Intl.DateTimeFormat('pt-BR').format(timeStamp)
    const day = new Intl.DateTimeFormat('pt-BR', {day: "2-digit"}).format(timeStamp)
    const month = new Intl.DateTimeFormat('pt-BR', {month: "short"}).format(timeStamp)
    const week = new Date(timeStamp).toLocaleString("pt-BR", {
      weekday: typeWeek,
    });
    return { convertDateWithHour, convertDate, week, day, month };
  };''