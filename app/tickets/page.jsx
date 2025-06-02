import TicketList from "./TicketList";
const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>currently open tickets.</p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
};

export default Tickets;
