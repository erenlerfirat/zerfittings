
function AboutContent() {
    return (
        <div className="min-h-screen p-10 flex justify-center dark:text-white">
            <div className="max-w-2xl ">
                <h1 className="font-extrabold text-3xl mb-12">{"About Portline Global"}</h1>
                <p className="[&>p]:mb-8 [&>h2]:font-extrabold lg:leading-[2rem]  ">
                    {"Portline Global is a specialized marine supply, manufacturing, and technical service provider delivering high-quality, reliable, and sustainable solutions for the maritime industry. We support shipowners, operators, shipyards, and marine service companies with a wide range of services including marine valve supply, custom manufacturing, technical maintenance, spare parts procurement, and global logistics. Our portfolio covers class-approved globe, butterfly, gate, check, strainer and special-type valves, alongside engineered custom components and actuated control valves. We offer on-site valve installation, overhaul, troubleshooting, hydraulic and pneumatic servicing, and 24/7 technical support for both port and shipyard operations. In addition to valve solutions, our team provides ballast tank cleaning, dry-docking support, mechanical repair, electrical and automation services, piping and machinery maintenance, and emergency intervention. With a customer-focused, solution-oriented approach, Portline Global combines engineering expertise, international standards, and strong field experience to ensure operational continuity, safety, and efficiency for all maritime operations."}
                </p>
                <p className="mb-6 text-slate-400 ">
                    Posted on{" "}
                    {new Date('December 17, 2010 03:24:00').toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </div>
        </div>
    )
}

export default AboutContent