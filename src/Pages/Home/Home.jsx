import React from 'react'
import "./Home.scss"
import OurService from '../../Components/OurServices/OurService'
import EarnMoney from '../../Components/EarnMoney/EarnMoney'
import FAQ from '../../Components/FAQ/FAQ'
import Map from '../../Components/Map/Map'
import Slider from '../../Components/Slider/Slider'

import logo1 from "../../assets/images/shopi.png"
import logo2 from "../../assets/images/Tidal.png"
import logo3 from "../../assets/images/Musac.png"
import logo4 from "../../assets/images/Daraz.png"


const Home = () => {


    return (
        <>
            <div className="container_Hero">
                <div className="TagLine_section">
                    <div className="Tagline">
                        Smart
                    </div>
                    <div className="Tagline digital">
                        Digital
                    </div>
                    <div className="Tagline Distribution " >
                        Distribution.
                    </div>
                    <div className="btn_Join">
                        <button>Join VerseOne</button>
                    </div>
                </div>
            </div>
            <div className="slider_section">
                <Slider cardLength={4}>

                    <div>
                        <div className="slider_item">
                            <img src={logo1} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="slider_item">
                            <img src={logo2} alt="" />
                        </div>

                    </div>
                    <div>

                        <div className="slider_item">
                            <img src={logo3} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="slider_item">
                            <img src={logo4} alt="" />
                        </div>

                    </div>
                </Slider>
                <div className='bottom-slider'>
                    <Slider cardLength={5} toRight>
                        <div>
                            <div className="slider_item">
                                <img src={logo1} alt="" />

                            </div>
                        </div>
                        <div >
                            <div className="slider_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="168" height="32" viewBox="0 0 168 32" fill="none">
                                    <g clip-path="url(#clip0_1501_57)">
                                        <path d="M39.3286 21.2385C39.3286 27.9498 43.4782 31.9665 49.6438 31.9665C52.7182 31.9665 55.3054 31.113 56.7502 28.8703V31.9665H62.3782V0H56.5318V13.59C55.2046 11.3473 52.7518 10.3431 49.6774 10.3431C43.663 10.3264 39.3286 14.4268 39.3286 21.2385ZM56.7166 21.2385C56.7166 25.0711 54.0958 27.4644 50.9542 27.4644C47.695 27.4644 45.1918 25.0711 45.1918 21.2385C45.1918 17.3389 47.7118 14.8954 50.9542 14.8954C54.0958 14.8954 56.7166 17.3724 56.7166 21.2385ZM80.5726 23.7155C79.9006 26.1925 78.2038 27.431 75.5326 27.431C72.4246 27.431 69.871 25.5565 69.8038 22.2427H84.5374C84.7222 21.4226 84.8062 20.5523 84.8062 19.5983C84.8062 13.6569 80.7406 10.3096 74.743 10.3096C68.3422 10.3096 63.9406 14.8452 63.9406 21.0042C63.9406 27.8661 68.7958 31.9833 75.5158 31.9833C80.5894 31.9833 84.0334 29.8745 85.5454 25.6736L80.5726 23.7155ZM69.8038 18.3598C70.3582 15.9665 72.3574 14.5607 74.7598 14.5607C77.3806 14.5607 79.1614 15.9665 79.1614 18.1757L79.1278 18.3598H69.8038ZM102.261 23.7155C101.589 26.1925 99.8926 27.431 97.2214 27.431C94.1134 27.431 91.5598 25.5565 91.4926 22.2427H106.226C106.411 21.4226 106.495 20.5523 106.495 19.5983C106.495 13.6569 102.429 10.3096 96.4318 10.3096C90.031 10.3096 85.6294 14.8452 85.6294 21.0042C85.6294 27.8661 90.4846 31.9833 97.2046 31.9833C102.278 31.9833 105.722 29.8745 107.234 25.6736L102.261 23.7155ZM91.4926 18.3598C92.047 15.9665 94.0462 14.5607 96.4486 14.5607C99.0694 14.5607 100.85 15.9665 100.85 18.1757L100.817 18.3598H91.4926ZM127.125 32V26.728H114.845L126.789 15.1464V10.3264H107.889V15.3473H119.431L107.52 26.9791V32H127.125ZM144.211 23.7155C143.539 26.1925 141.842 27.431 139.171 27.431C136.063 27.431 133.509 25.5565 133.442 22.2427H148.176C148.361 21.4226 148.445 20.5523 148.445 19.5983C148.445 13.6569 144.379 10.3096 138.381 10.3096C131.981 10.3096 127.579 14.8452 127.579 21.0042C127.579 27.8661 132.434 31.9833 139.154 31.9833C144.228 31.9833 147.672 29.8745 149.184 25.6736L144.211 23.7155ZM133.442 18.3598C133.997 15.9665 135.996 14.5607 138.398 14.5607C141.019 14.5607 142.8 15.9665 142.8 18.1757L142.766 18.3598H133.442Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.124 10.3264H33.3312V14.5273H26.124V10.3264Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.124 16.1506H33.3312V20.3515H26.124V16.1506Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.124 21.975H33.3312V26.1758H26.124V21.975Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.7992H7.2072V32H0V27.7992Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70264 27.7992H15.9098V32H8.70264V27.7992Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4214 27.7992H24.6286V32H17.4214V27.7992Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.124 27.7992H33.3312V32H26.124V27.7992Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4214 21.975H24.6286V26.1758H17.4214V21.975Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70264 21.975H15.9098V26.1758H8.70264V21.975Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70264 16.1506H15.9098V20.3515H8.70264V16.1506Z" fill="white" />
                                        <path d="M162.305 17.8076V18.4268H168V16.7699C168 13.0544 165.665 10.3599 161.75 10.3599C159.23 10.3599 157.45 11.5816 156.526 13.6067V10.3599H150.646V32H156.526V18.0586C156.526 15.8494 157.718 14.6276 159.55 14.6276C161.23 14.6444 162.305 16.2176 162.305 17.8076Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1501_57">
                                            <rect width="168" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="slider_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="38" viewBox="0 0 170 38" fill="none">
                                    <g clip-path="url(#clip0_1501_48)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2917 1.19232C50.6291 1.82063 52.4663 3.65375 53.0872 5.97772C54.2172 10.1951 54.2172 19.0001 54.2172 19.0001C54.2172 19.0001 54.2172 27.8049 53.0872 32.0223C52.4576 34.3547 50.6206 36.1881 48.2917 36.8077C44.0655 37.9353 27.1086 37.9353 27.1086 37.9353C27.1086 37.9353 10.1604 37.9353 5.92547 36.8077C3.58814 36.1794 1.75094 34.3463 1.13 32.0223C0 27.8049 0 18.9999 0 18.9999C0 18.9999 0 10.1951 1.13 5.97772C1.75963 3.6453 3.59683 1.81196 5.92547 1.19232C10.1604 0.0646973 27.1086 0.0646973 27.1086 0.0646973C27.1086 0.0646973 44.0655 0.0646973 48.2917 1.19232ZM35.7768 18.9999L21.6922 27.1164V10.8837L35.7768 18.9999Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.6951 34.5181C77.6255 33.7953 76.8579 32.6763 76.4094 31.153C75.9608 29.6295 75.7279 27.6069 75.7279 25.0763V21.6336C75.7279 19.0774 75.9866 17.029 76.5042 15.4795C77.0217 13.9304 77.8325 12.803 78.9278 12.0971C80.0232 11.3914 81.4637 11.0299 83.2489 11.0299C85.0086 11.0299 86.4145 11.3914 87.4752 12.1144C88.5361 12.8372 89.3124 13.9649 89.804 15.4968C90.2957 17.029 90.5373 19.0774 90.5373 21.6249V25.0679C90.5373 27.5982 90.2957 29.6295 89.8212 31.1615C89.3469 32.6935 88.5709 33.8211 87.4926 34.5268C86.423 35.2325 84.9653 35.5944 83.1281 35.5944C81.2479 35.6026 79.7644 35.2412 78.6951 34.5181ZM84.7066 30.8001C84.9999 30.0254 85.1552 28.7601 85.1552 27.0131V19.6197C85.1552 17.9153 85.0086 16.6761 84.7066 15.8843C84.4135 15.1009 83.8873 14.7051 83.1368 14.7051C82.4125 14.7051 81.9034 15.1009 81.6016 15.8843C81.3083 16.6674 81.1532 17.9153 81.1532 19.6197V27.0131C81.1532 28.7688 81.2912 30.0341 81.5758 30.8001C81.8604 31.5747 82.3779 31.9619 83.1284 31.9619C83.8873 31.9619 84.4048 31.5747 84.7066 30.8001ZM161.038 25.1366V26.3332C161.038 27.8565 161.082 28.9925 161.177 29.7585C161.263 30.5161 161.452 31.0754 161.737 31.4199C162.022 31.764 162.461 31.9448 163.057 31.9448C163.859 31.9448 164.411 31.635 164.704 31.0151C164.997 30.3955 165.161 29.3626 165.187 27.9167L169.801 28.1836C169.827 28.39 169.836 28.674 169.836 29.0355C169.836 31.2304 169.232 32.8656 168.033 33.9501C166.834 35.0346 165.135 35.5768 162.936 35.5768C160.297 35.5768 158.451 34.7505 157.39 33.098C156.329 31.4455 155.803 28.8978 155.803 25.438V21.298C155.803 17.7347 156.355 15.1439 157.45 13.5003C158.546 11.8649 160.426 11.0471 163.091 11.0471C164.928 11.0471 166.334 11.3829 167.317 12.0541C168.301 12.7254 168.991 13.7667 169.396 15.187C169.793 16.6071 170 18.5697 170 21.0656V25.1281H161.038V25.1366ZM161.72 15.1525C161.452 15.4884 161.271 16.0391 161.176 16.7966C161.081 17.5539 161.038 18.716 161.038 20.2564V21.9608H164.954V20.2564C164.954 18.7329 164.902 17.5797 164.799 16.7966C164.695 16.0133 164.506 15.4539 164.238 15.1354C163.971 14.8169 163.548 14.6535 162.979 14.6535C162.41 14.6448 161.987 14.8169 161.72 15.1525ZM65.6711 24.6891L59.582 2.75001H64.8948L67.0253 12.6911C67.5687 15.1441 67.9654 17.227 68.2242 18.9569H68.3793C68.5605 17.7174 68.9572 15.6432 69.5784 12.7254L71.7862 2.74133H77.0992L70.9411 24.6891V35.2154H65.6711V24.6891ZM107.813 11.4948V35.2067H103.63L103.164 32.3062H103.052C101.914 34.501 100.206 35.5941 97.9374 35.5941C96.3592 35.5941 95.1946 35.0777 94.4444 34.0448C93.694 33.012 93.3231 31.4026 93.3231 29.2078V11.4948H98.6706V28.9065C98.6706 29.9651 98.7827 30.7227 99.0157 31.1702C99.2486 31.6177 99.6366 31.8501 100.18 31.8501C100.646 31.8501 101.094 31.7122 101.517 31.4284C101.939 31.1444 102.259 30.7827 102.466 30.3439V11.4946L107.813 11.4948ZM135.258 11.4948V35.2067H131.075L130.609 32.3062H130.497C129.358 34.501 127.651 35.5941 125.382 35.5941C123.804 35.5941 122.64 35.0777 121.889 34.0448C121.139 33.012 120.768 31.4026 120.768 29.2078V11.4948H126.116V28.9065C126.116 29.9651 126.228 30.7227 126.461 31.1702C126.693 31.6177 127.082 31.8501 127.625 31.8501C128.091 31.8501 128.539 31.7122 128.962 31.4284C129.384 31.1444 129.703 30.7827 129.911 30.3439V11.4946L135.258 11.4948Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M122.355 7.04504H117.042V35.2068H111.806V7.04504H106.493V2.75028H122.346V7.04504H122.355ZM152.965 15.2903C152.637 13.7928 152.12 12.7083 151.395 12.0371C150.671 11.3656 149.679 11.03 148.411 11.03C147.428 11.03 146.514 11.3053 145.66 11.8649C144.806 12.4156 144.15 13.1473 143.685 14.051H143.642V1.55371H138.484V35.2154H142.9L143.443 32.9691H143.555C143.969 33.7695 144.59 34.3978 145.418 34.8625C146.246 35.3273 147.161 35.5597 148.17 35.5597C149.981 35.5597 151.309 34.7248 152.163 33.0636C153.017 31.4026 153.44 28.8033 153.44 25.2659V21.5131C153.448 18.8622 153.284 16.788 152.965 15.2905V15.2903ZM148.058 24.9645C148.058 26.6946 147.988 28.0458 147.842 29.0271C147.704 30.0083 147.462 30.7054 147.126 31.1186C146.79 31.5316 146.341 31.7383 145.772 31.7383C145.332 31.7383 144.927 31.6351 144.547 31.4284C144.176 31.2218 143.866 30.912 143.633 30.4988V17.0291C143.814 16.3834 144.125 15.8585 144.565 15.4455C145.004 15.0323 145.479 14.8257 145.996 14.8257C146.54 14.8257 146.962 15.0407 147.255 15.4624C147.549 15.8843 147.756 16.6072 147.876 17.6056C147.989 18.6127 148.049 20.0414 148.049 21.9003V24.9645H148.058Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1501_48">
                                            <rect width="170" height="38" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>

                            <div className="slider_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 130 40" fill="none">
                                    <path d="M19.995 0C8.9523 0 0 8.94401 0 19.9768C0 31.0107 8.9523 39.9543 19.995 39.9543C31.0382 39.9543 39.99 31.0107 39.99 19.9768C39.99 8.94472 31.0387 0.000953476 19.9948 0.000953476L19.995 0ZM29.1646 28.8122C28.8055 29.4008 28.0381 29.5852 27.451 29.2266C22.7556 26.3595 16.8457 25.7118 9.88563 27.3003C9.21494 27.4539 8.54639 27.0339 8.39359 26.364C8.24006 25.6939 8.65861 25.026 9.33098 24.8733C16.9476 23.1335 23.481 23.8823 28.7513 27.0999C29.3386 27.4601 29.5251 28.2254 29.1646 28.8122ZM31.6119 23.3735C31.1597 24.1066 30.2003 24.3366 29.4676 23.8864C24.0941 20.5863 15.9004 19.6304 9.54325 21.5584C8.71878 21.8072 7.848 21.343 7.59778 20.5207C7.34946 19.697 7.81434 18.8286 8.63737 18.5782C15.899 16.3768 24.9262 17.4431 31.0983 21.2325C31.8314 21.6834 32.0632 22.6421 31.6119 23.3735ZM31.8221 17.7093C25.3768 13.8851 14.7455 13.5335 8.5927 15.3992C7.60469 15.6986 6.55985 15.1413 6.26044 14.1542C5.96102 13.1666 6.5183 12.1234 7.50703 11.8233C14.57 9.68114 26.3113 10.095 33.7307 14.4956C34.6194 15.0225 34.911 16.1692 34.3842 17.0559C33.8589 17.9438 32.7079 18.2365 31.8221 17.7093ZM54.3998 18.4422C50.9475 17.6197 50.3329 17.0424 50.3329 15.8293C50.3329 14.6833 51.4128 13.9121 53.0188 13.9121C54.5755 13.9121 56.1191 14.4977 57.7375 15.7034C57.7865 15.7399 57.8478 15.7544 57.9082 15.7449C57.9686 15.7358 58.0221 15.7027 58.0575 15.6528L59.7432 13.2787C59.8124 13.1809 59.7935 13.0461 59.7002 12.9715C57.774 11.4273 55.6051 10.6766 53.0699 10.6766C49.3423 10.6766 46.7385 12.9116 46.7385 16.1094C46.7385 19.5386 48.9846 20.7528 52.866 21.6901C56.1696 22.4503 56.7271 23.0873 56.7271 24.2259C56.7271 25.4876 55.5996 26.2719 53.7852 26.2719C51.7701 26.2719 50.1264 25.5937 48.2876 24.0028C48.242 23.9634 48.1795 23.9456 48.1217 23.9489C48.0608 23.9539 48.0052 23.9821 47.9665 24.0286L46.0764 26.276C45.9972 26.3692 46.0072 26.5086 46.0989 26.5892C48.2382 28.4974 50.8694 29.5053 53.7088 29.5053C57.7256 29.5053 60.3212 27.3125 60.3212 23.9186C60.3284 21.0536 58.6117 19.4672 54.407 18.4453L54.3998 18.4422ZM69.4087 15.0404C67.6676 15.0404 66.2395 15.7255 65.0619 17.1294V15.5493C65.0619 15.4245 64.9607 15.3229 64.836 15.3229H61.7447C61.6199 15.3229 61.5189 15.4245 61.5189 15.5493V33.1071C61.5189 33.2319 61.6199 33.3335 61.7447 33.3335H64.836C64.9607 33.3335 65.0619 33.2319 65.0619 33.1071V27.5649C66.2398 28.8855 67.6681 29.5308 69.4087 29.5308C72.6437 29.5308 75.9186 27.0427 75.9186 22.2864C75.9234 17.529 72.6475 15.0402 69.4122 15.0402L69.4087 15.0404ZM72.324 22.2864C72.324 24.7085 70.8307 26.3986 68.6926 26.3986C66.5788 26.3986 64.9843 24.6316 64.9843 22.2864C64.9843 19.9415 66.5788 18.1743 68.6926 18.1743C70.7961 18.174 72.324 19.9033 72.324 22.2864ZM84.3125 15.0404C80.1462 15.0404 76.8823 18.2456 76.8823 22.3382C76.8823 26.3862 80.1238 29.5577 84.2614 29.5577C88.4424 29.5577 91.7164 26.3633 91.7164 22.2864C91.7164 18.2237 88.4646 15.0404 84.3125 15.0404ZM84.3125 26.4227C82.0965 26.4227 80.4258 24.6438 80.4258 22.2852C80.4258 19.9166 82.0387 18.1979 84.2614 18.1979C86.4917 18.1979 88.1735 19.9768 88.1735 22.337C88.1735 24.7051 86.5497 26.4227 84.3125 26.4227ZM100.613 15.3229H97.2113V11.8481C97.2113 11.7236 97.1106 11.622 96.9857 11.622H93.8949C93.7697 11.622 93.6683 11.7236 93.6683 11.8481V15.3229H92.1819C92.0576 15.3229 91.9568 15.4245 91.9568 15.5493V18.2036C91.9568 18.3282 92.0576 18.43 92.1819 18.43H93.6683V25.2981C93.6683 28.0737 95.051 29.4809 97.7779 29.4809C98.8868 29.4809 99.8067 29.2521 100.674 28.761C100.744 28.7216 100.788 28.6458 100.788 28.5651V26.0374C100.788 25.9594 100.747 25.8857 100.68 25.8449C100.613 25.8027 100.529 25.8006 100.46 25.8347C99.8647 26.134 99.2891 26.2722 98.6456 26.2722C97.6538 26.2722 97.2113 25.8223 97.2113 24.8139V18.4312H100.613C100.738 18.4312 100.838 18.3296 100.838 18.2048V15.5507C100.843 15.426 100.743 15.3243 100.616 15.3243L100.613 15.3229ZM112.465 15.3365V14.9097C112.465 13.6542 112.947 13.0943 114.028 13.0943C114.672 13.0943 115.19 13.2222 115.77 13.4154C115.841 13.4378 115.916 13.4266 115.974 13.3839C116.033 13.3412 116.067 13.2728 116.067 13.2002V10.5976C116.067 10.4982 116.003 10.4101 115.907 10.3808C115.295 10.1988 114.511 10.012 113.338 10.012C110.482 10.012 108.973 11.6184 108.973 14.6559V15.3095H107.488C107.363 15.3095 107.261 15.4111 107.261 15.5357V18.2036C107.261 18.3281 107.363 18.43 107.488 18.43H108.973V29.0238C108.973 29.1486 109.074 29.2502 109.199 29.2502H112.29C112.415 29.2502 112.516 29.1486 112.516 29.0238V18.4307H115.403L119.824 29.0219C119.322 30.1348 118.829 30.3562 118.155 30.3562C117.61 30.3562 117.037 30.1937 116.45 29.8731C116.395 29.8428 116.33 29.8378 116.27 29.8562C116.211 29.8769 116.162 29.9208 116.136 29.978L115.089 32.2746C115.039 32.3831 115.082 32.5105 115.186 32.5668C116.28 33.1586 117.267 33.4113 118.488 33.4113C120.77 33.4113 122.032 32.349 123.144 29.4912L128.507 15.6456C128.534 15.576 128.526 15.4972 128.483 15.4355C128.441 15.3742 128.372 15.3372 128.297 15.3372H125.079C124.983 15.3372 124.896 15.3985 124.865 15.4889L121.568 24.8969L117.957 15.4827C117.924 15.3951 117.84 15.3372 117.746 15.3372H112.465L112.465 15.3365ZM105.594 15.3229H102.502C102.378 15.3229 102.276 15.4245 102.276 15.5493V29.0238C102.276 29.1486 102.378 29.2502 102.502 29.2502H105.594C105.718 29.2502 105.82 29.1486 105.82 29.0238V15.5502C105.82 15.5204 105.815 15.4909 105.803 15.4634C105.792 15.4359 105.775 15.4109 105.754 15.3899C105.733 15.3689 105.708 15.3522 105.68 15.3409C105.653 15.3295 105.623 15.3237 105.593 15.3238L105.594 15.3229ZM104.066 9.18758C102.841 9.18758 101.847 10.178 101.847 11.4016C101.847 12.6258 102.841 13.6175 104.066 13.6175C105.29 13.6175 106.283 12.6258 106.283 11.4016C106.283 10.1783 105.289 9.18758 104.067 9.18758H104.066Z" fill="white" />
                                </svg>
                            </div>

                        </div>
                        <div>

                            <div className="slider_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="196" height="27" viewBox="0 0 196 27" fill="none">
                                    <path d="M54.0867 1.70921H72.7458C72.7555 3.20242 72.7555 4.69602 72.7458 6.17973H66.025V23.8291C66.0153 24.12 66.0444 24.4109 65.9862 24.7018H60.7978C60.8171 18.5246 60.8075 12.357 60.8075 6.17973H54.0867V1.70921ZM88.3113 1.70921C90.0569 1.70921 91.8026 1.70921 93.5482 1.71891C93.5385 9.37989 93.5676 17.0409 93.5288 24.7018H88.321C88.2919 22.6654 88.3113 20.6289 88.3016 18.5925C88.3113 12.9679 88.3016 7.34342 88.3113 1.70921ZM180.647 1.70921C182.392 1.70921 184.138 1.70921 185.884 1.71891V20.0859C188.919 20.1051 191.965 20.0956 195 20.0956V24.7018H180.657C180.627 17.0409 180.657 9.37989 180.647 1.70921ZM131.419 9.41868C130.896 7.61476 129.877 5.97609 128.461 4.74451C126.59 3.08625 124.146 2.18438 121.692 1.86437C120.305 1.66072 118.899 1.71891 117.503 1.70921H111.306C111.189 1.70921 111.063 1.71891 110.947 1.73831C110.976 9.3314 110.947 16.9245 110.966 24.5174C110.957 24.5659 110.947 24.6532 110.937 24.7017H119.898C120.703 24.5562 121.527 24.5659 122.322 24.3913C125.038 23.8968 127.647 22.5488 129.421 20.4057C130.731 18.8541 131.536 16.9047 131.798 14.8975C132.03 13.0649 131.933 11.1836 131.419 9.41868ZM125.513 17.0506C124.863 18.0882 123.903 18.9125 122.788 19.4167C121.779 19.8822 120.664 20.0956 119.558 20.1247C118.395 20.1345 117.231 20.1247 116.067 20.1345C116.009 18.8446 116.057 17.5548 116.038 16.2653C116.038 12.9003 116.038 9.54494 116.048 6.17993H119.646C121.45 6.21872 123.283 6.83935 124.592 8.11941C125.765 9.25401 126.425 10.8541 126.531 12.4736C126.638 14.0541 126.347 15.6929 125.513 17.0506ZM164.509 19.2907C162.317 13.9668 160.135 8.63318 157.924 3.31899C157.721 2.78563 157.507 2.24257 157.265 1.72861C155.461 1.69951 153.657 1.69951 151.853 1.72861C148.769 9.14715 145.685 16.5657 142.601 23.9745C142.504 24.217 142.388 24.4497 142.34 24.7018H147.916C148.469 23.1696 149.06 21.6568 149.613 20.1247C152.775 20.0762 155.946 20.115 159.117 20.1053C159.282 20.0568 159.331 20.2315 159.369 20.3477C159.903 21.8023 160.446 23.2472 160.97 24.7018H166.721C166.022 22.8787 165.246 21.0944 164.509 19.2907ZM151.087 16.042C151.058 15.8382 151.184 15.6638 151.242 15.4796C152.299 12.7158 153.386 9.95204 154.433 7.18827C154.452 7.17838 154.491 7.16887 154.51 7.16887C155.606 10.0781 156.722 12.9774 157.827 15.8867C157.827 15.9255 157.837 16.003 157.837 16.042C155.587 16.0226 153.337 16.0226 151.087 16.042Z" fill="white" stroke="white" stroke-width="0.161675" />
                                    <path d="M7.28437 1H7.20679C5.31566 2.93949 3.37604 4.84019 1.46551 6.76998C1.31034 6.93483 1.10687 7.0706 1 7.27424C3.08509 9.3495 5.16049 11.4344 7.24558 13.5097C9.32097 11.4441 11.3869 9.35919 13.4621 7.29364V7.21606L9.1755 2.92979C8.54512 2.28006 7.87614 1.67882 7.28437 1Z" fill="white" />
                                    <path d="M19.7949 1H19.7173C17.671 3.11404 15.5278 5.1602 13.4912 7.28394C15.5956 9.3398 17.6516 11.4441 19.7464 13.5097C21.7539 11.512 23.7519 9.50465 25.7592 7.50698C25.8465 7.41971 25.9532 7.34213 26.0017 7.22576C23.975 5.24748 21.9964 3.23041 19.9889 1.24244C19.9113 1.16486 19.8533 1.08728 19.7949 1Z" fill="white" />
                                    <path d="M32.3055 1H32.2279C31.2193 2.05702 30.1719 3.06555 29.1439 4.10318C28.0965 5.14081 27.0685 6.19783 26.0114 7.22576C26.0599 7.36152 26.186 7.4391 26.2829 7.54577L32.2473 13.5097C34.3615 11.4635 36.3981 9.3398 38.5025 7.29364C38.4736 7.16757 38.3476 7.08999 38.2698 7.00272C36.6989 5.43173 35.1373 3.87044 33.5662 2.29946C33.1492 1.86307 32.6934 1.46548 32.3055 1Z" fill="white" />
                                    <path d="M19.727 13.5194C17.6807 15.5753 15.6247 17.6214 13.5784 19.6676C13.559 19.7064 13.5396 19.7645 13.5202 19.8033C14.9265 21.1901 16.3133 22.5865 17.7096 23.9829C18.3984 24.6424 19.0482 25.36 19.7561 26C20.2505 25.5636 20.716 25.04 21.201 24.5745C22.6945 23.0908 24.1882 21.5877 25.6815 20.104C25.7883 19.9779 25.9338 19.8906 26.0015 19.7355C23.9261 17.6893 21.8701 15.6237 19.8141 13.5582L19.727 13.5194Z" fill="white" />
                                    <path d="M7.28437 1H7.20679C5.31566 2.93949 3.37604 4.84019 1.46551 6.76998C1.31034 6.93483 1.10687 7.0706 1 7.27424C3.08509 9.3495 5.16049 11.4344 7.24558 13.5097C9.32097 11.4441 11.3869 9.35919 13.4621 7.29364V7.21606L9.1755 2.92979C8.54512 2.28006 7.87614 1.67882 7.28437 1Z" stroke="white" stroke-width="0.161675" />
                                    <path d="M19.7949 1H19.7173C17.671 3.11404 15.5278 5.1602 13.4912 7.28394C15.5956 9.3398 17.6516 11.4441 19.7464 13.5097C21.7539 11.512 23.7519 9.50465 25.7592 7.50698C25.8465 7.41971 25.9532 7.34213 26.0017 7.22576C23.975 5.24748 21.9964 3.23041 19.9889 1.24244C19.9113 1.16486 19.8533 1.08728 19.7949 1Z" stroke="white" stroke-width="0.161675" />
                                    <path d="M32.3055 1H32.2279C31.2193 2.05702 30.1719 3.06555 29.1439 4.10318C28.0965 5.14081 27.0685 6.19783 26.0114 7.22576C26.0599 7.36152 26.186 7.4391 26.2829 7.54577L32.2473 13.5097C34.3615 11.4635 36.3981 9.3398 38.5025 7.29364C38.4736 7.16757 38.3476 7.08999 38.2698 7.00272C36.6989 5.43173 35.1373 3.87044 33.5662 2.29946C33.1492 1.86307 32.6934 1.46548 32.3055 1Z" stroke="white" stroke-width="0.161675" />
                                    <path d="M19.727 13.5194C17.6807 15.5753 15.6247 17.6214 13.5784 19.6676C13.559 19.7064 13.5396 19.7645 13.5202 19.8033C14.9265 21.1901 16.3133 22.5865 17.7096 23.9829C18.3984 24.6424 19.0482 25.36 19.7561 26C20.2505 25.5636 20.716 25.04 21.201 24.5745C22.6945 23.0908 24.1882 21.5877 25.6815 20.104C25.7883 19.9779 25.9338 19.8906 26.0015 19.7355C23.9261 17.6893 21.8701 15.6237 19.8141 13.5582L19.727 13.5194Z" stroke="white" stroke-width="0.161675" />
                                </svg>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            <OurService />
            <EarnMoney />
            {/* <div className="sectionMap"></div> */}
            <Map />
            <FAQ />


        </>

    )
}

export default Home
