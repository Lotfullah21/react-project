function About() {
  return (
    <section className="section about" id="about">
      <div className="section-title">
        <h2>
          About <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center" id="about">
        <article className="about-img">
          <img
            src="./assets/school/light-1.jpg"
            className="about-photo"
            alt="student in the className"
          />
        </article>

        <article className="about-info">
          <h3>we stand for our values</h3>
          <p>
            We believe in equal rights for all human beings regardless of their
            gender,race,ethniciy,border.
          </p>
          <p>
            all human beings should be given equall opportuniy for education,we
            will provide free education for every Afghan girls and boys.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
