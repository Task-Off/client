import React from 'react';

import {login, logout, loginAction, logoutAction, saveUser} from '../app/actions/auth.js';
import {addGroup, joinGroup, updateUser, loginAction} from '../app/actions/groups.js';
import {switchRoute} from '../app/actions/routes.js';
import {tasksInitialize, taskCreate, taskUpdate, taskDelete, initAction, createAction, updateAction} from '../app/actions/tasks.js';

describe('test auth actions', () => {

  test('auth login returns correct type and payload', ()=> {

    let auth = {};//what objects do we need returned here

    let action = login(auth);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).not.toBe(undefined);
  });

  test('auth logout returns correct type and payload', ()=> {
    
    let auth = {};//what objects do we need returned here

    let action = logout(auth);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
  });

  test('auth loginAction returns correct type and authId', ()=> {
    
    let auth = {};//what objects do we need returned here

    let action = loginAction(auth.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(auth.id);
  });

  test('auth logoutAction returns correct type and authId', ()=> {
    
    let auth = {};//what objects do we need returned here

    let action = logoutAction(auth.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(auth.id);
  });

  test('auth saveUser returns correct type and authId', ()=> {
    
    let auth = {};//what objects do we need returned here

    let action = saveUser(auth.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(auth.id);
  });
  
})

describe('test groups actions', () => {

  test('groups addGroup returns correct type and payload', ()=> {

    let groups = {};//what objects do we need returned here

    let action = addGroup(groups);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).not.toBe(undefined);
  });

  test('groups joinGroup returns correct type and payload', ()=> {
    
    let groups = {};//what objects do we need returned here

    let action = joinGroup(groups);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
  });

  test('groups updateUser returns correct type and authId', ()=> {
    
    let groups = {};//what objects do we need returned here

    let action = updateUser(groups.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(groups.id);
  });

  test('groups logoutAction returns correct type and authId', ()=> {
    
    let groups = {};//what objects do we need returned here

    let action = loginAction(groups.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(groups.id);
  });

})

describe('test routes actions', () => {

  test('routes switchRoute returns correct type and payload', ()=> {
    //what should we even test for switchRoute
    let routes = {};//what objects do we need returned here

    let action = switchRoute(routes);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).not.toBe(undefined);
  });

})

describe('test tasks actions', () => {

  test('tasks tasksInitialize returns correct type and payload', ()=> {

    let tasks = {};//what objects do we need returned here

    let action = tasksInitialize(tasks);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).not.toBe(undefined);
  });

  test('tasks taskCreate returns correct type and payload', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = taskCreate(tasks);

    expect(action.type).toEqual('');
    expect(action.payload.).toEqual('');
    expect(action.payload.).toEqual('');
  });

  test('tasks taskUpdate returns correct type and authId', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = taskUpdate(tasks.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(tasks.id);
  });

  test('tasks taskDelete returns correct type and authId', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = taskDelete(tasks.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(tasks.id);
  });

  test('tasks initAction returns correct type and authId', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = initAction(tasks.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(tasks.id);
  });

  test('tasks createAction returns correct type and authId', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = createAction(tasks.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(tasks.id);
  });

  test('tasks updateAction returns correct type and authId', ()=> {
    
    let tasks = {};//what objects do we need returned here

    let action = updateAction(tasks.id);

    expect(action.type).toEqual('');
    expect(action.payload).toEqual(tasks.id);
  });

})