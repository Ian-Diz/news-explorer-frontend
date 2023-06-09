import aboutImage from "../images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <img className="about__image" src={aboutImage} alt="Ian Dizney" />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hi name is Ian Dizney, I a full stack engineer looking for work! This
          website is my final project in TripleTen's software development
          program, and I am now on the hunt for a full time position.
        </p>
        <p className="about__paragraph">
          If you are aware of any jobs you think I would be qualified for,
          whether you are the one hiring or you just saw a job post, please
          reach out to me via LinkedIn (Link in the footer){" "}
        </p>
      </div>
    </section>
  );
};

export default About;
