import React, { useContext, useEffect, useState } from "react";
import { BannerContext } from "../../../context/BannerContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBanner = () => {
  const { banners, updateBanner } = useContext(BannerContext);
  const { id } = useParams();
  const [banner, setBanner] = useState({});
  useEffect(() => {
    setBanner(banners.filter((banner) => banner._id === id)[0]);
  }, [banners, id]);
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
    updateBanner(formData,banner._id);
    navigate("/admin/banners");
    window.location.reload();
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="w-75 d-flex align-items-center flex-column gap-3">
        <h2 className="text-center fw-bold display-6">Banner information</h2>
        <form className="w-50" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="input-group mb-3">
            <span className="input-group-text fs-5" id="inputGroup-sizing-default">
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
          <div className="input-group mb-3">
            <span className="input-group-text fs-5" id="inputGroup-sizing-default">
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
          <div className="input-group mb-3">
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBanner;
