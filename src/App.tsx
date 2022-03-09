import AppContainer from "./components/AppContainer";
import AppRow from "./components/AppRow";
import ToDoInput from "./components/ToDoInput";


function App() {
  return (
    (
      <main>
        <AppContainer>
          <AppRow>
            {/*content*/}
            <ToDoInput/>
          </AppRow>
        </AppContainer>
      </main>
    )
  );
}

export default App;
