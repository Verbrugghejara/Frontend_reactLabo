import { useState } from "react";
import AppContainer from "../components/AppContainer";
import AppRow from "../components/AppRow";
import ToDoAppHeader from "../components/ToDoAppHeader";
import ToDoInput from "../components/ToDoInput";
import ToDoItems from "../components/ToDoItems";


function App() {
  return (
    
      <main>
        <AppContainer>
          <AppRow>
            <ToDoAppHeader/>
            {/*content*/}
            <ToDoInput/>

            <ToDoItems/>
            <ToDoItems/>
            <ToDoItems/>
            <ToDoItems/>

            {/* {dummyItems.map(()=> {
            })} */}
          </AppRow>
        </AppContainer>
      </main>
    
  );
}

export default App;
