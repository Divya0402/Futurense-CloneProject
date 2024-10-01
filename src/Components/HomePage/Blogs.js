import React from 'react';
import MyBlogs from './MyBlogs';

function Blogs() {
  return (
    <>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container text-center d-flex justify-content-center align-items-center">
          <div className="container my-3">
            <h1 style={{ fontSize: "2.5rem", color: "#000000" }}>Explore Farnam Street Articles</h1>
          </div>
        </div>

        <div className="container" style={{ width: "90%" }}>
          <div className="row my-3">
            <div className="col-12 col-md-6 mb-3">
              <div className="card h-100 border-0">
                <div className="card-body d-flex justify-content-start align-items-center">
                  <div style={{ backgroundColor: "#ffffff", color: "#000000", borderRadius: "5px", padding: "10px", margin: "10px 0" }}>
                    <span>Making India the powerhouse of talent</span>
                    <button className="btn btn-sm" type="button"><u style={{ color: "red" }}>Start Here</u><img src="arrow.jpg" alt="arrow" style={{ height: "12px", width: "12px", color: "red", marginLeft: "5px" }} /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <MyBlogs title="Accelerated Learning" text="Learn faster and remember more."/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-12 col-md-6 mb-3">
              <MyBlogs title="Mental Models" text="The best way to make intelligent decisions (~100 models explained)." />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <MyBlogs title="Decision Making" text="How to make smart decisions without getting lucky." />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-12 col-md-6 mb-3">
              <MyBlogs title="Reading Better" text="Improve reading comprehension and recall, and effective note-taking." />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <MyBlogs title="Podcast" text="We interview doers and thinkers so you can better analyze problems, seize opportunities, and master decision-making. Every episode is packed with lessons and insights that never expire." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
