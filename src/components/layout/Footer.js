import tkn from '../../assets/tknlogo.png';

function Footer() {
    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">
                
                {/* Hakkımızda */}
                <div className="     border-t-2">
                    <p>
                        <span className="font-semibold">Zer Fittings</span>, vana tedariki, teknik servis, özel üretim, yedek parça ve global lojistik hizmetlerini tek çatı altında sunan uluslararası bir denizcilik çözümleri sağlayıcısıdır. Mühendislik uzmanlığı ve sahaya hazır servis ekipleriyle, dünya genelindeki armatörlere, işletmecilere ve tersanelere güvenilir, mevzuata uygun ve hızlı destek sunarak operasyonel sürekliliği ve uzun vadeli değer oluşturmayı garanti eder.
                    </p>
                </div>

                {/* İletişim */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left border-t-2">
                    <img src={tkn} alt="TKN Logo" className="h-12 w-auto mb-4 mt-2" />
                    <ul className="p-0 space-y-1 text-sm">
                        <li className="font-semibold">ZerFittings TKN ile iştiraktir</li>
                        <li>Adres: Aydıntepe Mah. Sahil Bulvarı No:126/54 TUZLA/İSTANBUL</li>
                        <li>Telefon: +90 545 334 35 35</li>
                        <li>Email: <a href="mailto:tkn.denizcilik@gmail.com" className="hover:text-blue-300">tkn.denizcilik@gmail.com</a></li>
                        <li>Ticaret Sicil No: 346775-5</li>
                    </ul>
                </div>

                {/* Menü 1 */}
                <div>
                    <ul className="p-0 space-y-2 text-sm list-disc list-inside border-t-2 ">
                        <li><a href="#" className="hover:text-blue-500">Zer Fittings Hakkında</a></li>
                        <li><a href="#" className="hover:text-blue-500">Denizcilik Teknik Hizmetleri</a></li>
                        <li><a href="#" className="hover:text-blue-500">Tersane Desteği</a></li>
                        <li><a href="#" className="hover:text-blue-500">7/24 Acil Destek</a></li>
                        <li><a href="#" className="hover:text-blue-500">Yangın Alarm & Güvenlik Sistemleri</a></li>
                        <li><a href="#" className="hover:text-blue-500">Otomasyon & Alarm Diagnostiği</a></li>
                        <li><a href="#" className="hover:text-blue-500">Mekanik & Elektrik Onarımları</a></li>
                        <li><a href="#" className="hover:text-blue-500">Yedek Parça Tedariki</a></li>
                    </ul>
                </div>

                {/* Menü 2 */}
                <div>
                    <ul className="p-0 space-y-2 text-sm list-disc list-inside border-t-2 ">
                        <li><a href="#" className="hover:text-blue-500">Teknik Gemi Tedariki</a></li>
                        <li><a href="#" className="hover:text-blue-500">Hidrolik & Pnömatik Hizmetler</a></li>
                        <li><a href="#" className="hover:text-blue-500">Makine Dairesi Desteği</a></li>
                        <li><a href="#" className="hover:text-blue-500">Sertifikalı Deniz Ekipmanları</a></li>
                        <li><a href="#" className="hover:text-blue-500">Kalite & Uygunluk Standartları</a></li>
                        <li><a href="#" className="hover:text-blue-500">Global Tedarik Ağı</a></li>
                        <li><a href="#" className="hover:text-blue-500">Kariyer Fırsatları</a></li>
                        <li><a href="#" className="hover:text-blue-500">İletişim & Destek</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;