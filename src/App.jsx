import { useEffect, useState } from 'react';
import './App.css';
import TodoSection from './components/TodoSection';
import TodoList from './components/TodoList';

function App() {
	const [task, setTask] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		const storedData = localStorage.getItem('list');
		if (storedData) {
			setTask(JSON.parse(storedData));
		}
	}, []);

	function hInput(e) {
		setNewTask(e.target.value);
	}

	function hAdd() {
		if (newTask !== '') {
			const updatedTasks = [...task, newTask];
			setTask(updatedTasks);
			localStorage.setItem('list', JSON.stringify(updatedTasks));
			setNewTask('');
		}
	}

	function hDelete(index) {
		const updatedTasks = task.filter((_, i) => i !== index);
		setTask(updatedTasks);
		localStorage.setItem('list', JSON.stringify(updatedTasks));
	}

	return (
		<>
			<TodoSection onInput={hInput} value={newTask} onAdd={hAdd} />
			<TodoList task={task} hDelete={hDelete} />
		</>
	);
}

export default App;
