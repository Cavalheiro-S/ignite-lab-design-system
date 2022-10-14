import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Lorem Ipsum",
        size: "md"
    },
    argTypes: {
        asChild:{
            table:{
                disable: true
            }
        },
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
    args: {
        size: "sm"
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: "lg"
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Loren Ipsum</p>
        )
    },
    argTypes:{
        children:{
            table: {
                disable: true
            }
        },
    }
}