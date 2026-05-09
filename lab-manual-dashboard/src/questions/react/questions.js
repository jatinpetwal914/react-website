const reactQuestions = [
  {
    id: 'react-1',
    folder: '22 Feb',
    number: 1,
    tech: 'React',
    title: 'Functional Props Message Component',
    code: `function Welcome({ name }) {
  return <h2>Hello, {name}! Welcome to React Lab.</h2>;
}`,
  },
  {
    id: 'react-2',
    folder: '22 Feb',
    number: 2,
    tech: 'React',
    title: 'Class Counter with Increment and Decrement',
    code: `class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
      </div>
    );
  }
}`,
  },
  {
    id: 'react-3',
    folder: '22 Feb',
    number: 3,
    tech: 'React',
    title: 'Functional Counter with Reset',
    code: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
  },
  {
    id: 'react-4',
    folder: '24 April',
    number: 4,
    tech: 'React',
    title: 'Running Clock and Current Date',
    code: `function Clock() {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <h3>{now.toLocaleDateString()} {now.toLocaleTimeString()}</h3>;
}`,
  },
  {
    id: 'react-5',
    folder: '24 April',
    number: 5,
    tech: 'React',
    title: 'Controlled Form State',
    code: `function UserForm() {
  const [form, setForm] = React.useState({ name: '', city: '' });
  return (
    <form>
      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
      <p>{form.name} - {form.city}</p>
    </form>
  );
}`,
  },
  {
    id: 'react-6',
    folder: '24 April',
    number: 6,
    tech: 'React',
    title: 'Multiple Routes Application',
    code: `function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
  },
]

export default reactQuestions
