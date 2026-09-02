const { createElement } = require("react");

const container=document.getElementById('root');
console.log(container);

const root=ReactDOM.createElement(container);
const h2=React.createElement('h2',style:{color:'red'}),welcome to react app developement

root.render(h2);