import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Quiz from "react-quiz-component"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"

const quiz = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  nrOfQuestions: "4",
  questions: [
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is developed by _____?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Google Engineers", "Facebook Engineers"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is an MVC based framework?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    },
    {
      question: "Which of the following concepts is/are key to ReactJS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "30",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      questionType: "photo",
      answerSelectionType: "single",
      answers: [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "What are the advantages of React JS?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
  ],
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi sisters</h1>

    <Helmet
      bodyAttributes={{
        class: "matti-bg",
      }}
    />

    <div className="_1x3vdj2l">
      <div className="_cw9itor">
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="80 0 741 520"
          className="_yq5f66p _1g928bt "
        >
          <mask
            id="lohp_faces_mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={421}
            width={340}
            x={481}
            y={45}
          >
            <path
              d="M757.368 409.886C759.219 405.331 756.597 396.126 755.055 392.093L757.368 389.068C757.962 389.187 759.397 389.175 760.394 388.178C761.39 387.182 762.114 380.29 762.351 376.969C764.783 375.664 770.002 372.77 771.425 371.631C772.849 370.492 773.798 363.683 774.094 360.421L777.831 355.439C779.61 354.906 784.272 353.162 788.684 350.457C794.2 347.077 793.31 339.07 793.133 337.469C792.955 335.867 787.617 322.167 787.083 319.32C786.656 317.042 782.872 308.051 781.033 303.84L785.126 297.613L788.151 298.502L785.837 296.367C786.905 296.248 788.862 295.798 788.151 294.944C787.439 294.09 784.533 292.571 783.168 291.919V289.784L783.88 288.004C784.711 287.589 787.047 286.652 789.752 286.225C792.456 285.798 796.217 282.133 797.759 280.353C797.462 279.82 796.869 278.574 796.869 277.862C796.869 279.286 792.777 281.421 790.997 282.311C789.574 283.022 787.32 282.014 786.371 281.421V279.642L789.752 278.752C790.108 278.396 790.962 277.435 791.531 276.439C792.101 275.443 793.31 268.907 793.844 265.763C794.615 263.094 796.193 257.472 796.335 256.333C796.478 255.194 795.564 253.605 795.09 252.952C795.564 246.666 796.584 232.918 796.869 228.22C797.154 223.523 795.801 212.859 795.09 208.114C794.971 207.403 795.766 205.944 799.894 205.801C804.022 205.659 809.324 195.422 811.459 190.321C812.052 188.186 813.95 183.204 816.797 180.357C820.356 176.799 820.178 161.853 819.822 156.337C819.466 150.821 805.765 142.459 805.054 141.925C807.901 133.918 805.232 121.641 803.986 116.837C802.99 112.993 794.912 107.407 790.997 105.093L786.727 104.026C786.549 102.78 785.802 99.8979 784.236 98.3321C782.67 96.7664 779.551 97.6797 778.186 98.3321L773.738 92.2826C772.967 91.5115 770.607 89.6492 767.333 88.3681C764.059 87.087 759.326 87.8343 757.369 88.3681H755.056L753.099 83.2082C751.972 82.0813 749.433 79.8275 748.294 79.8275C746.871 79.8275 743.49 79.8275 740.288 81.9627C737.725 83.6708 732.933 85.0468 730.857 85.5213L725.164 83.2082C722.791 81.1324 716.587 76.5892 710.751 75.0235C704.915 73.4577 699.186 76.3876 697.051 78.0483L694.56 79.8275C693.789 77.8703 692.104 73.7423 691.535 72.8883C690.823 71.8208 687.977 63.636 685.308 60.9671C682.639 58.2981 678.902 54.9175 666.625 54.9175C656.803 54.9175 656.602 56.2223 657.729 56.8747C656.364 57.4085 653.458 58.4761 652.747 58.4761C651.857 58.4761 648.654 53.494 644.562 51.181C641.288 49.3306 641.063 51.952 641.359 53.494C640.054 53.494 637.267 53.0314 636.555 51.181C635.665 48.868 632.996 48.512 623.21 46.021C615.382 44.0282 608.442 46.021 605.951 47.2665H600.08C599.19 47.2665 590.471 49.2237 588.514 49.7575C586.557 50.2912 579.44 50.825 576.237 53.494C573.675 55.6291 567.697 64.3476 565.028 68.44H562.181C560.876 68.9145 557.199 70.6819 552.928 73.9558C548.658 77.2297 549.014 82.1998 549.726 84.2757C547.769 85.106 543.534 86.9446 542.253 87.6563C540.651 88.546 539.228 89.9694 535.847 99.2217C532.467 108.474 534.068 109.542 533.356 110.787C532.645 112.033 529.442 115.413 528.018 121.641C526.595 127.868 523.392 128.046 522.147 130.537C520.901 133.028 514.852 133.74 513.25 134.63C511.649 135.519 508.802 138.366 508.268 140.501C507.735 142.636 505.421 144.416 502.93 149.398C500.439 154.38 499.194 167.368 497.771 168.614C496.347 169.859 493.678 176.621 491.721 181.425C490.155 185.268 486.68 187.415 485.138 188.008C485.078 190.381 484.995 195.802 485.138 198.506C485.315 201.887 484.07 200.463 482.824 207.402C481.579 214.342 484.426 228.042 484.07 230.355C483.714 232.668 481.757 237.472 481.401 241.387C481.046 245.301 482.469 248.682 487.273 255.799C492.077 262.916 493.679 269.856 495.28 273.058C496.881 276.261 503.109 283.2 503.821 284.446C504.532 285.691 506.311 290.139 507.201 293.342C508.091 296.545 506.311 296.723 505.066 299.036C503.82 301.349 505.955 302.95 506.311 307.576C506.667 312.203 514.318 318.608 516.809 320.921C518.802 322.772 525.705 326.793 528.908 328.572C530.331 327.327 532.537 325.583 529.975 328.572C526.772 332.309 525.883 341.917 526.061 344.052C526.239 346.187 528.018 348.678 534.957 354.372C540.508 358.927 549.132 360.303 552.75 360.421C556.546 359.769 564.351 357.646 565.205 354.372C566.059 351.098 564.019 344.704 562.892 341.917C559.037 337.706 571.967 349.39 578.194 352.237C580.857 353.454 641.181 456.681 699.364 452.944C701.09 452.834 701.946 453.597 702.211 453.834C714.132 464.51 720.003 466.111 725.163 465.933C730.323 465.755 736.907 463.798 745.447 453.834C753.988 443.87 751.497 429.28 751.853 423.764C752.208 418.248 755.055 415.579 757.368 409.886Z"
              fill="#ffffff"
            />
          </mask>
          <g
            style={{
              transform:
                "translateY(0px) translateX(0px) translateZ(0px) scale(1)",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <g mask="url(#lohp_faces_mask0)">
              <rect fill="#fe4a54" height={421} width="339.5" x={481} y={45} />
              <image
                href="https://cdn.kastatic.org/images/lohp/face1_bg_v31.jpeg"
                xlinkHref="https://cdn.kastatic.org/images/lohp/face1_bg_v31.jpeg"
                height={421}
                width="339.5"
                x={481}
                y={45}
                style={{ pointerEvents: "none" }}
              />
            </g>
          </g>
          <mask
            id="lohp_faces_mask1"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={417}
            width={335}
            x={454}
            y={45}
          >
            <path
              d="M726.531 405.847C728.358 401.351 725.77 392.266 724.248 388.286L726.531 385.3C727.117 385.418 728.534 385.406 729.517 384.422C730.501 383.439 731.215 376.637 731.449 373.359C733.849 372.071 739 369.215 740.405 368.091C741.81 366.967 742.746 360.247 743.039 357.027L746.727 352.11C748.483 351.583 753.084 349.862 757.439 347.193C762.883 343.856 762.005 335.954 761.829 334.373C761.654 332.793 756.386 319.271 755.859 316.461C755.437 314.213 751.703 305.339 749.888 301.183L753.927 295.037L756.912 295.915L754.629 293.807C755.683 293.69 757.615 293.245 756.912 292.403C756.21 291.56 753.342 290.061 751.995 289.417V287.31L752.698 285.554C753.517 285.144 755.824 284.219 758.493 283.798C761.162 283.376 764.873 279.759 766.395 278.003C766.103 277.476 765.517 276.246 765.517 275.544C765.517 276.949 761.478 279.056 759.722 279.934C758.317 280.637 756.093 279.642 755.156 279.056V277.3L758.493 276.422C758.844 276.071 759.687 275.122 760.249 274.139C760.811 273.156 762.005 266.705 762.532 263.602C763.293 260.968 764.85 255.419 764.99 254.295C765.131 253.171 764.229 251.602 763.761 250.959C764.229 244.754 765.236 231.185 765.517 226.549C765.798 221.913 764.464 211.388 763.761 206.705C763.644 206.002 764.428 204.562 768.503 204.422C772.577 204.281 777.81 194.178 779.917 189.144C780.503 187.036 782.376 182.119 785.186 179.309C788.698 175.797 788.522 161.046 788.171 155.602C787.82 150.158 774.298 141.904 773.595 141.378C776.405 133.475 773.771 121.358 772.542 116.617C771.558 112.823 763.586 107.309 759.722 105.026L755.508 103.973C755.332 102.743 754.594 99.8985 753.049 98.3531C751.504 96.8077 748.425 97.7092 747.078 98.3531L742.688 92.3823C741.927 91.6214 739.597 89.7833 736.366 88.5189C733.135 87.2545 728.464 87.9921 726.532 88.5189H724.249L722.317 83.4262C721.205 82.314 718.7 80.0896 717.576 80.0896C716.171 80.0896 712.834 80.0896 709.673 82.1969C707.144 83.8828 702.415 85.2409 700.366 85.7092L694.746 83.4262C692.405 81.3774 686.282 76.8935 680.522 75.3481C674.762 73.8028 669.107 76.6945 667 78.3335L664.541 80.0896C663.78 78.1579 662.118 74.0837 661.556 73.2408C660.854 72.1872 658.044 64.1091 655.41 61.4749C652.775 58.8408 649.088 55.5042 636.971 55.5042C627.277 55.5042 627.078 56.792 628.19 57.4359C626.844 57.9627 623.975 59.0164 623.273 59.0164C622.395 59.0164 619.234 54.0992 615.195 51.8164C611.964 49.9901 611.741 52.5773 612.034 54.0992C610.746 54.0992 607.995 53.6426 607.292 51.8164C606.414 49.5335 603.78 49.1821 594.122 46.7236C586.395 44.7567 579.546 46.7236 577.087 47.9528H571.292C570.414 47.9528 561.809 49.8845 559.878 50.4114C557.946 50.9382 550.921 51.465 547.76 54.0992C545.232 56.2065 539.331 64.8114 536.697 68.8505H533.887C532.599 69.3188 528.97 71.0632 524.756 74.2944C520.541 77.5256 520.892 82.431 521.595 84.4798C519.663 85.2993 515.483 87.1139 514.219 87.8164C512.638 88.6944 511.234 90.0993 507.897 99.2311C504.56 108.363 506.141 109.416 505.438 110.646C504.736 111.875 501.575 115.212 500.17 121.358C498.765 127.504 495.604 127.68 494.375 130.138C493.146 132.597 487.175 133.299 485.594 134.178C484.014 135.056 481.204 137.865 480.677 139.973C480.15 142.08 477.868 143.836 475.409 148.753C472.95 153.67 471.721 166.49 470.316 167.719C468.911 168.948 466.277 175.622 464.346 180.363C462.8 184.156 459.37 186.275 457.848 186.861C457.789 189.202 457.707 194.552 457.848 197.222C458.024 200.558 456.794 199.153 455.565 206.002C454.336 212.851 457.146 226.373 456.794 228.656C456.443 230.939 454.512 235.68 454.161 239.544C453.809 243.407 455.214 246.744 459.956 253.768C464.697 260.793 466.278 267.641 467.858 270.802C469.439 273.963 475.585 280.812 476.287 282.041C476.99 283.271 478.746 287.661 479.624 290.822C480.502 293.983 478.746 294.159 477.516 296.441C476.287 298.724 478.394 300.305 478.746 304.871C479.097 309.437 486.648 315.759 489.107 318.042C491.074 319.868 497.887 323.837 501.048 325.593C502.453 324.364 504.63 322.643 502.101 325.593C498.94 329.281 498.062 338.764 498.238 340.871C498.413 342.978 500.17 345.437 507.018 351.056C512.497 355.552 521.009 356.91 524.579 357.027C528.326 356.383 536.029 354.288 536.872 351.056C537.715 347.825 535.701 341.515 534.589 338.764C530.784 334.608 543.546 346.139 549.692 348.949C552.32 350.15 611.858 452.032 669.283 448.345C670.986 448.235 671.831 448.988 672.093 449.223C683.858 459.759 689.653 461.34 694.746 461.164C699.839 460.989 706.336 459.057 714.766 449.223C723.195 439.389 720.736 424.988 721.087 419.545C721.439 414.101 724.248 411.466 726.531 405.847Z"
              fill="#ffffff"
            />
          </mask>
          <g mask="url(#lohp_faces_mask1)">
            <image
              href="https://cdn.kastatic.org/images/lohp/face1_v31.jpeg"
              xlinkHref="https://cdn.kastatic.org/images/lohp/face1_v31.jpeg"
              height="414.378"
              width="334.101"
              x="453.916"
              y="46.0442"
              style={{ pointerEvents: "none" }}
            />
          </g>
          <mask
            id="lohp_faces_mask2"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={410}
            width={372}
            x={268}
            y={65}
          >
            <path
              d="M424.277 65.4005C398.494 63.8839 363.107 77.0278 341.875 88.655C333.786 85.2848 309.723 99.5745 278.178 183.695C246.633 267.816 300.084 352.88 330.753 384.897L390.911 416.745C429.079 434.944 512.593 471.899 541.307 474.123C577.2 476.904 585.541 465.782 588.827 457.946C592.113 450.11 588.827 442.275 588.827 433.175C588.827 425.895 596.242 419.189 599.949 416.745C600.117 415.987 600.657 413.51 601.465 409.668C602.477 404.865 600.202 400.821 595.399 397.788C591.557 395.361 590.597 391.384 590.597 389.699C597.674 389.194 608.543 383.886 611.071 382.369C613.093 381.156 613.935 377.651 614.104 376.05C613.093 373.691 611.071 367.911 611.071 363.664C611.071 359.418 614.104 357.682 615.62 357.345C622.108 354.902 635.741 348.852 638.369 344.201C641.655 338.388 637.105 331.31 634.072 327.266C631.039 323.222 626.742 317.155 619.665 306.286C612.587 295.418 611.071 281.515 611.071 276.966C611.071 272.416 614.104 266.602 617.895 261.8C620.928 257.958 621.855 251.942 621.94 249.414C621.265 235.596 619.109 205.231 615.873 194.311C612.638 183.392 597 157.407 589.585 145.78C589.585 129.603 572.903 119.492 567.342 114.943C561.781 110.393 547.121 99.7767 531.449 88.655C515.778 77.5333 486.457 70.4558 472.808 69.9503C459.158 69.4447 450.059 66.9171 424.277 65.4005Z"
              fill="#ffffff"
            />
          </mask>
          <g
            style={{
              transform:
                "translateY(0px) translateX(0px) translateZ(0px) scale(1)",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <g mask="url(#lohp_faces_mask2)" opacity="0.9">
              <rect height={410} width="371.5" x={268} y={65} fill="#6ac9db" />
              <image
                href="https://cdn.kastatic.org/images/lohp/face2_bg_v31.jpeg"
                xlinkHref="https://cdn.kastatic.org/images/lohp/face2_bg_v31.jpeg"
                height={410}
                width="371.5"
                x={268}
                y={65}
                style={{ pointerEvents: "none" }}
              />
            </g>
          </g>
          <mask
            id="lohp_faces_mask3"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={385}
            width={349}
            x={255}
            y={77}
          >
            <path
              d="M401.661 77.8999C377.483 76.4777 344.298 88.8037 324.386 99.7074C316.801 96.5469 294.235 109.947 264.653 188.834C235.07 267.72 285.196 347.492 313.957 377.516L370.372 407.383C406.165 424.45 484.482 459.105 511.41 461.191C545.069 463.798 552.891 453.369 555.973 446.021C559.054 438.672 555.973 431.324 555.973 422.791C555.973 415.964 562.926 409.675 566.403 407.383C566.561 406.672 567.066 404.349 567.825 400.746C568.773 396.242 566.64 392.45 562.136 389.605C558.533 387.33 557.632 383.6 557.632 382.02C564.269 381.546 574.462 376.568 576.832 375.146C578.729 374.008 579.519 370.721 579.677 369.22C578.729 367.008 576.832 361.587 576.832 357.605C576.832 353.623 579.677 351.995 581.099 351.679C587.183 349.388 599.967 343.715 602.432 339.353C605.514 333.901 601.247 327.264 598.403 323.472C595.558 319.679 591.529 313.99 584.892 303.797C578.255 293.605 576.832 280.568 576.832 276.301C576.832 272.034 579.677 266.582 583.232 262.079C586.077 258.476 586.946 252.834 587.025 250.464C586.393 237.506 584.37 209.03 581.336 198.789C578.302 188.549 563.637 164.182 556.684 153.278C556.684 138.108 541.039 128.626 535.825 124.359C530.61 120.093 516.862 110.137 502.165 99.7074C487.469 89.2778 459.972 82.6406 447.172 82.1665C434.372 81.6925 425.839 79.3221 401.661 77.8999Z"
              fill="#ffffff"
            />
          </mask>
          <g mask="url(#lohp_faces_mask3)">
            <image
              href="https://cdn.kastatic.org/images/lohp/face2_v31.jpeg"
              xlinkHref="https://cdn.kastatic.org/images/lohp/face2_v31.jpeg"
              height="383.796"
              width="347.863"
              x="256.643"
              y="78.1562"
              style={{ pointerEvents: "none" }}
            />
          </g>
          <mask
            id="lohp_faces_mask4"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={576}
            width={565}
            x={31}
            y={0}
          >
            <path
              d="M179.46 389.255C187.963 396.284 197.055 398.858 200.887 399.658C208.782 400.116 215.679 398.189 216.268 399.066C260.692 465.262 291.811 474.99 299.737 479.164C307.664 483.337 356.551 502.514 384.997 507.136C413.442 511.759 419.038 504.905 432.554 493.809C443.367 484.931 447.989 461.041 448.949 450.205C448.406 448.193 448.044 442.776 450.942 437.202C453.84 431.627 452.565 422.031 451.566 417.93C453.023 412.734 456.053 402.052 456.516 400.89C456.98 399.729 455.328 390.095 454.444 385.423C457.994 382.263 459.323 376.713 459.544 374.333C461.805 370.916 466.79 362.08 468.642 354.069C470.493 346.057 462.621 322.777 458.453 312.139L464.195 307.027C466.284 305.168 464.393 299.365 463.61 300.062C462.983 300.619 459.518 300.897 457.864 300.966L456.699 295.452C460.729 289.993 463.846 266.164 463.525 263.174C463.203 260.185 456.031 255.808 453.997 252.472C451.963 249.136 448.832 213.557 447.695 207.55C446.786 202.745 430.868 176.209 423.023 163.542C423.177 162.313 423.327 159.153 422.698 156.345C421.912 152.833 398.675 126.731 395.189 122.815C391.704 118.9 331.242 68.8519 286.053 66.9699C240.864 65.0879 207.411 78.4919 179.621 96.6805C151.831 114.869 130.172 142.572 124.305 175.401C118.438 208.23 127.375 246.126 128.423 249.405C129.47 252.684 130.756 264.64 132.592 275.638C134.062 284.436 144.623 310.001 149.721 321.684C149.466 330.333 149.758 350.004 152.97 359.498C156.983 371.365 168.831 380.469 179.46 389.255Z"
              fill="#ffffff"
            />
          </mask>
          <g
            style={{
              transform:
                "translateY(0px) translateX(0px) translateZ(0px) scale(1)",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <g mask="url(#lohp_faces_mask4)" opacity="0.8">
              <rect height="575.5" width={565} x={32} y={0} fill="#9ca5da" />
              <image
                href="https://cdn.kastatic.org/images/lohp/face3_bg_v31.jpeg"
                xlinkHref="https://cdn.kastatic.org/images/lohp/face3_bg_v31.jpeg"
                height="575.5"
                width={565}
                x={32}
                y={0}
                style={{ pointerEvents: "none" }}
              />
            </g>
          </g>
          <mask
            id="lohp_faces_mask5"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            height={554}
            width={544}
            x={0}
            y={11}
          >
            <path
              d="M142.668 385.948C150.847 392.71 159.593 395.186 163.279 395.955C170.874 396.396 177.509 394.542 178.075 395.386C220.81 459.064 250.745 468.422 258.369 472.437C265.994 476.451 313.022 494.898 340.385 499.345C367.748 503.792 373.132 497.199 386.134 486.525C396.535 477.985 400.982 455.003 401.904 444.58C401.382 442.645 401.034 437.433 403.822 432.071C406.609 426.709 405.383 417.478 404.422 413.533C405.824 408.534 408.738 398.258 409.184 397.141C409.63 396.024 408.041 386.757 407.191 382.262C410.606 379.222 411.884 373.883 412.096 371.594C414.272 368.307 419.067 359.807 420.848 352.101C422.629 344.394 415.056 322 411.047 311.766L416.571 306.848C418.58 305.06 416.761 299.478 416.008 300.148C415.405 300.685 412.072 300.952 410.481 301.018L409.36 295.714C413.237 290.463 416.235 267.54 415.926 264.664C415.616 261.789 408.718 257.578 406.761 254.369C404.804 251.16 401.792 216.935 400.699 211.156C399.824 206.534 384.512 181.007 376.965 168.822C377.113 167.64 377.257 164.6 376.652 161.898C375.896 158.521 353.543 133.411 350.19 129.645C346.837 125.878 288.676 77.7342 245.205 75.9238C201.735 74.1134 169.555 87.0075 142.822 104.504C116.09 122.001 95.2546 148.65 89.6106 180.23C83.9666 211.81 92.5645 248.264 93.5719 251.418C94.5792 254.572 95.8162 266.074 97.5828 276.654C98.9962 285.117 109.156 309.709 114.06 320.948C113.814 329.268 114.096 348.191 117.185 357.323C121.046 368.739 132.443 377.497 142.668 385.948Z"
              fill="#ffffff"
            />
          </mask>
          <g mask="url(#lohp_faces_mask5)">
            <image
              href="https://cdn.kastatic.org/images/lohp/face3_v31.jpeg"
              xlinkHref="https://cdn.kastatic.org/images/lohp/face3_v31.jpeg"
              height="552.758"
              width="543.584"
              x="-0.000488281"
              y="11.5017"
              style={{ pointerEvents: "none" }}
            />
          </g>
        </svg>
      </div>
      <div className="_gzw0fm6">
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="80 0 741 520"
          className="_18oi75re _1g928bt "
        />
      </div>
      <div aria-hidden="true" className="_4bsxcct" />
      <div className="_mbioy">
        <span className="_1xfrfndw">Fellow studenter oWo</span>
        <h2 className="_ji9nyhl">
          Get good. Gjør dette kurset, og bruker tiden dere trenger.
        </h2>
        <p className="_6g8vjfk">
          Dere klarer det, vi tror på dere. DU ER BEST I TEST 3 uwu
        </p>
        <div className="_fctr8xf">
          <div className="_xo579zs">
            <Link to="/page-2/">
              <a
                role="button"
                tabIndex={0}
                className="_1wx6oa5h"
                href="/signup?isteacher=1"
              >
                <span className="_wvcdz2m">Noobs & Scrubs, start her</span>
              </a>
            </Link>
          </div>
          <div aria-hidden="true" className="_rg8deia" />
        </div>
        <div className="_11nxon6w">
          <Link to="/page-2/">
            <a role="button" tabIndex={0} className="_1rhl3qm4">
              <span className="_1alfwn7n">Noobs & Scrubs, start her</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
