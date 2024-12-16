import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactComponent as Icon } from "../Assets/icon.svg"
import { faDisplay, faFile, faFlagCheckered, faUsers, faWrench } from "@fortawesome/free-solid-svg-icons"
import { TitleSections } from "../Components/Texts/Tittles"

import Anna from "../Assets/anna.jpg"
import Gui from "../Assets/guilherme.jpg"
import Lucas from "../Assets/lucas.jpg"
import Joao from "../Assets/joao.jpg"
import Wanderson from "../Assets/Wanderson.jpg"
import { faGithub, faLinkedinIn, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import CustomizedTimeline from "../Components/TimeLine"

import Mockup from "../Assets/Mockup.png"

import { ReactComponent as CSharp } from "../Assets/c.svg"
import { ReactComponent as Tailwind } from "../Assets/tailwindIcon.svg"
import { ReactComponent as AzureDevops } from "../Assets/azureDevopsIcon.svg"
import { ReactComponent as Azure } from "../Assets/azureIcon.svg"
import { ReactComponent as VisualStudio } from "../Assets/visualStudioIcon.svg"
import { ReactComponent as Git } from "../Assets/git.svg"
import { ReactComponent as Firebase } from "../Assets/firebase.svg"

export const LandingPage = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <div
                className="h-screen flex items-start justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Mockup})` }}
            >
                <div className="h-[70px] flex justify-center items-center rounded-[5px] mt-[60px] flex-col" >
                   <h1 className="text-center text-[60px] font-regular text-primary-blue">Apresentação Cloud Core</h1>
                   <hr className="border-primary-blue w-[500px]" />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[50px] mt-[-50px]">
                <div className="rounded-full border-primary-blue bg-complementary-white border-[2px] h-[170px] w-[170px] flex items-center justify-center" >
                    <button
                      
                        onClick={() => scrollToSection("team")}
                    >
                        <FontAwesomeIcon icon={faUsers} className="text-[60px] text-primary-blue hover:text-[#28437e]" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue h-[170px] w-[170px] flex items-center justify-center bg-complementary-white border-[2px]">
                    <button
                        onClick={() => scrollToSection("introduction")}
                    >
                        <FontAwesomeIcon icon={faFlagCheckered} className="text-[60px] text-primary-blue hover:text-[#28437e]" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  bg-complementary-white border-[2px] h-[170px] w-[170px] flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("docs")}
                    >
                        <FontAwesomeIcon icon={faFile} className="text-[60px] text-primary-blue hover:text-[#28437e]" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  bg-complementary-white border-[2px] h-[170px] w-[170px] flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("function")}
                    >
                        <FontAwesomeIcon icon={faDisplay} className="text-[60px] text-primary-blue hover:text-[#28437e]" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue bg- bg-complementary-white border-[2px] h-[170px] w-[170px] flex items-center justify-center">

                    <button
                        onClick={() => scrollToSection("gears")}
                    >
                        <FontAwesomeIcon icon={faWrench} className="text-[60px] text-primary-blue hover:text-[#28437e]" />
                    </button>
                </div>
            </div>

            <div id="team" className="pt-[100px] flex flex-col items-center justify-center ">
                <TitleSections>Time</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[120px]" />

                <div className=" flex flex-wrap gap-[20px] justify-center mt-[200px]">
                    <div className="w-[250px] h-[500px] bg-primary-blue rounded-[5px]">
                        <div className="flex flex-col items-center justify-center mt-[-100px]">
                            <img src={Anna} className="rounded-full h-[150px]" alt="" />
                            <h2 className="text-complementary-white text-[26px] font-semibold text-center">Anna Beatriz <br /> Barbosa</h2>
                            <p className="text-center text-complementary-white text-[20px] mt-[50px] ">Desenvolvimento <br /> front-end</p>
                            <div className="gap-[10px] text-complementary-white flex items-center text-[45px] border rounded-full w-[70px] h-[70px] justify-center mt-[100px] hover:bg-[#a1a1a1]">
                                <a href="https://www.linkedin.com/in/annabiab/"  target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="w-[250px] h-[500px] bg-primary-blue rounded-[5px]">
                        <div className="flex flex-col items-center justify-center mt-[-100px]">
                            <img src={Gui} className="rounded-full h-[150px]" alt="" />
                            <h2 className="text-complementary-white text-[26px] font-semibold text-center">Guilherme <br /> Sousa</h2>
                            <p className="text-center text-complementary-white text-[20px] mt-[50px] ">Desenvolvimento <br /> front-end</p>
                            <div className="gap-[10px] text-complementary-white flex items-center text-[45px] border rounded-full w-[70px] h-[70px] justify-center mt-[100px] hover:bg-[#a1a1a1]">
                                <a href="https://www.linkedin.com/in/guilherme-sousa-oliveira/"  target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] h-[500px] bg-primary-blue rounded-[5px]">
                        <div className="flex flex-col items-center justify-center mt-[-100px]">
                            <img src={Joao} className="rounded-full h-[150px]" alt="" />
                            <h2 className="text-complementary-white text-[26px] font-semibold text-center">João Victor <br /> Bautista</h2>
                            <p className="text-center text-complementary-white text-[20px] mt-[50px] ">Desenvolvimento <br /> back-end</p>
                            <div className="gap-[10px] text-complementary-white flex items-center text-[45px] border rounded-full w-[70px] h-[70px] justify-center mt-[100px] hover:bg-[#a1a1a1]">
                                <a href="https://www.linkedin.com/in/joaovictorbautista/"  target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[500px] bg-primary-blue rounded-[5px]">
                        <div className="flex flex-col items-center justify-center mt-[-100px]">
                            <img src={Lucas} className="rounded-full h-[150px]" alt="" />
                            <h2 className="text-complementary-white text-[26px] font-semibold text-center">Lucas <br /> Oliveira</h2>
                            <p className="text-center text-complementary-white text-[20px] mt-[50px] ">Desenvolvimento <br /> back-end</p>
                            <div className="gap-[10px] text-complementary-white flex items-center text-[45px] border rounded-full w-[70px] h-[70px] justify-center mt-[100px] hover:bg-[#a1a1a1]">
                                <a href="https://www.linkedin.com/in/lucca-gon-oliv/"  target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[500px] bg-primary-blue rounded-[5px]">
                        <div className="flex flex-col items-center justify-center mt-[-100px]">
                            <img src={Wanderson} className="rounded-full h-[150px]" alt="" />
                            <h2 className="text-complementary-white text-[26px] font-semibold text-center">Wanderson <br /> Bonfm</h2>
                            <p className="text-center text-complementary-white text-[20px] mt-[50px] ">Desenvolvimento <br /> front-end</p>
                            <div className="gap-[10px] text-complementary-white flex items-center text-[45px] border rounded-full w-[70px] h-[70px] justify-center mt-[100px] hover:bg-[#a1a1a1]">
                                <a href="https://www.linkedin.com/in/wanderson-bonfim-b01797218/" target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div id="introduction" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Introdução</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />

                <div className="mt-[100px] flex flex-col gap-[50px]">

                    <div className="w-[1040px] h-[460px] flex items-center justify-center bg-primary-blue rounded-[5px] flex-col gap-[25px]">
                        <h2 className="text-[36px] text-complementary-white font-semibold">Problemática</h2>
                        <p className="text-center text-[20px] text-complementary-white">A ausência de um sistema centralizado e automatizado <br /> para organização, controle e atualização de documentos <br /> fiscais, como notas fiscais, recibos e declarações, dificulta o <br /> acesso rápido e eficaz a esses documentos, aumenta o risco <br /> de erros e inconsistências, e impacta negativamente a <br /> produtividade, a conformidade fiscal e a reputação da <br /> empresa.</p>
                    </div>

                    <div className="w-[1040px] h-[460px] flex items-center justify-center border border-primary-blue rounded-[5px] flex-col gap-[25px]">
                        <h2 className="text-[36px] text-primary-blue font-semibold">Solução </h2>
                        <p className="text-center text-[20px] text-primary-blue">Este projeto propõe uma solução tecnológica para suprir essa lacuna, <br /> oferecendo um sistema integrado que otimiza processos, garante maior <br /> confiabilidade no armazenamento e promove a conformidade e a eficiência <br /> na gestão de documentos fiscais.</p>
                    </div>
                </div>

                <div className="mt-[100px] 
