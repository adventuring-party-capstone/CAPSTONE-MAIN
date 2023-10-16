import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";
import logo from "../assets/Studio_drink_logo.svg";

export default function About({ dark }) {
	console.log("about usss");
	return (
		<section>
			<div className="aboutus">
				<img src={logo} className="aboutlogo" />
				<h1>The StudioDrink Team:</h1>
				<br />
				<h2 className="app-sum">
					Enter any of the millions of artists or genres on Spotify
					into the box and click submit. Like magic, Studio Drink
					serves you a drink recommendation to enjoy along with your
					music! With the ability to cater to both alcoholic and
					non-alcoholic preferences, Studio Drink also features
					dynamic day and night modes to elevate your mood and enhance
					your experience.
					<br />
					<br />
					Create a profile and sign in to add drinks to your favorites
					and even create your own drinks with our Mixologist feature.
					And, if you're feeling lucky, visit our Drink Randomizer
					page for a surprise.
					<br />
					<br />
					Happy tasting and listening, and please drink responsibly!
				</h2>
				<br />

				<img src="../src/assets/Divider.PNG" className="divider" />
				<br />
				{/* PROFILE HALI */}
				<div className="Individuals">
					<div className="picture">
						<img src="../src/assets/Hali.jpeg" className="pfp" />
						<h2>Hali Jaden Rodriguez (She/Her)</h2>
						{/* spotify favorite song */}
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
					{/* About info */}
					<div className="aboutsec">
						<h3>
							Hali Rodriguez is a California-based Full Stack
							Developer with a passion for digital art and 3D
							animation. Her expertise in a range of design
							software applications, including Maya, Blender, and
							Zbrush, allows her to bring a creative edge to my
							development projects. When she's not coding, you can
							find her immersed in her own art projects, where she
							loves to explore the realms of 3D animation and
							sculpting. She finds inspiration in the intricacies
							of digital art and the captivating world of video
							games, which fuels her creativity and
							problem-solving skills.With a keen eye for detail
							and a knack for working efficiently both
							individually and within a team, she can thrive in
							fast-paced environments. She's always open to new
							ideas and approaches, believing that the best
							solutions often emerge from collaborative and
							diverse perspectives.
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
								src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
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
				<img src="../src/assets/Divider2.PNG" className="divider" />
				<br />
				{/* PROFILE EMILY */}
				<div className="Individuals">
					{/* CONTACT LINKS */}
					<div className="contacts">
						<br />
						{/* github link */}
						<a href="https://github.com/echeng0123">
							<img
								src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
								className="contactLinks"
							/>
						</a>
						{/* linkedIn link */}
						<a href="https://www.linkedin.com/in/emilyrcheng/">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
								className="contactLinks"
							/>
						</a>
						{/* add portfolio link */}
						<a href="https://emily-cheng.netlify.app/">
							<img
								src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Folder-2-512.png"
								className="contactLinks "
							/>
						</a>
						{/* emily's music site */}
						<a href="https://www.gisula.com/">
							<img
								src="../src/assets/gisula.PNG"
								className="contactLinks"
								style={{
									filter: "invert(0)",
									borderRadius: "50%",
								}}
							/>
						</a>
					</div>
					<br />
					{/* About info */}
					<div className="aboutsec">
						<h3>
							Emily Cheng is a Full Stack Developer based in TN.
							She holds a Bachelor's in Chemical Engineering and a
							Master's in Materials Science & Engineering from
							Cornell University and formerly worked in
							electronics, tech, and aerospace. Outside of coding,
							she has also worked for several years as a freelance
							composer, music producer, and instrumentalist in
							video games, film, and animation. She is a strong
							believer in the power of combining the Arts & STEM.
							In her free time, she enjoys playing D&D, cooking
							new cuisines, collecting swords, and creating
							cosplays.
						</h3>
					</div>
					{/* Profile Picture */}
					<div className="picture">
						<img src="../src/assets/Emily.jpg" className="pfp" />
						<h2>Emily Cheng (She/Her)</h2>
						<iframe
							className="spotty"
							src="https://open.spotify.com/embed/track/37N37WJQvXqplFdCwkNgX3?utm_source=generator"
							width="100%"
							height="352"
							allowfullscreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					</div>
				</div>
				<img src="../src/assets/Divider2.PNG" className="divider" />
				{/* PROFILE ANNALISA */}
				<div className="Individuals">
					<div className="picture">
						<img
							src="../src/assets/Annalisa2.png"
							className="pfp"
						/>
						<h2>Annalisa Boerner(She/Her)</h2>
						{/* spotify favorite song */}
						<iframe
							className="spotty"
							src="https://open.spotify.com/embed/track/0mjSwNInyGTpiEcEaz1qqI?utm_source=generator"
							width="100%"
							height="152"
							allowfullscreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					</div>
					<br />
					{/* About info */}
					<div className="aboutsec">
						<h3>
							Annalisa Boerner is a Full Stack Developer based in
							New Haven, CT. She brings skills from her career in
							classical music (viola performance, violin/viola
							teaching, and management and administration) to her
							new field. In her free time, she likes to play D&D,
							practice CrossFit and Aerial Silks, organize book
							clubs, and hang out with her charming friends and
							adorable cats.
						</h3>
					</div>

					{/* CONTACT LINKS */}
					<div className="contacts">
						{/* github link */}
						<a href="https://github.com/Annalisa-Boerner">
							<img
								src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
								className="contactLinks"
							/>
						</a>
						{/* linkedIn link */}
						<a href="https://www.linkedin.com/in/annalisa-boerner/">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
								className="contactLinks"
							/>
						</a>
						{/* add portfolio link */}
						<a href="https://comfy-faun-1aaf75.netlify.app/portfolio">
							<img
								src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Folder-2-512.png"
								className="contactLinks"
							/>
						</a>
					</div>
				</div>
				<img src="../src/assets/Divider2.PNG" className="divider" />

				{/* PROFILE WINNIE */}
				<div className="Individuals">
					{/* CONTACT LINKS */}
					<div className="contacts">
						<br />
						{/* github link */}
						<a href="https://github.com/winniemei">
							<img
								src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
								className="contactLinks"
							/>
						</a>
						{/* linkedIn link */}
						<a href="https://www.linkedin.com/in/winniemei/">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
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
					{/* About info */}
					<div className="aboutsec">
						<h3>
							Winnie Mei is a Full Stack Developer born and raised
							in NYC. She majored in finance and business
							economics at NYU Stern, worked in investment banking
							at J.P. Morgan, and has 8 years of data experience
							at fintech unicorn, Addepar. She finds beauty in the
							precision and elegance of coding and all things
							numerical. Beyond the tech world, she is an
							adventurous soul who loves to snowboard, travel,
							invest in real estate, meditate, experiment with
							cooking new recipes, and jam to Taylor Swift.
						</h3>
					</div>
					{/* Profile Picture */}
					<div className="picture">
						<img src="../src/assets/Winnie.png" className="pfp" />
						<h2>Winnie Mei (She/Her)</h2>
						<iframe
							className="spotty"
							src="https://open.spotify.com/embed/track/1fzAuUVbzlhZ1lJAx9PtY6?utm_source=generator"
							width="100%"
							height="152"
							allowfullscreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					</div>
				</div>
				<img src="../src/assets/Divider2.PNG" className="divider" />

				{/* PROFILE LINDA */}
				<div className="Individuals">
					<div className="picture">
						<img
							src="https://media.licdn.com/dms/image/D5603AQHWgafWCnrDeA/profile-displayphoto-shrink_200_200/0/1690818101627?e=1702512000&v=beta&t=QwYk5NozKuDeXZzwHs9e6S_yT34kqC-39Z7pTmxUvo8"
							className="pfp"
						/>
						<h2>Linda Givers (She/Her)</h2>
						{/* spotify favorite song */}
						<iframe
							className="spotty"
							src="https://open.spotify.com/embed/track/09ml9rVHNtfvr6jJZPrcPX?utm_source=generator"
							width="100%"
							height="152"
							allowfullscreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					</div>
					<br />
					{/* About info */}
					<div className="aboutsec">
						<h3>
							Linda Givers is a Full Stack Software Engineer based
							in Syosset, New York. She brings her array of skills
							from business management with an emphasis in data
							structure and customer service relations. While
							working in the medical field she used her managing
							skills, helping create a startup. She is a live
							music lover, nature enthusiast, and in her free time
							enjoys reading, hiking, watching documentaries,
							being with friends and playing with her cat Asteria.
						</h3>
					</div>

					{/* CONTACT LINKS */}
					<div className="contacts">
						{/* github link */}
						<a href="https://github.com/Java-Linda">
							<img
								src="https://static-00.iconduck.com/assets.00/github-inverted-icon-512x499-xwqq0y67.png"
								className="contactLinks"
							/>
						</a>
						{/* linkedIn link */}
						<a href="https://www.linkedin.com/in/linda-givers-839338286/">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
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
				<img src="../src/assets/Divider2.PNG" className="divider" />

				<h1>Technologies:</h1>
				<div>
					<h2 className="app-sum">
						Our tech stack: JavaScript | React | HTML | CSS |
						Express | Node.js | PostgreSQL | Material UI | BCrypt |
						Cypress
					</h2>
					<br />
					<h2 className="app-sum">
						Our site combines two powerful remote APIs (Spotify and
						The Cocktail DB) with our local database, creating a
						complex hidden architecture that underlies the seamless
						user experience. With the use of these APIs, our users
						can input any of the millions of artists on Spotify and
						discover a wide variety of delightful recipes from the
						robust listings on The Cocktail DB.
					</h2>
					<br />

					<h2 className="app-sum">
						While we're proficient and familiar with using
						third-party CSS libraries, Studio Drink is built almost
						entirely with pure CSS for maximum customization.
					</h2>
					<br />
					<h2 className="app-sum">
						Our Pagination Algorithm for All Drinks dynamically
						adjusts to include user-added drinks in the local
						database along with the drinks pulled in from the
						Cocktail DB API, invisibly applying our detailed math.
					</h2>
					<br />

					<h2 className="app-sum">
						Our alcoholic/nonalcoholic toggle dynamically adjusts to
						reflect changes in the local & Cocktail DB API, allowing
						users to select drinks for whatever occasion and
						situation.
					</h2>
					<br />
					<h2 className="app-sum">
						Our day/night mode toggle allows two distinct aesthetic
						experiences and persists through the entire user
						session.{" "}
					</h2>
					<br />

					<h2 className="app-sum"></h2>
					<br />
					<img src="../src/assets/Divider.PNG" className="divider" />
				</div>
			</div>

			{/* BACKGROUND VIDEO */}
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
