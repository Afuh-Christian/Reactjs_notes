import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <section className='section'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/' className='btn'>back home</Link>
    </section>
    </section>
  );
};
export default Error;
