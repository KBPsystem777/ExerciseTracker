import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
        <br />
        <Route path="/exercises" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create-exercise" component={CreateExercise} />
        <Route path="/create-user" component={CreateUser} />
		<Route path="/users" component={UserList} />
			</div>
		</Router>
	)
}
export default App;