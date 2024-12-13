import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Mockup from "../Assets/Mockup.png"
import { ReactComponent as Icon } from "../Assets/icon.svg"
import { faDisplay, faFile, faFlagCheckered, faUsers, faWrench } from "@fortawesome/free-solid-svg-icons"
import { TitleSections } from "../Components/Texts/Tittles"

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

                <div className="h-[70px] w-[334px] flex justify-center items-center bg-complementary-white rounded-[5px] mt-[10px]">
                    <Icon />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[50px] mt-[-50px]">
                <div className="rounded-full border-primary-blue  border h-[170px] w-[170px] flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("team")}
                    >
                        <FontAwesomeIcon icon={faUsers} className="text-[60px] text-primary-blue" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  border h-[170px] w-[170px] flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("introduction")}
                    >
                        <FontAwesomeIcon icon={faFlagCheckered} className="text-[60px] text-primary-blue" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  border h-[170px] w-[170px] flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("docs")}
                    >
                        <FontAwesomeIcon icon={faFile} className="text-[60px] text-primary-blue" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  border h-[170px] w-[170px]    flex items-center justify-center">
                    <button
                        onClick={() => scrollToSection("function")}
                    >
                        <FontAwesomeIcon icon={faDisplay} className="text-[60px] text-primary-blue" />
                    </button>
                </div>
                <div className="rounded-full border-primary-blue  border h-[170px] w-[170px] flex items-center justify-center">

                    <button
                        onClick={() => scrollToSection("gears")}
                    >
                        <FontAwesomeIcon icon={faWrench} className="text-[60px] text-primary-blue" />
                    </button>
                </div>
            </div>

            <div id="team" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Time</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[120px]" />

                <div className="mt-[100px] flex flex-wrap gap-[150px] justify-center">
                    <div className="w-[300px] h-[500px] bg-primary-blue rounded-[5px]"></div>
                    <div className="w-[300px] h-[500px] bg-primary-blue rounded-[5px]"></div>
                    <div className="w-[300px] h-[500px] bg-primary-blue rounded-[5px]"></div>
                    <div className="w-[300px] h-[500px] bg-primary-blue rounded-[5px]"></div>
                    <div className="w-[300px] h-[500px] bg-primary-blue rounded-[5px]"></div>
                </div>


            </div>

            <div id="introduction" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Introdução</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />
            </div>

            <div id="docs" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Documentação</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />
            </div>

            <div id="function" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Funcionamento</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />
            </div>

            <div id="gears" className="pt-[100px] flex flex-col items-center justify-center">
                <TitleSections>Ferramentas</TitleSections>
                <hr className="border-t-2 border-primary-blue w-[280px]" />
            </div>


        </div>
    )
}