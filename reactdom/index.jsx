

const container=document.getElementById('root');
console.log(container);

const root=ReactDOM.createRoot(container);
const h2 = React.createElement(
  'h2',
  { style: { color: 'red' } },
  'Welcome to React App Development'
);

const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering College');
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pkG-lYXbH22O4rRKmJoEfnwfgtedYPpqRyPTFIfGPw&s=10',style:{height:'200px',width:'400px'}})
// const div= React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);
const h21= <h2>Hello World</h2>
const h22=<h2>ABES Engineering College</h2>
const div=<div>{h21},{h22}</div>;
const wrapper=<div style={{border:'2px solid red'}}>
{div}
<h2>Hey,USing JSX</h2>
</div>

root.render(wrapper)
