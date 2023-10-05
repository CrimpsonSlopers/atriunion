import React from "react";
import colors from "../../base/colors";
import typography from "../../base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "../../functions/pxToRem";

const { inputBorderColor, info, grey, transparent } = colors;
const { size } = typography;

const inputOutlined = {
    styleOverrides: {
        root: {
            borderColor: "#FFFFFF",
            backgroundColor: transparent.main,
            fontSize: size.sm,

            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: inputBorderColor,
            },

            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#795EB5",
                },
            },
        },

        notchedOutline: {
            borderColor: inputBorderColor,
        },

        input: {
            color: grey[700],
            padding: pxToRem(12),
            backgroundColor: transparent.main,
        },

        inputSizeSmall: {
            fontSize: size.xs,
            padding: pxToRem(10),
        },

        multiline: {
            color: grey[700],
            padding: 0,
        },
    },
};

export default inputOutlined;
