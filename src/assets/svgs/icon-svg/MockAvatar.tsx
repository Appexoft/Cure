import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `<svg width="85" height="91" viewBox="0 0 85 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="85" height="91" rx="16" transform="matrix(1 0 0 -1 0 91)" fill="#4B66EA"/>
    <rect width="85" height="91" rx="16" transform="matrix(1 0 0 -1 0 91)" fill="#0084F4"/>
    <mask id="mask0_411_18325" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="85" height="91">
    <rect width="85" height="91" rx="16" transform="matrix(1 0 0 -1 0 91)" fill="white"/>
    </mask>
    <g mask="url(#mask0_411_18325)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0048 64.814L31.1457 64L51.6264 64.2396L62.0319 66.4949L66 123.876L20 126L27.0048 64.814Z" fill="#E0E0E0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.4088 117.129L57.3815 91.0748L55.7617 60.8569C62.1825 62.501 70.9587 64.3387 75.8103 69.8351C78.9653 73.4101 82.0554 77.9842 83.2004 85.3461C84.5455 93.9984 86.3171 110.593 87.4237 119.871" fill="#E8505B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.8603 112.878L31.316 117.973L30.2011 98.6049L28.4693 60.3208C19.3242 60.6914 8.89332 68.2141 5.76532 74.0716C3.59307 78.1394 1.75961 82.8647 1.18538 87.4344C0.0944567 96.1218 -1.7595 110.96 -2.86611 120.238C-3.54761 125.951 -1.60384 131.665 2.42541 135.795C7.00492 140.49 14.1735 142.112 20.6166 140.788L68.6467 127.333L62.8603 112.878Z" fill="#E8505B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.5419 112.534C59.5384 112.533 59.5471 112.496 59.5667 112.425C59.5903 112.344 59.6208 112.241 59.6587 112.111C59.7477 111.823 59.8724 111.419 60.0315 110.902C60.3694 109.837 60.8543 108.31 61.4586 106.403C62.6956 102.564 64.4235 97.1995 66.4074 91.0412L66.4707 91.176C64.8225 90.4986 63.1107 89.7947 61.3553 89.0726L61.1569 88.9911L61.3365 88.8745C61.7111 88.6305 62.1135 88.3687 62.5186 88.1051C63.8397 87.2461 65.1373 86.4026 66.3765 85.5973L66.3298 85.7217C64.3699 78.9475 62.6424 72.9752 61.4002 68.6811C60.7928 66.5477 60.3045 64.8318 59.9639 63.635C59.8026 63.0525 59.6766 62.597 59.5872 62.2732C59.5489 62.1262 59.5179 62.0092 59.4944 61.9191C59.4747 61.8389 59.466 61.7973 59.4695 61.7964C59.473 61.7955 59.4883 61.835 59.5148 61.913C59.5432 62.0023 59.5803 62.1167 59.6265 62.2615C59.7254 62.5827 59.8637 63.0347 60.0411 63.6129C60.3973 64.8053 60.9079 66.5148 61.5428 68.6399C62.8029 72.9288 64.5565 78.8937 66.5452 85.6592L66.5683 85.7386L66.499 85.7836C65.2603 86.5898 63.964 87.4342 62.6428 88.2941C62.2382 88.5572 61.8353 88.8194 61.4608 89.063L61.4421 88.8645C63.1966 89.5884 64.908 90.294 66.5548 90.9732L66.6494 91.0122L66.618 91.1084C64.6036 97.2571 62.8491 102.613 61.5933 106.446C60.9624 108.344 60.4571 109.865 60.1043 110.925C59.9299 111.437 59.793 111.838 59.6958 112.123C59.65 112.251 59.6138 112.352 59.5855 112.431C59.5598 112.5 59.5449 112.535 59.5419 112.534Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5142 85.7568C66.3097 86.599 65.5383 87.771 64.9244 88.1238C64.3253 88.468 64.6689 88.9235 65.1664 89.4012C65.7607 89.9711 66.7226 90.1267 67.1608 90.8224C67.5689 91.4695 67.3557 92.3095 67.125 93.0377C64.9406 99.9419 62.2861 106.699 59.1855 113.248L66.5142 91.0751L61.4001 88.9686L66.5142 85.7568Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6892 113.07C28.6866 113.071 28.67 113.041 28.6408 112.981C28.6081 112.91 28.5667 112.821 28.5153 112.71C28.4023 112.457 28.2454 112.104 28.0444 111.653C27.6358 110.715 27.0498 109.37 26.3164 107.686C24.851 104.281 22.7973 99.5075 20.4201 93.9812L20.3857 93.9014L20.4572 93.8507C21.753 92.9305 23.1047 91.97 24.4934 90.9835L24.4895 91.1634C23.634 90.4903 22.7302 89.779 21.8136 89.0578C21.4173 88.7453 21.0231 88.4354 20.6316 88.1268L20.0465 87.6656L19.9004 87.5511C19.8729 87.5243 19.8598 87.5295 19.8202 87.4766C19.7805 87.4294 19.7687 87.3903 19.7587 87.3557C19.7173 87.2118 19.7142 87.0874 19.709 86.9604C19.7107 85.9609 19.8568 85.0082 19.9798 84.0663C20.2466 82.1869 20.561 80.3847 20.8684 78.67C21.4892 75.2411 22.101 72.1642 22.6238 69.5822C23.1483 67.0002 23.5896 64.9145 23.9013 63.4746C24.0583 62.7659 24.1812 62.2107 24.268 61.818C24.3107 61.6386 24.3443 61.4968 24.37 61.3889C24.394 61.2923 24.4084 61.2433 24.4123 61.2442C24.4162 61.245 24.4093 61.2953 24.3927 61.3933C24.3726 61.5029 24.346 61.6459 24.3129 61.8276C24.2357 62.222 24.1272 62.7803 23.9881 63.4924C23.7003 64.9513 23.2887 67.0388 22.7816 69.6129C22.2784 72.1984 21.6837 75.278 21.0746 78.7064C20.7729 80.4207 20.4629 82.2225 20.2004 84.0967C20.0787 85.0316 19.9353 85.9947 19.9348 86.9539C19.9383 87.0705 19.9466 87.194 19.9736 87.2859C19.9641 87.3366 20.1036 87.4159 20.1917 87.4935L20.7764 87.9534C21.1675 88.2611 21.5612 88.571 21.9571 88.8827C22.8719 89.6035 23.7744 90.3143 24.6282 90.9866L24.7467 91.0798L24.6242 91.1664C23.2342 92.1503 21.8808 93.1087 20.5832 94.0267L20.6203 93.8971C22.9678 99.436 24.9953 104.22 26.442 107.633C27.151 109.327 27.7173 110.681 28.1119 111.625C28.299 112.082 28.4451 112.439 28.5497 112.695C28.5942 112.809 28.6299 112.901 28.6583 112.973C28.6818 113.036 28.6923 113.069 28.6892 113.07Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.6436 140.514L27.857 135.636C27.2836 135.548 26.8907 135.015 26.9792 134.446L33.8383 90.2697C33.9272 89.6997 34.4635 89.3092 35.0364 89.3971L66.8231 94.2742C67.396 94.3622 67.7893 94.8953 67.7008 95.4648L60.8414 139.641C60.7528 140.211 60.2165 140.602 59.6436 140.514Z" fill="#E8505B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.6436 140.514L27.857 135.636C27.2836 135.548 26.8907 135.015 26.9792 134.446L33.8383 90.2697C33.9272 89.6997 34.4635 89.3092 35.0364 89.3971L66.8231 94.2742C67.396 94.3622 67.7893 94.8953 67.7008 95.4648L60.8414 139.641C60.7528 140.211 60.2165 140.602 59.6436 140.514Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1332 138.17L29.0527 133.554L35.736 90.5132L65.8161 95.1284L59.1332 138.17Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3842 91.0479C50.6312 90.9322 50.1154 90.2322 50.2314 89.4841C50.3478 88.736 51.052 88.2228 51.805 88.3385C52.5571 88.4538 53.0734 89.1538 52.9569 89.9024C52.8414 90.6505 52.1368 91.1637 51.3842 91.0479ZM56.7913 94.4114C56.3583 93.0743 55.2029 92.0951 53.8063 91.8819L54.0575 90.0419C54.2733 88.6519 53.3149 87.3512 51.9166 87.1366C50.5183 86.9221 49.2098 87.8748 48.994 89.2648L48.6975 91.1745L48.0504 91.0861C46.6696 90.8971 45.2987 91.4888 44.4947 92.6196L43.9941 93.3244L57.0904 95.3338L56.7913 94.4114Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8217 87.2163C19.7702 88.5257 20.123 89.8416 21.2161 90.5741C19.8505 91.2347 19.1223 92.8115 19.0787 94.3208C19.0351 95.8296 19.5605 97.2937 20.1334 98.692C21.8967 102.996 25.6652 109.057 28.5412 112.721C28.5412 112.721 27.0823 108.814 26.6659 107.91C24.7701 103.795 23.1023 99.6598 21.2069 95.5452C20.9968 95.0888 20.6209 93.8483 20.6209 93.8483C20.4256 93.9376 20.6942 93.8514 21.1873 93.46C22.2499 92.6174 24.5595 91.0748 24.5595 91.0748C24.5595 91.0748 19.8217 87.3468 19.8217 87.2163Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2793 82.8925L26.8438 82.876C26.8499 82.7113 27.4751 66.3135 27.9661 59.789C28.0424 58.7735 28.4291 57.9621 29.1163 57.3774C30.4758 56.2214 32.512 56.3705 32.597 56.3765L32.5626 56.8087C32.543 56.8074 30.6171 56.6695 29.3979 57.7081C28.8037 58.2148 28.4679 58.926 28.4008 59.8211C27.9107 66.3382 27.2859 82.7278 27.2793 82.8925Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8897 98.2956L18.7807 91.7476C18.6974 86.7592 22.3643 82.6398 26.9543 82.564C29.1893 82.5388 31.304 83.4417 32.9073 85.139C34.4939 86.8186 35.39 89.0681 35.4301 91.4728L35.5395 98.0212L34.2315 98.0424L34.122 91.4945C34.0876 89.414 33.3171 87.4727 31.9533 86.0289C30.606 84.6024 28.8431 83.8335 26.9761 83.8643C23.1069 83.928 20.0172 87.4549 20.0887 91.726L20.1977 98.2743L18.8897 98.2956Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.1345 83.1545C56.1144 82.9828 54.131 65.9401 53.5593 60.4801L53.5192 60.0818C53.3378 58.2284 53.132 56.128 51.0684 55.5745L51.1817 55.1558C53.5371 55.7877 53.7678 58.1452 53.9531 60.0397L53.9927 60.435C54.5639 65.8929 56.5478 82.933 56.5679 83.1046L56.1345 83.1545Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0282 80.2329C61.0282 82.8006 58.934 84.8824 56.351 84.8824C53.768 84.8824 51.6738 82.8006 51.6738 80.2329C51.6738 77.6648 53.768 75.583 56.351 75.583C58.934 75.583 61.0282 77.6648 61.0282 80.2329Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.612 80.233C58.612 81.4748 57.5992 82.4813 56.3504 82.4813C55.1008 82.4813 54.0879 81.4748 54.0879 80.233C54.0879 78.9912 55.1008 77.9844 56.3504 77.9844C57.5992 77.9844 58.612 78.9912 58.612 80.233Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2168 14.7002C26.1739 11.7593 31.0895 9.09978 33.785 7.55891C37.816 5.25476 41.554 5.71767 43.8549 7.76566C48.0171 4.29427 53.4948 0.961139 58.7519 2.32646C64.0085 3.69222 68.2719 9.04213 67.3144 14.3587C66.7502 17.4907 64.5675 20.3006 64.6948 23.4799C64.782 25.6475 65.9362 27.6036 66.8566 29.5706C67.7762 31.5375 68.4843 33.8291 67.6641 35.8393C66.9011 37.7101 64.9966 38.8764 63.9702 40.6188C63.1343 42.0375 62.9416 43.7292 62.4066 45.2848C60.4262 51.0512 53.579 54.2825 47.5349 53.2696C41.4908 52.257 36.4595 47.735 33.6054 42.3426C30.7507 36.9502 29.8068 30.7621 29.4745 24.6779" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6699 18.745L30.8755 66.8144C31.308 72.3247 36.4182 76.3431 42.3498 75.8377H42.3502C48.3403 75.3271 52.9128 70.3989 52.5683 64.8258C52.2064 58.9762 51.9339 52.8114 51.9339 52.8114C51.9339 52.8114 59.4317 51.0737 60.3639 41.1428C60.8414 36.0547 60.012 27.7163 59.1422 21.089C58.4136 15.5341 53.1827 11.6995 47.6282 12.6461" fill="#B78876"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9332 28.2115C57 28.8755 56.4894 29.4797 55.7931 29.5616C55.0976 29.644 54.4789 29.1732 54.4122 28.5092C54.345 27.8448 54.8552 27.2401 55.5506 27.1578C56.2474 27.0754 56.8665 27.5474 56.9332 28.2115Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.1738 26.9268C58.0273 27.1011 57.0201 26.4561 55.6558 26.5476C54.2919 26.6191 53.3353 27.3811 53.1766 27.2246C53.099 27.1557 53.2402 26.8484 53.6558 26.5051C54.0643 26.1631 54.7768 25.8103 55.627 25.7596C56.4773 25.7093 57.2128 25.975 57.644 26.2671C58.0849 26.5597 58.2462 26.8479 58.1738 26.9268Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8141 29.5738C43.8808 30.2383 43.3702 30.8421 42.6739 30.9244C41.9785 31.0063 41.3598 30.536 41.293 29.8716C41.2259 29.2076 41.7365 28.6025 42.4315 28.5206C43.1282 28.4382 43.7474 28.9098 43.8141 29.5738Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7757 28.0411C44.6288 28.2153 43.6212 27.5708 42.2577 27.6618C40.8939 27.7333 39.9372 28.4953 39.7781 28.3388C39.7009 28.2699 39.8404 27.9631 40.2577 27.6193C40.6663 27.2769 41.3787 26.9245 42.229 26.8738C43.0792 26.8236 43.8148 27.0892 44.2464 27.381C44.6859 27.6744 44.8481 27.9626 44.7757 28.0411Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.382 37.7835C50.3707 37.7068 51.2092 37.5069 52.5726 37.2438C52.9184 37.1858 53.2441 37.0956 53.2877 36.8555C53.3531 36.6002 53.1835 36.2357 52.9886 35.8434C52.6066 35.0264 52.2063 34.1699 51.7865 33.2718C50.1113 29.608 48.8752 26.5865 49.0238 26.5206C49.173 26.4547 50.6515 29.3713 52.3267 33.0352C52.7313 33.9389 53.1176 34.8006 53.4861 35.6254C53.6435 36.0107 53.899 36.4424 53.7551 36.9734C53.6783 37.2382 53.4342 37.4424 53.2149 37.5165C52.996 37.5988 52.8002 37.6149 52.6284 37.6365C51.2497 37.7991 50.3921 37.8602 50.382 37.7835Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9326 52.8111C51.9326 52.8111 45.3077 53.6641 38.4609 50.1489C38.4609 50.1489 42.2072 56.7662 52.0447 55.211L51.9326 52.8111Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7832 22.702C44.6724 23.0795 43.2985 22.9915 41.7101 23.2867C40.1151 23.5493 38.8546 24.0981 38.6209 23.7808C38.5154 23.6287 38.7181 23.2676 39.2169 22.8766C39.7109 22.487 40.515 22.0952 41.469 21.927C42.4234 21.761 43.3133 21.8559 43.912 22.0544C44.515 22.2521 44.8294 22.523 44.7832 22.702Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.4177 23.0331C57.1971 23.3564 56.2366 23.0968 55.1051 23.1544C53.9719 23.1726 53.0305 23.4951 52.7894 23.1874C52.683 23.037 52.8134 22.7184 53.2128 22.4002C53.6061 22.083 54.2802 21.8012 55.0584 21.7748C55.8367 21.7497 56.5283 21.9854 56.9416 22.2758C57.3619 22.5667 57.5137 22.8757 57.4177 23.0331Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2636 40.3364C49.3301 40.346 49.8664 40.6463 50.7707 41.2085C51.031 41.3702 51.2887 41.5648 51.416 41.8431C51.5874 42.2171 51.4827 42.6648 51.2813 43.0237C50.8409 43.8096 49.9196 44.3141 49.0192 44.2244C48.1188 44.1346 47.3031 43.4342 47.1199 42.553C46.9372 41.6723 47.4308 40.6879 48.2636 40.3364Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.8873 42.6069C51.9035 42.7096 51.5464 42.8678 50.9517 42.8323C50.3587 42.8059 49.5747 42.567 48.8121 42.1375C48.0504 41.7041 47.453 41.1688 47.1016 40.7115C46.7454 40.2551 46.6372 39.8979 46.7275 39.8399C46.9106 39.7241 47.808 40.6582 49.2172 41.4297C49.9113 41.8198 50.5671 42.108 51.0567 42.2662C51.5438 42.4331 51.8734 42.4877 51.8873 42.6069Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5118 33.7811C45.5118 33.98 45.3496 34.1413 45.1494 34.1413C44.9493 34.1413 44.7871 33.98 44.7871 33.7811C44.7871 33.5821 44.9493 33.4209 45.1494 33.4209C45.3496 33.4209 45.5118 33.5821 45.5118 33.7811Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7579 32.0174C55.7579 32.2164 55.5957 32.3776 55.3955 32.3776C55.1954 32.3776 55.0332 32.2164 55.0332 32.0174C55.0332 31.8185 55.1954 31.6572 55.3955 31.6572C55.5957 31.6572 55.7579 31.8185 55.7579 32.0174Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7579 32.9549C57.7579 33.1539 57.5957 33.3151 57.3955 33.3151C57.1954 33.3151 57.0332 33.1539 57.0332 32.9549C57.0332 32.756 57.1954 32.5947 57.3955 32.5947C57.5957 32.5947 57.7579 32.756 57.7579 32.9549Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3672 31.4495C58.3672 31.6485 58.205 31.8097 58.0049 31.8097C57.8048 31.8097 57.6426 31.6485 57.6426 31.4495C57.6426 31.2506 57.8048 31.0894 58.0049 31.0894C58.205 31.0894 58.3672 31.2506 58.3672 31.4495Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.854 35.3719C43.854 35.5709 43.6918 35.7321 43.4917 35.7321C43.2915 35.7321 43.1289 35.5709 43.1289 35.3719C43.1289 35.173 43.2915 35.0117 43.4917 35.0117C43.6918 35.0117 43.854 35.173 43.854 35.3719Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4961 33.9232C42.4961 34.1221 42.3339 34.2834 42.1338 34.2834C41.9337 34.2834 41.7715 34.1221 41.7715 33.9232C41.7715 33.7242 41.9337 33.563 42.1338 33.563C42.3339 33.563 42.4961 33.7242 42.4961 33.9232Z" fill="#AA6550"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.4274 29.5707C48.392 29.5738 48.4326 29.0125 48.1875 28.0537C47.946 27.1136 47.3155 25.7309 45.8932 24.6612C45.1882 24.1385 44.3009 23.6951 43.278 23.5174C42.2621 23.3457 41.1158 23.3791 40.0257 23.7922C39.4768 23.9824 38.9474 24.2694 38.4613 24.6313C37.9694 24.9867 37.523 25.4275 37.155 25.9381C36.3945 26.9441 35.9659 28.2371 35.9537 29.5699C35.9655 30.9027 36.3941 32.1965 37.1545 33.2029C37.5225 33.7135 37.9694 34.1548 38.4613 34.5098C38.9474 34.8717 39.4768 35.159 40.0257 35.3493C41.1162 35.7628 42.2621 35.7958 43.2784 35.6241C44.3013 35.4464 45.1886 35.0026 45.8932 34.4803C47.3155 33.4101 47.946 32.0275 48.1875 31.0873C48.4326 30.1286 48.392 29.5677 48.4274 29.5707C48.4317 29.5707 48.4339 29.605 48.4343 29.6722C48.433 29.7528 48.4317 29.8512 48.43 29.9708C48.4304 30.1026 48.4234 30.2651 48.3916 30.4554C48.3663 30.6457 48.3423 30.8676 48.2734 31.1086C48.1705 31.5988 47.949 32.18 47.5928 32.7977C47.2331 33.4127 46.7099 34.0577 45.9909 34.6068C45.2745 35.1512 44.3658 35.6167 43.3133 35.8083C42.2677 35.9934 41.0844 35.9661 39.9542 35.5444C39.3856 35.3502 38.8367 35.0559 38.3322 34.6827C37.8216 34.3169 37.3581 33.8618 36.9753 33.3338C36.1853 32.2932 35.7383 30.9512 35.7266 29.5699C35.7388 28.1889 36.1857 26.8475 36.9758 25.8072C37.3586 25.2793 37.8221 24.8242 38.3322 24.4584C38.8367 24.0852 39.3861 23.7909 39.9542 23.5967C41.0844 23.1754 42.2673 23.1481 43.3129 23.3332C44.3654 23.5247 45.2741 23.9898 45.9904 24.5342C46.7094 25.0834 47.2331 25.7283 47.5924 26.3434C47.949 26.9615 48.1705 27.5423 48.2734 28.0325C48.3423 28.2739 48.3659 28.4954 48.3916 28.6861C48.4234 28.8764 48.4304 29.0389 48.43 29.1707C48.4317 29.2903 48.433 29.3883 48.4343 29.4693C48.4339 29.5365 48.4317 29.5707 48.4274 29.5707Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1586 27.6779C51.1311 27.7398 50.4989 27.4083 49.667 27.5045C48.8333 27.5821 48.2843 28.0367 48.2442 27.9817C48.2255 27.9622 48.3354 27.817 48.5769 27.654C48.8163 27.491 49.1974 27.3272 49.6434 27.28C50.0899 27.2344 50.4963 27.3159 50.7649 27.4256C51.0352 27.5353 51.1725 27.6544 51.1586 27.6779Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M47.1764 11.2422C46.2834 19.0727 40.4408 26.1273 32.8815 28.5021C35.3206 31.996 33.7845 38.6423 33.8473 44.1916C33.9057 49.3504 33.9031 50.8245 30.5405 53.4537C27.7626 54.1199 26.1603 46.553 24.0957 44.4395C22.0312 42.3265 20.0556 39.7203 20.2086 36.7785C20.2801 35.4032 20.8208 34.0847 20.8967 32.7099C20.9804 31.1842 20.4903 29.6931 20.2182 28.1896C19.0144 21.5346 22.4846 14.3785 28.3159 10.898C34.1473 7.41754 41.9311 7.65507 47.7144 11.2136" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4895 43.4424C29.7003 40.7824 28.5906 38.6897 26.8409 36.5299L26.9664 36.7991C25.5821 33.6619 22.1371 31.5467 18.6952 31.721C15.2532 31.8948 12.0415 34.3463 10.9846 37.6075C9.92726 40.8682 11.094 44.7223 13.786 46.8618C12.8015 46.6476 11.8104 47.4846 11.5907 48.4624C11.3709 49.4398 11.7572 50.4632 12.3262 51.2897C14.3712 54.261 19.006 55.0446 21.9243 52.9125C24.2335 54.4681 27.651 53.5618 29.3641 51.373C31.0772 49.185 31.2787 46.1019 30.4895 43.4424Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1285 31.9709C21.1228 31.9761 21.0378 31.8816 20.8804 31.6939C20.7343 31.4998 20.5456 31.1838 20.4226 30.7339C20.1553 29.8367 20.28 28.4185 20.9973 26.9201C21.3365 26.1646 21.8846 25.4052 22.5735 24.7217C23.2511 24.0234 24.0359 23.329 24.9472 22.7144C25.8554 22.0981 26.8905 21.5593 28.0281 21.1801C29.1595 20.7973 30.3577 20.4974 31.5799 20.1936C32.802 19.8884 33.9941 19.5885 35.1108 19.1997C36.2283 18.8148 37.2769 18.3584 38.237 17.8504C40.1581 16.8336 41.7378 15.6551 42.9526 14.5528C44.1686 13.448 45.0359 12.4338 45.6044 11.7138C45.894 11.3567 46.1019 11.0663 46.2458 10.8716C46.3906 10.6775 46.4699 10.5773 46.4765 10.5817C46.483 10.586 46.4167 10.6944 46.2838 10.8972C46.1512 11.1009 45.955 11.4004 45.6746 11.7671C45.1257 12.5066 44.2724 13.5425 43.0611 14.6703C41.8521 15.7955 40.2689 16.9978 38.3351 18.0338C37.3689 18.5517 36.3116 19.0168 35.1836 19.4086C34.056 19.8043 32.8574 20.1069 31.6353 20.4125C30.4122 20.7167 29.2206 21.0132 28.0991 21.389C26.9803 21.7596 25.9627 22.284 25.0645 22.8865C24.1641 23.4873 23.3845 24.1669 22.7086 24.8521C22.0167 25.5283 21.4891 26.2469 21.142 26.9894C20.42 28.4514 20.2739 29.8341 20.5081 30.7118C20.7261 31.6042 21.1712 31.9479 21.1285 31.9709Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.475 10.5818C46.4806 10.587 46.41 10.6724 46.27 10.8302C46.1322 10.9897 45.919 11.2159 45.6417 11.505C45.0836 12.0793 44.2473 12.8864 43.1255 13.784C41.997 14.6639 40.5839 15.6686 38.8023 16.3777C37.9107 16.7331 36.9279 16.9503 35.9154 17.1549C34.9 17.3564 33.8413 17.515 32.7591 17.6772C30.596 17.9957 28.5341 18.3308 26.746 18.9337C24.964 19.5418 23.4662 20.3974 22.3936 21.3276C21.3123 22.2516 20.6461 23.2147 20.2933 23.9225C20.1224 24.281 19.9951 24.5623 19.9306 24.7617C19.8564 24.9576 19.8137 25.0603 19.8059 25.0581C19.7984 25.056 19.8264 24.9494 19.887 24.7474C19.938 24.5419 20.0526 24.2528 20.214 23.8844C20.5462 23.1558 21.2033 22.1615 22.2881 21.2071C23.3646 20.2466 24.8759 19.3641 26.678 18.7369C28.4866 18.1154 30.5616 17.7729 32.7251 17.4539C33.8073 17.2914 34.8629 17.1354 35.8727 16.9377C36.8817 16.7375 37.8527 16.5268 38.726 16.184C40.481 15.4983 41.8928 14.517 43.0265 13.6583C44.1536 12.7828 45.0034 11.9965 45.5789 11.443C45.8523 11.1756 46.0708 10.9615 46.2369 10.7989C46.3873 10.6516 46.4689 10.5766 46.475 10.5818Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5474 2.00842C57.5526 2.05913 56.6967 2.08731 55.3778 2.43666C55.0494 2.52594 54.6902 2.62693 54.3178 2.77474C53.9367 2.8987 53.5513 3.08464 53.141 3.26669C52.3357 3.66545 51.4854 4.1743 50.6675 4.81145C49.8582 5.45944 49.1671 6.16811 48.5946 6.85771C48.3234 7.21443 48.054 7.54557 47.8464 7.88669C47.6175 8.21393 47.4374 8.53857 47.2752 8.83721C46.6356 10.0352 46.4145 10.8575 46.3657 10.8406C46.3509 10.8367 46.4049 10.6325 46.5166 10.2658C46.5689 10.0812 46.6413 9.85752 46.7524 9.6083C46.8593 9.35777 46.9648 9.06347 47.1331 8.76353C47.2879 8.45622 47.4623 8.12248 47.6877 7.7857C47.8918 7.43505 48.1595 7.09393 48.4311 6.72811C49.004 6.01988 49.703 5.29387 50.5262 4.63461C51.3581 3.98619 52.2271 3.47387 53.0507 3.07901C53.4702 2.8987 53.8652 2.71666 54.2546 2.59833C54.6357 2.45616 55.0024 2.36254 55.3385 2.28192C55.6703 2.18656 55.9825 2.15145 56.252 2.10421C56.5214 2.0535 56.7569 2.03356 56.9496 2.02446C57.3346 1.99932 57.5465 1.99282 57.5474 2.00842Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5688 39.4349C64.5658 39.4323 64.588 39.4028 64.6338 39.3478C64.6896 39.2832 64.7581 39.2043 64.8418 39.1068C65.0236 38.8953 65.297 38.5862 65.6092 38.1606C65.9144 37.7341 66.285 37.1888 66.4856 36.4732C66.5828 36.1178 66.6295 35.7199 66.5763 35.3069C66.52 34.8947 66.3692 34.4725 66.1285 34.0733C65.658 33.2619 64.8845 32.5541 64.1769 31.6803C63.4744 30.8039 62.8248 29.7831 62.3146 28.6276C61.8019 27.4755 61.416 26.1939 61.235 24.8316C61.0489 23.4662 61.1095 22.0441 61.1291 20.6043C61.1496 19.1657 61.1112 17.7497 60.7445 16.4502C60.3826 15.1529 59.6924 14.0091 58.8561 13.0963C58.0203 12.1791 57.0305 11.49 56.0181 11.0466C55.0069 10.5945 53.9736 10.399 53.0331 10.363C51.1351 10.2911 49.6417 10.8355 48.7073 11.3084C48.2373 11.5511 47.8907 11.7752 47.6618 11.9338C47.5567 12.0084 47.4717 12.0686 47.4023 12.1176C47.343 12.1579 47.3112 12.1774 47.3086 12.1744C47.3086 12.1744 47.7267 11.747 48.6659 11.2308C49.5977 10.7288 51.1041 10.1511 53.0388 10.2035C53.9971 10.2295 55.0558 10.4202 56.0939 10.8753C57.133 11.3218 58.1506 12.0205 59.0109 12.9563C59.8716 13.8869 60.5832 15.0567 60.9586 16.3904C61.3379 17.7245 61.3763 19.1635 61.3563 20.6073C61.3362 22.0524 61.2752 23.4619 61.4557 24.803C61.6305 26.1436 62.0064 27.4062 62.5065 28.544C63.0035 29.6848 63.6379 30.6947 64.3238 31.5641C65.0118 32.4275 65.7888 33.1497 66.2676 33.9936C66.5117 34.4092 66.667 34.8552 66.7197 35.2895C66.7699 35.7247 66.7149 36.1408 66.6077 36.5075C66.3875 37.2452 65.9985 37.79 65.6803 38.2131C65.3537 38.6348 65.0685 38.9352 64.8754 39.1376C64.7847 39.2286 64.711 39.3032 64.6508 39.3634C64.5994 39.4132 64.5715 39.4375 64.5688 39.4349Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5602 28.0434C63.5249 28.0464 63.5654 27.4856 63.3204 26.5264C63.0788 25.5862 62.4479 24.2036 61.026 23.1339C60.321 22.6111 59.4337 22.1677 58.4108 21.99C57.3949 21.8184 56.2486 21.8518 55.1581 22.2648C54.6096 22.4551 54.0802 22.742 53.5945 23.104C53.1023 23.4594 52.6558 23.8997 52.2878 24.4108C51.5274 25.4168 51.0987 26.7097 51.0865 28.0425C51.0983 29.3753 51.5269 30.6692 52.2873 31.6756C52.6553 32.1866 53.1023 32.6274 53.5941 32.9824C54.0802 33.3443 54.6096 33.6317 55.1581 33.822C56.2486 34.2355 57.3949 34.2684 58.4108 34.0968C59.4341 33.9191 60.3214 33.4752 61.026 32.9529C62.4483 31.8828 63.0788 30.5001 63.3208 29.56C63.5654 28.6012 63.5249 28.0404 63.5602 28.0434C63.5645 28.0434 63.5667 28.0776 63.5671 28.1448C63.5658 28.2254 63.5645 28.3238 63.5628 28.4435C63.5632 28.5752 63.5562 28.7378 63.5244 28.928C63.4987 29.1183 63.4751 29.3402 63.4063 29.5812C63.3034 30.0714 63.0819 30.6527 62.7256 31.2703C62.3659 31.8854 61.8423 32.5303 61.1237 33.0795C60.4073 33.6239 59.4987 34.0894 58.4461 34.281C57.4001 34.4661 56.2172 34.4388 55.087 34.017C54.5189 33.8228 53.9695 33.5285 53.465 33.1553C52.9544 32.7895 52.491 32.3344 52.1081 31.8065C51.3181 30.7658 50.8707 29.4239 50.8594 28.0425C50.8711 26.6616 51.3189 25.3201 52.1086 24.2799C52.4914 23.7519 52.9549 23.2968 53.4655 22.931C53.9699 22.5578 54.5189 22.2635 55.087 22.0693C56.2172 21.648 57.4001 21.6207 58.4457 21.8058C59.4982 21.9974 60.4069 22.4625 61.1233 23.0069C61.8423 23.556 62.3659 24.201 62.7252 24.816C63.0819 25.4341 63.3034 26.0149 63.4063 26.5051C63.4751 26.7466 63.4987 26.968 63.5244 27.1588C63.5562 27.349 63.5632 27.5116 63.5628 27.6433C63.5645 27.763 63.5658 27.8614 63.5671 27.942C63.5667 28.0092 63.5645 28.0434 63.5602 28.0434Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4791 53.6159C30.4738 53.622 30.401 53.5726 30.2663 53.4725C30.1311 53.3736 29.9362 53.2215 29.6868 53.0234C29.1945 52.6216 28.4755 52.0378 27.7042 51.1922C26.9477 50.3543 26.1032 49.1945 25.8411 47.6731C25.7051 46.9176 25.7622 46.1201 25.733 45.3152C25.7138 44.5112 25.5555 43.6798 25.0537 42.9894C24.5723 42.2911 23.9244 41.7385 23.3488 41.1529C22.7611 40.5769 22.2723 39.9202 21.944 39.2345C21.6091 38.551 21.3985 37.8558 21.2651 37.1974C21.14 36.5372 21.0597 35.9144 21.0846 35.3366C21.1094 34.761 21.2228 34.2569 21.2738 33.814C21.3318 33.371 21.3309 32.987 21.2982 32.6749C21.2254 32.0507 21.1038 31.717 21.1273 31.7105C21.1347 31.7083 21.1666 31.7902 21.2202 31.9489C21.2734 32.108 21.3362 32.3481 21.3863 32.6641C21.433 32.9805 21.4465 33.3762 21.3998 33.8278C21.3602 34.2799 21.2586 34.7836 21.2446 35.3423C21.2507 36.4501 21.4831 37.8141 22.1315 39.1422C22.4581 39.8084 22.9255 40.4308 23.5071 40.9977C24.0766 41.5742 24.7349 42.1299 25.2416 42.8624C25.4954 43.2252 25.6872 43.6326 25.7945 44.053C25.9074 44.4726 25.9397 44.8969 25.9554 45.3078C25.9811 46.1292 25.9214 46.9146 26.0474 47.6397C26.2876 49.103 27.0921 50.2455 27.825 51.0864C28.5702 51.9346 29.2704 52.5349 29.7439 52.9567C29.968 53.1522 30.1507 53.3112 30.2955 53.4374C30.4206 53.5488 30.4839 53.6099 30.4791 53.6159Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.527 43.5196C25.5348 43.52 25.537 43.5811 25.534 43.6973C25.5265 43.813 25.5309 43.9864 25.4999 44.2053C25.4568 44.6457 25.3373 45.2802 25.0766 46.0309C24.8184 46.7816 24.3929 47.6407 23.7585 48.4846C23.1271 49.3276 22.2708 50.1425 21.2226 50.7749C20.167 51.3947 19.0399 51.7605 17.9934 51.9153C16.9457 52.0726 15.983 52.0397 15.1955 51.9118C14.4068 51.7852 13.7876 51.5902 13.3769 51.4198C13.168 51.3436 13.0167 51.2582 12.9103 51.2096C12.8061 51.1576 12.7529 51.1268 12.756 51.1199C12.7739 51.0675 13.6559 51.5442 15.2182 51.7536C15.9952 51.8598 16.9383 51.8749 17.9607 51.7098C18.9819 51.5473 20.0785 51.1845 21.1062 50.5811C22.126 49.9657 22.9654 49.1764 23.5919 48.3589C24.2211 47.5406 24.6532 46.7071 24.9261 45.9763C25.4781 44.5087 25.472 43.5105 25.527 43.5196Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8426 41.4836C23.8548 41.4862 23.8208 41.7003 23.7148 42.0765C23.6119 42.4532 23.417 42.9881 23.1 43.6139C22.473 44.8575 21.2469 46.4638 19.3838 47.573C17.5294 48.6921 15.549 49.0674 14.1503 49.0978C13.4466 49.1169 12.878 49.0692 12.4895 49.012C12.101 48.9543 11.8904 48.9019 11.8926 48.8889C11.8974 48.8425 12.7546 49.0154 14.1433 48.9383C15.5207 48.8676 17.4536 48.4741 19.2661 47.3801C21.0865 46.2961 22.3043 44.7439 22.9583 43.5394C23.6211 42.324 23.7955 41.468 23.8426 41.4836Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0901 37.1647C11.0831 37.1508 11.2222 37.0715 11.4821 36.9393C11.6107 36.8704 11.7716 36.7932 11.9669 36.7234C12.161 36.651 12.3781 36.5553 12.6314 36.4911C13.1298 36.3333 13.7437 36.212 14.4326 36.1418C15.1215 36.0863 15.8867 36.0815 16.6799 36.1868C17.4721 36.2969 18.2112 36.4946 18.8617 36.7299C19.5026 36.9891 20.0682 37.2574 20.5003 37.553C20.7252 37.6852 20.9101 37.833 21.0741 37.9596C21.2415 38.0814 21.3758 38.1984 21.4778 38.3024C21.6888 38.5035 21.7992 38.6193 21.7883 38.6305C21.7569 38.6652 21.2982 38.2123 20.4157 37.6883C19.9814 37.4156 19.4202 37.1681 18.7893 36.925C18.1484 36.7052 17.425 36.5184 16.6498 36.4105C15.8741 36.3078 15.1259 36.306 14.4501 36.3489C13.7747 36.4061 13.1703 36.5093 12.675 36.645C11.6813 36.9072 11.1097 37.2063 11.0901 37.1647Z" fill="#455A64"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1279 36.3663C21.0865 36.4132 18.3365 34.0886 14.9857 31.1742C11.6341 28.2589 8.95124 25.8585 8.99266 25.8117C9.03408 25.7649 11.7836 28.089 15.1353 31.0043C18.4857 33.9187 21.1694 36.3195 21.1279 36.3663Z" fill="#E8505B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6877 31.6172C33.641 31.5804 33.9955 31.0785 34.5859 30.6117C35.1736 30.1418 35.7435 29.9078 35.7697 29.9611C35.8006 30.0187 35.2957 30.3338 34.7276 30.7876C34.1573 31.2388 33.7374 31.6597 33.6877 31.6172Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4435 34.0571C21.44 34.0592 21.4208 34.0302 21.3868 33.9713C21.3471 33.9002 21.2987 33.8135 21.2399 33.7073C21.1252 33.4689 20.9761 33.0996 20.9015 32.5973C20.728 31.6073 20.9599 30.0404 22.05 28.5676C22.3181 28.2 22.6486 27.8529 23.0219 27.523C23.403 27.2001 23.8364 26.9162 24.3055 26.6587C25.2464 26.1425 26.3483 25.7919 27.5233 25.5583C29.8822 25.0676 32.5354 25.1881 35.2422 24.7854C36.593 24.5804 37.8914 24.2176 39.0251 23.616C40.1613 23.0205 41.1385 22.2338 41.9516 21.3808C43.5937 19.6731 44.6031 17.7555 45.3247 16.1262C46.0411 14.4852 46.4915 13.103 46.8167 12.1551C46.9728 11.6939 47.0958 11.329 47.1865 11.0607C47.227 10.9467 47.2597 10.8539 47.2868 10.7772C47.3108 10.7139 47.3251 10.6818 47.3286 10.6831C47.3326 10.684 47.3256 10.7183 47.309 10.7841C47.2876 10.8626 47.2619 10.9579 47.2301 11.0741C47.1494 11.3459 47.0395 11.7152 46.9013 12.182C46.6009 13.139 46.1741 14.5312 45.4716 16.1891C44.7653 17.8353 43.762 19.7818 42.1034 21.5243C41.2819 22.3937 40.2895 23.1999 39.1293 23.8115C37.9699 24.43 36.6435 24.801 35.2771 25.0087C32.5362 25.4144 29.8931 25.2878 27.5639 25.7624C25.2443 26.1867 23.2264 27.2044 22.1786 28.6634C21.0982 30.0894 20.8457 31.6129 20.9892 32.5856C21.1156 33.5786 21.4867 34.0423 21.4435 34.0571Z" fill="#FAFAFA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2284 51.247C24.2284 51.247 24.1674 51.9115 23.6899 53.005C23.4449 53.5459 23.0926 54.1922 22.551 54.8471C22.0152 55.5029 21.2883 56.1691 20.3474 56.6914C19.4052 57.2046 18.2423 57.5505 16.9726 57.5656C15.7134 57.576 14.3251 57.2679 13.1439 56.4504C11.9684 55.6472 11.0079 54.3833 10.605 52.8824C10.3953 52.1368 10.3495 51.3298 10.4733 50.537C10.6085 49.746 10.9172 48.9745 11.3837 48.2944C12.155 47.1445 13.3458 46.3089 14.6255 46.012L14.6329 46.2304C13.2451 46.0102 11.9545 45.4784 10.891 44.7173C9.82757 43.9575 8.99957 42.9601 8.51123 41.8774C8.02245 40.7942 7.84717 39.653 7.93307 38.6132C8.01286 37.5695 8.37781 36.635 8.8801 35.9116C9.38501 35.1851 10.0116 34.6689 10.605 34.3109C11.2054 33.959 11.7805 33.7713 12.2558 33.6777C12.7323 33.578 13.1117 33.5884 13.3637 33.5944C13.4792 33.607 13.5734 33.617 13.6497 33.6252C13.7138 33.633 13.7461 33.6386 13.7456 33.6425C13.7469 33.6777 13.2115 33.5498 12.2723 33.7552C11.8071 33.8593 11.2472 34.0547 10.6647 34.4089C10.0896 34.769 9.48442 35.2818 9.00132 35.9939C8.52213 36.7022 8.1768 37.612 8.10704 38.6266C8.03161 39.6378 8.20994 40.747 8.69043 41.7964C9.17006 42.8444 9.97713 43.8079 11.0153 44.5448C12.053 45.282 13.314 45.7983 14.6678 46.0107L15.2307 46.0991L14.6752 46.2291C13.457 46.5139 12.3138 47.3144 11.5716 48.421C11.123 49.0751 10.8265 49.8162 10.6961 50.5739C10.5771 51.3315 10.6194 52.1065 10.8204 52.8256C11.2045 54.272 12.1306 55.4999 13.263 56.2796C14.3988 57.0728 15.7443 57.3806 16.9709 57.3784C18.2074 57.3719 19.3459 57.0433 20.2702 56.551C21.195 56.0499 21.9166 55.4045 22.4534 54.7669C22.9953 54.1298 23.3546 53.4978 23.6097 52.9686C23.8617 52.4363 24.0025 51.999 24.0941 51.7025C24.1329 51.563 24.1643 51.4512 24.1892 51.3619C24.2114 51.2851 24.2245 51.2461 24.2284 51.247Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6445 32.5239C21.6428 32.5273 21.6066 32.5113 21.5377 32.4766C21.4579 32.4346 21.3585 32.3826 21.2351 32.3176C20.9753 32.1676 20.5946 31.9361 20.1507 31.5751C19.2726 30.8651 18.0735 29.6224 17.3493 27.6928C16.6094 25.7965 16.5279 23.1577 17.726 20.701C18.3112 19.4779 19.229 18.331 20.4158 17.4438C21.5966 16.5478 23.0097 15.8977 24.5079 15.4534C26.0095 15.0061 27.5277 14.7759 28.991 14.6407C30.4556 14.5025 31.8705 14.4383 33.2134 14.3451C34.5564 14.2519 35.8295 14.1301 37.0055 13.9221C38.1827 13.7223 39.2558 13.4197 40.2028 13.0613C42.1039 12.3413 43.4433 11.3375 44.2369 10.5365C44.6275 10.1282 44.9057 9.78666 45.0806 9.54524C45.1617 9.43341 45.2266 9.34282 45.2794 9.27001C45.3252 9.20846 45.3505 9.17812 45.3535 9.18028C45.3535 9.18028 45.0753 9.75459 44.3001 10.5976C43.5187 11.4251 42.1762 12.4631 40.2617 13.2095C39.3077 13.5823 38.2246 13.8965 37.0391 14.1067C35.8544 14.3239 34.5742 14.4535 33.2283 14.5523C30.5463 14.7647 27.5491 14.7864 24.5733 15.6697C23.0943 16.1079 21.7065 16.7459 20.5506 17.6197C19.3886 18.4853 18.4926 19.5979 17.9144 20.7916C16.7328 23.1894 16.7934 25.7696 17.5006 27.6382C18.1921 29.5405 19.3546 30.7841 20.2074 31.507C20.6378 31.875 21.008 32.1169 21.2587 32.279C21.3773 32.3514 21.4723 32.4094 21.5491 32.4563C21.614 32.4974 21.6463 32.5204 21.6445 32.5239Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.2382 26.1339C70.239 26.1226 70.1444 26.2951 69.83 26.3341C69.5309 26.3718 69.026 26.182 68.7644 25.6454C68.6271 25.3801 68.6511 25.0104 68.8276 24.7001C69.002 24.3854 69.3182 24.1266 69.7006 23.968C70.4662 23.6351 71.5227 23.7673 72.362 24.3828C72.7806 24.6888 73.1477 25.1222 73.354 25.6554C73.5611 26.1863 73.6086 26.7996 73.4752 27.3973C73.347 27.9946 73.0139 28.5789 72.5063 28.998C72.0036 29.4202 71.3552 29.6885 70.6698 29.7691C69.2798 29.9416 67.8344 29.291 66.7932 28.249C66.27 27.7246 65.8239 27.0939 65.551 26.3731C65.2675 25.6575 65.1926 24.8466 65.3299 24.0716C65.462 23.2936 65.7493 22.5723 66.0349 21.878C66.3271 21.1845 66.5983 20.5018 66.8263 19.8148C67.2868 18.4438 67.588 17.0729 67.6988 15.7513C67.8178 14.4311 67.7297 13.1603 67.4712 12.0121C67.2174 10.8626 66.7574 9.84793 66.2268 8.99883C65.1481 7.29196 63.765 6.31022 62.7548 5.83084C62.2416 5.59765 61.823 5.45939 61.5352 5.38397C61.4014 5.34973 61.2932 5.32199 61.2065 5.29945C61.1328 5.27908 61.0948 5.26694 61.0957 5.26304C61.0962 5.25914 61.1354 5.26391 61.2113 5.27691C61.2993 5.29338 61.4097 5.31419 61.5461 5.33976C61.8396 5.40131 62.2664 5.52744 62.7918 5.75152C63.8265 6.21183 65.2484 7.1888 66.3624 8.91344C66.9105 9.77078 67.3879 10.8006 67.6548 11.9705C67.926 13.1368 68.0223 14.4289 67.9072 15.7687C67.8004 17.1097 67.5 18.498 67.0373 19.8842C66.8093 20.5777 66.5346 21.272 66.2438 21.9629C65.9595 22.6551 65.6805 23.3625 65.554 24.1084C65.4232 24.8518 65.493 25.6099 65.762 26.2934C66.021 26.9799 66.4487 27.5872 66.9506 28.093C67.9534 29.1007 69.3373 29.721 70.6454 29.5628C71.2929 29.4895 71.9059 29.2377 72.3777 28.8459C72.8543 28.4567 73.1665 27.9179 73.2916 27.3557C73.4211 26.7949 73.3801 26.2167 73.1904 25.7178C73.0021 25.2172 72.6607 24.805 72.2661 24.5107C71.4747 23.9181 70.4732 23.7812 69.7485 24.085C69.3853 24.2289 69.0875 24.4669 68.9214 24.7529C68.7553 25.0399 68.726 25.3637 68.8455 25.6103C69.0749 26.1135 69.5471 26.312 69.827 26.2886C70.1213 26.2682 70.2286 26.1126 70.2382 26.1339Z" fill="#263238"/>
    </g>
    </svg>`
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />