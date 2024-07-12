const App = () => {
  return (
    <>
      <h3>VITE_URL : {import.meta.env.VITE_URL}</h3>
      <h3>VITE_ENV : {import.meta.env.VITE_ENV}</h3>
      <h3>VITE_TEST : {import.meta.env.VITE_TEST}</h3>
      <h3>VITE_DEV : {import.meta.env.VITE_DEV}</h3>
    </>
  );
};

export default App;
