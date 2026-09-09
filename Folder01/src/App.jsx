import UserCard from "./Components/UserCard"

const App = () => {
  return (
    <div className="container">
    <UserCard name="John Doe" desc="Software Engineer" />
    <UserCard name="Jane Smith" desc="Product Manager" />
    <UserCard name="Bob Johnson" desc="Designer" />
    </div>
  )
}

export default App