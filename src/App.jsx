import React from 'react'
import { Button, Typography } from '@mui/material'
import Header from './components/Header'
import CourseCard from './components/CourseCard'
import './App.css'

const courseList = [
  {
    image : 'https://sbr-technologies.com/wp-content/uploads/2021/07/Mern-Stack-Developer.png',
    heading : 'fullstack mern engineering',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus praesentium veniam est aperiam eius ratione hic fugiat placeat minima'
  },
  {
    image: 'https://cdn.sayonetech.com/media/cache/11/72/1172828ac1b05aa026061b8756fd8bc2.jpg',
    heading : 'Java Backend engineering',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus praesentium veniam est aperiam eius ratione hic fugiat placeat minima'
  },
  {
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_oyoUjCaf6QK_Es7npgwzTjJlx0MNE5aYg&s',
    heading : 'Data Analytics',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus praesentium veniam est aperiam eius ratione hic fugiat placeat minima'
  }
]

const App = () => {
  return (
    <div>
      <Header/>
      <div style={{marginTop: '30px'}}>
           <Typography variant='h3' align='center'>Welcome to Acciojob</Typography>
            <Typography variant='body2' align='center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus praesentium veniam est aperiam eius ratione hic fugiat placeat minima sit?
            </Typography>
      </div>
      <Typography variant='h4' align='center'  marginTop='20px'>
         Our Amazing Courses
      </Typography>
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap:'wrap',
        justifyContent: 'center', 
        marginTop: '20px', 
        paddingBottom: '100px'}}>
        {courseList.map((course, index)=> <CourseCard key={index} image={course.image} heading={course.heading} description={course.description} />)}
      </div>
      <footer>
         <Typography align='center'>
           Made with ❤ by Rajitha
         </Typography>
      </footer>
    </div>
  )
}

export default App
