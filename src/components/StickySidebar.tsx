interface Props {
  children: React.ReactNode;
}

const StickySidebar = ({ children }: Props) => {
  return (
    <aside className="sticky top-20 max-h-[80vh] overflow-auto p-4 bg-gray-100 rounded-lg shadow hidden lg:block w-[300px]">
      {children}
    </aside>
  );
};

export default StickySidebar;
