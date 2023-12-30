import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
    
    private todos:Todo[] = [
        {id:1,description:'Terminar postgresql',done:true},
        {id:2,description:'Terminar nest + GraphQL ',done:false},
        {id:3,description:'Ver kafka',done:false},
        {id:4,description:'Que mildred regrese <3',done:false},
    ]


    findAll():Todo[]{
        return this.todos;
    }
    findOne(id:number): Todo {
       const todo = this.todos.find(todo => todo.id === id)
       if(!todo) throw new NotFoundException(`Todo no encontrado`);
       return todo;
    }
}
