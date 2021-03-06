/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

const LOADING_TITLE = "loading";

export default function loadingIndicator() {
  return (
    <div
      css={css`
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;

        img {
          height: 20px;
          width: 20px;
          animation-name: spin;
          animation-duration: 500ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }

        h1 {
          font-family: "dogica";
          font-size: 12px;
          color: #000;
        }
      `}
    >
      <img src={IMAGES.pokeball} alt="" />
      <h1>{LOADING_TITLE}</h1>
    </div>
  );
}
