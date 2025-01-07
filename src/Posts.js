import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css'; // Assuming this includes your Bootstrap overrides and styles.
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Posts = () => {
    const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios
      .get("https://mern-blog-backend-08qy.onrender.com")
      .then((res) => {
        res.data.forEach((post) => {
          console.log(`Title: ${post.title}, Description: ${post.description}`);
        });

        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (postId) => {
    axios
    .delete(`/delete/${postId}` )
    .then((res) => {
        console.log(res.data);
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId)); // Remove the deleted post from the state
      })
    .catch((err) => console.log(err));
    window.location.reload();
  };

  const updatePost = (id, title, description) => {
    setUpdatedPost ((prev) => {
        return {
            ...prev,
            id: id,
            title: title,
            description:description,
        };
    });
    handleShow();
  };


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUpdatedPost ((prev) => {
        return {
            ...prev,
            [name]:value,
        };
    });
  };

  const saveUpdatedPost =() => {
  axios
        .put(`/update/${updatedPost.id}`, updatedPost)
        .then ((res) => console.log(res))
        .catch((err) => console.log(err));
        handleClose();
        window.location.reload();
  };

  return (
    <div className="container py-4 main">
      <Navbar />
      <div
        className="p-5 mb-4 bg-body-tertiary rounded-3"
        style={{
          backgroundImage: "url('/postsbg.png')",
       
          backgroundPosition: "contain",
        }}
      >
        <div className="container-fluid py-5">
          <h1 className="display-5  p-3 fw-bold ">Posts</h1>

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Változtatásokban</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group className="mb-3" >
      
                    <Form.Control name="title" value={updatedPost.title ? updatedPost.title : ""} placeholder="cím" onChange={handleChange}  className="mb-3" />
                   
                    <Form.Control  name="description" value={updatedPost.description ? updatedPost.description : ""} placeholder="blog bejegyzés" onChange={handleChange} className="py-4" />
       
       
                    </Form.Group>
                    </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bezárás
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Mentés
          </Button>
        </Modal.Footer>
      </Modal>
          <div>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white p-4 rounded shadow-sm mb-3"
                >
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <Button className= "btn btn-custom2 btn-lg me-2 mt-2" type="button" onClick={() => updatePost(post._id, post.title, post.description)}> Update </Button>
                  <Button className= "btn btn-custom2 btn-lg me-2 mt-2" type="button" onClick={() => handleDelete(post._id)} > Töröl </Button>
                  <Button className= "btn btn-custom2 btn-lg mt-2" type="button" onClick={() => navigate("/")}> Vissza a főoldalra</Button>
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
