const Courses = () => {
  return (
    <section className="section courses" id="courses">
      <div className="section-title">
        <h1>
          our <span>courses</span>
        </h1>
      </div>

      <div className="section-center courses-center" id="courses">
        <article className="course-card">
          <div className="course-img-container">
            <img
              src="./assets/products/Machine-Learning-cover.png"
              className="course-img"
              alt="machine learning"
            />
            <p className="course-date">August 23, 2023</p>
          </div>

          <div className="course-info">
            <h4>Machine learning</h4>
            <p className="course-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque reiciendis quidem fugit quo. Illo quos voluptate,
            </p>
            <div className="course-footer">
              <p>
                <span>
                  <i className="fa-solid fa-sitemap"></i>online
                </span>
              </p>
              <p>60 days</p>
              <p>from $20</p>
            </div>
          </div>
        </article>

        <article className="course-card">
          <div className="course-img-container">
            <img
              src="./assets/products/deep-learning-cover-primary.webp"
              className="course-img"
              alt="deep learning image"
            />
            <p className="course-date">september 20, 2023</p>
          </div>

          <div className="course-info">
            <h4>deep learning</h4>
            <p className="course-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque reiciendis quidem fugit quo. Illo quos voluptate,
            </p>

            <div className="course-footer">
              <p>
                <span>
                  <i className="fa-solid fa-cubes"></i>online
                </span>
              </p>
              <p>90 days</p>
              <p>from $100</p>
            </div>
          </div>
        </article>

        <article className="course-card">
          <div className="course-img-container">
            <img
              src="./assets/products/wev-development.jpg"
              className="course-img"
              alt="web developement"
            />
            <p className="course-date">December 20, 2023</p>
          </div>

          <div className="course-info">
            <h4>web development</h4>
            <p className="course-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque reiciendis quidem fugit quo. Illo quos voluptate,
            </p>
            <div className="course-footer">
              <p>
                <span>
                  <i className="fa-solid fa-laptop-code"></i>online
                </span>
              </p>
              <p>90 days</p>
              <p>from $10</p>
            </div>
          </div>
        </article>
      </div>

      <div className="course-btn">
        <a href="#courses" className="btn">
          Explore more
        </a>
      </div>
    </section>
  );
};
export default Courses;
