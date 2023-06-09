import React, { useContext, useEffect, useState } from 'react'
import { BannerContext } from '../../../context/BannerContext';
import { Link, useNavigate } from 'react-router-dom';
import { faRemove, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createBanner } from '../../../api/requests';

const Banners = () => {
    const { banners, deleteBanner } = useContext(BannerContext);
    const [bannersData, setBannersData] = useState([]);
    useEffect(() => {
        setBannersData(banners);
    }, [banners])

    const [banner, setBanner] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBanner((prevBanner) => ({
            ...prevBanner,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('imageFile', selectedFile);
        formData.append('name', banner.name);
        formData.append('description', banner.description);
        createBanner(formData);
        navigate("/admin/banners");
        window.location.reload();
    };
    if(bannersData.length ===0){
        return <div className='text-center fs-3 py-5'>There are not any banners</div>
    }

    return (
        <div className="d-flex align-items-center flex-column py-5">
            <div className="w-50">
                <h2 className='text-center'>All Banners</h2>
                <table class="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col" colSpan={3}>Image URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bannersData.map(banner => (
                                <tr key={banner._id}>
                                    <th scope="row">{banner.name}</th>
                                    <th scope="row">{banner.description}</th>
                                    <th scope="row">{banner.image}</th>
                                    <td align='end'>
                                        <Link className="btn btn-warning text-white" to={`/admin/banners/${banner._id}`}>
                                            <FontAwesomeIcon icon={faUpload} />
                                        </Link>
                                    </td>
                                    <td align='end'>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteBanner(banner._id)
                                            window.location.reload();
                                        }}><FontAwesomeIcon icon={faRemove} /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="w-75 d-flex align-items-center flex-column gap-3 mt-5">
                <h2 className="text-center fw-bold display-6">Add new banner</h2>
                <form className="w-50" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Name
                        </span>
                        <input
                            value={banner.name}
                            name="name"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Description
                        </span>
                        <input
                            value={banner.description}
                            name="description"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input
                            name="image"
                            type="file"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleFileSelect}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success rounded-pill w-100 py-3 fs-5"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Banners