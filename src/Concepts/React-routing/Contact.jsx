import React from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  console.log("Category:", category);

  function a() {
    navigate("me");
  }
  return (
    <>
      <div>Contact</div>
      <div>Contact {name}</div>
      <button onClick={a}>Click</button>
      {/* <Link to="me">Contact Me</Link> */}
      <Routes>
        <Route path="me" element={<div>Contact Me</div>} />
      </Routes>
    </>
  );
}

export default Contact;
