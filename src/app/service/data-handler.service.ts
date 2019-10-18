import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {TestData} from '../data/TestData';
import {Priority} from '../model/Priority';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }
  taskSubject = new Subject<Task[]>()

  getCategories(): Category[] {
    return TestData.categories;
  }
  fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }
  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category );
    this.taskSubject.next(tasks);
  }
  getPriorities(): Priority[] {
    return TestData.priorities;
  }
}
