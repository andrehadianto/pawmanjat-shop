import { CustomIcon, type CustomIconProps } from "./CustomIcon";

export const MenuIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon {...props} stroke="currentColor" strokeWidth={1.5}>
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </CustomIcon>
  );
};
