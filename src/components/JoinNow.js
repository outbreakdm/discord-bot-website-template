import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join the Scraplands Today!</h3>
        </div>
        <div className="joinUs-para p-color">
          Explore, build, and dominate the wasteland. Invite The Scraplands bot
          to your Discord server now!
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Invite Now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
