function Card(propss) {
  return (
    <div className = "card">
      <h1>{propss.user}, {propss.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, animi?</p>
      <button>Click Me</button>
    </div>
  )
}

export default Card;