import logo from './logo.svg';
import './App.css';
import TaskItem from './components/TaskItem';

function App() {
  const items = [

    {
      id: "i1",
      title: "Blockchain Course",
      priority: 9,
      date: new Date(2022, 2, 5),
    },
  
    
    {
      id: "i2",
      title: "Solidity Course",
      priority: 4,
      date: new Date(2021, 3,165),
    },
  
    {
      id: "i3",
      title: "Truffle Course",
      priority: 2,
      date: new Date(2021, 7, 15),
    },
  
    {
      id: "i4",
      title: "veb3 Course",
      priority: 1,
      date: new Date(2021, 8, 1),
    },
  
   ]
  return (
    <div><b><p>Hello World</p></b>
    <TaskItem date={items[0].date} title={items[0].title} priority={items[0].priority}/>
    <TaskItem date={items[1].date} title={items[1].title} priority={items[1].priority}/>
    <TaskItem date={items[2].date} title={items[2].title} priority={items[2].priority}/>
    <TaskItem date={items[3].date} title={items[3].title} priority={items[3].priority}/>
    </div>
  );
}

export default App;
