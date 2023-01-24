import "./App.css";

function App() {
  return (
    <div className="App">
      <Job slaray={90000} position="Senior SDE" company="Amazon" />
      <Job slaray={12000} position="Junio SDE" company="Google" />
      <Job slaray={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
