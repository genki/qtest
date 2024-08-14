import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, useNavigate } from "@builder.io/qwik-city";

export const useServerTimesLoader = routeLoader$(() => {
  const dates = [];
  const count = Math.floor(Math.random()*10 + 1);
  console.log("count", count);
  for (let i = 0; i < count; ++i) {
    dates.push({date: new Date().toISOString()});
  }
  return dates;
});

export default component$(() => {
  const times = useServerTimesLoader();
  const nav = useNavigate();
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <button onClick$={() => {
        nav();
      }}>Reload</button>
      <div>
        {times.value.map((time,i) => (
          <div key={i}>
            {time.date}
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
