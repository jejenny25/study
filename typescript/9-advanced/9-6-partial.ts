{
  type ToDo = {
    title: string;
    desc: string;
    label: string;
    proirity: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldToUpdate };
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    desc: 'study hard',
    label: 'study',
    proirity: 'high',
  };

  const updated = updateTodo(todo, { proirity: 'low' });
  console.log(updated);
}
