import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import VSpace from "../components/VSpace";
import { Data } from "../data";

export default function HeroSection() {
    function calculateWorkExperience(data: [Date, Date][]): string {
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
        let totalMilliseconds = 0;

        data.forEach(([startDate, endDate]) => {
            totalMilliseconds += endDate.getTime() - startDate.getTime();
        });

        return (totalMilliseconds / millisecondsPerYear).toFixed(1);
    };

    function daysUntilNextDate(month: number, day: number): number {
        const today = new Date();
        const currentYear = today.getFullYear();

        let targetDate = new Date(currentYear, month - 1, day);

        if (targetDate < today) {
            targetDate = new Date(currentYear + 1, month - 1, day);
        }

        const msPerDay = 1000 * 60 * 60 * 24;
        const differenceInMs = targetDate.getTime() - today.getTime();
        const daysUntil = Math.ceil(differenceInMs / msPerDay);

        return daysUntil;
    }

    function birthdayMessage(month: number, day: number): string {
        const daysUntilBirthday = daysUntilNextDate(month, day);

        if (daysUntilBirthday <= 0 || daysUntilBirthday >= 365) {
            return "It's my birthday today! 🥳"
        }

        return `Wish me a happy birthday in ${daysUntilBirthday} days 😊`
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center p-4 font-mono">
            <VSpace />
            <div className="text-center max-w-screen-lg">
                <TypeAnimation sequence={[
                    "Hi there 👋",
                    1000
                ]}
                    repeat={Infinity}
                    className="text-4xl md:text-8xl font-bold mb-4"
                    wrapper="p"
                    speed={1}
                />
                <p className="text-sm md:text-2xl my-8">
                    My name is <span className="font-bold">Sebastian Aldi</span>, and I am a backend developer with {calculateWorkExperience(Data.workExperience)} years of professional experience.
                </p>
                <p className="text-sm md:text-2xl my-8">
                    {birthdayMessage(7, 1)}
                </p>
                <p className="text-sm md:text-2xl mb-8">
                    Check out my stuff below:
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                {
                    Data.heroProjects.map((item) => {
                        return (
                            <a href={item.link}>
                                <button className="px-6 py-3 text-white bg-neutral-950 hover:bg-neutral-700 rounded-lg font-semibold text-center text-sm md:text-lg" key={item.link}>
                                    <FontAwesomeIcon icon={item.icon} className="mr-2 md:mr-4" />
                                    {item.buttonText}
                                </button>
                            </a>
                        )
                    })
                }
            </div>
            <VSpace />
            <p className="text-sm md:text-2xl mb-8 text-center">Scroll down to learn more about me!</p>
            <FontAwesomeIcon icon={faCircleDown} className="mb-8 animate-bounce content-center" size="2xl" />
        </div>
    );
}