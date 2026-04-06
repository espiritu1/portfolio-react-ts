import { CiLinkedin } from "react-icons/ci";
import Cv from "../CV/Fernando_Espiritu_cv.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

export const ButtonCv = () => {
  return (
    <>
      <div className="flex justify-center gap-6 w-[65%] mx-auto pb-5">
        
        {/* Botón de descarga de CV */}
        <a 
          className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-2xl px-4
                     bg-kanagawa-info inline-flex items-center gap-2 h-10 
                     hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
          href={Cv} 
          download="Fernando_Espiritu_cv.pdf" // Puedes especificar el nombre del archivo al descargar
        >
          <AiOutlineCloudDownload className="text-xl" />
          <span>CV</span>
        </a>

        {/* Botón de GitHub */}
        <a 
          className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-2xl px-4
                     bg-kanagawa-info inline-flex items-center gap-2 h-10 
                     hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
          href="https://github.com/espiritu1" // <-- Reemplaza con tu link real
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-xl" />
          <span>GitHub</span>
        </a>

        {/* Botón de LinkedIn */}
        <a 
          className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-2xl px-4
                     bg-kanagawa-info inline-flex items-center gap-2 h-10 
                     hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
          href="https://linkedin.com/in/tu-usuario" // <-- Reemplaza con tu link real
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className="text-xl" />
          <span>Linkedin</span>
        </a>

      </div>
    </>
  );
};