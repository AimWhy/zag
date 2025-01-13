import { createComponent } from "../create-component"

export const AvatarAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg width={1456} height={812} viewBox="0 0 1456 812" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx={916.5} cy={405.5} r={137.5} fill={palette[4]} />
      <path
        d="M892.835 413.128C892.173 413.128 891.512 412.893 890.851 412.424C890.189 411.955 889.848 411.272 889.827 410.376L887.683 408.168L889.923 406.376H898.083C899.96 406.376 901.517 406.067 902.755 405.448C904.013 404.808 904.952 403.837 905.571 402.536C906.211 401.235 906.531 399.581 906.531 397.576C906.531 394.397 905.731 392.243 904.131 391.112C902.552 389.96 900.365 389.384 897.571 389.384H889.731L886.979 382.472C887.96 382.472 889.123 382.472 890.467 382.472C891.832 382.472 893.133 382.472 894.371 382.472C895.608 382.472 896.536 382.472 897.155 382.472C902.851 382.472 907.117 383.645 909.955 385.992C912.792 388.317 914.211 392.115 914.211 397.384C914.211 399.389 913.923 401.331 913.347 403.208C912.792 405.064 911.875 406.739 910.595 408.232C909.315 409.725 907.587 410.92 905.411 411.816C903.235 412.691 900.547 413.128 897.347 413.128H892.835ZM882.371 429V382.472H889.923V429H882.371ZM914.302 429L929.63 382.472H939.55L954.878 429H946.846L942.59 415.016L946.91 418.056H923.934L926.302 411.72H944.958L942.558 414.92L937.534 398.6L934.686 388.072H934.43L931.646 398.6L922.302 429H914.302Z"
        fill={palette[0]}
      />
      <circle cx={538.5} cy={405.5} r={132.5} fill={palette[6]} stroke={palette[8]} strokeWidth={10} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M564.5 372.5C564.5 387.136 552.636 399 538 399C523.364 399 511.5 387.136 511.5 372.5C511.5 357.864 523.364 346 538 346C552.636 346 564.5 357.864 564.5 372.5ZM588.923 426.292C590.29 428.428 591.011 430.914 591 433.45V452H485V433.45C484.989 430.914 485.71 428.428 487.077 426.292C488.444 424.156 490.398 422.459 492.705 421.406C506.988 415.191 522.425 412.07 538 412.25C553.576 412.07 569.012 415.191 583.295 421.406C585.602 422.459 587.557 424.156 588.923 426.292Z"
        fill={palette[0]}
        fillOpacity={0.8}
      />
      <path
        d="M512.204 142V126.166H515.133L515.51 132.27L515.206 131.429C515.273 130.791 515.399 130.144 515.583 129.486C515.776 128.829 516.047 128.225 516.395 127.674C516.752 127.123 517.207 126.683 517.758 126.355C518.318 126.016 519 125.847 519.802 125.847C519.995 125.847 520.189 125.857 520.382 125.876C520.575 125.895 520.754 125.929 520.919 125.977V129.631C520.59 129.525 520.237 129.457 519.86 129.428C519.493 129.39 519.154 129.37 518.845 129.37C518.468 129.37 518.062 129.448 517.627 129.602C517.192 129.747 516.791 129.97 516.424 130.269C516.056 130.569 515.79 130.941 515.626 131.386V142H512.204ZM529.44 142.218C527.98 142.218 526.709 141.903 525.626 141.275C524.544 140.647 523.703 139.723 523.103 138.505C522.504 137.278 522.204 135.775 522.204 133.996C522.204 132.314 522.518 130.864 523.147 129.646C523.785 128.428 524.655 127.495 525.757 126.847C526.859 126.19 528.106 125.861 529.498 125.861C531.006 125.861 532.296 126.19 533.369 126.847C534.452 127.495 535.283 128.428 535.863 129.646C536.443 130.864 536.733 132.314 536.733 133.996C536.733 135.775 536.409 137.278 535.762 138.505C535.124 139.723 534.254 140.647 533.152 141.275C532.05 141.903 530.812 142.218 529.44 142.218ZM529.498 139.303C530.609 139.303 531.518 138.887 532.224 138.056C532.929 137.225 533.282 135.871 533.282 133.996C533.282 132.256 532.939 130.951 532.253 130.081C531.566 129.211 530.629 128.776 529.44 128.776C528.328 128.776 527.419 129.206 526.714 130.066C526.018 130.927 525.67 132.237 525.67 133.996C525.67 135.784 526.023 137.118 526.728 137.998C527.444 138.868 528.367 139.303 529.498 139.303ZM546.234 142.218C544.774 142.218 543.503 141.903 542.42 141.275C541.338 140.647 540.497 139.723 539.897 138.505C539.298 137.278 538.998 135.775 538.998 133.996C538.998 132.314 539.312 130.864 539.941 129.646C540.579 128.428 541.449 127.495 542.551 126.847C543.653 126.19 544.9 125.861 546.292 125.861C547.8 125.861 549.09 126.19 550.163 126.847C551.246 127.495 552.077 128.428 552.657 129.646C553.237 130.864 553.527 132.314 553.527 133.996C553.527 135.775 553.203 137.278 552.556 138.505C551.918 139.723 551.048 140.647 549.946 141.275C548.844 141.903 547.606 142.218 546.234 142.218ZM546.292 139.303C547.403 139.303 548.312 138.887 549.018 138.056C549.723 137.225 550.076 135.871 550.076 133.996C550.076 132.256 549.733 130.951 549.047 130.081C548.36 129.211 547.423 128.776 546.234 128.776C545.122 128.776 544.213 129.206 543.508 130.066C542.812 130.927 542.464 132.237 542.464 133.996C542.464 135.784 542.817 137.118 543.522 137.998C544.238 138.868 545.161 139.303 546.292 139.303ZM561.453 142.232C560.196 142.232 559.215 141.913 558.509 141.275C557.813 140.627 557.465 139.704 557.465 138.505V130.501C557.465 130.182 557.533 129.897 557.668 129.646C557.803 129.385 558.002 129.221 558.263 129.153L557.465 126.804V126.383L558.234 121.642H560.844V137.65C560.844 138.211 560.964 138.602 561.206 138.824C561.457 139.047 561.921 139.158 562.598 139.158C563.033 139.158 563.434 139.158 563.802 139.158C564.169 139.148 564.502 139.139 564.802 139.129V142.044C564.299 142.131 563.748 142.184 563.149 142.203C562.55 142.222 561.984 142.232 561.453 142.232ZM555.392 129.153V126.166H564.831V129.153H555.392Z"
        fill={palette[0]}
      />
      <path d="M543 156L543 268" stroke={palette[1]} strokeWidth={4} />
      <path
        d="M129.233 417V401.18H132.699L132.655 417H129.233ZM130.988 398.831C130.359 398.831 129.828 398.614 129.393 398.179C128.958 397.734 128.74 397.169 128.74 396.482C128.74 395.806 128.958 395.255 129.393 394.829C129.828 394.404 130.359 394.191 130.988 394.191C131.597 394.191 132.119 394.404 132.554 394.829C132.998 395.255 133.221 395.806 133.221 396.482C133.221 397.169 132.998 397.734 132.554 398.179C132.119 398.614 131.597 398.831 130.988 398.831ZM136.992 417V401.18H139.936L140.313 407.14L140.066 405.936C140.182 405.066 140.409 404.245 140.748 403.471C141.086 402.688 141.598 402.055 142.285 401.572C142.971 401.089 143.884 400.847 145.025 400.847C146.291 400.847 147.311 401.209 148.085 401.934C148.868 402.65 149.351 403.752 149.535 405.24L149.607 405.472V417H146.171V407.705C146.171 406.797 146.084 406.067 145.91 405.516C145.736 404.965 145.46 404.569 145.083 404.327C144.716 404.076 144.228 403.95 143.619 403.95C142.903 403.95 142.256 404.163 141.676 404.588C141.096 405.004 140.68 405.477 140.429 406.009V417H136.992ZM155.349 417V407.705C155.349 406.797 155.262 406.067 155.088 405.516C154.914 404.965 154.639 404.569 154.262 404.327C153.894 404.076 153.406 403.95 152.797 403.95C152.082 403.95 151.434 404.163 150.854 404.588C150.274 405.004 149.858 405.477 149.607 406.009L149.578 407.14L149.346 406.197C149.443 405.337 149.651 404.501 149.97 403.689C150.298 402.867 150.801 402.191 151.478 401.659C152.154 401.118 153.063 400.847 154.204 400.847C155.634 400.847 156.756 401.316 157.568 402.253C158.38 403.181 158.786 404.602 158.786 406.516V417H155.349ZM166.947 417.174C165.981 417.174 165.125 416.995 164.381 416.637C163.636 416.27 163.052 415.763 162.626 415.115C162.211 414.467 162.003 413.718 162.003 412.867C162.003 411.93 162.172 411.156 162.51 410.547C162.849 409.938 163.337 409.455 163.975 409.097C164.622 408.73 165.381 408.45 166.251 408.256C166.87 408.121 167.522 408.01 168.209 407.923C168.905 407.836 169.548 407.768 170.137 407.72C170.727 407.662 171.181 407.623 171.5 407.604V406.966C171.5 405.893 171.283 405.091 170.848 404.559C170.422 404.018 169.697 403.747 168.673 403.747C168.015 403.747 167.464 403.829 167.02 403.993C166.575 404.148 166.237 404.448 166.005 404.892C165.782 405.327 165.662 405.965 165.642 406.806H162.525C162.418 405.443 162.612 404.327 163.105 403.457C163.607 402.577 164.352 401.93 165.338 401.514C166.333 401.089 167.508 400.876 168.861 400.876C169.664 400.876 170.418 400.968 171.123 401.151C171.839 401.325 172.472 401.63 173.023 402.065C173.574 402.49 174.009 403.075 174.328 403.819C174.647 404.564 174.806 405.506 174.806 406.647V417H171.457L171.5 413.447C171.317 414.52 170.853 415.41 170.108 416.115C169.364 416.821 168.31 417.174 166.947 417.174ZM167.861 414.593C168.363 414.593 168.871 414.506 169.383 414.332C169.905 414.158 170.36 413.907 170.746 413.578C171.143 413.249 171.394 412.863 171.5 412.418V409.518C171.114 409.557 170.654 409.624 170.123 409.721C169.601 409.818 169.151 409.905 168.774 409.982C167.692 410.204 166.909 410.499 166.425 410.866C165.952 411.224 165.715 411.775 165.715 412.519C165.715 412.945 165.811 413.317 166.005 413.636C166.208 413.945 166.474 414.182 166.802 414.346C167.131 414.511 167.484 414.593 167.861 414.593ZM185.285 423.467C183.999 423.467 182.839 423.254 181.805 422.829C180.78 422.413 179.987 421.775 179.427 420.915C178.866 420.055 178.649 418.977 178.774 417.682H182.08C182.071 418.233 182.138 418.726 182.283 419.161C182.428 419.605 182.733 419.958 183.197 420.219C183.661 420.48 184.366 420.611 185.314 420.611C186.135 420.611 186.764 420.495 187.199 420.263C187.643 420.031 187.943 419.678 188.098 419.204C188.252 418.73 188.33 418.117 188.33 417.363V413.07C188.243 413.525 188.054 414.003 187.764 414.506C187.474 415.009 187.025 415.434 186.416 415.782C185.807 416.12 184.985 416.289 183.951 416.289C183.013 416.289 182.177 416.082 181.442 415.666C180.708 415.25 180.084 414.69 179.572 413.984C179.059 413.278 178.668 412.486 178.397 411.606C178.136 410.717 178.006 409.798 178.006 408.851C178.006 407.092 178.296 405.622 178.876 404.443C179.465 403.264 180.224 402.374 181.152 401.775C182.08 401.176 183.061 400.876 184.096 400.876C185.014 400.876 185.754 401.002 186.314 401.253C186.885 401.504 187.329 401.809 187.648 402.166C187.967 402.524 188.199 402.877 188.344 403.225L188.359 401.18H191.708V417.334C191.708 418.764 191.428 419.929 190.867 420.828C190.316 421.727 189.557 422.384 188.591 422.8C187.624 423.225 186.522 423.448 185.285 423.467ZM185.125 413.549C185.85 413.549 186.435 413.452 186.88 413.259C187.324 413.056 187.663 412.819 187.895 412.548C188.127 412.268 188.272 412.026 188.33 411.823V405.197C188.233 404.965 188.054 404.738 187.793 404.515C187.532 404.293 187.189 404.109 186.764 403.964C186.338 403.819 185.816 403.747 185.198 403.747C184.125 403.747 183.245 404.143 182.559 404.936C181.872 405.729 181.529 406.971 181.529 408.662C181.529 410.199 181.868 411.398 182.544 412.258C183.231 413.119 184.091 413.549 185.125 413.549ZM202.332 417.218C200.805 417.218 199.481 416.908 198.359 416.289C197.248 415.661 196.392 414.738 195.793 413.52C195.193 412.302 194.894 410.808 194.894 409.039C194.894 407.319 195.208 405.849 195.836 404.631C196.474 403.404 197.349 402.471 198.461 401.833C199.572 401.185 200.848 400.861 202.289 400.861C203.71 400.861 204.923 401.142 205.928 401.702C206.943 402.263 207.717 403.094 208.248 404.196C208.78 405.289 209.046 406.632 209.046 408.227C209.046 408.537 209.036 408.793 209.017 408.996C209.007 409.199 208.993 409.441 208.973 409.721H198.301C198.388 411.335 198.785 412.524 199.49 413.288C200.196 414.042 201.061 414.419 202.086 414.419C203.043 414.419 203.773 414.216 204.275 413.81C204.788 413.394 205.116 412.93 205.261 412.418H208.567C208.48 413.433 208.161 414.303 207.61 415.028C207.059 415.743 206.329 416.289 205.421 416.666C204.522 417.034 203.492 417.218 202.332 417.218ZM199.867 407.386H205.638C205.609 406.226 205.329 405.332 204.797 404.704C204.266 404.066 203.391 403.747 202.173 403.747C200.906 403.747 199.964 404.172 199.345 405.023C198.727 405.864 198.379 407.029 198.301 408.517C198.379 408.082 198.543 407.788 198.794 407.633C199.046 407.469 199.403 407.386 199.867 407.386Z"
        fill={palette[0]}
      />
      <path d="M233 406H401" stroke={palette[1]} strokeWidth={4} />
      <path
        d="M1164.31 499V487.53C1164.31 487.192 1164.37 486.897 1164.51 486.646C1164.64 486.395 1164.83 486.23 1165.07 486.153L1164.31 483.818V481.295C1164.31 480.058 1164.55 479.033 1165.05 478.221C1165.54 477.4 1166.2 476.791 1167.02 476.394C1167.85 475.988 1168.76 475.785 1169.76 475.785C1170.25 475.785 1170.66 475.8 1170.98 475.829C1171.3 475.858 1171.58 475.887 1171.83 475.916L1171.82 479.149C1171.6 479.072 1171.34 479.004 1171.03 478.946C1170.73 478.888 1170.36 478.859 1169.92 478.859C1169.41 478.859 1168.99 478.942 1168.66 479.106C1168.33 479.27 1168.08 479.56 1167.92 479.976C1167.76 480.392 1167.68 480.976 1167.68 481.73V499H1164.31ZM1161.96 486.153V483.18H1171.25V486.153H1161.96ZM1177.67 499.174C1176.7 499.174 1175.85 498.995 1175.1 498.637C1174.36 498.27 1173.77 497.763 1173.35 497.115C1172.93 496.467 1172.72 495.718 1172.72 494.867C1172.72 493.93 1172.89 493.156 1173.23 492.547C1173.57 491.938 1174.06 491.455 1174.7 491.097C1175.34 490.73 1176.1 490.45 1176.97 490.256C1177.59 490.121 1178.24 490.01 1178.93 489.923C1179.63 489.836 1180.27 489.768 1180.86 489.72C1181.45 489.662 1181.9 489.623 1182.22 489.604V488.966C1182.22 487.893 1182 487.091 1181.57 486.559C1181.14 486.018 1180.42 485.747 1179.39 485.747C1178.74 485.747 1178.19 485.829 1177.74 485.993C1177.3 486.148 1176.96 486.448 1176.73 486.892C1176.5 487.327 1176.38 487.965 1176.36 488.806H1173.25C1173.14 487.443 1173.33 486.327 1173.83 485.457C1174.33 484.577 1175.07 483.93 1176.06 483.514C1177.05 483.089 1178.23 482.876 1179.58 482.876C1180.38 482.876 1181.14 482.968 1181.84 483.151C1182.56 483.325 1183.19 483.63 1183.74 484.065C1184.29 484.49 1184.73 485.075 1185.05 485.819C1185.37 486.564 1185.53 487.506 1185.53 488.647V499H1182.18L1182.22 495.447C1182.04 496.52 1181.57 497.41 1180.83 498.115C1180.08 498.821 1179.03 499.174 1177.67 499.174ZM1178.58 496.593C1179.08 496.593 1179.59 496.506 1180.1 496.332C1180.63 496.158 1181.08 495.907 1181.47 495.578C1181.86 495.249 1182.11 494.863 1182.22 494.418V491.518C1181.83 491.557 1181.38 491.624 1180.84 491.721C1180.32 491.818 1179.87 491.905 1179.49 491.982C1178.41 492.204 1177.63 492.499 1177.15 492.866C1176.67 493.224 1176.44 493.775 1176.44 494.519C1176.44 494.945 1176.53 495.317 1176.73 495.636C1176.93 495.945 1177.19 496.182 1177.52 496.346C1177.85 496.511 1178.2 496.593 1178.58 496.593ZM1189.74 499V476.438H1193.16V499H1189.74ZM1197.64 499V476.438H1201.06V499H1197.64ZM1212.9 499.174C1211.86 499.174 1211.03 499 1210.41 498.652C1209.79 498.304 1209.33 497.898 1209.04 497.434C1208.75 496.96 1208.57 496.545 1208.49 496.187L1207.74 495.505L1208.68 495.099C1208.75 495.341 1208.9 495.578 1209.13 495.81C1209.37 496.032 1209.71 496.216 1210.15 496.361C1210.59 496.496 1211.14 496.564 1211.78 496.564C1212.87 496.564 1213.76 496.143 1214.47 495.302C1215.17 494.461 1215.52 493.065 1215.52 491.112C1215.52 489.353 1215.19 488.028 1214.52 487.139C1213.87 486.24 1213.03 485.79 1212 485.79C1211.28 485.79 1210.68 485.892 1210.2 486.095C1209.74 486.298 1209.39 486.535 1209.14 486.805C1208.9 487.076 1208.75 487.318 1208.68 487.53L1208.46 487.327L1208.7 486.776C1208.74 486.042 1208.93 485.384 1209.25 484.804C1209.58 484.215 1210.06 483.746 1210.7 483.398C1211.34 483.05 1212.16 482.876 1213.15 482.876C1214.42 482.876 1215.5 483.219 1216.37 483.905C1217.24 484.582 1217.89 485.515 1218.34 486.704C1218.79 487.883 1219.02 489.246 1219.02 490.793C1219.02 492.195 1218.85 493.422 1218.5 494.476C1218.16 495.52 1217.7 496.39 1217.11 497.086C1216.53 497.782 1215.87 498.304 1215.15 498.652C1214.42 499 1213.67 499.174 1212.9 499.174ZM1205.3 499L1205.29 476.438H1208.7V483.615L1208.71 495.433L1208.96 495.984L1208.68 496.549L1208.54 499H1205.3ZM1226.63 499.174C1225.67 499.174 1224.81 498.995 1224.07 498.637C1223.32 498.27 1222.74 497.763 1222.31 497.115C1221.9 496.467 1221.69 495.718 1221.69 494.867C1221.69 493.93 1221.86 493.156 1222.2 492.547C1222.54 491.938 1223.02 491.455 1223.66 491.097C1224.31 490.73 1225.07 490.45 1225.94 490.256C1226.56 490.121 1227.21 490.01 1227.9 489.923C1228.59 489.836 1229.23 489.768 1229.82 489.72C1230.41 489.662 1230.87 489.623 1231.19 489.604V488.966C1231.19 487.893 1230.97 487.091 1230.53 486.559C1230.11 486.018 1229.38 485.747 1228.36 485.747C1227.7 485.747 1227.15 485.829 1226.71 485.993C1226.26 486.148 1225.92 486.448 1225.69 486.892C1225.47 487.327 1225.35 487.965 1225.33 488.806H1222.21C1222.1 487.443 1222.3 486.327 1222.79 485.457C1223.29 484.577 1224.04 483.93 1225.02 483.514C1226.02 483.089 1227.19 482.876 1228.55 482.876C1229.35 482.876 1230.1 482.968 1230.81 483.151C1231.53 483.325 1232.16 483.63 1232.71 484.065C1233.26 484.49 1233.7 485.075 1234.01 485.819C1234.33 486.564 1234.49 487.506 1234.49 488.647V499H1231.14L1231.19 495.447C1231 496.52 1230.54 497.41 1229.79 498.115C1229.05 498.821 1228 499.174 1226.63 499.174ZM1227.55 496.593C1228.05 496.593 1228.56 496.506 1229.07 496.332C1229.59 496.158 1230.05 495.907 1230.43 495.578C1230.83 495.249 1231.08 494.863 1231.19 494.418V491.518C1230.8 491.557 1230.34 491.624 1229.81 491.721C1229.29 491.818 1228.84 491.905 1228.46 491.982C1227.38 492.204 1226.6 492.499 1226.11 492.866C1225.64 493.224 1225.4 493.775 1225.4 494.519C1225.4 494.945 1225.5 495.317 1225.69 495.636C1225.89 495.945 1226.16 496.182 1226.49 496.346C1226.82 496.511 1227.17 496.593 1227.55 496.593ZM1245.13 499.276C1243.56 499.276 1242.22 498.932 1241.1 498.246C1239.98 497.55 1239.12 496.583 1238.52 495.346C1237.93 494.109 1237.63 492.673 1237.63 491.039C1237.63 489.319 1237.94 487.849 1238.55 486.631C1239.16 485.413 1240 484.485 1241.08 483.847C1242.17 483.2 1243.41 482.876 1244.82 482.876C1246.23 482.876 1247.4 483.137 1248.35 483.659C1249.31 484.171 1250.02 484.862 1250.49 485.732C1250.97 486.593 1251.19 487.555 1251.15 488.618H1247.86C1247.85 488.193 1247.78 487.806 1247.65 487.458C1247.53 487.1 1247.34 486.801 1247.09 486.559C1246.85 486.308 1246.54 486.114 1246.16 485.979C1245.78 485.844 1245.34 485.776 1244.84 485.776C1243.49 485.766 1242.52 486.23 1241.95 487.168C1241.39 488.106 1241.11 489.372 1241.11 490.967C1241.11 492.784 1241.45 494.142 1242.13 495.041C1242.81 495.931 1243.88 496.38 1245.33 496.39C1245.67 496.39 1246.04 496.293 1246.43 496.1C1246.84 495.897 1247.18 495.612 1247.46 495.244C1247.75 494.867 1247.89 494.418 1247.88 493.896H1251.15C1251.19 495.008 1250.92 495.965 1250.35 496.767C1249.79 497.569 1249.04 498.188 1248.12 498.623C1247.19 499.058 1246.19 499.276 1245.13 499.276ZM1263.33 499L1257.36 490.372L1260.47 489.923L1262 491.634L1267.74 499H1263.33ZM1254.23 499V476.438H1257.62V488.168L1257.42 490.329V490.445L1257.62 492.692V499H1254.23ZM1260.49 490.851L1257.36 490.372L1259.98 486.689L1262.69 483.18H1267.22L1261.98 489.082L1260.49 490.851Z"
        fill={palette[0]}
      />
      <path d="M1205 465.5V406H1054" stroke={palette[1]} strokeWidth={4} />
    </svg>
  )
})
