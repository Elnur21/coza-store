import { baseUrl } from "./base_url";
import axios from "axios";

// products
export const getCards = async () => {
  return await axios
    .get(baseUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteCardById = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
export const updateCardById = async (card, id) => {
  return await axios.put(`${baseUrl}/${id}`, card);
};
export const createCard = async (formData) => {
  await axios
    .post(`${baseUrl}/`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// users
export const createUser = async (formData) => {
  await axios
    .post(`${baseUrl}/user/signup`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
export const getUsers = async () => {
  return await axios
    .get(`${baseUrl}/user`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const loginUser = async (user) => {
  return await axios.post(`${baseUrl}/user/login`, user);
};
export const logOutUser = async () => {
  localStorage.removeItem("user");
  return await axios.get(`${baseUrl}/user/logout`);
};
export const deleteUserById = async (id) => {
  return await axios.delete(`${baseUrl}/user/${id}`);
};
export const updateUserById = async (user) => {
  return await axios.put(`${baseUrl}/user/${user._id}`, user);
};
export const addCart = async (card) => {
  return await axios.post(`${baseUrl}/addCart/${card._id}`, card);
};
export const removeCart = async (card) => {
  return await axios.post(`${baseUrl}/removeCart/${card._id}`, card);
};
export const addLikes = async (card) => {
  return await axios.post(`${baseUrl}/addLike/${card._id}`, card);
};
export const removeLikes = async (card) => {
  return await axios.post(`${baseUrl}/removeLike/${card._id}`, card);
};

// categories
export const getCategories = async () => {
  return await axios
    .get(`${baseUrl}/category`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteCategoryById = async (id) => {
  return await axios.delete(`${baseUrl}/category/${id}`);
};
export const updateCategoryById = async (category) => {
  return await axios.put(`${baseUrl}/category/${category._id}`, category);
};
export const createCategory = async (formData) => {
  await axios
    .post(`${baseUrl}/category`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//banner
export const getBanners = async () => {
  return await axios
    .get(`${baseUrl}/banner`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteBannerById = async (id) => {
  return await axios.delete(`${baseUrl}/banner/${id}`);
};
export const updateBannerById = async (banner, id) => {
  return await axios.put(`${baseUrl}/banner/${id}`, banner);
};
export const createBanner = async (formData) => {
  await axios
    .post(`${baseUrl}/banner`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//slide
export const getSlides = async () => {
  return await axios
    .get(`${baseUrl}/slide`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteSlideById = async (id) => {
  return await axios.delete(`${baseUrl}/slide/${id}`);
};
export const updateSlideById = async (slide, id) => {
  return await axios.put(`${baseUrl}/slide/${id}`, slide);
};
export const createSlide = async (formData) => {
  await axios
    .post(`${baseUrl}/slide`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//contact
export const getContacts = async () => {
  return await axios
    .get(`${baseUrl}/contact`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteContactById = async (id) => {
  return await axios.delete(`${baseUrl}/contact/${id}`);
};
export const updateContactById = async (contact) => {
  return await axios.put(`${baseUrl}/contact/${contact._id}`, contact);
};
export const createContact = async (formData) => {
  await axios
    .post(`${baseUrl}/contact`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//blog
export const getBlogs = async () => {
  return await axios
    .get(`${baseUrl}/blog`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteBlogById = async (id) => {
  return await axios.delete(`${baseUrl}/blog/${id}`);
};
export const updateBlogById = async (blog, id) => {
  return await axios.put(`${baseUrl}/blog/${id}`, blog);
};
export const addComment = async (blog) => {
  return await axios.put(`${baseUrl}/blog/add/${blog._id}`, blog);
};
export const createBlog = async (formData) => {
  await axios
    .post(`${baseUrl}/blog`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
