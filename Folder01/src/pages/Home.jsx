import React from 'react'
import Navigation from '../Components/Nav/Navigation'
import Card from '../Components/Card/Card'
import HomeStyles from './Home.module.css'
export default function Home() {
  const sampleData = [{
    name: 'John Doe',
    email: 'john.doe@example.com',
    review: 'Great service!',
    rating: 5
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    review: 'Excellent customer support!',
    rating: 5
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    review: 'Very satisfied with the product.',
    rating: 4
  },
  {
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    review: 'Fast delivery and great quality!',
    rating: 5
  },
  {
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    review: 'Highly recommended!',
    rating: 5
  }
];
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div className={HomeStyles.customer}>
        {sampleData.map((data, idx) => {
          return (
            <Card key={idx} data={data} />
          )
        })}
      </div>
      
    </div>
  )
}
