import { Avatar } from "../About/Avatar"
import { Descripcion } from "../Descripcion/Descripcion"
import { Disponible } from "../Disponible/Disponible"

export const About = () => {
	return (
		<>
		<section id="sobreMi" className="mt-10 pb-5 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto">

				<header className="flex flex-col items-center text-center mb-11">
					
					
					<h1 className="text-7xl pb-7 font-bold
						bg-radial from-kanagawa-accent to-[#16574b]
						bg-clip-text text-transparent">
						Fernando Espíritu
					</h1>

					<div className="flex items-center">
						
						<h2 className="text-3xl font-medium mr-2
							bg-radial  from-[#a11b18] to-[#da2200]
							bg-clip-text text-transparent">
								Desarrollador Frontend
						</h2>

						<div className="md:hidden">
							<Avatar size="md" />
						</div>
					</div>

				</header>

				<Disponible/>

				<Descripcion/>
				
			</div>
			
		</section>
	</>
	)
}