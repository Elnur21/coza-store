import React, { useContext, useEffect, useState } from "react";
import { SlideContext } from "../../../context/SlideContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSlide = () => {
  const { slides, updateSlide } = useContext(SlideContext);
  const { id } = useParams();
  const [slide, setSlide] = useState({});
  useEffect(() => {
    setSlide(slides.filter((slide) => slide._id === id)[0]);
  }, [slides, id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlide((prevSlide) => ({
      ...prevSlide,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    updateSlide(slide);
    navigate("/admin/slides");
    window.location.reload();
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="w-75 d-flex align-items-center flex-column gap-3">
        <h2 className="text-center fw-bold display-6">Slide information</h2>
        <form className="w-50" onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text fs-5" id="inputGroup-sizing-default">
              Name
            </span>
            <input
              value={slide.name}
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
              value={slide.description}
              name="description"
              type="text"
              className="form-control fs-5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleInputChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text fs-5" id="inputGroup-sizing-default">
              Image URL
            </span>
            <input
              value={slide.image}
              name="image"
              type="text"
              className="form-control fs-5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleInputChange}
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

export default UpdateSlide;
