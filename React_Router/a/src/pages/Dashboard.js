const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </section>
  );
};
export default Dashboard;
