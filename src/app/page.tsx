import ApartmentShowcase from '@/components/ApartmentShowcase';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Infrastructure from '@/components/Infrastructure';
import Motion from '@/components/Motion';
import RequestDialog from '@/components/RequestDialog';
import { asset } from '@/lib/asset';
import { CONTACTS } from '@/lib/content';

export default function Page() {
    return (
        <div className="site" id="top">
            <a className="skip-link" href="#about">К содержанию</a>
            <Header />
            <main>
                <section className="hero" aria-labelledby="hero-title">
                    <div className="hero-media">
                        <img src={asset('/assets/images/hero.webp')} alt="Архитектура Новой Ливадии на фоне Чёрного моря и заката" fetchPriority="high" data-parallax="0.08" />
                    </div>
                    <div className="hero-veil" />
                    <div className="brand-geometry" aria-hidden="true">
                        <i /><i /><i /><i /><i />
                    </div>
                    <div className="container hero-inner">
                        <div className="hero-heading">
                            <p className="hero-kicker" data-hero>Жилой комплекс в Ялте</p>
                            <h1 id="hero-title">
                                <span data-hero>Сити-курорт</span>
                                <span data-hero>Новая Ливадия</span>
                            </h1>
                            <p className="hero-lead" data-hero>Премиальная жизнь между морем и горами<br />в историческом месте с новым будущим</p>
                            <div className="hero-actions" data-hero>
                                <button className="button button-olive" data-request="Подбор квартиры">Выбрать квартиру <span aria-hidden="true">↗</span></button>
                                <a className="hero-more" href="#about">Исследовать проект <span aria-hidden="true">↓</span></a>
                            </div>
                        </div>
                        <div className="hero-bottom" data-hero>
                            <p>Крым, Ялта<br />вблизи Ливадийского дворца</p>
                            <a className="scroll-cue" href="#about" aria-label="Прокрутить к описанию проекта"><span /></a>
                            <p>5 жилых корпусов<br />первый этап в январе 2028</p>
                        </div>
                    </div>
                </section>

                <section className="stats" aria-label="Ключевые параметры проекта">
                    <div className="container stats-grid">
                        <div data-reveal><strong data-counter="5">5</strong><span>жилых корпусов</span></div>
                        <div data-reveal><strong data-counter="20">20</strong><span>этажей</span></div>
                        <div data-reveal><strong>3–6 <small>м</small></strong><span>высота потолков</span></div>
                        <div data-reveal><strong>4,2 <small>га</small></strong><span>приватной территории</span></div>
                        <div data-reveal><strong data-counter="2028">2028</strong><span>передача ключей первого этапа<br />в январе</span></div>
                    </div>
                </section>

                <section className="about photo-spread" id="about" aria-labelledby="about-title">
                    <div className="spread-media">
                        <img src={asset('/assets/images/terrace.webp')} alt="Панорамная терраса Новой Ливадии с видом на море и горы" loading="lazy" data-parallax="0.06" />
                    </div>
                    <div className="spread-shade" />
                    <div className="container spread-inner">
                        <div className="spread-heading" data-reveal="mask">
                            <p className="eyebrow eyebrow-light">Особое место на южном берегу</p>
                            <h2 id="about-title">Там, где горы<br />встречают море</h2>
                        </div>
                        <div className="spread-copy" data-reveal>
                            <p>Комплекс расположен на возвышенности у границы Ялтинского горно-лесного заповедника, вблизи Ливадийского дворца.</p>
                            <span>Величественные горы, национальный парк и Чёрное море становятся частью повседневной жизни.</span>
                        </div>
                    </div>
                </section>

                <section className="story section" aria-labelledby="story-title">
                    <div className="container story-grid">
                        <div data-reveal>
                            <p className="eyebrow">Новая история Ливадии</p>
                            <h2 id="story-title">Природе принадлежит<br />главная роль</h2>
                        </div>
                        <div className="story-copy" data-reveal>
                            <p>Ливадия хранит атмосферу царской резиденции и одновременно предлагает современный курортный сервис. Здесь природа, история и архитектура образуют единое пространство для жизни.</p>
                            <p>Название места связывают с греческим словом «ливади», которое означает «луг». Целебный воздух и мягкий климат, которые ценили здесь с XIX века, остаются главными достоинствами и сегодня.</p>
                        </div>
                    </div>
                    <div className="container story-features">
                        <div data-reveal><span>01</span><p>Виды на море, горы<br />и центр Ялты</p></div>
                        <div data-reveal><span>02</span><p>Трансфер<br />к собственным пляжам</p></div>
                        <div data-reveal><span>03</span><p>Собственная<br />управляющая компания</p></div>
                    </div>
                </section>

                <section className="beach" aria-labelledby="beach-title">
                    <div className="beach-panel" data-reveal="slide">
                        <p className="eyebrow">Собственная пляжная сеть</p>
                        <h2 id="beach-title">Море<br />только для своих</h2>
                        <p>Более 1,9 км премиальных пляжей с сервисом, ресторанами и прогулочным променадом. Трансфер на электрокарах или шаттлах доставит от дома к воде.</p>
                        <ul>
                            <li>Шезлонги, полотенца и душевые</li>
                            <li>Релакс, спорт и детские зоны</li>
                            <li>Завтраки и вечерние события у воды</li>
                        </ul>
                    </div>
                    <div className="beach-media" data-reveal="image">
                        <img src={asset('/assets/images/beach.webp')} alt="Благоустроенный пляж с шезлонгами и зонтами у моря" loading="lazy" data-parallax="0.05" />
                    </div>
                </section>

                <section className="architecture photo-spread" id="architecture" aria-labelledby="architecture-title">
                    <div className="spread-media">
                        <img src={asset('/assets/images/hero.webp')} alt="Панорамное остекление и пластика фасадов Новой Ливадии" loading="lazy" data-parallax="0.07" />
                    </div>
                    <div className="architecture-shade" />
                    <div className="container spread-inner">
                        <div className="spread-heading" data-reveal="mask">
                            <p className="eyebrow eyebrow-light">Бюро Paradox</p>
                            <h2 id="architecture-title">Архитектурная<br />концепция</h2>
                        </div>
                        <div className="spread-copy architecture-copy" data-reveal>
                            <p>Современный минимализм не спорит с ландшафтом, а подчёркивает его. Вертикальные линии, светлые пояса и тёплые оттенки дерева создают выразительный силуэт.</p>
                            <p>Автор проекта Филипп Никандров. Благоустройство и интерьеры общественных пространств созданы группой компаний UNK group.</p>
                        </div>
                        <div className="glazing" data-reveal>
                            <strong>80<span>%</span></strong>
                            <p>панорамного<br />остекления фасадов</p>
                        </div>
                    </div>
                </section>

                <Infrastructure />
                <ApartmentShowcase />

                <section className="location section" id="location" aria-labelledby="location-title">
                    <div className="container location-head">
                        <div data-reveal>
                            <p className="eyebrow">Окружение</p>
                            <h2 id="location-title">Вся Ялта<br />на одной карте</h2>
                        </div>
                        <div className="location-intro" data-reveal>
                            <p>Тихое место у заповедника с удобным выездом на Южнобережное шоссе. Дворец, парк, набережная и городские сервисы находятся рядом.</p>
                            <address>{CONTACTS.address}</address>
                        </div>
                    </div>
                    <div className="map-scroll" data-reveal="image">
                        <a className="location-map" href={CONTACTS.mapHref} target="_blank" rel="noreferrer" aria-label="Открыть расположение на Яндекс Картах">
                            <img src={asset('/assets/images/presentation-map.webp')} alt="Карта окружения Новой Ливадии с дворцом, парком, набережной и инфраструктурой Ялты" loading="lazy" />
                        </a>
                    </div>
                    <div className="container location-bottom">
                        <div className="distance-grid">
                            <div data-reveal><strong>2 км</strong><span>до моря</span></div>
                            <div data-reveal><strong>4 км</strong><span>до набережной Ялты</span></div>
                            <div data-reveal><strong>5 км</strong><span>до центра Ялты</span></div>
                            <div data-reveal><strong>110 км</strong><span>до аэропорта Симферополь</span></div>
                        </div>
                        <a className="button button-blue" href={CONTACTS.mapHref} target="_blank" rel="noreferrer">Построить маршрут <span aria-hidden="true">↗</span></a>
                    </div>
                </section>

                <section className="service section-dark" aria-labelledby="service-title">
                    <div className="container service-grid">
                        <div data-reveal="mask">
                            <p className="eyebrow eyebrow-light">Забота о резидентах</p>
                            <h2 id="service-title">Сервис<br />вашего курорта</h2>
                            <p className="service-lead">Собственная управляющая компания отвечает за содержание комплекса и помогает с управлением арендой.</p>
                        </div>
                        <div className="service-list" data-reveal>
                            <span>Консьерж и лобби-сервис</span><span>Доставка и бронирование</span><span>Уборка и технический сервис</span><span>Сопровождение ремонта</span><span>Централизованная сдача в аренду</span><span>Личный кабинет инвестора</span>
                        </div>
                    </div>
                    <div className="container purchase" data-reveal>
                        <p className="eyebrow eyebrow-light">Варианты приобретения</p>
                        <div><span>Полная оплата</span><span>Рассрочка</span><span>Ипотека</span></div>
                    </div>
                </section>

                <section className="contact" id="contact" aria-labelledby="contact-title">
                    <div className="contact-media" data-reveal="image">
                        <img src={asset('/assets/images/sales-office.webp')} alt="Офис продаж Новой Ливадии с панорамным видом на горы" loading="lazy" />
                    </div>
                    <div className="contact-panel">
                        <div data-reveal>
                            <p className="eyebrow">Офис продаж в Ялте</p>
                            <h2 id="contact-title">Встретимся<br />в Новой Ливадии</h2>
                            <p>Расскажем о доступных квартирах, организуем онлайн-презентацию или личный просмотр.</p>
                            <address>{CONTACTS.address}</address>
                            <div className="contact-actions">
                                <button className="button button-olive" data-request="Запись на просмотр">Записаться на просмотр <span aria-hidden="true">↗</span></button>
                                <a className="contact-phone" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                            </div>
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
