import ThemeModeProvider  from './ThemeModeProvider';

interface PropTypes {
  children: React.ReactNode;
}

const Providers = ({ children }: PropTypes) => {

  return (
    <ThemeModeProvider>
      {children}
    </ThemeModeProvider>
  );
};

export default Providers;
