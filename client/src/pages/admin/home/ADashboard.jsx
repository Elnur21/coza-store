import React, { useContext } from 'react'
import Numbers from './Numbers'
import { faUsers, faShoppingBag, faDiagramProject, faArrowTrendUp, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../context/UserContext'
import { CardContext } from '../../../context/CardContext'
import { CategoryContext } from '../../../context/CategoryContext'

const ADashboard = () => {
  const { basicData } = useContext(CardContext);
    const { users } = useContext(UserContext);
    const { categories } = useContext(CategoryContext);
  return (
    <div className='d-flex justify-content-center py-5'>
      <div className='w-75 text-start'>
        <h2 className='fs-1 fw-bold text-center'>Dashboard</h2>
        <div className='d-flex gap-5 w-100 px-2 mt-5 flex-column flex-lg-row'>
          <Numbers count={users.length} name={"Users"} icon={faUsers} color={"info"} />
          <Numbers count={basicData.length} name={"Cards"} icon={faShoppingBag} color={"primary"} />
          <Numbers count={categories.length} name={"Categories"} icon={faDiagramProject} color={"success"} />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 fs-5 mt-5'>
            <h5 className='text-center fs-3'>Test account for admins, if needed</h5>
            <div className=' mt-4'>
              <p><span className='text-primary'>email:</span> testuser@gmail.com</p>
              <p><span className='text-primary'>password:</span> admin1234</p>
              <p className='text-danger fs-6'>** Don't delete this user ( <span className='text-success'> if you delete by mistake, create again this</span> ).</p>
            </div>
          </div>
          <div className='col-12 col-md-6 mt-5'>
            <h5 className='text-center fs-3'>Admins can do:</h5>
            <ul className='list-group fs-5 mt-4'>
              <li className='list-group-item'> <FontAwesomeIcon icon={faArrowDown} /> <span className='text-danger'>Delete</span> user/card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon icon={faArrowTrendUp} /> <span className='text-warning'>Update</span> user/card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon icon={faArrowUp} /> <span className='text-success'>Add</span> user/card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon icon={faArrowTrendUp} /> <span className='text-primary'>Add/Remove</span> Slides/banners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ADashboard