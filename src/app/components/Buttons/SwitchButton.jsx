import React from "react";
import * as Switch from "@radix-ui/react-switch";
/**
 * Renders a switch button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the switch button.
 * @param {boolean} props.checked - The checked state of the switch button.
 * @param {function} props.onCheckedChange - The callback function to handle checked state changes.
 * @example
 *   const handleCheckChange = (value) => console.log(value);
 * @param {boolean} [props.disabled=false] - Specifies if the switch button is disabled.
 * @returns {JSX.Element} The switch button component.
 */
const SwitchButton = React.forwardRef(({
  label,
  checked,
  onCheckedChange,
  disabled = false,
  name,
  value,
  onChange,
  validationSchema,
  register=()=>{}
}, ref) => {
  return (
    <div>
      {label && <label className="">{label}</label>}
      <Switch.Root
        className="w-[31px] h-[18px] bg-gray-3 rounded-full relative  data-[state=checked]:bg-primary-2 outline-none cursor-pointer hover:bg-gray-4"
        disabled={disabled}
        checked={checked}
        onCheckedChange={onCheckedChange}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        {...register(name, validationSchema)}
      >
        <Switch.Thumb 
        className="block w-[16px] h-[16px] bg-gray-5 rounded-full  transition-transform duration-100 translate-x-[1px] will-change-transform data-[state=checked]:translate-x-[14px]" />
      </Switch.Root>
    </div>
  );
})

export default SwitchButton;