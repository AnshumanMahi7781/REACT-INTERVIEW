import React from 'react'
import { Link } from 'react-router-dom'

function StudentCompo() {
  return (
    <div>
      STUDENT COMPONENT
      <ul>
        <li>
        <Link to={`/student/${1}`}>1</Link>
        </li>
        <li>
        <Link to={`/student/${2}`}>2</Link>
        </li>
        <li>
        <Link to={`/student/${3}`}>3</Link>
        </li>
        <li>
        <Link to={`/student/${4}`}>4</Link>
        </li>
      </ul>
    </div>
  )
}

export default StudentCompo
