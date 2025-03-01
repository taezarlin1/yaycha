import { useContext, useState } from "react"
import Item from "./Item"
import List from "./List"
import Form from "./Form"
import { AppContext } from "./ThemedApp"

export default function App(){
  const { mode, setMode } = useContext(AppContext)
  const [data, setData] = useState([
    {id: 1, content: "Hello World!", name: "Alice"},
    {id: 2, content: "React is fun", name: "Bob"},
    {id: 3, content: "Interesting", name: "Chris"},

  ])

  const [showForm, setShowForm] = useState(false);

  const remove = (id)=>{
    setData(data.filter(item=>item.id!==id))
  }
  const add = (content, name)=>{
    const id = data[data.length - 1].id + 1;
    setData([...data, {id, content, name}])
  }

  return (
    <div 
      style={{ 
        maxWidth: 600, 
        margin: "20px auto",
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black"
      }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >Yaycha
        <button 
          onClick={()=>setShowForm(!showForm)}
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            border: "0 none",
            background: showForm ? "#dc3545" : "#0d6efd",
            color: "white"
          }}
        >
          {showForm ? "x" : "+"}
        </button>
        <button
          onClick={()=>setMode(mode==="dark" ? "light" : "dark")}
          style={{
            marginLeft: 8,
            padding: "0 20px",
            height: 32,
            borderRadius: 32,
            border: "0 none",
            background: mode === "dark" ? "#333" : "#ddd",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          {mode === "dark" ? "Light" : "Dark"}
        </button>
      </h1>
      
      {showForm && <Form add={add}/>}
      <List>
        {data.map(item=>{
          return <Item key={item.id} item={item} remove={remove}/>
        })}
      </List>
      
    </div>
  )
}