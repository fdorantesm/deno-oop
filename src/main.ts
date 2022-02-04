import { Columns } from "./kanban/enums/columns.enum.ts";
import { Card } from "./kanban/entities/card.ts";

const init = new Card();
init.moveTo(Columns.IN_PROGRSS);

const installDependencies = new Card();
installDependencies.moveTo(Columns.IN_PROGRSS);

const hotfix = new Card();

const tickets = [init, installDependencies, hotfix];

const inTodo = tickets.filter((ticket) => ticket.column === Columns.IN_PROGRSS);

console.log({ inTodo: inTodo.length });
