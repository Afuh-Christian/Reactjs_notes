import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <Link to='/' className='btn'>
        Back Home
      </Link>
     {/* <div> <a href=""></div> */}
    </div>
  )
}

export default About;