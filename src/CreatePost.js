import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import Footer from './Footer';
import './App.css';
import Form from 'react-bootstrap/Form';
import  {useState} from 'react';
import axios from "axios";
import Navbar from "./Navbar";



const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState ({ 
            title:"",
            description: "",
        });
    
    const handleChange = (event) => {
            const {name, value} = event.target;

            setPost((prev) => ({
                ...prev, 
                [name]: value,
            }));
    }

    const handleClick = (event) => {

      console.log("Sending Post:", post); // Log the post data
        event.preventDefault();
        axios
            .post("/create", post)
            .then((res) => console.log("Server Response:", res.data))
            .catch((err) => console.log(err));

        navigate("/posts");
    };
   

  return (
    <div>
      
      <div className="container py-4 main">
      <Navbar />

      <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-left component_createpost">
          <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Blog bejegyzésem</h1>
            <p className="col-md-8 fs-4 ">
              Blogolok
            </p>
            
            <Form>
                <Form.Group className="mb-3" >
      
                    <Form.Control name="title" value={post.title} placeholder="cím" onChange={handleChange} />
                    <Form.Text className="text-muted">
                    csak bátran!
                    </Form.Text>
                    <Form.Control  name="description" value={post.description} placeholder="blog bejegyzés" onChange={handleChange} className="py-4" />
       
                </Form.Group>
                <Button className= "btn btn-custom2 btn-lg me-2 mt-2" type="button" onClick={handleClick}> Elküld </Button>
                <Button className= "btn btn-custom2 btn-lg mt-2" type="button" onClick={() => navigate(-1)}> Vissza a főoldalra</Button>
         </Form>
        
          
        </div>
        
    </div>
    
      <Footer />
    </div>
    </div>
  )
}

export default CreatePost
