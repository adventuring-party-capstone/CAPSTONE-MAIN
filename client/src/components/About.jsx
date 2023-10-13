export default function About() {
    console.log("about usss");
    return (
        <div className="aboutus">
            <img
                src="../../src/assets/Studio_drink_logo.svg"
                className="aboutlogo"
            />
            <h1>The StudioDrink team:</h1>
            <h2>what our app is about</h2>
            <img src="../src/assets/divider3.png" className="divider" />
            <br />
            {/* PROFILE ONE */}
            <div className="Individuals">
                <div className="picture">
                    <img src="../src/assets/Hali.PNG" className="pfp" />
                    <h2>Hali Jaden Rodriguez (She/Her)</h2>
                    {/* spotify favorit song */}
                    <iframe
                        className="spotty"
                        src="https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator"
                        height="152"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
                <br />
                <div className="aboutsec">
                    <h3>
                        I am Hali. I am a 21 year old Fullstack developer and
                        artist!.
                    </h3>
                </div>

                {/* CONTACT LINKS */}
                <div className="contacts">
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
            <br />
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
                    <h3>Once upon a time there was a lovely princess.</h3>
                </div>

                    <div className="picture">
                        <img
                            src="https://media.tenor.com/w5GbWg5AMQ4AAAAC/drinking-milk-puss-in-boots.gif"
                            className="pfp"
                        />
                    </div>
                </div>
            </div>
            {dark ? (
                <div id="video-home-dark">
                    <h1></h1>
                    <video autoPlay loop muted style={{ minWidth: "100%" }}>
                        <source src={DarkMode} type="video/mp4"></source>
                    </video>
                </div>
            ) : (
                <div id="video-home">
                    <video autoPlay loop muted style={{ minWidth: "100%" }}>
                        <source src={LightMode} type="video/mp4"></source>
                    </video>
                </div>
            )}
        </section>
    );
}
