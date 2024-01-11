import Links from "./Link";

const SideLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Sidebar = () => {
  return (
    <div className="h-[100vh] w-[200px]  bg-gray-400">
      <div>
        {SideLinks.map((links) => {
          return (
            <div key={links.title}>
              <Links data={links} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
