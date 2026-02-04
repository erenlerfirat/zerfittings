import evergreen from '../../../assets/evergreen2.jpg'
import loadedship from '../../../assets/loadedship.jpg'
import valves from '../../../assets/valves.jpg'
import valves2 from '../../../assets/valves2.jpg'

const FeatureSection = () => {
    const featureSections = [
        {
            img: evergreen,
            header: "Expertise in Portline Global",
            desc: "Portline Global draws on with 10's of years of industry experience to support the essential valve and fitting needs of customers worldwide. With facilities in Turkey, Singapore, the Netherlands, Korea, and China, we supply dependable JIS and DIN standard marine valves as well as a full range of butterfly valve spare parts.",
            elements: [
                "Reliable solutions backed by decades of technical expertise and proven industry knowledge.",
                "Fully compliant products, ensuring smooth and uninterrupted operations for shipowners, shipyards, and marine service providers.",
                "Fast and efficient service, supported by strategically positioned global stock points.",
                "Solution-oriented approach that keeps vessel operations running without interruption",
            ]
        },
        {
            img: loadedship,
            header: "Global Compliance & Industry-Standard Assurance",
            desc: "At Portline Global, we maintain a strong commitment to environmental responsibility and operational safety by adhering to internationally recognized regulations and compliance standards:",
            elements: [
                "Strict alignment with global environmental guidelines to ensure our products support responsible and sustainable marine operations.",
                "Full conformity with widely accepted safety and quality benchmarks set by leading international maritime bodies."
            ]
        },
        {
            img: valves,
            header: "Complete Valve Solutions & a Broad Spare Parts Portfolio",
            desc: "At Portline Global, we deliver end-to-end valve solutions designed to meet the unique requirements of every customer. Our offerings include:",
            elements: [
                "Custom-manufactured valves and connection fittings",                
                "Globe, butterfly, gate, check, and strainer valves",
                "A wide assortment of marine valves built to JIS and DIN standards, suitable for multiple shipboard systems and applications.",
                "Authentic butterfly valve spare parts for Keystone Valve Korea, including seats (NBR, RTFE, VITON), discs, O-rings, screws, stems, bushings, and packing materials.",
                "An extensive inventory of spare components for leading valve manufacturers such as ACE, NAKAKITA, and TOMOE, providing dependable quality and long-term performance."
            ]
        },
        {
            img: valves2,
            header: "Reliable Manufacturing & Class-Approved Quality",
            desc: "Our JIS-standard valves are manufactured exclusively in Korea under the Portline Global brand, while our DIN-standard products are produced in Turkey and China by highly reputable partners known for their technical capability and industry know-how.",
            elements: [
                "Actuator-operated control valves",
                "Supply of spare parts and components",
                "All associated foundries carry major class certifications from globally recognized maritime organizations, including DNV-GL, LR, ABS, BV, KR, and ClassNK",
                "Ensuring full compliance and trusted performance.",
                "Fast and efficient global delivery, no matter where you operate."
            ]
        },
    ];

    return (
        <>
            {featureSections.map((feature, index) => (
                <Feature
                    key={index}
                    img={feature.img}
                    header={feature.header}
                    desc={feature.desc}
                    elements={feature.elements}
                    reverse={index % 2 === 1}
                />
            ))}
        </>
    );
};

export default FeatureSection;



function Feature({ img, header, desc, elements, reverse }) {
    return (
        <div className="py-16 text-gray-500 border-y border-gray-200">
            <div className={`container mx-auto flex flex-col lg:flex-row items-stretch 
                ${reverse ? "lg:flex-row-reverse" : ""}`}>
                
                {/* Image Section */}
                <div className="lg:w-1/2 px-8">
                    <img
                        src={img}
                        alt="img"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 px-8 mt-8 lg:mt-0 rounded-lg">
                    <h2 className="text-4xl font-bold mb-4 mt-4 text-gray-600">
                        {header}
                    </h2>

                    <p className="mb-6">{desc}</p>

                    <ul className="space-y-4 mb-6">
                        {elements.map((el, i) => (
                            <li key={i} className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>{el}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="my-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}