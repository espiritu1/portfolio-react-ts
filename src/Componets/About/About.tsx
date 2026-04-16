import { Avatar } from "../About/Avatar"
import { Descripcion } from "../Descripcion/Descripcion"
import { Disponible } from "../Disponible/Disponible"

export const About = () => {
	return (
		<>
		<section id="sobreMi" className="mt-10 pb-5 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto px-6">

				<header className="flex flex-col items-center text-center mb-11">
					
					<h1 className="text-8xl pb-7 font-bold 
									bg-linear-to-r 
									from-kanagawa-bg-lighter to-kanagawa-primary 
									dark:from-kanagawa-primary dark:to-kanagawa-secondary 
									bg-clip-text text-transparent">
						Fernando Espíritu
					</h1>

					<div className="flex items-center gap-3">
						<h2 className="text-5xl font-medium max-w-2xl 
										bg-linear-to-r 
										from-kanagawa-bg-dark to-kanagawa-secondary
										dark:from-kanagawa-secondary dark:to-kanagawa-pink 
										bg-clip-text text-transparent">
							Desarrollador Frontend
						</h2>

						<div className="md:hidden">
							<Avatar size="sm"/>
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