import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";


export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { }

export function Checkbox(props: CheckboxProps) {

    return (
        <CheckboxPrimitive.Root className="bg-gray-200 w-6 h-6 p-[2px] rounded" {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight="bold" className=" h-5 w-5 text-green-700 " />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}