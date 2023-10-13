export default function AboutUs() {
  console.log("about usss");
  return (
    <div className="aboutus">
      <img src="../../src/assets/Studio_drink_logo.svg" className="aboutlogo" />
      <h1>The StudioDrink team:</h1>
      <br />
      {/* PROFILE ONE */}
      <div className="Individuals">
        <div className="picture">
          <img
            src="https://i.pinimg.com/474x/7a/f0/04/7af004703ee797756ba58c0b186fdca9.jpg"
            className="pfp"
          />
        </div>
        <br />
        <div className="aboutsec">
          <h2>Polite Cat</h2>
          <h3>
            {/* I am cat. I like tuna water. Meow meow meow meow moewwwwww, meow
              meeeoowww meeooww. Fsih stcik, tuna poke.My f32 brother m35 is
              trash. He has multiple baby momma's and is a deadbeat. He also is
              the apple of my mom's eye. He can do no wrong and is just
              misunderstood. My parents are retired and on a fixed budget. I do
              well for myself and I help them out. I give them maybe $500 a month
              to help with groceries and bills. Every once in a while I will give
              them extra for an unexpected expense. No questions asked. My mom
              asked me for $2,000. I sent it to her. */}
            Fax
          </h3>
        </div>

        {/* CONTACT LINKS */}
        <div className="contacts">
          <br />
          {/* github link */}
          <a href="https://github.com/Shaberryy">
            <img
              src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
              className="contactLinks"
            />
          </a>
          {/* linkedIn link */}
          <a href="https://www.linkedin.com/in/hali-rodriguez/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
              className="contactLinks"
            />
          </a>
          {/* add portfolio link */}
          <a href="">
            <img
              src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Folder-2-512.png"
              className="contactLinks"
            />
          </a>
        </div>
      </div>
      {/* PROFILE TWO */}
      <div className="Individuals">
        {/* CONTACT LINKS */}
        <div className="contacts">
          <br />
          {/* github link */}
          <a href="https://github.com/Shaberryy">
            <img
              src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
              className="contactLinks"
            />
          </a>
          {/* linkedIn link */}
          <a href="https://github.com/Shaberryy">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
              className="contactLinks"
            />
          </a>
          {/* add portfolio link */}
          <a href="">
            <img
              src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Folder-2-512.png"
              className="contactLinks"
            />
          </a>
        </div>
        <br />
        <div className="aboutsec">
          <h2>Shrek</h2>
          <h3>
            Once upon a time there was a lovely princess. But she had an
            enchantment upon her of a fearful sort which could only be broken by
            love's first kiss. She was locked away in a castle guarded by a
            terrible fire-breathing dragon. Many brave knights had attempted to
            free her from this dreadful prison, but non prevailed. She waited in
            the dragon's keep in the highest room of the tallest tower for her
            true love and true love's first kiss. (laughs) Like that's ever
            gonna happen. What a load of - (toilet flush)
          </h3>
        </div>

        <div className="picture">
          <img
            src="https://media.tenor.com/w5GbWg5AMQ4AAAAC/drinking-milk-puss-in-boots.gif"
            className="pfp"
          />
        </div>
      </div>
    </div>
  );
}
