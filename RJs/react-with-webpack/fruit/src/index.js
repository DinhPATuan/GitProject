import ReactDOM from "react-dom/client";
const fruit = ['Apple','Banana','Orange','Apricot','Black rowan','Cranberry'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <h1>
    List of fruit
  </h1>
  <ul>
    {fruit.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
</div>
);
