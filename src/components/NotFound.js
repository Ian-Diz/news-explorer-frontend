import notFoundImage from "../images/not-found.svg";

const NotFound = () => {
  return (
    <section className="not">
      <img src={notFoundImage} className="not__image" alt="Sad face" />
      <h3 className="not__title">Nothing Found</h3>
      <p className="not__para">Sorry, but nothing matched your search terms.</p>
    </section>
  );
};

export default NotFound;
