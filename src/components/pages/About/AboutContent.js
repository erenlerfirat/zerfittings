
function AboutContent() {
    return (
        <div className="min-h-screen p-10 flex justify-center dark:text-white">
            <div className="max-w-2xl ">
                <h1 className="font-extrabold text-3xl mb-12">{"Zer Fittings Hakkında"}</h1>
                <p className="[&>p]:mb-8 [&>h2]:font-extrabold lg:leading-[2rem]  ">
                    {"Zerfittings; gemi borulama sistemleri, kelepçe ve profil çözümleri alanında uzmanlaşmış bir mühendislik ve üretim firmasıdır. Genç, dinamik ve yenilikçi yapımızı, sektörel deneyimimizle birleştirerek güçlü ve sürdürülebilir bir kurumsal anlayışla hizmet sunmaktayız. Denizcilik ve endüstriyel uygulamalarda kullanılan boru bağlantı ve sabitleme çözümlerinde; güvenilir, uygulanabilir ve ihtiyaca özel ürünler geliştirmeyi hedefleriz. Uluslararası standartları esas alan yaklaşımımız sayesinde, verimli ve yüksek performanslı çözümler üretiriz Teknik bilgi birikimimiz ve mühendislik bakış açımız, karşılaşılan sorunlara hızlı ve doğru çözümler sunmamıza olanak tanır. Rekabetin yoğun olduğu günümüz koşullarında, en önemli referansımızın müşteri memnuniyeti olduğuna inanıyoruz. Ürün tedarikinden hizmet süreçlerine kadar sürekli gelişimi ve kaliteyi ön planda tutan Zerfittings, müşterileriyle uzun vadeli ve güvene dayalı iş birlikleri kurmayı amaçlamaktadır."}
                </p>
                <p className="mb-6 text-slate-400 ">
                    Yayınlanma Tarihi {" "}
                    {new Date('January 17, 2020 03:24:00').toLocaleDateString("en-US", {
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
const content = "Zerfittings; gemi borulama sistemleri, kelepçe ve profil çözümleri alanında uzmanlaşmış bir mühendislik ve üretim firmasıdır. Genç, dinamik ve yenilikçi yapımızı, sektörel deneyimimizle birleştirerek güçlü ve sürdürülebilir bir kurumsal anlayışla hizmet sunmaktayız. Denizcilik ve endüstriyel uygulamalarda kullanılan boru bağlantı ve sabitleme çözümlerinde; güvenilir, uygulanabilir ve ihtiyaca özel ürünler geliştirmeyi hedefleriz. Uluslararası standartları esas alan yaklaşımımız sayesinde, verimli ve yüksek performanslı çözümler üretiriz Teknik bilgi birikimimiz ve mühendislik bakış açımız, karşılaşılan sorunlara hızlı ve doğru çözümler sunmamıza olanak tanır. Rekabetin yoğun olduğu günümüz koşullarında, en önemli referansımızın müşteri memnuniyeti olduğuna inanıyoruz. Ürün tedarikinden hizmet süreçlerine kadar sürekli gelişimi ve kaliteyi ön planda tutan Zerfittings, müşterileriyle uzun vadeli ve güvene dayalı iş birlikleri kurmayı amaçlamaktadır.";