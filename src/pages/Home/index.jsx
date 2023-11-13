import React from 'react';
import { Message, Dialogs, Status, ChatInput } from '../../components';
import { Icon, Input } from 'antd';

import './Home.scss';

const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">

                <div className="chat__sidebar-header">
                    <div>
                        <Icon type="team" />
                        <span>Список диалогов</span>
                    </div>
                    <Icon type="form" />
                </div>
                <div className="chat__sidebar-search">
                    <Input.Search
                        placeholder="Поиск среди контактов"
                        onSearch={value => console.log(value)} />
                </div>
                <div className="chat__sidebar-dialogs">
                    <Dialogs
                        userId={0}
                        items={[
                            {
                                _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                text: "I you wanna be the best, you gotta beat the best, and the best is blessed babyyyyy",
                                created_at: new Date(2021, 2, 3),
                                user: {
                                    _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                    fullname: 'Vage Igityan',
                                    avatar: 'https://themoviekarma.files.wordpress.com/2021/05/6e35a-16108415420871-800.jpg'
                                }
                            },
                            {
                                _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                text: "The Gods envy us. They envy us, because we are mortal. Because at any time we can die. You'll never be prettier, than now. We'll never be here again",
                                created_at: new Date(),
                                user: {
                                    _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                    fullname: 'Cristiano Ronaldo',
                                    avatar: null
                                }
                            }
                    ]} />
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Cristiano Ronaldo</b>
                        <div className="chat__dialog-header-status">
                            <Status online />
                        </div>
                    </div>
                    <Icon type="ellipsis" style={{ fontSize: '22px' }} />
                </div>
                <div className="chat__dialog-messages">
                    <Message
                        avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg"
                        audio="https://notificationsounds.com/storage/sounds/file-sounds-1075-12-days-of-christmas.mp3"
                        date={new Date(2021,6,3)} />
                    <Message
                        avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg"
                        text="Hello Hello Hello Hello Hello HelloHelloHelloHello Hello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello Hello"
                        date={new Date(2021,6,3)}
                        attachments={[
                            {
                                filename: 'image.jpg',
                                url: 'https://source.unsplash.com/100x100/?random-1&nature,water'
                            },
                            {
                                filename: 'image.jpg',
                                url: 'https://source.unsplash.com/100x100/?random-2&nature,water'
                            },
                            {
                                filename: 'image.jpg',
                                url: 'https://source.unsplash.com/100x100/?random-3&nature,water'
                            }
                        ]} />
                    <Message
                        avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg"
                        text="Yoooo maan"
                        date={new Date(2021,6,3)}
                        isMe={true}
                        isReaded={false} />
                </div>
                <div className="chat__dialog-input">
                    <ChatInput />
                </div>
            </div>
        </div>
    </section>
);

export default Home;
