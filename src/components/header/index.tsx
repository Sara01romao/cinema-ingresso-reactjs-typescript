import styles from './header.module.css'

export function Header(){
   return(
    <header className={styles.headerContainer} >
        <nav>
            <svg width="187" height="34" viewBox="0 0 187 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.7372 13.7656H49.3821C49.3026 13.2022 49.1402 12.7017 48.8949 12.2642C48.6496 11.8201 48.3348 11.4422 47.9503 11.1307C47.5658 10.8191 47.1217 10.5805 46.6179 10.4148C46.1207 10.2491 45.5805 10.1662 44.9972 10.1662C43.9432 10.1662 43.0251 10.428 42.2429 10.9517C41.4607 11.4687 40.8542 12.2244 40.4233 13.2188C39.9924 14.2064 39.777 15.4062 39.777 16.8182C39.777 18.2699 39.9924 19.4896 40.4233 20.4773C40.8608 21.465 41.4706 22.2107 42.2528 22.7145C43.035 23.2183 43.9399 23.4702 44.9673 23.4702C45.544 23.4702 46.0777 23.3939 46.5682 23.2415C47.0653 23.089 47.5062 22.867 47.8906 22.5753C48.2751 22.277 48.5933 21.9157 48.8452 21.4915C49.1037 21.0672 49.2827 20.5833 49.3821 20.0398L53.7372 20.0597C53.6245 20.9943 53.3428 21.8958 52.892 22.7642C52.4479 23.6259 51.848 24.3982 51.0923 25.081C50.3433 25.7571 49.4484 26.294 48.4077 26.6918C47.3736 27.0829 46.2036 27.2784 44.8977 27.2784C43.0814 27.2784 41.4574 26.8674 40.0256 26.0455C38.6004 25.2235 37.4735 24.0336 36.6449 22.4759C35.8229 20.9181 35.4119 19.0322 35.4119 16.8182C35.4119 14.5975 35.8295 12.7083 36.6648 11.1506C37.5 9.5928 38.6335 8.40625 40.0653 7.59091C41.4972 6.76894 43.108 6.35795 44.8977 6.35795C46.0777 6.35795 47.1714 6.52367 48.179 6.85511C49.1932 7.18655 50.0914 7.67045 50.8736 8.30682C51.6558 8.93655 52.2921 9.70881 52.7827 10.6236C53.2798 11.5384 53.598 12.5857 53.7372 13.7656ZM56.745 27V11.7273H60.9808V27H56.745ZM58.8729 9.75852C58.2431 9.75852 57.7029 9.54972 57.2521 9.1321C56.808 8.70786 56.5859 8.20076 56.5859 7.61079C56.5859 7.02746 56.808 6.52699 57.2521 6.10938C57.7029 5.68513 58.2431 5.47301 58.8729 5.47301C59.5026 5.47301 60.0395 5.68513 60.4837 6.10938C60.9344 6.52699 61.1598 7.02746 61.1598 7.61079C61.1598 8.20076 60.9344 8.70786 60.4837 9.1321C60.0395 9.54972 59.5026 9.75852 58.8729 9.75852ZM68.6097 18.1705V27H64.3739V11.7273H68.4109V14.4219H68.5898C68.9279 13.5336 69.4947 12.831 70.2901 12.3139C71.0856 11.7902 72.0501 11.5284 73.1836 11.5284C74.2442 11.5284 75.1689 11.7604 75.9577 12.2244C76.7466 12.6884 77.3597 13.3513 77.7972 14.2131C78.2347 15.0682 78.4535 16.089 78.4535 17.2756V27H74.2177V18.0312C74.2243 17.0966 73.9857 16.3674 73.5018 15.8438C73.0179 15.3134 72.3517 15.0483 71.5032 15.0483C70.9331 15.0483 70.4293 15.1709 69.9918 15.4162C69.561 15.6615 69.2229 16.0194 68.9776 16.4901C68.739 16.9541 68.6164 17.5142 68.6097 18.1705ZM88.7521 27.2983C87.1811 27.2983 85.8288 26.9801 84.6953 26.3438C83.5684 25.7008 82.7 24.7926 82.0902 23.6193C81.4804 22.4394 81.1754 21.044 81.1754 19.4332C81.1754 17.8622 81.4804 16.4834 82.0902 15.2969C82.7 14.1103 83.5585 13.1856 84.6655 12.5227C85.7791 11.8598 87.085 11.5284 88.5831 11.5284C89.5907 11.5284 90.5286 11.6908 91.397 12.0156C92.272 12.3338 93.0343 12.8144 93.6839 13.4574C94.3402 14.1004 94.8506 14.9091 95.2152 15.8835C95.5798 16.8513 95.7621 17.9848 95.7621 19.2841V20.4474H82.8658V17.8224H91.7749C91.7749 17.2126 91.6423 16.6723 91.3771 16.2017C91.112 15.7311 90.7441 15.3632 90.2734 15.098C89.8094 14.8262 89.2692 14.6903 88.6527 14.6903C88.0097 14.6903 87.4396 14.8395 86.9425 15.1378C86.4519 15.4295 86.0675 15.8239 85.7891 16.321C85.5107 16.8116 85.3681 17.3584 85.3615 17.9616V20.4574C85.3615 21.2131 85.5007 21.866 85.7791 22.4162C86.0642 22.9664 86.4652 23.3906 86.9822 23.6889C87.4993 23.9872 88.1125 24.1364 88.8217 24.1364C89.2924 24.1364 89.7232 24.0701 90.1143 23.9375C90.5054 23.8049 90.8402 23.6061 91.1186 23.3409C91.397 23.0758 91.6091 22.7509 91.755 22.3665L95.6726 22.625C95.4737 23.5663 95.0661 24.3883 94.4496 25.0909C93.8397 25.7869 93.0509 26.3305 92.0831 26.7216C91.1219 27.1061 90.0116 27.2983 88.7521 27.2983ZM116.573 13.7656H112.218C112.138 13.2022 111.976 12.7017 111.731 12.2642C111.486 11.8201 111.171 11.4422 110.786 11.1307C110.402 10.8191 109.958 10.5805 109.454 10.4148C108.957 10.2491 108.416 10.1662 107.833 10.1662C106.779 10.1662 105.861 10.428 105.079 10.9517C104.297 11.4687 103.69 12.2244 103.259 13.2188C102.828 14.2064 102.613 15.4062 102.613 16.8182C102.613 18.2699 102.828 19.4896 103.259 20.4773C103.697 21.465 104.307 22.2107 105.089 22.7145C105.871 23.2183 106.776 23.4702 107.803 23.4702C108.38 23.4702 108.914 23.3939 109.404 23.2415C109.901 23.089 110.342 22.867 110.727 22.5753C111.111 22.277 111.429 21.9157 111.681 21.4915C111.94 21.0672 112.119 20.5833 112.218 20.0398L116.573 20.0597C116.46 20.9943 116.179 21.8958 115.728 22.7642C115.284 23.6259 114.684 24.3982 113.928 25.081C113.179 25.7571 112.284 26.294 111.244 26.6918C110.21 27.0829 109.04 27.2784 107.734 27.2784C105.917 27.2784 104.293 26.8674 102.862 26.0455C101.436 25.2235 100.309 24.0336 99.4808 22.4759C98.6589 20.9181 98.2479 19.0322 98.2479 16.8182C98.2479 14.5975 98.6655 12.7083 99.5007 11.1506C100.336 9.5928 101.469 8.40625 102.901 7.59091C104.333 6.76894 105.944 6.35795 107.734 6.35795C108.914 6.35795 110.007 6.52367 111.015 6.85511C112.029 7.18655 112.927 7.67045 113.71 8.30682C114.492 8.93655 115.128 9.70881 115.619 10.6236C116.116 11.5384 116.434 12.5857 116.573 13.7656ZM123.817 6.63636V27H119.581V6.63636H123.817ZM134.11 27.2983C132.566 27.2983 131.23 26.9702 130.103 26.3139C128.983 25.651 128.118 24.7296 127.508 23.5497C126.898 22.3632 126.593 20.9877 126.593 19.4233C126.593 17.8456 126.898 16.4669 127.508 15.2869C128.118 14.1004 128.983 13.179 130.103 12.5227C131.23 11.8598 132.566 11.5284 134.11 11.5284C135.655 11.5284 136.987 11.8598 138.108 12.5227C139.234 13.179 140.103 14.1004 140.713 15.2869C141.323 16.4669 141.627 17.8456 141.627 19.4233C141.627 20.9877 141.323 22.3632 140.713 23.5497C140.103 24.7296 139.234 25.651 138.108 26.3139C136.987 26.9702 135.655 27.2983 134.11 27.2983ZM134.13 24.017C134.833 24.017 135.42 23.8182 135.89 23.4205C136.361 23.0161 136.716 22.4659 136.954 21.7699C137.199 21.0739 137.322 20.2817 137.322 19.3935C137.322 18.5052 137.199 17.7131 136.954 17.017C136.716 16.321 136.361 15.7708 135.89 15.3665C135.42 14.9621 134.833 14.7599 134.13 14.7599C133.421 14.7599 132.824 14.9621 132.341 15.3665C131.863 15.7708 131.502 16.321 131.257 17.017C131.018 17.7131 130.899 18.5052 130.899 19.3935C130.899 20.2817 131.018 21.0739 131.257 21.7699C131.502 22.4659 131.863 23.0161 132.341 23.4205C132.824 23.8182 133.421 24.017 134.13 24.017ZM158.128 11.7273L152.789 27H148.016L142.676 11.7273H147.151L150.323 22.6548H150.482L153.644 11.7273H158.128ZM166.764 27.2983C165.193 27.2983 163.841 26.9801 162.707 26.3438C161.58 25.7008 160.712 24.7926 160.102 23.6193C159.492 22.4394 159.187 21.044 159.187 19.4332C159.187 17.8622 159.492 16.4834 160.102 15.2969C160.712 14.1103 161.57 13.1856 162.677 12.5227C163.791 11.8598 165.097 11.5284 166.595 11.5284C167.602 11.5284 168.54 11.6908 169.409 12.0156C170.284 12.3338 171.046 12.8144 171.696 13.4574C172.352 14.1004 172.862 14.9091 173.227 15.8835C173.592 16.8513 173.774 17.9848 173.774 19.2841V20.4474H160.877V17.8224H169.787C169.787 17.2126 169.654 16.6723 169.389 16.2017C169.124 15.7311 168.756 15.3632 168.285 15.098C167.821 14.8262 167.281 14.6903 166.664 14.6903C166.021 14.6903 165.451 14.8395 164.954 15.1378C164.464 15.4295 164.079 15.8239 163.801 16.321C163.522 16.8116 163.38 17.3584 163.373 17.9616V20.4574C163.373 21.2131 163.512 21.866 163.791 22.4162C164.076 22.9664 164.477 23.3906 164.994 23.6889C165.511 23.9872 166.124 24.1364 166.833 24.1364C167.304 24.1364 167.735 24.0701 168.126 23.9375C168.517 23.8049 168.852 23.6061 169.13 23.3409C169.409 23.0758 169.621 22.7509 169.767 22.3665L173.684 22.625C173.485 23.5663 173.078 24.3883 172.461 25.0909C171.851 25.7869 171.063 26.3305 170.095 26.7216C169.134 27.1061 168.023 27.2983 166.764 27.2983ZM176.538 27V11.7273H180.645V14.392H180.804C181.082 13.4441 181.549 12.7282 182.206 12.2443C182.862 11.7538 183.618 11.5085 184.473 11.5085C184.685 11.5085 184.913 11.5218 185.159 11.5483C185.404 11.5748 185.619 11.6113 185.805 11.6577V15.4162C185.606 15.3565 185.331 15.3035 184.98 15.2571C184.628 15.2107 184.307 15.1875 184.015 15.1875C183.392 15.1875 182.835 15.3234 182.345 15.5952C181.861 15.8603 181.476 16.2315 181.191 16.7088C180.913 17.1861 180.774 17.7363 180.774 18.3594V27H176.538Z" fill="#0F0418"/>
                <path d="M25.2619 20.6262C27.0792 19.8207 28 17.7062 28 14.3448C28 10.9834 27.0792 8.86897 25.2619 8.06207C23.6937 7.37241 21.595 7.75448 19.0077 9.21379C20.4319 6.56276 20.8102 4.41241 20.1317 2.80552C19.3442 0.943448 17.2806 0 14 0C10.7194 0 8.65577 0.943448 7.86827 2.80552C7.19519 4.41241 7.56808 6.56276 8.99231 9.21241C6.405 7.75448 4.30769 7.36552 2.73808 8.06207C0.920769 8.86897 0 10.9834 0 14.3448C0 17.7062 0.920769 19.8207 2.73808 20.6262C3.26833 20.8567 3.83942 20.9722 4.41538 20.9655C5.70769 20.9655 7.24231 20.4662 8.99231 19.4772C7.56808 22.1255 7.18981 24.2759 7.86827 25.8828C8.65577 27.7448 10.7194 28.6897 14 28.6897C17.2806 28.6897 19.3442 27.7448 20.1317 25.8828C20.396 25.2286 20.504 24.5193 20.4467 23.8138C21.8535 26.0524 23.0906 28.5697 23.7246 31.1697C23.7839 31.4073 23.9188 31.618 24.1079 31.7684C24.2971 31.9188 24.5298 32.0003 24.7692 32C24.8577 31.9999 24.9459 31.9888 25.0317 31.9669C25.3088 31.8959 25.5469 31.7151 25.6938 31.4642C25.8408 31.2133 25.8844 30.9128 25.8152 30.629C24.881 26.8 22.8173 23.2083 20.7187 20.3131C21.7749 20.748 22.7303 20.9655 23.5846 20.9655C24.1606 20.9722 24.7317 20.8567 25.2619 20.6262ZM24.4044 10.0883C25.5958 10.6207 25.8462 12.6897 25.8462 14.3448C25.8462 16 25.5958 18.069 24.4058 18.6014C23.2804 19.1021 21.2396 18.4207 18.6604 16.6828C17.6055 15.962 16.5924 15.179 15.6262 14.3379C18.1044 12.189 22.4 9.19724 24.4044 10.0883ZM9.84577 3.68276C10.3654 2.46345 12.3846 2.2069 14 2.2069C15.6154 2.2069 17.6346 2.46345 18.1542 3.68276C18.6429 4.83586 17.9779 6.9269 16.2817 9.56965C15.5783 10.6505 14.8142 11.6885 13.9933 12.6786C11.896 10.1393 8.9775 5.73655 9.84577 3.68276ZM3.59558 18.6014C2.40423 18.069 2.15385 16 2.15385 14.3448C2.15385 12.6897 2.40423 10.6207 3.59423 10.0883C3.86332 9.9765 4.15206 9.92297 4.44231 9.93103C5.62019 9.93103 7.315 10.6441 9.34231 12.0097C10.3971 12.7305 11.4103 13.5134 12.3765 14.3545C9.89558 16.4993 5.59865 19.4924 3.59558 18.6014ZM18.1542 25.0055C17.6346 26.2262 15.6154 26.4828 14 26.4828C12.3846 26.4828 10.3654 26.2262 9.84577 25.0069C9.35712 23.8538 10.0221 21.7628 11.7183 19.12C12.4217 18.0392 13.1858 17.0011 14.0067 16.011C16.104 18.5503 19.0225 22.9531 18.1542 25.0055Z" fill="black"/>
            </svg>

        </nav>
        
    </header>
   )
}