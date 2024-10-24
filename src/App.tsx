import { ChangeEvent, useState } from "react";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import { FeatureCodeAction } from "./enums/feature";
import { Can } from "./context/AbilitiesContext";

function App() {
  const { user } = useAuthContext();
  const { CREATE, DELETE, UPDATE } = FeatureCodeAction;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Teste",
      description: "Teste para controle de acesso",
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: new Date().getTime() }]);
    setNewTask({
      title: "",
      description: "",
    });
  };

  console.log(user);
  return (
    <main>
      <h1>Usando CSAL para controle de acesso</h1>

      <section>
        <Can I={CREATE} this={user.type}>
          <form>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange={handleChange}
            />
            <button type="button" onClick={addTask}>
              Adicionar
            </button>
          </form>
        </Can>

        {tasks.map((task) => (
          <div id={task.id.toString()}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <Can I={UPDATE} this={user.type}>
              <button>Editar</button>
            </Can>
            <Can I={DELETE} this={user.type}>
              <button>Excluit</button>
            </Can>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
