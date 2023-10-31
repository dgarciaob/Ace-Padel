import React, { useState, useRef, useEffect } from "react";

interface OptionType {
  label: string;
  value: "ingresos" | "gastos";
}

interface DropdownProps {
  options: OptionType[];
  placeholder: string;
  onChange: (option: OptionType) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      {" "}
      {/* <-- Add the ref attribute here */}
      <button
        className="dropdown-trigger flex flex-row justify-between items-center text-sm shadow-sm"
        onClick={toggleDropdown}
      >
        {selectedOption?.label || placeholder}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-content text-sm mt-1">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
