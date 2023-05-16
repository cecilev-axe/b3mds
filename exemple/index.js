import { createRoot } from 'react-dom/client';

//cibler l'élément html surlequel on veut travailler avec react
const root = createRoot(document.getElementById('app'));

root.render(<h1>Hello, world</h1>);