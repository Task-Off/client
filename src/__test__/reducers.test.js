import React from 'react';

import authReducer from '../app/reducer/auth';
import groupsReducer from '../app/reducer/groups';
import routesReducer from '../app/reducer/routes';
import tasksReducer from '../app/reducer/tasks';
import userReducer from '../app/reducer/user';

describe('Reducer tests', () => { 

	describe('Auth Reducer tests', () => {
				
		let auth = {foo: "bar"};
		let state = [];	

		test('LOGIN test', () => {
			let action = {type: 'LOGIN', payload: auth};
			state = authReducer(state, action);

			expect(state).toBe(true);
		});

		test('LOGOUT test', () => {
			let  action = {type: 'LOGOUT', payload: auth};
			state = authReducer(state, action);

			expect(state).toBe(false);
		});

		test('SAVE_USER test', () => {
			let  action = {type: 'SAVE_USER', payload: auth};
			state = authReducer(state, action);

			expect(state.length).toEqual(1);
		});

	})

	describe('Groups Reducer tests', () => { 

		let groups = {foo: "bar"};
		let state = [];			

		test('LOGIN test', () => {
			let action = {type: 'LOGIN', payload: groups};
			state = groupsReducer(state, action);

			expect(state.length).toEqual(1);//are we expecting the state to increase?
		});

		test('LOGOUT test', () => {
			let  action = {type: 'LOGOUT', payload: groups};
			state = groupsReducer(state, action);

			expect(state.length).toEqual(0);
		});

		test('SAVE_USER test', () => {
			let  action = {type: 'SAVE_USER', payload: groups};
			state = groupsReducer(state, action);

			expect(state.length).toEqual(1);
		});
					
	})
	
	describe('Routes Reducer tests', () => { 
			
			let routes = {foo: "bar"};
			let state =[];		
	
			test('SWITCH_ROUTE test', () => {
				let action = {type: 'SWITCH_ROUTE', payload: routes};
				state = routesReducer(state, action);
	
				expect(state.length).toEqual(1);//what exactly is the switch route doing and how do we test this?
			});

			test('LOGOUT test', () => {
				let  action = {type: 'SWITCH_ROUTE', payload: routes};
				state = routesReducer(state, action);
	
				expect(state.length).toEqual(1);//should this return the login route?
			});

			test('LOGIN test', () => {
				let  action = {type: 'SWITCH_ROUTE', payload: routes};
				state = routesReducer(state, action);
	
				expect(state.length).toEqual(1);//should this return the groups route?
			});
		
	})
	
	describe('Tasks Reducer tests', () => { 
				
			let tasks = {foo: "bar"};
			let state =[];		
	
			test('INIT test', () => {
				let  action = {type: 'INIT', payload: tasks};
				state = tasksReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('CREATE_TASK test', () => {
				let  action = {type: 'CREATE_TASK', payload: tasks};
				state = tasksReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('UPDATE_TASK test', () => {
				let  action = {type: 'UPDATE_TASK', payload: tasks};
				state = tasksReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('DELETE_TASK test', () => {
				let  action = {type: 'DELETE_TASK', payload: tasks};
				state = tasksReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('RESET test', () => {
				let  action = {type: 'RESET', payload: tasks};
				state = tasksReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});
		
	})
	
	describe('User Reducer tests', () => { 
				
			let user = {foo: "bar"};
			let state =[];		
	
			test('LOGIN test', () => {
				let  action = {type: 'LOGIN', payload: tasks};
				state = userReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('LOGOUT test', () => {
				let  action = {type: 'LOGOUT', payload: tasks};
				state = userReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});

			test('UPDATE_PROFILE test', () => {
				let  action = {type: 'UPDATE_PROFILE', payload: tasks};
				state = userReducer(state, action);
	
				expect(state.length).toEqual(1);			
					
			});
	})

});