">
                    <h3 className="text-[24px] text-primary-blue font-semibold  text-center">Etapas</h3>
                    <div className="flex flex-col gap-[30px] mt-[50px]">
                        <div className="flex gap-[20px] justify-center items-center">
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px]">Imersão</h2>
                            </div>
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px] text-center">Design <br /> Thinking</h2>
                            </div>
                        </div>
                        <div className="flex gap-[20px] justify-center items-center" >
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px] text-center">Levantamento <br /> de requisitos</h2>
                            </div>
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px]">Prototipação</h2>
                            </div>
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px] ">Planejamento</h2>
                            </div>
                        </div>
                        <div className="flex gap-[20px] justify-center items-center">
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px]">Execução</h2>
                            </div>
                            <div className="w-[333px] bg-primary-blue h-[320px] rounded-[5px] flex justify-center items-center">
                                <h2 className="text-complementary-white font-semibold text-[26px]">Apresentação</h2>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div id="docs" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Documentação</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />
                <CustomizedTimeline />

                <a href="">
                    <p className="text-[24px] font-semibold underline text-primary-blue mt-[100px]">Link da documentação</p>
                </a>


            </div>

            <div id="function" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Funcionamento</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />

                <h3 className="text-[24px] text-primary-blue font-semibold  text-center mt-[100px]">Demonstração</h3>

                <video
                    className="mt-[50px] w-[1040px] h-[510px] rounded-[5px]"
                    controls
                >
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                </video>

            </div>

            <div id="gears" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Ferramentas utilizadas</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />

                <div className="items-center justify-center flex  mt-[100px] gap-[20px]">
                    <CSharp />
                    <FontAwesomeIcon icon={faSquareJs} className="text-[96px] text-primary-blue" />
                    <FontAwesomeIcon icon={faReact} className="text-[96px] text-primary-blue" />
                    <Tailwind />
                    <hr className=" h-[50px] border-primary-blue border" />
                    <Git />
                    <Firebase/>
                    <Azure />
                    <AzureDevops icon={faReact} className="text-[96px] text-primary-blue" />
                    <VisualStudio />
                </div>
            </div>

            <div className="w-full h-[100px] bg-primary-blue rounded-t-[5px] mt-[100px] flex justify-center items-center">
                <h3 className="text-complementary-white">Cloud Core | 2024 </h3>
            </div>
        </div>
    )
}