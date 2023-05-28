import React, { useContext } from 'react'
import Numbers from './Numbers'
import { faUsers, faShoppingBag, faDiagramProject, faArrowTrendUp, faArrowDown, faArrowUp, faUsersViewfinder, faSliders, faContactCard, faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../context/UserContext'
import { CardContext } from '../../../context/CardContext'
import { CategoryContext } from '../../../context/CategoryContext'
import { BannerContext } from '../../../context/BannerContext';
import { ContactContext } from "../../../context/ContactContext";
import { BlogContext } from "../../../context/BlogContext";
import { SlideContext } from "../../../context/SlideContext";

const ADashboard = () => {
  const { basicData } = useContext(CardContext);
  const { users } = useContext(UserContext);
  const { categories } = useContext(CategoryContext);
  const { banners } = useContext(BannerContext);
  const { slides } = useContext(SlideContext);
  const { contacts } = useContext(ContactContext);
  const { blogs } = useContext(BlogContext);
  return (
    <div className='d-flex justify-content-center py-5'>
      <div className='w-75 text-start'>
        <h2 className='fs-1 fw-bold text-center'>Dashboard</h2>
        <div className='d-flex gap-5 w-100 px-2 mt-5 flex-column flex-lg-row flex-wrap justify-content-center'>
          <Numbers count={users.length} name={"Users"} icon={faUsers} color={"info"} />
          <Numbers count={basicData.length} name={"Cards"} icon={faShoppingBag} color={"primary"} />
          <Numbers count={categories.length} name={"Categories"} icon={faDiagramProject} color={"success"} />
          <Numbers count={banners.length} name={"Banners"} icon={faUsersViewfinder} color={"danger"} />
          <Numbers count={slides.length} name={"Slides"} icon={faSliders} color={"warning"} />
          <Numbers count={contacts.length} name={"Contacts"} icon={faContactCard} color={"dark"} />
          <Numbers count={blogs.length} name={"Blogs"} icon={faBlog} color={"secondary"} />
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
              <li className='list-group-item'> <FontAwesomeIcon className='me-4' icon={faArrowDown} /> <span className='text-danger'>Delete</span> user/card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon className='me-4' icon={faArrowTrendUp} /> <span className='text-warning'>Update</span> user/card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon className='me-4' icon={faArrowUp} /> <span className='text-success'>Add</span> card/category</li>
              <li className='list-group-item'> <FontAwesomeIcon className='me-4' icon={faArrowTrendUp} /> <span className='text-primary'>Add/Remove/Update</span> slides/banners/contacts/blogs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ADashboard