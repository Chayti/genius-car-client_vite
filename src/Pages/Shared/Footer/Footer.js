import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <svg width="107" height="87" viewBox="0 0 107 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104 36.7241C103.464 35.0984 102.956 33.7249 102.562 32.2953C102.308 31.3984 101.8 31.1461 100.926 31.1741C98.1617 31.2863 95.3695 31.1461 92.6336 31.4825C89.8978 31.8188 88.0363 31.006 86.7953 28.5673C86.4287 27.8386 85.8082 27.1939 85.2723 26.5492C84.539 25.6802 84.3979 24.8113 84.821 23.7181C86.0338 20.6348 87.0774 17.4954 88.2902 14.3841C88.685 13.375 88.4876 12.7583 87.585 12.1697C85.921 11.0485 84.3697 9.84319 82.7621 8.72198C80.5057 7.18033 81.1262 7.0682 78.8699 8.75001C76.3879 10.6 73.9059 12.422 71.4521 14.328C70.6624 14.9447 69.9009 15.0288 68.9701 14.6924C67.4753 14.1318 65.9805 13.5712 64.4292 13.2348C63.1036 12.9265 62.4831 12.1697 62.1447 10.9364C61.2421 7.79699 60.2268 4.68564 59.3242 1.54626C59.0704 0.649299 58.6191 0.200816 57.6884 0.172786C55.3756 0.144756 53.0911 0.144756 50.8065 0.0326353C49.5373 -0.0234251 48.8322 0.425058 48.4655 1.68641C47.6194 4.7417 46.6041 7.74093 45.7297 10.7962C45.3913 12.0015 44.8272 12.7023 43.5298 12.9826C41.8939 13.347 40.2581 13.8515 38.7068 14.4682C37.6351 14.8886 36.8453 14.6924 35.9992 14.0477C33.2352 11.9455 30.4429 9.89925 27.7071 7.76896C26.9738 7.20836 26.4097 7.20836 25.7046 7.74093C23.7303 9.17047 21.7278 10.572 19.7253 11.9174C18.8791 12.478 18.8509 13.0667 19.1894 13.9356C20.4304 17.1591 21.615 20.4106 22.7149 23.6621C22.9124 24.2507 22.7149 25.1477 22.3765 25.6802C21.3611 27.2499 20.1201 28.6795 19.0766 30.2211C18.4561 31.1181 17.7227 31.4825 16.6228 31.4264C13.1536 31.2863 9.68449 31.2022 6.18715 31.1741C5.70767 31.1741 4.94615 31.3984 4.80513 31.7347C4.15643 33.3044 3.67695 34.9302 3.05646 36.7241C3.81798 36.7241 4.32565 36.7241 4.86154 36.7241C10.0229 36.7241 15.2126 36.612 20.374 36.7802C22.4047 36.8362 23.7585 36.4438 24.4354 34.4256C24.661 33.7809 25.1687 33.2203 25.5354 32.6597C34.0531 19.5977 51.5116 14.328 65.9241 20.3825C73.3982 23.5219 79.0109 28.6234 82.8749 35.715C83.1005 36.1635 83.721 36.6961 84.1441 36.6961C90.6593 36.7521 97.2028 36.7241 104 36.7241Z" fill="white" />
                    <path d="M104 36.7241C97.1745 36.7241 90.6593 36.7522 84.1159 36.6681C83.6928 36.6681 83.0723 36.1355 82.8467 35.687C78.9827 28.5954 73.37 23.4939 65.8958 20.3545C51.5116 14.328 34.053 19.5977 25.4789 32.6317C25.084 33.2204 24.5764 33.7529 24.3789 34.3976C23.702 36.4158 22.3482 36.8362 20.3175 36.7522C15.1561 36.584 9.99469 36.6961 4.80508 36.6961C4.2974 36.6961 3.78972 36.6961 3 36.6961C3.59229 34.9302 4.07177 33.2764 4.74867 31.7067C4.8897 31.3704 5.65121 31.1461 6.13069 31.1461C9.59983 31.1742 13.0972 31.2582 16.5663 31.3984C17.6945 31.4545 18.3996 31.0901 19.0201 30.1931C20.0919 28.6514 21.3047 27.2219 22.32 25.6522C22.6585 25.1196 22.8559 24.2227 22.6585 23.634C21.5585 20.3545 20.3457 17.131 19.1329 13.9076C18.7945 13.0386 18.8509 12.45 19.6688 11.8894C21.6995 10.544 23.6738 9.11442 25.6481 7.71291C26.3532 7.20837 26.9173 7.18034 27.6506 7.74094C30.3865 9.87123 33.2069 11.9174 35.9427 14.0197C36.7889 14.6644 37.5786 14.8886 38.6504 14.4401C40.2016 13.8235 41.8375 13.3189 43.4733 12.9546C44.7707 12.6742 45.3348 11.9735 45.6733 10.7682C46.5194 7.71291 47.5348 4.71369 48.4091 1.6584C48.7757 0.397042 49.4809 -0.0514402 50.7501 0.00462013C53.0346 0.116741 55.3474 0.116741 57.6319 0.144771C58.5909 0.144771 59.0139 0.593253 59.2678 1.51825C60.1703 4.65763 61.1857 7.76897 62.0882 10.9083C62.4267 12.1417 63.0472 12.8985 64.3728 13.2068C65.924 13.5712 67.4189 14.1038 68.9137 14.6644C69.8444 15.0288 70.6059 14.9167 71.3957 14.3C73.8495 12.422 76.3314 10.572 78.8134 8.722C81.0698 7.04019 80.4775 7.15231 82.7056 8.69397C84.3133 9.81517 85.8927 11.0205 87.5286 12.0856C88.4311 12.6742 88.6286 13.2909 88.2337 14.3C87.0491 17.3833 85.9773 20.5227 84.7646 23.634C84.3415 24.7272 84.4825 25.5962 85.2158 26.4651C85.7517 27.1098 86.344 27.7545 86.7389 28.4833C87.9799 30.9219 89.8414 31.7348 92.5772 31.3984C95.313 31.062 98.1052 31.2022 100.869 31.0901C101.744 31.062 102.251 31.3423 102.505 32.2113C102.985 33.7249 103.492 35.0984 104 36.7241Z" fill="#FF3811" />
                    <path d="M75.3443 46.1983C72.0161 42.9187 68.6598 39.6112 65.3035 36.2756C64.7112 35.687 64.3445 36.0794 63.9215 36.4998C62.342 38.0976 60.7626 39.6953 59.1549 41.2369C58.1396 42.218 57.0396 43.171 55.9678 44.124C56.0524 44.2642 56.1371 44.3763 56.2217 44.5165C59.3524 43.8998 62.0882 44.5445 64.3445 46.7589C66.5727 48.9733 67.165 51.7482 66.6009 54.7475C69.5342 51.8884 72.3828 49.0854 75.3443 46.1983Z" fill="white" />
                    <path d="M51.0321 44.3483C50.609 43.8718 50.4116 43.5634 50.1577 43.3112C47.9014 41.0688 45.5886 38.8824 43.3887 36.5839C42.599 35.7711 42.1195 35.7991 41.358 36.5839C38.4247 39.5551 35.4915 42.4703 32.4736 45.3574C31.7121 46.0862 31.8813 46.5346 32.53 47.1793C34.8992 49.5058 37.2401 51.8604 39.6093 54.1869C39.8067 54.3831 40.0888 54.4952 40.4272 54.7194C39.4401 47.9922 44.1784 43.3672 51.0321 44.3483Z" fill="white" />
                    <path d="M40.0606 33.3604C36.4786 36.9763 33.0095 40.5081 29.5685 43.9838C29.8224 44.3202 30.1608 44.7967 30.4711 45.1891C34.1095 41.5732 37.6068 38.1255 41.3298 34.4536C40.9349 34.1172 40.4836 33.7248 40.0606 33.3604Z" fill="white" />
                    <path d="M80.0827 41.5733C79.998 41.4332 79.9416 41.265 79.8288 41.1249C76.6417 37.9575 73.4828 34.8181 70.2957 31.6507C69.7599 31.1181 69.365 31.0901 68.7727 31.6507C68.1522 32.2673 68.265 32.6878 68.8291 33.2484C71.6778 36.0234 74.47 38.8264 77.2904 41.6294C77.7417 42.0779 78.2212 42.4983 78.8699 43.115C79.2929 42.5824 79.6314 42.162 80.0827 41.5733Z" fill="white" />
                    <path d="M77.8263 43.8157C74.5546 40.5642 71.3393 37.3968 68.124 34.1733C67.5881 33.6408 67.1368 33.2203 66.4035 34.0052C65.6984 34.762 66.0933 35.2105 66.6574 35.743C69.5342 38.5741 72.3829 41.4051 75.2315 44.2362C76.5007 45.5255 76.5289 45.5255 77.8263 43.8157Z" fill="white" />
                    <path d="M38.876 32.3233C37.6068 30.7817 37.635 30.7817 36.2812 32.0991C33.5172 34.846 30.7532 37.565 28.0173 40.3119C26.6917 41.6293 26.7199 41.7975 28.2994 42.6945C31.8249 39.2468 35.3223 35.7991 38.876 32.3233Z" fill="white" />
                    <path d="M75.3443 46.1983C72.3828 49.1134 69.5342 51.8884 66.6009 54.7755C67.165 51.7763 66.5727 49.0293 64.3445 46.7869C62.0882 44.5445 59.3242 43.9278 56.2217 44.5445C56.1371 44.4043 56.0524 44.2922 55.9678 44.1521C57.0396 43.199 58.1114 42.274 59.1549 41.265C60.7626 39.6953 62.342 38.1256 63.9215 36.5279C64.3445 36.1074 64.7112 35.715 65.3035 36.3036C68.6598 39.5831 72.0161 42.8907 75.3443 46.1983ZM67.6445 41.6574C67.0522 42.4422 66.3471 42.9748 66.4035 43.3672C66.4881 43.8437 67.2214 44.2361 67.6727 44.6566C68.0675 44.2361 68.7444 43.8157 68.7726 43.3672C68.829 42.9187 68.2085 42.4142 67.6445 41.6574Z" fill="#444444" />
                    <path d="M51.0321 44.3483C44.1502 43.3672 39.4401 47.9922 40.4272 54.7475C40.0888 54.5232 39.8067 54.4111 39.6093 54.2149C37.2401 51.8884 34.8992 49.5338 32.53 47.2073C31.8813 46.5627 31.7121 46.1142 32.4736 45.3854C35.4633 42.4983 38.4247 39.5551 41.358 36.6119C42.1195 35.8271 42.599 35.7991 43.3887 36.6119C45.5886 38.9104 47.9014 41.0968 50.1577 43.3392C50.4116 43.5634 50.6372 43.8718 51.0321 44.3483ZM41.1887 43.4513C40.399 42.8066 39.8913 42.1059 39.5247 42.1619C39.017 42.246 38.5939 42.9468 38.1427 43.3672C38.5657 43.7877 38.9324 44.4604 39.4119 44.5445C39.8067 44.6005 40.3426 43.9839 41.1887 43.4513Z" fill="#444444" />
                    <path d="M40.0606 33.3604C40.4836 33.7248 40.9349 34.0892 41.3298 34.4536C37.635 38.1255 34.1377 41.5732 30.4711 45.1891C30.1608 44.7687 29.7942 44.2922 29.5685 43.9838C33.0095 40.5081 36.5068 36.9763 40.0606 33.3604Z" fill="#444444" />
                    <path d="M80.0827 41.5733C79.6314 42.162 79.2929 42.5824 78.8699 43.143C78.2212 42.5264 77.7417 42.1059 77.2904 41.6574C74.47 38.8544 71.6777 36.0514 68.8291 33.2764C68.2368 32.7158 68.124 32.2953 68.7727 31.6787C69.3368 31.1181 69.7598 31.1461 70.2957 31.6787C73.4546 34.8461 76.6417 37.9855 79.8288 41.1529C79.9416 41.237 79.998 41.4332 80.0827 41.5733Z" fill="#444444" />
                    <path d="M77.8263 43.8157C76.5571 45.5255 76.5289 45.5255 75.2315 44.2362C72.3829 41.4051 69.5342 38.546 66.6574 35.743C66.0933 35.2105 65.6984 34.762 66.4035 34.0052C67.1368 33.2203 67.5881 33.6408 68.124 34.1733C71.3393 37.3968 74.5546 40.5642 77.8263 43.8157Z" fill="#444444" />
                    <path d="M38.876 32.3233C35.3223 35.8271 31.8249 39.2468 28.2994 42.7225C26.7199 41.8255 26.6917 41.6574 28.0173 40.3399C30.7814 37.593 33.5454 34.8741 36.2812 32.1271C37.635 30.7817 37.635 30.7817 38.876 32.3233Z" fill="#444444" />
                    <path d="M67.6445 41.6574C68.1804 42.4423 68.8009 42.9188 68.7727 43.3673C68.7445 43.8157 68.0676 44.2362 67.6727 44.6566C67.2214 44.2362 66.4881 43.8718 66.4035 43.3673C66.3471 42.9748 67.0522 42.4423 67.6445 41.6574Z" fill="white" />
                    <path d="M41.1888 43.4513C40.3426 43.9839 39.835 44.6006 39.3837 44.5165C38.9042 44.4604 38.5376 43.7597 38.1145 43.3392C38.5658 42.9187 38.9888 42.218 39.4965 42.1339C39.8914 42.1059 40.3991 42.8347 41.1888 43.4513Z" fill="white" />
                    <path d="M7.98242 68.8126C6.8431 68.8126 5.96094 69.2423 5.33594 70.1017C4.71094 70.9545 4.39844 72.146 4.39844 73.6759C4.39844 76.8595 5.5931 78.4513 7.98242 78.4513C8.98503 78.4513 10.1992 78.2006 11.625 77.6993V80.2384C10.4531 80.7267 9.14453 80.9708 7.69922 80.9708C5.6224 80.9708 4.03385 80.3426 2.93359 79.0861C1.83333 77.823 1.2832 76.0131 1.2832 73.6564C1.2832 72.172 1.55339 70.8732 2.09375 69.7599C2.63411 68.6401 3.40885 67.784 4.41797 67.1915C5.43359 66.5926 6.62174 66.2931 7.98242 66.2931C9.36914 66.2931 10.7624 66.6284 12.1621 67.299L11.1855 69.7599C10.6517 69.506 10.1146 69.2846 9.57422 69.0958C9.03385 68.907 8.50326 68.8126 7.98242 68.8126ZM21.3711 80.7755L20.7949 79.2911H20.7168C20.2155 79.9226 19.6979 80.3621 19.1641 80.6095C18.6367 80.8504 17.9466 80.9708 17.0938 80.9708C16.0456 80.9708 15.2188 80.6713 14.6133 80.0724C14.0143 79.4734 13.7148 78.6206 13.7148 77.5138C13.7148 76.3549 14.1185 75.5021 14.9258 74.9552C15.7396 74.4018 16.9635 74.0958 18.5977 74.0372L20.4922 73.9786V73.5001C20.4922 72.3934 19.9258 71.84 18.793 71.84C17.9206 71.84 16.8952 72.1036 15.7168 72.631L14.7305 70.6193C15.987 69.9617 17.3802 69.6329 18.9102 69.6329C20.375 69.6329 21.498 69.9519 22.2793 70.59C23.0605 71.228 23.4512 72.198 23.4512 73.5001V80.7755H21.3711ZM20.4922 75.7169L19.3398 75.756C18.474 75.782 17.8294 75.9383 17.4062 76.2247C16.9831 76.5112 16.7715 76.9474 16.7715 77.5333C16.7715 78.3732 17.2533 78.7931 18.2168 78.7931C18.9069 78.7931 19.457 78.5945 19.8672 78.1974C20.2839 77.8003 20.4922 77.2729 20.4922 76.6154V75.7169ZM32.6211 69.6525C33.0247 69.6525 33.36 69.6818 33.627 69.7404L33.4023 72.5333C33.1615 72.4682 32.8685 72.4357 32.5234 72.4357C31.5729 72.4357 30.8307 72.6798 30.2969 73.1681C29.7695 73.6564 29.5059 74.34 29.5059 75.2189V80.7755H26.5273V69.8575H28.7832L29.2227 71.6935H29.3691C29.7077 71.0815 30.1634 70.59 30.7363 70.2189C31.3158 69.8413 31.944 69.6525 32.6211 69.6525ZM52.8848 73.5001C52.8848 75.8504 52.2142 77.6505 50.873 78.9005C49.5384 80.1505 47.6081 80.7755 45.082 80.7755H41.0391V66.4982H45.5215C47.8522 66.4982 49.6621 67.1134 50.9512 68.3439C52.2402 69.5743 52.8848 71.2931 52.8848 73.5001ZM49.7402 73.5782C49.7402 70.5118 48.3861 68.9786 45.6777 68.9786H44.0664V78.2755H45.3652C48.2819 78.2755 49.7402 76.7098 49.7402 73.5782ZM57.9824 75.297C57.9824 76.3777 58.1582 77.1948 58.5098 77.7482C58.8678 78.3016 59.4473 78.5782 60.248 78.5782C61.0423 78.5782 61.612 78.3048 61.957 77.7579C62.3086 77.2045 62.4844 76.3842 62.4844 75.297C62.4844 74.2163 62.3086 73.4057 61.957 72.8654C61.6055 72.325 61.0293 72.0548 60.2285 72.0548C59.4342 72.0548 58.8613 72.325 58.5098 72.8654C58.1582 73.3992 57.9824 74.2098 57.9824 75.297ZM65.5312 75.297C65.5312 77.0743 65.0625 78.4643 64.125 79.4669C63.1875 80.4695 61.8822 80.9708 60.209 80.9708C59.1608 80.9708 58.2363 80.743 57.4355 80.2872C56.6348 79.825 56.0195 79.1642 55.5898 78.3048C55.1602 77.4454 54.9453 76.4428 54.9453 75.297C54.9453 73.5131 55.4108 72.1264 56.3418 71.1368C57.2728 70.1473 58.5814 69.6525 60.2676 69.6525C61.3158 69.6525 62.2402 69.8803 63.041 70.3361C63.8418 70.7918 64.457 71.4461 64.8867 72.299C65.3164 73.1518 65.5312 74.1512 65.5312 75.297ZM72.4258 80.9708C69.0273 80.9708 67.3281 79.1056 67.3281 75.3751C67.3281 73.5197 67.7904 72.1036 68.7148 71.1271C69.6393 70.144 70.9642 69.6525 72.6895 69.6525C73.9525 69.6525 75.0853 69.8999 76.0879 70.3947L75.209 72.6993C74.7402 72.5105 74.304 72.3575 73.9004 72.2404C73.4967 72.1167 73.0931 72.0548 72.6895 72.0548C71.14 72.0548 70.3652 73.1551 70.3652 75.3556C70.3652 77.491 71.14 78.5587 72.6895 78.5587C73.2624 78.5587 73.793 78.4838 74.2812 78.3341C74.7695 78.1779 75.2578 77.937 75.7461 77.6115V80.1603C75.2643 80.4663 74.776 80.6779 74.2812 80.795C73.793 80.9122 73.1745 80.9708 72.4258 80.9708ZM82.8848 78.5978C83.4056 78.5978 84.0306 78.4838 84.7598 78.256V80.4728C84.0176 80.8048 83.1061 80.9708 82.0254 80.9708C80.834 80.9708 79.9648 80.6713 79.418 80.0724C78.8776 79.4669 78.6074 78.562 78.6074 77.3575V72.0939H77.1816V70.8341L78.8223 69.838L79.6816 67.5333H81.5859V69.8575H84.6426V72.0939H81.5859V77.3575C81.5859 77.7807 81.7031 78.0932 81.9375 78.295C82.1784 78.4969 82.4941 78.5978 82.8848 78.5978ZM89.3496 75.297C89.3496 76.3777 89.5254 77.1948 89.877 77.7482C90.235 78.3016 90.8145 78.5782 91.6152 78.5782C92.4095 78.5782 92.9792 78.3048 93.3242 77.7579C93.6758 77.2045 93.8516 76.3842 93.8516 75.297C93.8516 74.2163 93.6758 73.4057 93.3242 72.8654C92.9727 72.325 92.3965 72.0548 91.5957 72.0548C90.8014 72.0548 90.2285 72.325 89.877 72.8654C89.5254 73.3992 89.3496 74.2098 89.3496 75.297ZM96.8984 75.297C96.8984 77.0743 96.4297 78.4643 95.4922 79.4669C94.5547 80.4695 93.2493 80.9708 91.5762 80.9708C90.528 80.9708 89.6035 80.743 88.8027 80.2872C88.002 79.825 87.3867 79.1642 86.957 78.3048C86.5273 77.4454 86.3125 76.4428 86.3125 75.297C86.3125 73.5131 86.778 72.1264 87.709 71.1368C88.64 70.1473 89.9486 69.6525 91.6348 69.6525C92.6829 69.6525 93.6074 69.8803 94.4082 70.3361C95.209 70.7918 95.8242 71.4461 96.2539 72.299C96.6836 73.1518 96.8984 74.1512 96.8984 75.297ZM105.453 69.6525C105.857 69.6525 106.192 69.6818 106.459 69.7404L106.234 72.5333C105.993 72.4682 105.701 72.4357 105.355 72.4357C104.405 72.4357 103.663 72.6798 103.129 73.1681C102.602 73.6564 102.338 74.34 102.338 75.2189V80.7755H99.3594V69.8575H101.615L102.055 71.6935H102.201C102.54 71.0815 102.995 70.59 103.568 70.2189C104.148 69.8413 104.776 69.6525 105.453 69.6525Z" fill="#444444" />
                </svg>

                <p className="w-64 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatibus!</p>

                <div className="flex">
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaGoogle />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaTwitter />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaInstagram />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
}

export default Footer;