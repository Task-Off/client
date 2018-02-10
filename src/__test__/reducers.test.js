import React from 'react';

import categoryReducer from '../app/reducer/store';

describe('Reducer tests', () => { 

	describe('createStore Reducer tests', () => {
		
		let = {};
		let state =[];		

		test('', () => {
			let action = {};
			state = (state, action);

			expect(state.length).toEqual(1);
			expect(state[0].budget).toEqual('');			
			expect(state[0].name).toEqual('');
			expect(state[0].id).not.toBe(undefined);			
				
    });
    
  })
  
})