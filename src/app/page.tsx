import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Infrastructure from '@/components/Infrastructure';
import Motion from '@/components/Motion';
import RequestDialog from '@/components/RequestDialog';
import { asset } from '@/lib/asset';
import { APARTMENTS, CONTACTS } from '@/lib/content';

export default function Page() {
    return (
        <div className="site" id="top">
            <a className="skip-link" href="#about">К содержанию</a>
            <Header />
            <main>
                <section className="hero" aria-labelledby="hero-title">
                    <img className="hero-image" src={asset('/assets/images/hero.webp')} alt="Архитектура Новой Ливадии на фоне Чёрного моря и заката" fetchPriority="high" />
                    <div className="hero-shade" />
                    <div className="container hero-inner">
                        <div className="hero-content" data-reveal>
                            <p className="eyebrow">Сити-курорт в Ялте</p>
                            <h1 id="hero-title">Новая<br /><em>Ливадия</em></h1>
                            <p className="hero-lead">Премиальная жизнь между морем и горами. В историческом месте с новым будущим.</p>
                            <div className="hero-actions">
                                <button className="button button-light" data-request="Подбор квартиры">Выбрать квартиру <span>↗</span></button>
                                <a className="text-link light-link" href="#about">Открыть проект <span>↓</span></a>
                            </div>
                        </div>
                        <div className="hero-foot">
                            <p>Крым, Ялта<br />вблизи Ливадийского дворца</p>
                            <div className="hero-award"><span>Победитель</span>Лучший жилой комплекс<br />у моря 2024</div>
                        </div>
                    </div>
                </section>

                <section className="stats" aria-label="Ключевые параметры проекта">
                    <div className="container stats-grid">
                        <div data-reveal><strong>5</strong><span>жилых корпусов</span></div>
                        <div data-reveal><strong>20</strong><span>этажей</span></div>
                        <div data-reveal><strong>3 до 6 м</strong><span>высота потолков</span></div>
                        <div data-reveal><strong>4,2 га</strong><span>приватной территории</span></div>
                        <div data-reveal><strong>2028</strong><span>передача ключей<br />первого этапа в январе</span></div>
                    </div>
                </section>

                <section className="about section" id="about" aria-labelledby="about-title">
                    <div className="container">
                        <div className="section-top" data-reveal>
                            <p className="eyebrow">Особое место на южном берегу</p>
                            <h2 id="about-title">Там, где горы<br /><em>встречают море.</em></h2>
                            <p>Комплекс расположен на возвышенности у границы Ялтинского горно-лесного заповедника, вблизи Ливадийского дворца.</p>
                        </div>
                        <div className="about-grid">
                            <figure className="about-photo tall-photo" data-reveal>
                                <img src={asset('/assets/images/terrace.webp')} alt="Панорамная терраса с видом на море и горы" loading="lazy" />
                                <figcaption>Панорамные террасы с видами на море</figcaption>
                            </figure>
                            <div className="about-copy" data-reveal>
                                <p className="large-copy">Величественные горы, национальный парк и Чёрное море становятся частью повседневной жизни.</p>
                                <p>Ливадия хранит атмосферу царской резиденции и одновременно предлагает современный курортный сервис. Здесь природа, история и архитектура образуют единое пространство для жизни.</p>
                                <ul className="line-list">
                                    <li><span>01</span>Виды на море, горы и центр Ялты</li>
                                    <li><span>02</span>Трансфер к собственным пляжам</li>
                                    <li><span>03</span>Собственная управляющая компания</li>
                                </ul>
                            </div>
                        </div>
                        <div className="history-row" data-reveal>
                            <p className="eyebrow">История места</p>
                            <p>Название Ливадии связывают с греческим словом «ливади», которое означает «луг». После 1861 года здесь находилась летняя резиденция семьи Романовых. Природа и целебный воздух, которые ценили тогда, остаются главными достоинствами места и сегодня.</p>
                        </div>
                    </div>
                </section>

                <section className="beach" aria-labelledby="beach-title">
                    <img src={asset('/assets/images/beach.webp')} alt="Благоустроенный пляж с шезлонгами и зонтами у моря" loading="lazy" />
                    <div className="beach-shade" />
                    <div className="container beach-inner">
                        <div className="beach-card" data-reveal>
                            <p className="eyebrow">Собственная пляжная сеть</p>
                            <h2 id="beach-title">Море.<br /><em>Только для своих.</em></h2>
                            <p>Более 1,9 км премиальных пляжей с сервисом, ресторанами и прогулочным променадом. Трансфер на электрокарах или шаттлах доставит от дома к воде.</p>
                            <ul>
                                <li>Шезлонги, полотенца и душевые</li>
                                <li>Релакс, спорт и детские зоны</li>
                                <li>Завтраки и вечерние события у воды</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="architecture section" id="architecture" aria-labelledby="architecture-title">
                    <div className="container">
                        <div className="section-top" data-reveal>
                            <p className="eyebrow">Архитектурная концепция</p>
                            <h2 id="architecture-title">Чистые линии.<br /><em>Естественная гармония.</em></h2>
                            <p>Современный минимализм не спорит с ландшафтом, а подчёркивает его. Вертикальные линии, светлые пояса и тёплые оттенки дерева создают выразительный силуэт.</p>
                        </div>
                        <div className="architecture-main" data-reveal>
                            <img src={asset('/assets/images/architecture.webp')} alt="Архитектура жилых корпусов с панорамным остеклением" loading="lazy" />
                            <div className="architecture-caption"><span>Бюро Paradox</span><span>Автор проекта Филипп Никандров</span></div>
                        </div>
                        <div className="architecture-details">
                            <div className="architecture-copy" data-reveal>
                                <p className="large-copy">Панорамное остекление раскрывает каждому дому морской горизонт и горные вершины.</p>
                                <p>Открытые балконы, просторные террасы и зелёные патио продолжают архитектуру в окружающей природе. Ночная контурная подсветка подчёркивает пластику фасадов.</p>
                                <p>Проект благоустройства и интерьеров общественных пространств создан группой компаний UNK group.</p>
                            </div>
                            <figure className="architecture-small" data-reveal>
                                <img src={asset('/assets/images/complex-day.webp')} alt="Общий вид корпусов Новой Ливадии среди зелени" loading="lazy" />
                            </figure>
                            <div className="glazing" data-reveal>
                                <strong>80<span>%</span></strong>
                                <p>панорамного остекления фасадов</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Infrastructure />

                <section className="apartments section" id="apartments" aria-labelledby="apartments-title">
                    <div className="container">
                        <div className="section-top" data-reveal>
                            <p className="eyebrow">Планировочные решения</p>
                            <h2 id="apartments-title">Пространство<br /><em>для вашей жизни.</em></h2>
                            <p>От компактных студий для отдыха до семейных резиденций с просторными террасами.</p>
                        </div>
                        <div className="apartment-grid">
                            {APARTMENTS.map((item, index) => (
                                <article className="apartment-card" key={item.title} data-reveal>
                                    <div className="apartment-image"><img src={asset(item.image)} alt={item.alt} loading="lazy" /></div>
                                    <div className="apartment-info">
                                        <span className="apartment-index">0{index + 1}</span>
                                        <h3>{item.title}</h3>
                                        <p className="apartment-size">{item.size}</p>
                                        <p>{item.text}</p>
                                        <button className="text-link" data-request={`Подбор: ${item.title}`}>Узнать о доступных <span>↗</span></button>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="apartment-bottom" data-reveal>
                            <p>В продаже также представлены квартиры площадью до 443 м², семейные резиденции и уникальные форматы с террасами.</p>
                            <button className="button button-green" data-request="Каталог планировок">Получить каталог планировок <span>↗</span></button>
                        </div>
                    </div>
                </section>

                <section className="location section" id="location" aria-labelledby="location-title">
                    <div className="container location-grid">
                        <div className="location-copy" data-reveal>
                            <p className="eyebrow">Расположение</p>
                            <h2 id="location-title">Ялта<br /><em>вся рядом.</em></h2>
                            <p>Тихое место у заповедника с удобным выездом на Южнобережное шоссе.</p>
                            <address>{CONTACTS.address}</address>
                            <div className="distance-grid">
                                <div><strong>2 км</strong><span>до моря</span></div>
                                <div><strong>4 км</strong><span>до набережной Ялты</span></div>
                                <div><strong>5 км</strong><span>до центра Ялты</span></div>
                                <div><strong>110 км</strong><span>до аэропорта Симферополь</span></div>
                            </div>
                            <a className="button button-outline" href={CONTACTS.mapHref} target="_blank" rel="noreferrer">Построить маршрут <span>↗</span></a>
                        </div>
                        <a className="location-map" href={CONTACTS.mapHref} target="_blank" rel="noreferrer" aria-label="Открыть расположение на Яндекс Картах" data-reveal>
                            <img src={asset('/assets/images/map.webp')} alt="Карта расположения комплекса между Ливадией и центром Ялты" loading="lazy" />
                            <span className="map-pin"><i />Новая Ливадия</span>
                            <span className="map-action">Открыть карту ↗</span>
                        </a>
                    </div>
                </section>

                <section className="service section" aria-labelledby="service-title">
                    <div className="container service-grid">
                        <div data-reveal>
                            <p className="eyebrow">Забота о резидентах</p>
                            <h2 id="service-title">Сервис,<br /><em>который всегда рядом.</em></h2>
                        </div>
                        <div className="service-copy" data-reveal>
                            <p className="large-copy">Собственная управляющая компания отвечает за содержание комплекса и помогает с управлением арендой.</p>
                            <div className="service-list">
                                <span>Консьерж и лобби-сервис</span><span>Доставка и бронирование</span><span>Уборка и технический сервис</span><span>Сопровождение ремонта</span><span>Централизованная сдача в аренду</span><span>Личный кабинет инвестора</span>
                            </div>
                        </div>
                    </div>
                    <div className="container purchase" data-reveal>
                        <p className="eyebrow">Варианты приобретения</p>
                        <div><span>Полная оплата</span><span>Рассрочка</span><span>Ипотека</span></div>
                    </div>
                </section>

                <section className="contact" id="contact" aria-labelledby="contact-title">
                    <img src={asset('/assets/images/sea-view.webp')} alt="Вид на Чёрное море из резиденций Новой Ливадии" loading="lazy" />
                    <div className="contact-shade" />
                    <div className="container contact-inner" data-reveal>
                        <p className="eyebrow">Ваш новый вид на жизнь</p>
                        <h2 id="contact-title">Встретимся<br /><em>в Новой Ливадии.</em></h2>
                        <p>Расскажем о доступных квартирах, организуем онлайн-презентацию или личный просмотр.</p>
                        <div className="contact-actions">
                            <button className="button button-light" data-request="Запись на просмотр">Записаться на просмотр <span>↗</span></button>
                            <a className="text-link light-link" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <RequestDialog />
            <Motion />
        </div>
    );
}
