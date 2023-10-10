import { Sidenav, initTE } from "tw-elements";
import { useState, useEffect } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BiSolidDrink, BiDrink } from "react-icons/bi";

export default function SideNav({ mode, token }) {
	// console.log("mode in sidenav", mode);
	initTE({ Sidenav });
	const [bgmode, setBgmode] = useState("bg-inherit");

	useEffect(() => {
		function sideNavBG() {
			if (mode) {
				// darkmode on
				setBgmode(
					"linear-gradient(225deg, rgba(2,0,33,1) 0%, rgba(5,2,43,1) 30%, rgba(26,22,75,1) 55%, rgba(69,16,8,1) 100%)"
				);
			} else {
				// darkmode off
				setBgmode(
					"linear-gradient(225deg, rgba(255,161,0,1) 0%, rgba(252,225,162,1) 34%, rgba(255,120,97,1) 73%, rgba(211,76,82,1) 100%)"
				);
			}
		}
		sideNavBG();
	}, [mode]);

	// console.log("bgmode is now", bgmode);
	console.log("token in sideNav", token);
	return (
		<>
			<nav
				id="sidenav-1"
				className={`absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-[0] overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-[0] dark:bg-zinc-800 `}
				style={{
					background: `${bgmode}`,
				}}
				data-te-sidenav-init
				data-te-sidenav-hidden="false"
				data-te-sidenav-mode="side"
				data-te-sidenav-content="#content"
				// data-te-sidenav-content-collapsed="true"
				// data-te-sidenav-collapse-ref
			>
				<ul
					className="relative m-0 list-none px-[0.2rem]"
					data-te-sidenav-menu-ref
				>
					{/* Home */}
					<li className="relative">
						<a
							className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.5rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
							data-te-sidenav-link-ref
							href="/"
						>
							<span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
								<span>
									<BsMusicNoteBeamed />
								</span>
							</span>
							Home
						</a>
					</li>

					{/* Drinks top level */}
					<li className="relative">
						<a
							className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.5rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
							data-te-sidenav-link-ref
						>
							<span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
								<span>
									<BiDrink />
								</span>
							</span>
							<span
								className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
								data-te-sidenav-rotate-icon-ref
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clipRule="evenodd"
									/>
								</svg>
								{/* ^above line is the collapsible arrow */}
							</span>
							Drinks
						</a>

						{/* list under drinks */}
						<ul
							className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
							data-te-sidenav-collapse-ref
							// data-te-collapse-show
						>
							{/* All drinks */}
							<li className="relative">
								<a
									className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[1rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
									data-te-sidenav-link-ref
									href="/all_drinks"
								>
									All Drinks
								</a>
							</li>

							{/* Favorites */}
							<li className="relative">
								{token && (
									<a
										className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[1rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
										data-te-sidenav-link-ref
										href="/favorites"
									>
										Favorites
									</a>
								)}
								{/* Profile */}
								<li className="relative">
									{token && (
										<a
											className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[1rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
											data-te-sidenav-link-ref
											href="/profile"
										>
											Profile
										</a>
									)}
								</li>
							</li>
							{/* ^these are the collapsed items currently hidden */}
						</ul>
					</li>

					{/* Top level: Mixologist */}
					{token && (
						<li className="relative">
							<a
								className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.5rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
								data-te-sidenav-link-ref
								href="/createDrink"
							>
								<span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
									<span>
										<BiSolidDrink />
									</span>
								</span>
								<span>Mixologist</span>
							</a>
						</li>
					)}

					{/* Top level: Login/Logout */}

					{/* Top level: Mixologist */}
					{token ? (
						<li className="relative">
							<a
								className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.5rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
								data-te-sidenav-link-ref
								href="/logout"
							>
								<span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
									<span>
										<AiOutlineLogout />
									</span>
								</span>
								<span>Logout</span>
							</a>
						</li>
					) : (
						<li className="relative">
							<a
								className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.5rem] text-inherit outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
								data-te-sidenav-link-ref
								href="/login"
							>
								<span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
									<span>
										<AiOutlineLogin />
									</span>
								</span>
								<span>Login</span>
							</a>
						</li>
					)}
				</ul>
			</nav>
			<button
				className="position fixed top-0 right-0 mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
				data-te-sidenav-toggle-ref
				data-te-target="#sidenav-1"
				aria-controls="#sidenav-1"
				aria-haspopup="true"
			>
				<span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5"
					>
						<path
							fillRule="evenodd"
							d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</button>
		</>
	);
}
