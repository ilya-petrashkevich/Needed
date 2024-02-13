import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './main-page.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeartFilled,
    CalendarTwoTone,
    TrophyFilled,
    IdcardOutlined, SettingOutlined, AndroidFilled, AppleFilled,
} from '@ant-design/icons';
import {Button, Card, Layout, Menu, Tooltip} from 'antd';
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const {Meta} = Card;
const {Header, Sider, Content} = Layout;

export const MainPage: React.FC = () => {

    const isNeededResolution = useMediaQuery({query: '(max-width: 834px)'})
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 768px)'}) //834px 768
    const [collapsed, setCollapsed] = useState(false);


    return (
        <>
            <Layout className={'wrapper'}>
                <Sider
                    width={isTabletOrMobile ? 106 : 208}
                    collapsedWidth={isTabletOrMobile ? 1 : 64}
                    style={{width: '100vh', backgroundColor: 'white', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.15)'}}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    {
                        isTabletOrMobile ?
                            (
                                <div
                                    data-test-id='sider-switch-mobile'
                                    className={`triggerMobile`}
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    {collapsed ?
                                        <MenuUnfoldOutlined style={{verticalAlign: "center"}}/> :
                                        <MenuFoldOutlined/>}
                                </div>
                            )
                            :
                            (
                                <div
                                    data-test-id='sider-switch'
                                    className={'trigger'}
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                </div>
                            )
                    }

                    <div className="logo">
                        {
                            collapsed
                                ?
                                isTabletOrMobile && collapsed ? null :
                                    <img className={'fitImg'} src="/assets/fit.png" alt=""/>
                                :
                                <img className={'cleverFitImg'} src="/assets/cleverfit.png" alt=""/>
                        }
                    </div>

                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: !isTabletOrMobile ? <CalendarTwoTone
                                    twoToneColor={['#061178', '#061178']}/> : isTabletOrMobile && collapsed ?
                                    <CalendarTwoTone twoToneColor={['#061178', '#061178']}/> : null,
                                label: <Link className={'siderLink'}
                                             style={{padding: '0 !important'}}
                                             to={''}>Календарь</Link>,
                            },
                            {
                                key: '2',
                                icon: !isTabletOrMobile ? <HeartFilled
                                    style={{color: '#061178'}}/> : isTabletOrMobile && collapsed ?
                                    <HeartFilled style={{color: '#061178'}}/> : null,
                                label: <Link className={'siderLink'} to={''}>Тренировки</Link>,
                            },
                            {
                                key: '3',
                                icon: !isTabletOrMobile ? <TrophyFilled
                                    style={{color: '#061178'}}/> : isTabletOrMobile && collapsed ?
                                    <TrophyFilled style={{color: '#061178'}}/> : null,
                                label: <Link className={'siderLink'} to={''}>Достижения</Link>,
                            },
                            {
                                key: '4',
                                icon: !isTabletOrMobile ? <IdcardOutlined
                                    style={{color: '#061178'}}/> : isTabletOrMobile && collapsed ?
                                    <IdcardOutlined style={{color: '#061178'}}/> : null,
                                label: <Link className={'siderLink'} to={''}>Профиль</Link>,
                            },
                        ]}
                    />
                    <div className="exitBtn">

                        {(collapsed && !isTabletOrMobile) &&
                            <span role="img" aria-label="idcard"
                                  className="anticon anticon-idcard ant-menu-item-icon"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="16" fill="white"/>
                                    <path
                                        d="M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z"
                                        fill="black"
                                    />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z"
                                          fill="black"
                                    />
                                </svg>
                            </span>
                        }

                        {(!collapsed && !isTabletOrMobile) &&
                            <>
                                <span role="img" aria-label="idcard"
                                      className="anticon anticon-idcard ant-menu-item-icon"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" fill="white"/>
                                        <path
                                            d="M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z"
                                            fill="black"
                                        />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z"
                                              fill="black"
                                        />
                                    </svg>
                                </span>

                                <span className="exitBtnSpanContainer">
                                    <Link style={{color: '#262626'}} to="">Выход</Link>
                                </span>

                            </>
                        }

                        {
                            (collapsed && isTabletOrMobile) &&
                            null
                        }

                        {
                            (!collapsed && isTabletOrMobile) &&
                            <span className="exitBtnSpanContainer">
                                    <Link style={{color: '#262626'}} to="">Выход</Link>
                                </span>
                        }

                    </div>
                </Sider>

                <Layout className="site-layout">

                    <Header className="site-layout-background">

                        <div className="headerOuterContainer">
                            <p className="pagePointer">Главная</p>

                            <div className="headerInnerContainer">
                                <div className="titleContainer">
                                    <h1>
                                        Приветствуем тебя в CleverFit — приложении,<br/> которое
                                        поможет тебе добиться своей мечты!
                                    </h1>
                                </div>
                                <div className="settingsBtnContainer">

                                    {
                                        isTabletOrMobile ?
                                            <Tooltip title="settings">
                                                <Button type={"link"}
                                                        style={{
                                                            backgroundColor: '#FFFFFF',
                                                            padding: 0,
                                                            top: -10
                                                        }}
                                                        shape="circle"
                                                        icon={<SettingOutlined style={{color: '#262626'}}/>}
                                                        size="middle"/>
                                            </Tooltip>
                                            :
                                            <Button
                                                icon={!isNeededResolution ? <SettingOutlined style={{color: '#262626'}}/> : null}
                                                style={{
                                                    width: '129px',
                                                    border: '0',
                                                    color: '#262626',
                                                    height: '32px'
                                                }} ghost>Настройки
                                            </Button>
                                    }


                                </div>
                            </div>

                        </div>

                    </Header>

                    <Content
                        className="ant-layout-content" //"site-layout-background"
                        style={{
                            minHeight: 280,
                        }}
                    >
                        <section className="contentSection">
                            <Card style={{
                                fontSize: '1rem',
                                color: '#061178',
                                fontWeight: 400,
                                lineHeight: '1.3rem',
                                maxWidth: '754px',
                                textAlign: 'left'
                            }}>
                                С CleverFit ты сможешь:<br/> — планировать свои тренировки на
                                календаре, выбирая тип и уровень нагрузки;<br/> — отслеживать свои
                                достижения в разделе статистики, сравнивая свои результаты с нормами
                                и рекордами;<br/> — создавать свой профиль, где ты можешь загружать
                                свои фото, видео и отзывы о тренировках;<br/> — выполнять
                                расписанные тренировки для разных частей тела, следуя подробным
                                инструкциям и советам профессиональных тренеров.
                            </Card>
                        </section>

                        <section className="contentSection">
                            <Card style={{
                                fontSize: '1.25rem',
                                fontWeight: 500,
                                lineHeight: '1.625rem',
                                maxWidth: '754px',
                                textAlign: 'left',
                                wordSpacing: '7px',
                                letterSpacing: "normal"
                            }}>

                                CleverFit — это не просто приложение, а твой личный помощник в
                                мире
                                фитнеса. Не откладывай на завтра — начни тренироваться уже
                                сегодня!

                            </Card>

                            <div className="contentWrapperInnerContainer">
                                <Card className={'contentCard'} style={{
                                    width: '33%'
                                }} headStyle={{padding: '12px 24px', wordWrap: 'break-word'}}
                                      bodyStyle={{padding: '12px'}}
                                      title="Расписание тренировки" bordered={false}>
                                    <Button icon={<HeartFilled style={{color: '#2F54EB'}}/>}
                                            style={{
                                                width: '129px',
                                                border: '0',
                                                color: '#2F54EB',
                                                height: '32px',
                                                padding: 0

                                            }} ghost>Тренировки
                                    </Button>
                                </Card>

                                <Card className={'contentCard'}
                                      style={{
                                          width: '33%'
                                      }} headStyle={{padding: '12px 24px', wordWrap: 'break-word'}}
                                      bodyStyle={{padding: '12px'}}
                                      title="Назначить календарь" bordered={false}>
                                    <Button icon={<CalendarTwoTone
                                        twoToneColor={['#2F54EB', '#2F54EB']}/>} style={{
                                        width: '129px',
                                        border: '0',
                                        color: '#2F54EB',
                                        height: '32px'
                                    }} ghost>Календарь
                                    </Button>
                                </Card>

                                <Card className={'contentCard'} style={{
                                    width: '33%'
                                }} headStyle={{padding: '12px 24px', wordWrap: 'break-word'}}
                                      bodyStyle={{padding: '12px'}}
                                      title="Заполнить профиль" bordered={false}>
                                    <Button icon={<IdcardOutlined style={{color: '#2F54EB'}}/>}
                                            style={{
                                                width: '129px',
                                                border: '0',
                                                color: '#2F54EB',
                                                height: '32px'
                                            }} ghost>Профиль
                                    </Button>
                                </Card>
                            </div>

                        </section>
                        <section className="contentSection">

                        </section>


                        <div className="footer">

                            <Button
                                className={'feedbacks'}
                                style={{
                                    width: 171,
                                    border: '0',
                                    padding: '6.4px 15px',
                                    color: '#2F54EB',
                                    height: 40,
                                    fontSize: '1rem',
                                    lineHeight: '1.3rem',
                                    fontWeight: 400,
                                    // top: isTabletOrMobile ? 0 : '-40px'
                                }} ghost>Смотреть отзывы
                            </Button>

                            <Card style={{
                                width: isTabletOrMobile ? '100%' : 240,
                                height: isTabletOrMobile ? 127 : 101,
                                // top: isTabletOrMobile ? 0 : '-100px'
                            }} bodyStyle={{padding: 0}}
                                  bordered={false}>
                                <Meta
                                    style={{color: '#2F54EB'}}
                                    title="Скачать на телефон"
                                    description="Доступно в PRO-тарифе"
                                />
                                <Button icon={<AndroidFilled/>}
                                        style={{
                                            width: '50%',
                                            border: '0',
                                            color: '#262626',
                                            height: '32px'
                                        }} ghost>Android OS
                                </Button>

                                <Button icon={<AppleFilled/>}
                                        style={{
                                            width: '50%',
                                            border: '0',
                                            color: '#262626',
                                            height: '32px'
                                        }} ghost>Apple OS
                                </Button>

                            </Card>

                        </div>



                    </Content>



                </Layout>
            </Layout>
        </>
    );
};
