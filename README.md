# Clone jira

1.	Implement a functional Kanban board with four workflow stages:

o	Backlog

o	In Progress

o	QA

o	Done

2.	Allow users to create new tasks, assign them to a person, and store everything in LocalStorage.

3.	Implement role-based movement rules:

o	Developer can move tasks:

	Backlog → In Progress

	In Progress → QA

	QA can move tasks:

	QA → Done

	No user can move cards backwards.

4.	Enable drag-and-drop movement using one of these recommended libraries:	@dnd-kit

5.	Keep all data persistent between page reloads using LocalStorage.


## Optional Features (Bonus)

•	Task filtering by:
o	Task name
o	Assigned user

•	Dark mode toggle.

You can register a new user or login with defined users:

username: userRose , password: 123  (Dev)

username: userMuss , password: 123  (QA)

username: userTram , password: 123   (Dev)

username: userPhd , password: 123   (QA)

## To use

- Clonar repositorio
  
- Usar comandos:

```console
 npm install
 npm run dev
```