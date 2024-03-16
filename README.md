METHOD: post 
- ('/boards') - створити дошку. BODY - {description, name}

- ('/boards/:boardId/tasks') - створити завдання для дошки за ID BODY - {title, description, status}

METHOD: get 
- ('/boards') - всі наявні дошки

- ('/boards/:id') - дошка за певним ІД

- ('/boards/:boardId/tasks') - всі завдання для дошки з певним ІД

METHOD: put 
- ('/boards/:id') - оновити дані про description, name для дошки


METHOD: patch 
- ('/tasks/:taskId') - оновити задачу 

METHOD: delete 
- ('/boards/:id') - видалити дошку

- ('/tasks/:taskId') - видалити завдання

