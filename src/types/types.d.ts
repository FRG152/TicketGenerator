export interface DataProps {
  avatar: string;
  username: string;
  full_name: string;
  email_address: string;
}

export interface FormPageProps {
  setData: React.Dispatch<
    React.SetStateAction<{
      avatar: string;
      full_name: string;
      email_address: string;
    }>
  >;
}

export interface ImagePickerProps {
  name: string;
  setValue: any;
}

export interface InputComponentProps {
  type: string;
  name: String;
  label: string;
  error: any;
  register: any;
  placeholder?: string | "";
}

export interface ButtonComponentProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  eventFunction?: () => void;
}
